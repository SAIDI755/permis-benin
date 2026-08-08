"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data/contact";

export default function WhatsAppFloat() {
  return (
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 16 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="group fixed bottom-24 right-4 z-50 grid size-14 place-items-center rounded-full bg-primary text-cream shadow-xl shadow-primary/30 md:bottom-8 md:right-8"
    >
      <span className="absolute inline-flex size-full rounded-full bg-primary opacity-40 animate-ping [animation-duration:2s]" />
      <MessageCircle className="relative size-6" />
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full bg-asphalt px-4 py-2 text-sm font-bold opacity-0 transition-opacity group-hover:opacity-100 md:block">
        Une question ? Écris-nous
      </span>
    </motion.a>
  );
}