"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function SectionTitle({
  overline,
  title,
  sub,
  dark = false,
  align = "center",
}: {
  overline: string;
  title: ReactNode;
  sub?: string;
  dark?: boolean;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}
    >
      <span className="inline-block rounded-full bg-signal px-4 py-1.5 text-xs font-black uppercase tracking-widest text-ink">
        {overline}
      </span>
      <h2
        className={cn(
          "mt-4 font-display text-4xl font-black tracking-tight md:text-5xl",
          dark ? "text-cream" : "text-ink"
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-4 text-lg",
            dark ? "text-cream/60" : "text-ink/60"
          )}
        >
          {sub}
        </p>
      )}
    </motion.div>
  );
}