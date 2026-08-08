"use client";

import { motion } from "motion/react";

export default function PageHeader({
  overline,
  title,
  sub,
}: {
  overline: string;
  title: string;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 md:pt-40">
      <div className="pointer-events-none absolute -right-32 -top-32 size-[400px] rounded-full bg-signal/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-20 size-[300px] rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full bg-signal px-4 py-1.5 text-xs font-black uppercase tracking-widest text-ink"
        >
          {overline}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display text-5xl font-black tracking-tight md:text-6xl"
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl text-lg text-ink/60"
          >
            {sub}
          </motion.p>
        )}
      </div>
    </section>
  );
}