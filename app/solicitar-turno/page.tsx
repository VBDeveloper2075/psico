"use client";

import Link from "next/link";
import { useState } from "react";
import { MessageCircle, ArrowLeft } from "lucide-react";

const WHATSAPP_NUMBER = "54911XXXXXXXX";

function buildWhatsAppMessage(data: {
  nombre: string;
  email: string;
  telefono: string;
  modalidad: string;
  tipoConsulta: string;
  mensaje: string;
}) {
  const lines = [
    "Hola, me gustaría solicitar un turno.",
    "",
    `Nombre: ${data.nombre}`,
    `Email: ${data.email}`,
    `Teléfono: ${data.telefono}`,
    `Modalidad preferida: ${data.modalidad}`,
    `Tipo de consulta: ${data.tipoConsulta}`,
  ];
  if (data.mensaje.trim()) {
    lines.push("", `Mensaje: ${data.mensaje}`);
  }
  return lines.join("\n");
}

export default function SolicitarTurnoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    modalidad: "presencial",
    tipoConsulta: "primera",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildWhatsAppMessage(formData);
    const url = `https://wa.me/${+5491157413145}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-sand-50">
      <header className="border-b border-sand-200 bg-sand-50/95 backdrop-blur-sm">
        <nav className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </nav>
      </header>

      <main className="max-w-xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-stone-800 mb-2">
          Solicitar turno
        </h1>
        <p className="text-stone-600 mb-10">
          Completá el formulario y te redirigiré a WhatsApp para coordinar el
          turno.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-stone-700 mb-2"
            >
              Nombre completo *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-stone-700 mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="telefono"
              className="block text-sm font-medium text-stone-700 mb-2"
            >
              Teléfono / WhatsApp *
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              required
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent"
              placeholder="11 1234-5678"
            />
          </div>

          <div>
            <label
              htmlFor="modalidad"
              className="block text-sm font-medium text-stone-700 mb-2"
            >
              Modalidad preferida *
            </label>
            <select
              id="modalidad"
              name="modalidad"
              required
              value={formData.modalidad}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-white text-stone-800 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent"
            >
              <option value="presencial">Presencial (Caseros / Tres de Febrero)</option>
              <option value="online">Online</option>
              <option value="indiferente">Indiferente</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="tipoConsulta"
              className="block text-sm font-medium text-stone-700 mb-2"
            >
              Tipo de consulta *
            </label>
            <select
              id="tipoConsulta"
              name="tipoConsulta"
              required
              value={formData.tipoConsulta}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-white text-stone-800 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent"
            >
              <option value="primera">Primera consulta</option>
              <option value="seguimiento">Consulta de seguimiento</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-stone-700 mb-2"
            >
              Mensaje (opcional)
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent resize-none"
              placeholder="Contame brevemente qué te trae a la consulta o si tenés alguna preferencia de horario..."
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-xl font-semibold text-lg transition shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Enviar y abrir WhatsApp
          </button>
        </form>
      </main>
    </div>
  );
}
