import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Psicólogo y Psicoanalista | Tres de Febrero, Buenos Aires",
  description:
    "Espacio de terapia individual, de pareja y orientación vocacional. Atención presencial en Caseros/Tres de Febrero y modalidad online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${sourceSans.variable}`}
    >
      <body className="font-sans bg-sand-50 text-stone-700 min-h-screen">
        {children}
      </body>
    </html>
  );
}
