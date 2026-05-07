"use server";

import emailjs from "@emailjs/nodejs";

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

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: data.nombre.trim().slice(0, 100),
      from_email: data.correo.trim().slice(0, 200),
      project_type: data.tipo || "No especificado",
      message: data.mensaje.trim().slice(0, 2000),
    },
    {
      publicKey: PUBLIC_KEY,
      privateKey: PRIVATE_KEY, // opcional pero recomendado
    }
  );
}