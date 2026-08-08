"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Flag,
  Languages,
  Laptop,
  MapPin,
  Wallet,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { CENTRES } from "@/lib/data/centres";
import { cn } from "@/lib/utils";

const SLOTS = ["Matin", "Après-midi", "Soir", "Weekend"];

const OFFERS = [
  { icon: Laptop, text: "Cours en ligne disponibles" },
  { icon: Clock, text: "Matin, après-midi, soir & weekend" },
  { icon: Languages, text: "Français, fongbe & goun" },
  { icon: Wallet, text: "Paiement en 3 tranches" },
];

export default function Centres() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Navbar />

      <PageHeader
        overline="Nos centres"
        title="Une route, huit villes"
        sub="Trouve le centre le plus proche de chez toi. Et ce n'est que le début."
      />

      {/* ---- La route des centres ---- */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="relative">
            {/* La ligne de route */}
            <div className="absolute bottom-0 left-6 top-0 w-1 -translate-x-1/2 [background-image:repeating-linear-gradient(to_bottom,#ffc531_0_14px,transparent_14px_26px)] md:left-1/2" />

            <div className="flex flex-col gap-12">
              {CENTRES.map((c, i) => {
                const left = i % 2 === 0;
                return (
                  <div key={c.city} className="relative md:grid md:grid-cols-2 md:gap-20">
                    {/* Borne kilométrique */}
                    <span className="absolute left-6 top-8 z-10 grid size-11 -translate-x-1/2 place-items-center rounded-full bg-asphalt text-sm font-black text-signal ring-4 ring-cream md:left-1/2">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Carte ville */}
                    <motion.div
                      initial={{ opacity: 0, x: left ? -48 : 48 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        "ml-14 md:ml-0",
                        left ? "md:col-start-1" : "md:col-start-2"
                      )}
                    >
                      <div className="group rounded-3xl border border-ink/5 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl">
                        <div className="flex items-center justify-between">
                          <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-cream">
                            <MapPin className="size-5" />
                          </span>
                          <Link
                            href="/inscription"
                            className="text-sm font-bold text-primary transition-colors hover:text-primary-dark"
                          >
                            S'inscrire ici →
                          </Link>
                        </div>
                        <h3 className="mt-4 font-display text-2xl font-extrabold">
                          {c.city}
                        </h3>
                        <p className="mt-1 text-sm text-ink/60">{c.address}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {SLOTS.map((s) => (
                            <span
                              key={s}
                              className="rounded-full bg-ink/5 px-3 py-1 text-xs font-bold text-ink/60"
                            >
                              {s}
                            </span>
                          ))}
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                            En ligne
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}

              {/* Arrivée de la route */}
              <div className="relative">
                <span className="absolute left-6 top-8 z-10 grid size-11 -translate-x-1/2 place-items-center rounded-full bg-signal text-ink ring-4 ring-cream md:left-1/2">
                  <Flag className="size-5" />
                </span>
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="ml-14 rounded-3xl border-2 border-dashed border-ink/15 p-7 text-center md:ml-0 md:mx-auto md:max-w-xl"
                >
                  <h3 className="font-display text-2xl font-extrabold">
                    Et bientôt ta ville ?
                  </h3>
                  <p className="mt-2 text-ink/60">
                    La route continue. D'autres centres arrivent bientôt au
                    Bénin.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-asphalt px-6 py-3 font-bold text-cream transition-transform hover:scale-105"
                  >
                    Proposer ma ville <ArrowRight className="size-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Tous nos centres offrent ---- */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-4 rounded-3xl bg-white p-8 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            {OFFERS.map((o, i) => (
              <motion.div
                key={o.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-3 font-bold"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-signal/25 text-signal-dark">
                  <o.icon className="size-5" />
                </span>
                {o.text}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}