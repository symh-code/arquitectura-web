"use server";

export interface ContactFormData {
  nombre: string;
  correo: string;
  tipo: string;
  mensaje: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
  const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;
  const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;

  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    throw new Error("Faltan variables de entorno de EmailJS.");
  }

  if (!data.nombre?.trim() || !data.correo?.trim() || !data.mensaje?.trim()) {
    throw new Error("Campos requeridos incompletos.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.correo)) {
    throw new Error("Correo electrónico inválido.");
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
        from_name: data.nombre.trim().slice(0, 100),
        from_email: data.correo.trim().slice(0, 200),
        project_type: data.tipo || "No especificado",
        message: data.mensaje.trim().slice(0, 2000),
      },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`EmailJS error ${res.status}: ${text}`);
  }
}