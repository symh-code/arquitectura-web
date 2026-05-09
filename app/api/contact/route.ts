export const runtime = "edge";

// Map en memoria: IP -> { count, resetAt }
// En Edge Runtime cada instancia tiene su propio Map,
// pero igual frena ráfagas rápidas desde la misma IP.
const ipMap = new Map<string, { count: number; resetAt: number }>();

const LIMIT = 5;          // máximo 5 envíos
const WINDOW_MS = 60_000; // por minuto

function isRateLimited(ip: string): { limited: boolean; retryAfter: number } {
  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { limited: false, retryAfter: 0 };
  }

  if (entry.count >= LIMIT) {
    const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
    return { limited: true, retryAfter };
  }

  entry.count += 1;
  return { limited: false, retryAfter: 0 };
}

export async function POST(request: Request) {
  try {
    // Obtener IP del cliente desde los headers de Cloudflare
    const ip =
      request.headers.get("cf-connecting-ip") ??
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      "unknown";

    const { limited, retryAfter } = isRateLimited(ip);

    if (limited) {
      return Response.json(
        { error: `Demasiados intentos. Espera ${retryAfter} segundos.` },
        {
          status: 429,
          headers: { "Retry-After": String(retryAfter) },
        }
      );
    }

    const data = await request.json();
    const { nombre, correo, tipo, mensaje } = data;

    const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
    const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;
    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;

    if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
      return Response.json(
        { error: "Configuración del servidor incompleta." },
        { status: 500 }
      );
    }

    if (!nombre?.trim() || !correo?.trim() || !mensaje?.trim()) {
      return Response.json(
        { error: "Campos requeridos incompletos." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return Response.json(
        { error: "Correo electrónico inválido." },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        accessToken: PRIVATE_KEY,
        template_params: {
          from_name: nombre.trim().slice(0, 100),
          from_email: correo.trim().slice(0, 200),
          project_type: tipo || "No especificado",
          message: mensaje.trim().slice(0, 2000),
        },
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("EmailJS error:", res.status, text);
      return Response.json(
        { error: `Error al enviar el correo (${res.status}).` },
        { status: 502 }
      );
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}