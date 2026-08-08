"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  Clock,
  Globe,
  GraduationCap,
  Users,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import { FORMATIONS } from "@/lib/data/formations";
import { INCLUDED } from "@/lib/data/tarifs";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    icon: BookOpen,
    title: "Le code",
    text: "Théorie en salle ou en ligne, dans ta langue : français, fongbe ou goun.",
  },
  {
    icon: GraduationCap,
    title: "La conduite",
    text: "Pratique avec des moniteurs agréés, sur voiture ou moto-école.",
  },
  {
    icon: Award,
    title: "L'examen",
    text: "Préparation complète jusqu'au jour J. Frais d'examen inclus.",
  },
];

export default function Formations() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Navbar />

      <PageHeader
        overline="Formations"
        title="Une formule pour chaque projet"
        sub="Voiture, moto, poids lourds ou permis international : tout inclus, paiement en 3 tranches."
      />

      {/* ---- Cartes détaillées ---- */}
      <section className="pb-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:px-8">
          {FORMATIONS.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              whileHover={{ y: -4 }}
              className="grid overflow-hidden rounded-[2rem] border border-ink/5 bg-white shadow-sm md:grid-cols-5"
            >
              {/* Contenu */}
              <div className="p-8 md:col-span-3 md:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-2xl",
                      f.popular ? "bg-signal text-ink" : "bg-primary/10 text-primary"
                    )}
                  >
                    <f.icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold">
                      {f.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-ink/40">
                      {f.subtitle}
                    </p>
                  </div>
                  {f.popular && (
                    <span className="ml-auto -rotate-3 rounded-full bg-stop px-3 py-1 text-xs font-black uppercase tracking-widest text-cream">
                      ★ Populaire
                    </span>
                  )}
                </div>

                <p className="mt-5 text-ink/70">{f.desc}</p>

                <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
                  <span className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-4 py-2">
                    <Clock className="size-4 text-primary" /> {f.duration}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-4 py-2">
                    <Users className="size-4 text-primary" /> {f.audience}
                  </span>
                </div>

                <ul className="mt-6 space-y-2 text-sm font-semibold text-ink/70">
                  {f.installments.map((line) => (
                    <li key={line} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-signal" />
                      {line}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/inscription"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-cream transition-transform hover:scale-105"
                >
                  Choisir cette formule <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* Panneau prix */}
              <div
                className={cn(
                  "relative flex flex-col items-center justify-center gap-3 p-10 md:col-span-2",
                  f.popular ? "bg-signal text-ink" : "bg-asphalt text-cream"
                )}
              >
                <f.icon className="size-16 opacity-80" />
                <p className="font-display text-4xl font-black tracking-tight">
                  {f.price}
                </p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">
                  tout inclus
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---- Tout inclus ---- */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 rounded-3xl bg-white p-8 shadow-sm sm:grid-cols-2 lg:grid-cols-4"
          >
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 font-bold">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-cream">
                  <Check className="size-4" />
                </span>
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---- Déroulé ---- */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            overline="Comment ça se passe"
            title="Code, conduite, examen"
            sub="Trois étapes, un seul objectif : ton permis."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-3xl border border-ink/5 bg-white p-8 text-center shadow-sm"
              >
                <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-signal/25 text-signal-dark">
                  <s.icon className="size-7" />
                </span>
                <p className="mt-4 text-xs font-black uppercase tracking-widest text-ink/40">
                  Étape {i + 1}
                </p>
                <h3 className="mt-1 font-display text-xl font-extrabold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Permis international ---- */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-asphalt p-8 text-cream md:flex-row md:p-10"
          >
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-signal text-ink">
                <Globe className="size-6" />
              </span>
              <div className="text-center md:text-left">
                <p className="font-display text-xl font-extrabold">
                  Permis international
                </p>
                <p className="text-cream/60">
                  Tu voyages ? On s'occupe de ton permis international.
                </p>
              </div>
            </div>
            <Link
              href="/inscription"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-cream transition-transform hover:scale-105"
            >
              Demander plus d'infos <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}