"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, Plus } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { FAQ_CATEGORIES } from "@/lib/data/faq";
import { WHATSAPP_URL } from "@/lib/data/contact";
import { cn } from "@/lib/utils";

export default function FaqPage() {
  const [open, setOpen] = useState<string | null>("0-0");

  return (
    <main className="min-h-screen overflow-x-clip">
      <Navbar />

      <PageHeader
        overline="FAQ"
        title="Toutes tes questions, toutes nos réponses"
        sub="Et si la tienne n'y est pas, on est à un message."
      />

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-[0.9fr_1.4fr]">
          {/* ---- Colonne sticky ---- */}
          <div className="flex flex-col gap-6 self-start lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-ink/5 bg-white p-6"
            >
              <p className="text-xs font-black uppercase tracking-widest text-ink/40">
                Catégories
              </p>
              <ul className="mt-3 space-y-1.5">
                {FAQ_CATEGORIES.map((c, i) => (
                  <li key={c.name}>
                    <a
                      href={`#cat-${i}`}
                      className="block rounded-xl px-4 py-2.5 font-bold text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink"
                    >
                      {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl bg-asphalt p-7 text-cream"
            >
              <p className="font-display text-xl font-extrabold">
                Une autre question ?
              </p>
              <p className="mt-1 text-cream/60">Réponse rapide, 7j/7.</p>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-cream"
              >
                <MessageCircle className="size-5" /> 01 96 02 34 24
              </motion.a>
            </motion.div>
          </div>

          {/* ---- Accordéons par catégorie ---- */}
          <div className="flex flex-col gap-12">
            {FAQ_CATEGORIES.map((cat, ci) => (
              <div key={cat.name} id={`cat-${ci}`} className="scroll-mt-28">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 font-display text-2xl font-extrabold"
                >
                  <span className="grid size-9 place-items-center rounded-xl bg-signal text-sm font-black text-ink">
                    {ci + 1}
                  </span>
                  {cat.name}
                </motion.h2>

                <div className="mt-5 flex flex-col gap-4">
                  {cat.items.map((item, ii) => {
                    const id = `${ci}-${ii}`;
                    const isOpen = open === id;
                    return (
                      <motion.div
                        key={item.q}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.4, delay: ii * 0.05 }}
                        className={cn(
                          "overflow-hidden rounded-2xl border bg-white",
                          isOpen
                            ? "border-primary/30 shadow-lg shadow-primary/5"
                            : "border-ink/5"
                        )}
                      >
                        <button
                          onClick={() => setOpen(isOpen ? null : id)}
                          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                        >
                          <span className="font-display text-lg font-extrabold">
                            {item.q}
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.25 }}
                            className={cn(
                              "grid size-8 shrink-0 place-items-center rounded-full",
                              isOpen ? "bg-primary text-cream" : "bg-ink/5 text-ink/60"
                            )}
                          >
                            <Plus className="size-4" />
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <p className="px-6 pb-6 text-ink/60">{item.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}