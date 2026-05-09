export const runtime = "edge";


export async function POST(request: Request) {
  try {
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