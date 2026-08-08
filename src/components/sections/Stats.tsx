"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";
import { Flag, GraduationCap, MapPin, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const STATS: {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
  chip: string;
}[] = [
  { value: 5000, suffix: "+", label: "élèves formés", icon: GraduationCap, chip: "bg-signal/25 text-signal-dark" },
  { value: 95, suffix: "%", label: "taux de réussite", icon: Trophy, chip: "bg-primary/10 text-primary" },
  { value: 8, suffix: "+", label: "villes couvertes", icon: MapPin, chip: "bg-stop/10 text-stop" },
  { value: 27, suffix: "", label: "vagues réalisées", icon: Flag, chip: "bg-asphalt/5 text-asphalt" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current)
          ref.current.textContent =
            Math.round(v).toLocaleString("fr-FR") + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section id="chiffres" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 md:px-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-dashed lg:divide-ink/10">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-3 text-center"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <span className={cn("grid size-12 place-items-center rounded-2xl", s.chip)}>
              <s.icon className="size-6" />
            </span>
            <p className="font-display text-5xl font-black tracking-tight md:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="text-sm font-bold uppercase tracking-widest text-ink/50">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}