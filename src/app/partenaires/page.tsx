"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  MapPin,
  Megaphone,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import { PARTNERS } from "@/lib/data/partenaires";
import { WHATSAPP_URL } from "@/lib/data/contact";
import { cn } from "@/lib/utils";

const BENEFITS = [
  {
    icon: Users,
    title: "Plus d'élèves",
    text: "Un flux constant d'élèves motivés, formés par vagues toute l'année.",
  },
  {
    icon: Megaphone,
    title: "Visibilité",
    text: "Ton auto-école mise en avant sur notre site et nos campagnes.",
  },
  {
    icon: ShieldCheck,
    title: "Impact",
    text: "Contribue à des routes plus sûres et à l'insertion des jeunes.",
  },
];

export default function Partenaires() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Navbar />

      <PageHeader
        overline="Partenaires"
        title="Ils roulent avec nous"
        sub="Des auto-écoles agréées et des services de qualité, partout au Bénin."
      />

      {/* ---- Grille partenaires ---- */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNERS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 32, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-ink/5 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
              >
                <span
                  className={cn(
                    "grid size-14 place-items-center rounded-2xl font-display text-base font-black",
                    p.color
                  )}
                >
                  {p.initials}
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold leading-tight">
                  {p.name}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-bold">
                  <span className="inline-flex items-center gap-1 rounded-full bg-ink/5 px-3 py-1 text-ink/60">
                    <MapPin className="size-3" /> {p.city}
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                    {p.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Devenir partenaire ---- */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-asphalt p-8 md:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-signal/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-signal px-4 py-1.5 text-xs font-black uppercase tracking-widest text-ink">
                  <Handshake className="size-4" /> Rejoins le réseau
                </span>
                <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-cream md:text-5xl">
                  Pourquoi devenir partenaire ?
                </h2>
                <p className="mt-4 text-lg text-cream/60">
                  Auto-école, labo, service : ensemble, rendons le permis
                  accessible et les routes plus sûres.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-cream transition-transform hover:scale-105"
                  >
                    <MessageCircle className="size-5" /> Discuter sur WhatsApp
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-cream/20 px-6 py-3.5 font-bold text-cream transition-colors hover:border-signal hover:text-signal"
                  >
                    Nous écrire <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {BENEFITS.map((b, i) => (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex items-center gap-4 rounded-2xl bg-cream/5 p-5 ring-1 ring-cream/10"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-signal text-ink">
                      <b.icon className="size-6" />
                    </span>
                    <div>
                      <p className="font-display text-lg font-extrabold text-cream">
                        {b.title}
                      </p>
                      <p className="text-sm text-cream/60">{b.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}