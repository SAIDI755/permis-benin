"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "À propos", href: "/a-propos" },
  { label: "Formations", href: "/formations" },
  { label: "Centres", href: "/centres" },
  { label: "Partenaires", href: "/partenaires" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-300",
          scrolled
            ? "border-b border-ink/5 bg-cream/80 shadow-[0_8px_30px_-12px_rgba(18,22,26,0.15)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-4 transition-[height] duration-300 md:px-8",
            scrolled ? "h-16" : "h-20"
          )}
        >
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="grid size-10 place-items-center overflow-hidden rounded-xl bg-asphalt">
              <span className="flex flex-col gap-1 transition-transform duration-500 group-hover:-translate-y-1.5">
                <span className="h-1.5 w-1 rounded-full bg-signal" />
                <span className="h-1.5 w-1 rounded-full bg-signal" />
                <span className="h-1.5 w-1 rounded-full bg-signal" />
                <span className="h-1.5 w-1 rounded-full bg-signal" />
              </span>
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight">
              Permis <span className="text-primary">Bénin</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative py-2 text-sm font-semibold transition-colors",
                  pathname === l.href ? "text-ink" : "text-ink/60 hover:text-ink"
                )}
              >
                {l.label}
                {pathname === l.href && (
                  <motion.span
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-x-0 -bottom-0.5 h-1 rounded-full bg-signal"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/inscription"
              className="group hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-cream transition-transform hover:scale-105 active:scale-95 md:inline-flex"
            >
              S'inscrire
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="grid size-10 place-items-center rounded-xl bg-asphalt text-cream md:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ---- Menu mobile plein écran (au-dessus de TOUT) ---- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-asphalt md:hidden"
          >
            {/* Barre du haut du menu */}
            <div className="flex h-20 shrink-0 items-center justify-between px-4">
              <Link href="/" className="flex items-center gap-2.5">
                <span className="grid size-10 place-items-center rounded-xl bg-cream/10">
                  <span className="flex flex-col gap-1">
                    <span className="h-1.5 w-1 rounded-full bg-signal" />
                    <span className="h-1.5 w-1 rounded-full bg-signal" />
                    <span className="h-1.5 w-1 rounded-full bg-signal" />
                  </span>
                </span>
                <span className="font-display text-lg font-extrabold text-cream">
                  Permis <span className="text-signal">Bénin</span>
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="grid size-10 place-items-center rounded-xl bg-signal text-ink"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col px-6 pb-10 pt-6">
              <nav className="flex flex-col gap-2">
                {LINKS.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i + 0.1, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href={l.href}
                      className={cn(
                        "font-display text-4xl font-black transition-colors",
                        pathname === l.href ? "text-signal" : "text-cream hover:text-signal"
                      )}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto"
              >
                <Link
                  href="/inscription"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal px-6 py-4 font-bold text-ink"
                >
                  S'inscrire <ArrowRight className="size-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}