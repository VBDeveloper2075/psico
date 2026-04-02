"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Heart,
  Users,
  Brain,
  GraduationCap,
  MapPin,
  Monitor,
  MessageCircle,
  Menu,
  X,
  Zap,
  Database,
} from "lucide-react";

const CB_JAMSTACK_AGENCY_URL = "https://si-cb-vendes-mejor.com.ar/";

// ============ CONFIGURACIÓN ============
const WHATSAPP_NUMBER = "54911XXXXXXXX"; // Reemplazar con número real (ej: 5491123456789)
const WHATSAPP_MESSAGE =
  "Hola, me gustaría solicitar un turno para una consulta.";

// ============ HEADER ============
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { href: "#acerca", label: "Acerca" },
    { href: "#servicios", label: "Servicios" },
    { href: "#ubicacion", label: "Ubicación" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sand-50/95 backdrop-blur-sm border-b border-sand-200/80">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="#" className="font-heading text-xl sm:text-2xl font-semibold text-stone-800">
          Lic. Lucas Garay
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-600 hover:text-stone-900 transition text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Link
            href="/solicitar-turno"
            className="hidden sm:inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-lg font-medium text-sm transition shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Solicitar Turno
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 text-stone-600 hover:text-stone-900"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-sand-50 border-b border-sand-200 py-4 px-4 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-600 hover:text-stone-900 py-2 text-base"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/solicitar-turno"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-lg font-medium transition"
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar Turno
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ============ HERO ============
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sand-50/90 via-sand-50/70 to-sand-50" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-stone-800 leading-tight mb-6">
          Un espacio para escucharte y entenderte
        </h1>
        <p className="text-lg sm:text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
          Psicólogo Clínico y Psicoanalista en Tres de Febrero
        </p>
        <Link
          href="/solicitar-turno"
          className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-lg hover:shadow-xl hover:scale-[1.02]"
        >
          <MessageCircle className="w-5 h-5" />
          Agendar mi primera consulta
        </Link>
      </div>
    </section>
  );
}

