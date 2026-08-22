import Link from "next/link";
import { Heart, MessageCircle, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { CENTRES } from "@/lib/data/centres";
import { PHONES, WHATSAPP_URL } from "@/lib/data/contact";

const NAV = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Formations", href: "/formations" },
  { label: "Centres", href: "/centres" },
  { label: "Partenaires", href: "/partenaires" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-asphalt text-cream">
      {/* ligne de route */}
      <div className="h-1 [background-image:repeating-linear-gradient(to_right,#ffc531_0_14px,transparent_14px_26px)]" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        {/* Marque */}
        <div>
          <div className="flex items-center gap-2.5">
            <Logo />
            <span className="font-display text-lg font-extrabold">
              Permis <span className="text-signal">Bénin</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-cream/60">
            Le projet de l'ONG La Voix des Étudiants pour rendre le permis
            accessible à tous les Béninois.
          </p>
          <p className="mt-3 text-xs font-bold uppercase tracking-widest text-cream/40">
            Président : Mr Le Z
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-cream/40">
            Navigation
          </p>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm font-semibold text-cream/70 transition-colors hover:text-signal"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/inscription"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-signal transition-colors hover:text-cream"
              >
                S'inscrire →
              </Link>
            </li>
          </ul>
        </div>

        {/* Villes */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-cream/40">
            Nos villes
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2.5">
            {CENTRES.map((c) => (
              <li key={c.city} className="text-sm font-semibold text-cream/70">
                {c.city}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-cream/40">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5">
            {PHONES.map((p) => (
              <li key={p}>
                <a
                  href={`tel:+229${p.replaceAll(" ", "")}`}
                  className="flex items-center gap-2 text-sm font-semibold text-cream/70 transition-colors hover:text-signal"
                >
                  <Phone className="size-4 text-primary" /> {p}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-cream transition-transform hover:scale-105"
          >
            <MessageCircle className="size-4" /> WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6">
        <p className="flex items-center justify-center gap-1.5 px-4 text-center text-sm text-cream/50">
          © {new Date().getFullYear()} Permis Bénin — ONG La Voix des Étudiants •
          Fait avec <Heart className="size-3.5 fill-stop text-stop" /> au Bénin
        </p>
      </div>
    </footer>
  );
}