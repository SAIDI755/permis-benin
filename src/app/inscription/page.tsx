"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import {
  Check,
  CheckCircle2,
  MessageCircle,
  Send,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { CENTRES, LANGUES } from "@/lib/data/centres";
import { TARIFFS } from "@/lib/data/tarifs";
import { WHATSAPP_URL } from "@/lib/data/contact";

const inputCls =
  "w-full rounded-xl border border-ink/10 bg-white px-4 py-3.5 font-semibold text-ink outline-none transition placeholder:font-medium placeholder:text-ink/30 focus:border-primary focus:ring-2 focus:ring-primary/20";

const labelCls =
  "mb-1.5 block text-xs font-black uppercase tracking-widest text-ink/50";

const NEXT_STEPS = [
  "On t'écrit sur WhatsApp en moins de 24h",
  "Tu verses l'inscription et tu choisis ton centre",
  "Tu rejoins la vague à la rentrée",
];

const PRIX = [
  { label: "Permis B — Français", price: "66 000 F" },
  { label: "Permis B — Fongbe / Goun", price: "76 000 F" },
  { label: "Permis A1, A2 & A3", price: "50 000 F" },
  { label: "Permis C, C1 & Dr", price: "96 000 F" },
];

export default function InscriptionPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip">
      <Navbar />

      <PageHeader
        overline="Inscription — 27e vague"
        title="Réserve ta place"
        sub="Remplis le formulaire, et on s'occupe du reste. Places limitées par vague."
      />

      <section className="pb-24" data-cta-zone>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[1.3fr_0.9fr]">
          {/* ---- Formulaire ---- */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-ink/5 bg-white p-7 shadow-sm md:p-10"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="flex min-h-[480px] flex-col items-center justify-center gap-4 text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
                  >
                    <CheckCircle2 className="size-16 text-primary" />
                  </motion.span>
                  <h2 className="font-display text-3xl font-extrabold">
                    Inscription reçue !
                  </h2>
                  <p className="max-w-sm text-ink/60">
                    Notre équipe te contacte très vite sur WhatsApp pour
                    confirmer ta place dans la 27e vague.
                  </p>
                  <div className="mt-2 flex flex-wrap justify-center gap-3">
                    <Link
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-cream"
                    >
                      <MessageCircle className="size-4" /> Ouvrir WhatsApp
                    </Link>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-bold text-primary underline underline-offset-4"
                    >
                      Nouvelle inscription
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, scale: 0.98 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <div>
                    <label className={labelCls} htmlFor="prenom">Prénom</label>
                    <input id="prenom" required placeholder="Ex : Aïcha" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="nom">Nom</label>
                    <input id="nom" required placeholder="Ex : Dossou" className={inputCls} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls} htmlFor="tel">Téléphone (WhatsApp)</label>
                    <input id="tel" type="tel" required placeholder="Ex : 01 96 02 34 24" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="ville">Ville</label>
                    <select id="ville" required defaultValue="" className={inputCls}>
                      <option value="" disabled>Choisis ta ville</option>
                      {CENTRES.map((c) => (
                        <option key={c.city} value={c.city}>{c.city}</option>
                      ))}
                      <option value="autre">Autre ville</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="langue">Langue des cours</label>
                    <select id="langue" required defaultValue="" className={inputCls}>
                      <option value="" disabled>Choisis ta langue</option>
                      {LANGUES.map((l) => (
                        <option key={l.name} value={l.name}>{l.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls} htmlFor="formule">Formule</label>
                    <select id="formule" required defaultValue="" className={inputCls}>
                      <option value="" disabled>Choisis ta formule</option>
                      {TARIFFS.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.title} — {t.subtitle} ({t.price})
                        </option>
                      ))}
                      <option value="international">Permis international</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls} htmlFor="message">Message (facultatif)</label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Une question, une précision…"
                      className={inputCls}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary py-4 font-bold text-cream sm:col-span-2"
                  >
                    Je m'inscris <Send className="size-4" />
                  </motion.button>
                  <p className="text-center text-xs font-semibold text-ink/40 sm:col-span-2">
                    Réponse en moins de 24h • Places limitées par vague
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ---- Colonne sticky ---- */}
          <div className="flex flex-col gap-6 self-start lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-ink/5 bg-white p-7"
            >
              <p className="font-display text-xl font-extrabold">Et après ?</p>
              <ul className="mt-5 space-y-4">
                {NEXT_STEPS.map((s, i) => (
                  <li key={s} className="flex items-center gap-3 font-semibold text-ink/70">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-signal text-sm font-black text-ink">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl bg-asphalt p-7 text-cream"
            >
              <p className="font-display text-xl font-extrabold">Côté budget</p>
              <ul className="mt-5 space-y-3">
                {PRIX.map((p) => (
                  <li key={p.label} className="flex items-center justify-between gap-3 text-sm font-semibold">
                    <span className="text-cream/70">{p.label}</span>
                    <span className="font-black text-signal">{p.price}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cream/50">
                <Check className="size-4 text-primary" /> Paiement en 3 tranches
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}