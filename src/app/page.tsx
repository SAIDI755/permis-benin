"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarClock,
  CarFront,
  ClipboardCheck,
  Languages,
  MapPin,
  MessageCircle,
  Star,
  Trophy,
  Wifi,
} from "lucide-react";
import RoadDivider from "@/components/sections/RoadDivider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stats from "@/components/sections/Stats";
import SectionTitle from "@/components/ui/SectionTitle";
import { TARIFFS } from "@/lib/data/tarifs";
import { CENTRES, LANGUES } from "@/lib/data/centres";
import { PARTNERS } from "@/lib/data/partenaires";
import { WHATSAPP_URL } from "@/lib/data/contact";
import Temoignages from "@/components/sections/Temoignages";
import { cn } from "@/lib/utils";

/* ---------- Parcours ---------- */
const STEPS = [
  {
    dot: "bg-stop shadow-[0_0_16px_rgba(226,59,46,0.5)]",
    title: "Inscris-toi",
    text: "En ligne ou dans l'un de nos centres. Paiement en 3 tranches, simple et sans stress.",
    icon: ClipboardCheck,
  },
  {
    dot: "bg-signal shadow-[0_0_16px_rgba(255,197,49,0.5)]",
    title: "Forme-toi",
    text: "Code et conduite, en présentiel (matin, après-midi, soir, weekend) ou en ligne. De 1 à 3 mois.",
    icon: CarFront,
  },
  {
    dot: "bg-primary shadow-[0_0_16px_rgba(12,122,75,0.5)]",
    title: "Prends la route",
    text: "Tu décroches ton permis et tu traces ta route, au Bénin comme à l'international.",
    icon: Trophy,
  },
];

function Parcours() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          overline="Le parcours"
          title="Simple comme un feu vert"
          sub="Trois étapes entre toi et ton permis."
        />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-1/2 hidden border-t-2 border-dashed border-ink/10 lg:block" />
          <div className="grid gap-8 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 rounded-3xl border border-ink/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={cn("size-5 rounded-full", s.dot)} />
                    <span className="text-xs font-black uppercase tracking-widest text-ink/40">
                      Étape 0{i + 1}
                    </span>
                  </div>
                  <span className="grid size-12 place-items-center rounded-2xl bg-ink/5 text-ink/60">
                    <s.icon className="size-6" />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold">{s.title}</h3>
                <p className="mt-2 text-ink/60">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Formules (asphalte) ---------- */
function Formules() {
  return (
    <section className="relative overflow-hidden bg-asphalt py-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          dark
          overline="Formules"
          title="Des prix tout inclus, sans surprise"
          sub="Paiement en 3 tranches. Frais d'examen compris."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TARIFFS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={cn(
                "relative flex flex-col rounded-3xl p-7",
                t.popular
                  ? "bg-signal text-ink shadow-[0_24px_80px_-24px_rgba(255,197,49,0.45)]"
                  : "bg-asphalt-light text-cream ring-1 ring-cream/10"
              )}
            >
              {t.popular && (
                <span className="absolute -top-3 right-6 -rotate-3 rounded-full bg-stop px-3 py-1 text-xs font-black uppercase tracking-widest text-cream">
                  ★ Star
                </span>
              )}
              <t.icon className={cn("size-8", t.popular ? "text-ink" : "text-signal")} />
              <h3 className="mt-4 font-display text-lg font-extrabold">{t.title}</h3>
              <p className={cn("text-xs font-bold uppercase tracking-widest", t.popular ? "text-ink/60" : "text-cream/50")}>
                {t.subtitle}
              </p>
              <p className="mt-4 font-display text-3xl font-black">{t.price}</p>
              <Link
                href="/formations"
                className={cn(
                  "mt-5 inline-flex items-center gap-1.5 text-sm font-bold",
                  t.popular ? "text-ink" : "text-signal"
                )}
              >
                Découvrir <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/formations"
            className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-4 font-bold text-ink transition-transform hover:scale-105"
          >
            Toutes les formations <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Centres + langues ---------- */
function CentresLangues() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          overline="Nos centres"
          title="Partout près de chez toi"
          sub="8 villes et plus, et la route continue."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {CENTRES.map((c, i) => (
            <motion.div
              key={c.city}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 260, damping: 20 }}
            >
              <Link
                href="/centres"
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 font-bold shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <MapPin className="size-4 text-primary" /> {c.city}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-ink/15 px-5 py-3 font-bold text-ink/50"
          >
            + Et bientôt la tienne
          </motion.div>
        </div>

        {/* Bandeau langues */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative mt-16 overflow-hidden rounded-3xl bg-primary p-8 text-cream md:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-signal/20 blur-3xl" />
          <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-signal text-ink">
                <Languages className="size-6" />
              </span>
              <div className="text-center md:text-left">
                <p className="font-display text-xl font-extrabold">Apprends dans ta langue</p>
                <p className="text-cream/70">Cours de code en français, fongbe et goun + cours en ligne 24h/24.</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {LANGUES.map((l, i) => (
                <motion.span
                  key={l.name}
                  whileHover={{ scale: 1.08, rotate: i % 2 === 0 ? 2 : -2 }}
                  className={cn("rounded-xl px-6 py-3 font-display text-lg font-black shadow-lg", l.style)}
                >
                  {l.name}
                </motion.span>
              ))}
              <span className="inline-flex items-center gap-2 rounded-xl bg-cream/10 px-5 py-3 text-sm font-bold ring-1 ring-cream/20">
                <Wifi className="size-4 text-signal" /> En ligne 24h/24
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ---------- Partenaires (marquee) ---------- */
function Partenaires() {
  return (
    <section className="pb-24">
      <SectionTitle
        overline="Partenaires"
        title="Ils roulent avec nous"
        sub="Des auto-écoles agréées partout au Bénin."
      />
      <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-5 pr-5">
              {PARTNERS.map((p) => (
                <div
                  key={`${k}-${p.name}`}
                  className="flex items-center gap-3 rounded-2xl border border-ink/5 bg-white px-6 py-4 shadow-sm"
                >
                  <span className={cn("grid size-10 place-items-center rounded-xl font-display text-sm font-black", p.color)}>
                    {p.initials}
                  </span>
                  <span className="whitespace-nowrap font-bold text-ink/80">{p.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href="/partenaires" className="inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-primary-dark">
          Devenir partenaire <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

/* ---------- CTA final ---------- */
function FinalCta() {
  return (
    <section className="pb-24" data-cta-zone>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-asphalt p-10 text-center text-cream md:p-16"
        >
          <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-signal/15 blur-3xl" />
          <span className="relative inline-block rounded-full bg-signal px-4 py-1.5 text-xs font-black uppercase tracking-widest text-ink">
            27e vague — inscriptions ouvertes
          </span>
          <h2 className="relative mt-5 font-display text-4xl font-black tracking-tight md:text-6xl">
            Prêt à tracer ta route ?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-cream/60">
            Places limitées par vague. Réserve la tienne maintenant, paie en 3 tranches.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/inscription"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-8 py-4 font-bold text-ink transition-transform hover:scale-105"
            >
              Je m'inscris <ArrowRight className="size-5" />
            </Link>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/20 px-8 py-4 font-bold text-cream transition-colors hover:border-primary hover:text-primary"
            >
              <MessageCircle className="size-5" /> Poser une question
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <RoadDivider />
      <Parcours />
      <Formules />
      <CentresLangues />
      <Temoignages />
      <Partenaires />
      <FinalCta />
      <Footer />
    </main>
  );
}