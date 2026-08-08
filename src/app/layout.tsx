import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import StickyCta from "@/components/layout/StickyCta";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Loader from "@/components/ui/Loader";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-archivo",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://permisbenin.bj"), // ← ton domaine plus tard
  title: {
    default: "Permis Bénin — Passe ton permis, trace ta route",
    template: "%s | Permis Bénin",
  },
  description:
    "Projet Permis Étudiant+ de l'ONG La Voix des Étudiants. Formations au permis de conduire dès 50 000 F, tout inclus, en présentiel et en ligne, dans 8+ villes au Bénin.",
  keywords: [
    "permis de conduire Bénin",
    "auto-école Cotonou",
    "permis étudiant",
    "Permis Bénin",
    "code de la route Bénin",
  ],
  openGraph: {
    title: "Permis Bénin — Passe ton permis, trace ta route",
    description:
      "Formations au permis dès 50 000 F tout inclus, dans 8+ villes au Bénin. 27e vague : inscriptions ouvertes !",
    url: "https://permisbenin.bj",
    siteName: "Permis Bénin",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Permis Bénin" }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Permis Bénin",
    description:
      "Formations au permis dès 50 000 F tout inclus, dans 8+ villes au Bénin.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${archivo.variable} ${manrope.variable}`}>
      <body>
        <Loader />
        <SmoothScroll />
        {children}
        <StickyCta />
        <WhatsAppFloat />
</body>
    </html>
  );
}