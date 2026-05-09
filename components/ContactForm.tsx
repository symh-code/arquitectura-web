"use client";

import { useState, useRef } from "react";

interface FormState {
  nombre: string;
  correo: string;
  tipo: string;
  mensaje: string;
}

const initialState: FormState = {
  nombre: "",
  correo: "",
  tipo: "",
  mensaje: "",
};

const COOLDOWN_MS = 60_000;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const lastSentRef = useRef<number>(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const now = Date.now();
    const elapsed = now - lastSentRef.current;
    if (lastSentRef.current > 0 && elapsed < COOLDOWN_MS) {
      const remaining = Math.ceil((COOLDOWN_MS - elapsed) / 1000);
      setErrorMsg(`Por favor espera ${remaining} segundos antes de enviar otro mensaje.`);
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Error al enviar el mensaje.");
      }

      setStatus("success");
      lastSentRef.current = Date.now();
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Ocurrió un error. Por favor intenta de nuevo."
      );
    }
  };

  return (
    <div className="bg-[#1c1b1b] p-10 md:p-16 border border-[#45474a]/20">
      <form onSubmit={handleSubmit} className="space-y-10" noValidate>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          maxLength={100}
          placeholder="NOMBRE COMPLETO"
          className="w-full bg-transparent border-0 border-b border-[#8f9194] py-4 px-0 focus:outline-none focus:border-[#e9c176] transition-colors text-sm tracking-widest placeholder:text-[#8f9194]/50 uppercase text-[#e5e2e1]"
        />

        <input
          type="email"
          name="correo"
          value={form.correo}
          onChange={handleChange}
          required
          maxLength={200}
          placeholder="CORREO ELECTRÓNICO"
          className="w-full bg-transparent border-0 border-b border-[#8f9194] py-4 px-0 focus:outline-none focus:border-[#e9c176] transition-colors text-sm tracking-widest placeholder:text-[#8f9194]/50 uppercase text-[#e5e2e1]"
        />

        <select
          name="tipo"
          value={form.tipo}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-0 border-b border-[#8f9194] py-4 px-0 focus:outline-none focus:border-[#e9c176] transition-colors text-sm tracking-widest text-[#8f9194]/80 uppercase appearance-none cursor-pointer"
        >
          <option value="" disabled className="bg-[#1c1b1b]">TIPO DE PROYECTO</option>
          <option value="Residencial" className="bg-[#1c1b1b]">RESIDENCIAL</option>
          <option value="Comercial" className="bg-[#1c1b1b]">COMERCIAL</option>
          <option value="Restauración" className="bg-[#1c1b1b]">RESTAURACIÓN</option>
          <option value="Planeación Urbana" className="bg-[#1c1b1b]">PLANEACIÓN URBANA</option>
        </select>

        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
          maxLength={2000}
          placeholder="MENSAJE"
          rows={4}
          className="w-full bg-transparent border-0 border-b border-[#8f9194] py-4 px-0 focus:outline-none focus:border-[#e9c176] transition-colors text-sm tracking-widest placeholder:text-[#8f9194]/50 uppercase text-[#e5e2e1] resize-none"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-5 bg-gradient-to-br from-[#c3c7cd] to-[#8f9194] text-[#2c3136] font-bold tracking-[0.3em] uppercase text-xs hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "ENVIANDO..." : "ENVIAR CONSULTA"}
        </button>

        {status === "success" && (
          <p className="text-center text-sm tracking-widest uppercase text-[#e9c176]">
            ✓ Mensaje enviado con éxito. Te contactaremos pronto.
          </p>
        )}
        {(status === "error" || errorMsg) && (
          <p className="text-center text-sm tracking-widest uppercase text-red-400">
            ✗ {errorMsg || "Ocurrió un error. Por favor intenta de nuevo."}
          </p>
        )}
      </form>
    </div>
  );
}