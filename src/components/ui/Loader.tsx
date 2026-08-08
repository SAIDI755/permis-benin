"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import Logo from "./Logo";

function MiniCar() {
  return (
    <div className="relative h-8 w-16">
      {/* cabine */}
      <div className="absolute left-3 top-0 h-3.5 w-9 rounded-t-lg bg-white" />
      <div className="absolute left-4 top-1 h-2 w-3 rounded-t bg-asphalt/80" />
      <div className="absolute left-8 top-1 h-2 w-2.5 rounded-t bg-asphalt/80" />
      {/* carrosserie */}
      <div className="absolute bottom-1.5 left-0 h-3.5 w-16 rounded-lg bg-white shadow" />
      {/* phare */}
      <div className="absolute bottom-2.5 right-0 h-1.5 w-1.5 rounded-r bg-signal" />
      {/* roues */}
      {[
        "left-1.5",
        "right-2",
      ].map((pos) => (
        <div
          key={pos}
          className={`absolute bottom-0 grid size-4 place-items-center rounded-full bg-asphalt ${pos}`}
        >
          <div className="relative size-2.5 animate-[spin_0.5s_linear_infinite]">
            <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-cream/80" />
            <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-cream/80" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Loader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const first = useRef(true);

  useEffect(() => {
    setLoading(true);
    const duration = first.current ? 1800 : 800;
    first.current = false;
    const t = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-cream"
        >
          {/* halos */}
          <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-signal/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-primary/15 blur-3xl" />

          <div className="flex flex-col items-center gap-7">
            {/* logo */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
            >
              <Logo size="lg" />
            </motion.div>

            <p className="font-display text-2xl font-black tracking-tight">
              Permis <span className="text-primary">Bénin</span>
            </p>

            {/* route + voiture */}
            <div className="relative h-10 w-64">
              {/* la jauge-route */}
              <div className="absolute inset-x-0 bottom-0 h-3 overflow-hidden rounded-full bg-asphalt">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full rounded-full [background-image:repeating-linear-gradient(to_right,#ffc531_0_14px,transparent_14px_22px)]"
                />
              </div>
              {/* la voiture qui avance */}
              <motion.div
                initial={{ x: -10 }}
                animate={{ x: 200 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute bottom-2 left-0"
              >
                <motion.div
                  animate={{ y: [0, -1.5, 0] }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                >
                  <MiniCar />
                </motion.div>
              </motion.div>
            </div>

            <p className="text-xs font-black uppercase tracking-widest text-ink/40">
              Démarrage du moteur…
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}