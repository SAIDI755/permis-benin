"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function Wheel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute bottom-0 grid size-10 place-items-center rounded-full bg-asphalt",
        className
      )}
    >
      <div className="relative size-6 animate-[spin_0.7s_linear_infinite]">
        <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 rounded bg-cream/80" />
        <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded bg-cream/80" />
      </div>
    </div>
  );
}

function Car() {
  return (
    <div className="relative h-20 w-52 origin-bottom-left scale-90 md:scale-110">
      {/* Fumée */}
      <div className="absolute -left-6 bottom-5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute size-4 rounded-full bg-ink/25 animate-puff"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </div>

      {/* Cabine */}
      <div className="absolute left-11 top-0 h-10 w-28 rounded-t-[1.6rem] bg-white" />
      <div className="absolute left-13 top-2 h-6 w-11 rounded-t-lg bg-asphalt/80" />
      <div className="absolute left-25 top-2 h-6 w-10 rounded-t-lg bg-asphalt/80" />

      {/* Carrosserie */}
      <div className="absolute bottom-2.5 left-0 h-10 w-52 rounded-2xl bg-white shadow-lg" />

      {/* Phare + feu arrière */}
      <div className="absolute bottom-6 right-0 h-3 w-3 rounded-r bg-signal" />
      <div className="absolute bottom-6 left-0 h-3 w-2 rounded-l bg-stop" />

      {/* Roues */}
      <Wheel className="left-5" />
      <Wheel className="right-6" />
    </div>
  );
}

function Cone({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative h-9 w-7 [clip-path:polygon(50%_0,100%_100%,0_100%)] bg-stop">
        <span className="absolute inset-x-1.5 top-3.5 h-1.5 bg-cream" />
      </div>
      <div className="h-1.5 w-9 rounded-full bg-stop/80" />
    </div>
  );
}

function Sign({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="grid size-12 place-items-center rounded-full border-4 border-asphalt bg-signal font-display text-xs font-black text-ink">
        PB
      </div>
      <div className="h-12 w-1.5 bg-asphalt" />
    </div>
  );
}

export default function RoadDivider() {
  return (
    <div className="relative overflow-hidden py-12" aria-hidden>
      <div className="relative mx-4 md:mx-8">
        {/* Panneau + cône au bord de la route */}
        <Sign className="absolute -top-14 left-10 z-0" />
        <Cone className="absolute -top-9 right-14 z-0" />

        {/* La route arrondie */}
        <div className="relative h-20 overflow-hidden rounded-[2rem] bg-asphalt shadow-xl">
          <div className="absolute inset-x-8 top-3.5 h-0.5 rounded-full bg-cream/20" />
          <div className="absolute inset-x-8 bottom-3.5 h-0.5 rounded-full bg-cream/20" />
          <div className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 animate-road [background-image:repeating-linear-gradient(to_right,#ffc531_0_28px,transparent_28px_56px)]" />
        </div>

        {/* La voiture */}
        <div className="absolute left-0 bottom-9 z-10 animate-drive will-change-transform">
          <motion.div
            animate={{ y: [0, -2.5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Car />
          </motion.div>
        </div>
      </div>
    </div>
  );
}