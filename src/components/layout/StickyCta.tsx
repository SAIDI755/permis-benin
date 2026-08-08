"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data/contact";

export default function StickyCta() {
  const [scrolled, setScrolled] = useState(false);
  const [zoneVisible, setZoneVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Se cache quand une zone d'inscription est visible à l'écran
  useEffect(() => {
    const zones = document.querySelectorAll("[data-cta-zone]");
    if (zones.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => setZoneVisible(entries.some((e) => e.isIntersecting)),
      { threshold: 0.2 }
    );
    zones.forEach((z) => obs.observe(z));
    return () => obs.disconnect();
  }, [pathname]);

  const visible = scrolled && !zoneVisible && pathname !== "/inscription";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed inset-x-4 bottom-4 z-50 md:hidden"
        >
          <div className="flex gap-3 rounded-2xl bg-asphalt/95 p-3 shadow-2xl ring-1 ring-cream/10 backdrop-blur">
            <a
              href="/inscription"
              className="flex-1 rounded-xl bg-primary py-3.5 text-center font-bold text-cream"
            >
              S'inscrire
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid size-12 place-items-center rounded-xl bg-signal text-ink"
            >
              <MessageCircle className="size-5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}