"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Globe2,
  HeartHandshake,
  KeyRound,
  MapPin,
  Quote,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";

const ARGUMENTS = [
  { icon: Briefcase, text: "Demandé dans les offres d'emploi" },
  { icon: Globe2, text: "Facilite l'obtention de visa" },
  { icon: KeyRound, text: "Clé de l'indépendance au quotidien" },
];

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Accessibilité",
    text: "Des prix justes et un paiement en 3 tranches pour que personne ne reste au bord de la route.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Transparence",
    text: "Tout inclus, zéro frais caché. Ce qu'on t'annonce, c'est ce que tu paies.",
    color: "bg-signal/25 text-signal-dark",
  },
  {
    icon: MapPin,
    title: "Proximité",
    text: "Des centres dans plus de 8 villes et des cours en ligne, où que tu sois.",
    color: "bg-stop/10 text-stop",
  },
  {
    icon: Trophy,
    title: "Réussite",
    text: "Un accompagnement sérieux, du premier cours jusqu'au permis en poche.",
    color: "bg-asphalt/5 text-asphalt",
  },
];

export default function APropos() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Navbar />

      <PageHeader
        overline="À propos"
        title="La Voix des Étudiants"
        sub="L'ONG qui rend le permis accessible à tous les Béninois, depuis la première vague."
      />

      {/* ---- Mission ---- */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-black tracking-tight md:text-4xl">
              Notre mission
            </h2>
            <p className="mt-5 text-lg text-ink/70">
              Née de la conviction que le permis de conduire ne doit pas être
              un luxe, l'ONG La Voix des Étudiants a lancé le projet{" "}
              <strong className="text-ink">Permis Bénin</strong> : offrir à
              chaque Béninois — élève, étudiant, travailleur ou entrepreneur —
              une formation de qualité à un prix juste.
            </p>
            <p className="mt-4 text-lg text-ink/70">
              En partenariat avec des auto-écoles agréées, nous organisons des
              vagues de formation dans plus de 8 villes du Bénin. 27 vagues
              déjà réalisées, des milliers de conducteurs formés, et une seule
              obsession : ta réussite.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-3xl bg-asphalt p-8 text-cream md:p-10"
          >
            <Quote className="absolute -right-4 -top-4 size-28 text-cream/5" />
            <p className="font-display text-2xl font-extrabold leading-snug">
              « Le permis, c'est votre clé du bien-être. »
            </p>
            <ul className="mt-7 space-y-4">
              {ARGUMENTS.map((a, i) => (
                <motion.li
                  key={a.text}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 font-semibold"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-signal text-ink">
                    <a.icon className="size-5" />
                  </span>
                  {a.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ---- Mot du PDG ---- */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 text-cream md:p-12"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-signal/20 blur-3xl" />

            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center">
              <div className="grid size-24 shrink-0 place-items-center rounded-full bg-cream font-display text-3xl font-black text-primary ring-4 ring-signal">
                HA
              </div>
              <div>
                <Quote className="size-8 text-signal" />
                <p className="mt-4 text-xl font-semibold leading-relaxed md:text-2xl">
                  Notre combat, c'est que l'argent ne soit jamais un obstacle
                  entre un jeune et son avenir. Chaque vague qui sort de nos
                  centres est une victoire pour le Bénin.
                </p>
                <p className="mt-5 font-display text-lg font-extrabold">
                  Mr Le Z
                </p>
                <p className="text-sm text-cream/70">
                  Président — ONG La Voix des Étudiants
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---- Valeurs ---- */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            overline="Nos valeurs"
            title="Ce qui nous fait avancer"
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-ink/5 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
              >
                <span className={`grid size-12 place-items-center rounded-2xl ${v.color}`}>
                  <v.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.5rem] bg-asphalt p-10 text-center text-cream md:p-14"
          >
            <h2 className="font-display text-3xl font-black tracking-tight md:text-5xl">
              Prêt à tracer ta route ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-cream/60">
              Rejoins les milliers d'élèves qui ont déjà pris le volant avec
              Permis Bénin.
            </p>
            <Link
              href="/inscription"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-signal px-8 py-4 font-bold text-ink transition-transform hover:scale-105"
            >
              Je m'inscris <ArrowRight className="size-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}