// ============ ACERCA DE MÍ ============
function About() {
  return (
    <section id="acerca" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-xl ring-4 ring-sage-200/50">
              <Image
                src="/psicologo-terapia-psicoanalitica.png"
                alt="Psicólogo clínico y psicoanalista"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 224px, 288px"
                priority
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-stone-800 mb-6">
              Acerca de mí
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Mi enfoque se basa en el psicoanálisis como herramienta para
              comprender los conflictos inconscientes que afectan la vida
              cotidiana. Creo en un espacio de escucha genuina donde cada persona
              pueda explorar sus emociones, pensamientos y experiencias sin
              juicio.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Con años de formación y experiencia clínica, acompaño a mis
              pacientes en el proceso de autoconocimiento y cambio. La terapia es
              un camino que se recorre juntos, respetando los tiempos y las
              necesidades de cada uno.
            </p>
            <p className="text-sage-400 font-medium text-sm">
              Matrícula MN 12345 · Colegio de Psicólogos de la Provincia de
              Buenos Aires
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ SERVICIOS ============
const services = [
  {
    icon: Heart,
    title: "Terapia Individual",
    description:
      "Un espacio íntimo para explorar tus emociones, conflictos y deseos. Sesiones semanales adaptadas a tus necesidades.",
  },
  {
    icon: Users,
    title: "Terapia de Pareja",
    description:
      "Acompañamiento para parejas que buscan mejorar la comunicación, resolver conflictos o reencontrarse.",
  },
  {
    icon: Brain,
    title: "Ansiedad y Angustia",
    description:
      "Tratamiento especializado para crisis de ansiedad, ataques de pánico, fobias y angustia generalizada.",
  },
  {
    icon: GraduationCap,
    title: "Orientación Vocacional",
    description:
      "Proceso de acompañamiento para jóvenes y adultos en la elección de estudios o carrera profesional.",
  },
];

function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-sage-50/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-stone-800 text-center mb-4">
          Áreas de atención
        </h2>
        <p className="text-stone-600 text-center max-w-2xl mx-auto mb-16">
          Diferentes modalidades de trabajo para acompañarte según lo que
          necesites
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition border border-sand-200/60"
            >
              <div className="w-12 h-12 rounded-xl bg-sage-200/80 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-sage-400" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-stone-800 mb-3">
                {service.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ UBICACIÓN Y MODALIDAD ============
function Location() {
  return (
    <section id="ubicacion" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-stone-800 text-center mb-4">
          Ubicación y modalidad
        </h2>
        <p className="text-stone-600 text-center mb-16">
          Atiendo de forma presencial y online para tu comodidad
        </p>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 rounded-2xl bg-white border border-sand-200/60 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-sage-200/80 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-7 h-7 text-sage-400" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-stone-800 mb-2">
                Presencial
              </h3>
              <p className="text-stone-600">
                Consultorio en Caseros, zona Tres de Febrero. Fácil acceso en
                transporte público. Ambiente cálido y confidencial.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 rounded-2xl bg-white border border-sand-200/60 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-sage-200/80 flex items-center justify-center flex-shrink-0">
              <Monitor className="w-7 h-7 text-sage-400" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-stone-800 mb-2">
                Online
              </h3>
              <p className="text-stone-600">
                Sesiones por videollamada para quienes prefieren o necesitan
                terapia a distancia. Misma calidad y compromiso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ CONTACTO CTA ============
function Contact() {
  return (
    <section id="contacto" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-sage-200/60 to-sand-200/40 p-12 sm:p-16 text-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=60"
              alt=""
              fill
              className="object-cover opacity-15"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <div className="relative z-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-stone-800 mb-4">
              Dar el primer paso puede cambiar todo
            </h2>
            <p className="text-stone-600 mb-8 max-w-xl mx-auto">
              Si sentís que es momento de buscar ayuda o simplemente querés
              conocerme, no dudes en escribirme. La primera consulta es un
              espacio para conocernos y ver si podemos trabajar juntos.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-xl font-semibold text-lg transition shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <MessageCircle className="w-6 h-6" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-sand-200 bg-sand-100/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6 text-center sm:text-left sm:flex-row sm:justify-between">
          <p className="text-stone-600 text-sm order-2 sm:order-1">
            © {new Date().getFullYear()} Lic. Lucas Garay. Todos los derechos
            reservados.
          </p>
          <p className="text-stone-500 text-sm order-3 sm:order-2">Matrícula MN 12345</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 order-1 sm:order-3">
            <a href="#acerca" className="text-stone-600 hover:text-stone-900 text-sm">
              Acerca
            </a>
            <a href="#servicios" className="text-stone-600 hover:text-stone-900 text-sm">
              Servicios
            </a>
            <a href="#ubicacion" className="text-stone-600 hover:text-stone-900 text-sm">
              Ubicación
            </a>
            <a href="#contacto" className="text-stone-600 hover:text-stone-900 text-sm">
              Contacto
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-sand-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-center sm:text-left">
              <div className="flex items-center justify-center gap-2 shrink-0">
                <Zap className="w-5 h-5 text-orange-500" aria-hidden />
                <Database className="w-5 h-5 text-teal-600" aria-hidden />
              </div>
              <div>
                <p className="text-sm text-stone-700 leading-snug">
                  Desarrollado con tecnología{" "}
                  <strong className="font-semibold text-stone-800">Jamstack</strong> por{" "}
                  <a
                    href={CB_JAMSTACK_AGENCY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-stone-800 underline decoration-stone-300 underline-offset-2 hover:decoration-teal-600 hover:text-teal-800 transition"
                  >
                    CB Jamstack Agency
                  </a>
                </p>
                <p className="text-xs text-stone-500 mt-1.5">
                  Expertos en velocidad y control de datos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ BOTÓN FLOTANTE SOLICITAR TURNO ============
function FloatingTurnoButton() {
  return (
    <Link
      href="/solicitar-turno"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25d366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition hover:scale-110"
      aria-label="Solicitar turno"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
    </Link>
  );
}

// ============ PÁGINA PRINCIPAL ============
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingTurnoButton />
    </>
  );
}
