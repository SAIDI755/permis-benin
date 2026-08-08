"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowRight,
  CalendarClock,
  CarFront,
  ChevronDown,
  Smartphone,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";

const LIGHTS = [
  "bg-stop shadow-[0_0_14px_rgba(226,59,46,0.8)]",
  "bg-signal shadow-[0_0_14px_rgba(255,197,49,0.8)]",
  "bg-primary shadow-[0_0_14px_rgba(12,122,75,0.8)]",
];

const AVATARS = [
  { init: "A", bg: "bg-primary" },
  { init: "K", bg: "bg-asphalt" },
  { init: "S", bg: "bg-signal-dark" },
  { init: "M", bg: "bg-stop" },
];

export default function Hero() {
  /* --- Tilt 3D qui suit la souris --- */
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });

  /* --- Feu tricolore qui cycle --- */
  const [light, setLight] = useState(2);
  useEffect(() => {
    const id = setInterval(() => setLight((l) => (l + 1) % 3), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="accueil" className="relative overflow-hidden pb-20 pt-28 md:pt-36">
      {/* Halos décoratifs */}
      <div className="pointer-events-none absolute -right-32 -top-32 size-[480px] rounded-full bg-signal/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 size-[480px] rounded-full bg-primary/15 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 md:px-8 lg:grid-cols-2">
        {/* ------- Colonne texte ------- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            27e vague — inscriptions ouvertes
          </motion.div>

          <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                Passe ton permis,
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block text-primary"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                trace ta route.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 max-w-lg text-lg text-ink/70"
          >
            La clé du bien-être : une formation complète dès{" "}
            <strong className="text-ink">50 000 F</strong>, en présentiel ou en
            ligne, dans plus de 8 villes au Bénin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.a
              href="#inscription"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-cream shadow-lg shadow-primary/25"
            >
              S'inscrire maintenant
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#formules"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/10 bg-white/60 px-7 py-4 font-bold backdrop-blur transition-colors hover:border-ink/30"
            >
              Voir les formules
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {AVATARS.map((a) => (
                <span
                  key={a.init}
                  className={cn(
                    "grid size-9 place-items-center rounded-full text-xs font-bold text-cream ring-2 ring-cream",
                    a.bg
                  )}
                >
                  {a.init}
                </span>
              ))}
            </div>
            <p className="text-sm text-ink/60">
              <strong className="text-ink">+5 000 élèves</strong> ont déjà eu
              leur permis avec nous
            </p>
          </motion.div>
        </div>

        {/* ------- Colonne visuelle : le permis 3D ------- */}
        <div
          ref={ref}
          onMouseMove={(e) => {
            const r = ref.current!.getBoundingClientRect();
            mx.set((e.clientX - r.left) / r.width);
            my.set((e.clientY - r.top) / r.height);
          }}
          onMouseLeave={() => {
            mx.set(0.5);
            my.set(0.5);
          }}
          className="relative flex justify-center [perspective:1200px]"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-full bg-signal/25 blur-3xl" />

            {/* La carte permis */}
            <div className="relative w-[320px] overflow-hidden rounded-3xl bg-asphalt p-6 text-cream shadow-2xl ring-1 ring-white/10 md:w-[380px]">
              <div className="pointer-events-none absolute inset-0 animate-shine bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.15)_50%,transparent_60%)]" />

              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-cream/60">
                République du Bénin
                <span className="rounded-full bg-signal px-2.5 py-1 text-ink">
                  Permis de conduire
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="grid size-16 place-items-center rounded-2xl bg-cream/10 ring-1 ring-white/10">
                  <CarFront className="size-8 text-signal" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-cream/50">
                    Futur titulaire
                  </p>
                  <p className="font-display text-xl font-extrabold">
                    Toi, bientôt 🎉
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-widest text-cream/50">
                  Catégories
                </p>
                <div className="mt-2 flex gap-2">
                  {["A", "B", "C"].map((c) => (
                    <span
                      key={c}
                      className={cn(
                        "grid size-9 place-items-center rounded-lg text-sm font-black",
                        c === "B"
                          ? "bg-signal text-ink"
                          : "bg-cream/10 text-cream/70 ring-1 ring-white/10"
                      )}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-1 flex-1 [background-image:repeating-linear-gradient(to_right,#ffc531_0_10px,transparent_10px_18px)]" />
                <span className="text-[10px] font-bold tracking-widest text-cream/40">
                  N° PB-2026-0001
                </span>
              </div>
            </div>

            {/* Feu tricolore */}
            <div className="absolute -right-5 -top-8 flex flex-col items-center gap-1.5 rounded-full bg-asphalt px-2.5 py-3 shadow-xl ring-1 ring-white/10">
              {LIGHTS.map((c, i) => (
                <span
                  key={c}
                  className={cn(
                    "size-3.5 rounded-full transition-all duration-500",
                    light === i ? c : "bg-cream/20"
                  )}
                />
              ))}
            </div>

            {/* Badges flottants */}
            <div className="absolute -left-8 top-10 animate-float rounded-2xl bg-signal px-4 py-3 text-ink shadow-xl">
              <p className="flex items-center gap-2 text-sm font-black">
                <Wallet className="size-4" /> 66 000 F
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">
                tout inclus
              </p>
            </div>

            <div className="absolute -right-6 top-1/2 animate-float rounded-2xl bg-primary px-4 py-3 text-cream shadow-xl [animation-delay:1.2s]">
              <p className="flex items-center gap-2 text-sm font-black">
                <CalendarClock className="size-4" /> 1 à 3 mois
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">
                durée flexible
              </p>
            </div>

            <div className="absolute -bottom-6 left-6 animate-float rounded-2xl bg-white px-4 py-3 text-ink shadow-xl [animation-delay:2.4s]">
              <p className="flex items-center gap-2 text-sm font-black">
                <Smartphone className="size-4 text-primary" /> En ligne
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                & présentiel
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicateur scroll */}
      <motion.a
        href="#formules"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-ink/40 transition-colors hover:text-ink"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}