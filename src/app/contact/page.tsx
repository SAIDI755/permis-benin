"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Camera,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Send,
  ThumbsUp,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { PHONES, WHATSAPP_URL } from "@/lib/data/contact";

const inputCls =
  "w-full rounded-xl border border-ink/10 bg-white px-4 py-3.5 font-semibold text-ink outline-none transition placeholder:font-medium placeholder:text-ink/30 focus:border-primary focus:ring-2 focus:ring-primary/20";

const labelCls =
  "mb-1.5 block text-xs font-black uppercase tracking-widest text-ink/50";

const SOCIALS = [
  { icon: ThumbsUp, label: "Facebook" },
  { icon: Camera, label: "Instagram" },
  { icon: Music2, label: "TikTok" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip">
      <Navbar />

      <PageHeader
        overline="Contact"
        title="On est là pour toi"
        sub="Appelle, écris, passe nous voir : on répond vite, 7j/7."
      />

      {/* ---- Cartes contact ---- */}
      <section className="pb-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
          {/* Téléphone */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-ink/5 bg-white p-7 shadow-sm"
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Phone className="size-6" />
            </span>
            <h3 className="mt-4 font-display text-xl font-extrabold">
              Appelle-nous
            </h3>
            <ul className="mt-3 space-y-2">
              {PHONES.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:+229${p.replaceAll(" ", "")}`}
                    className="font-semibold text-ink/60 transition-colors hover:text-primary"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-3xl bg-primary p-7 text-cream shadow-sm"
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-cream/10 text-signal">
              <MessageCircle className="size-6" />
            </span>
            <h3 className="mt-4 font-display text-xl font-extrabold">WhatsApp</h3>
            <p className="mt-3 text-sm text-cream/70">
              Le moyen le plus rapide : réponse en quelques minutes.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-bold text-ink transition-transform hover:scale-105"
            >
              Ouvrir WhatsApp
            </a>
          </motion.div>

          {/* Horaires */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="rounded-3xl border border-ink/5 bg-white p-7 shadow-sm"
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-signal/25 text-signal-dark">
              <Clock className="size-6" />
            </span>
            <h3 className="mt-4 font-display text-xl font-extrabold">Horaires</h3>
            <ul className="mt-3 space-y-2 text-sm font-semibold text-ink/60">
              <li>Lun – Sam : 8h à 20h</li>
              <li>Dimanche : 14h à 18h</li>
              <li className="text-primary">Cours en ligne : 24h/24</li>
            </ul>
          </motion.div>

          {/* Siège */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="rounded-3xl border border-ink/5 bg-white p-7 shadow-sm"
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-stop/10 text-stop">
              <MapPin className="size-6" />
            </span>
            <h3 className="mt-4 font-display text-xl font-extrabold">Siège</h3>
            <p className="mt-3 text-sm font-semibold text-ink/60">
              ONG La Voix des Étudiants
              <br />
              Cotonou, Bénin
            </p>
            <p className="mt-2 text-xs text-ink/40">Adresse exacte bientôt 📍</p>
          </motion.div>
        </div>
      </section>

      {/* ---- Formulaire ---- */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                  className="flex min-h-[320px] flex-col items-center justify-center gap-4 text-center"
                >
                  <CheckCircle2 className="size-14 text-primary" />
                  <h2 className="font-display text-2xl font-extrabold">
                    Message envoyé !
                  </h2>
                  <p className="max-w-xs text-ink/60">
                    On te répond en moins de 24h. Merci de ta confiance 🙏
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-bold text-primary underline underline-offset-4"
                  >
                    Envoyer un autre message
                  </button>
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
                    <label className={labelCls} htmlFor="nom">Nom complet</label>
                    <input id="nom" required placeholder="Ex : Aïcha Dossou" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="tel">Téléphone</label>
                    <input id="tel" type="tel" required placeholder="Ex : 01 96 02 34 24" className={inputCls} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls} htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Dis-nous tout…"
                      className={inputCls}
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary py-4 font-bold text-cream sm:col-span-2"
                  >
                    Envoyer <Send className="size-4" />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            {SOCIALS.map((s) => (
              <motion.a
                key={s.label}
                href="#"
                aria-label={s.label}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="grid size-12 place-items-center rounded-full bg-asphalt text-cream transition-colors hover:bg-primary"
              >
                <s.icon className="size-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}