"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

const TEMOIGNAGES = [
  {
    name: "Aïcha D.",
    city: "Cotonou",
    tag: "Permis B",
    text: "J'ai eu mon permis en 2 mois avec les cours en ligne le soir. L'équipe est sérieuse du premier jour jusqu'à l'examen.",
  },
  {
    name: "Rodrigue K.",
    city: "Parakou",
    tag: "Permis A",
    text: "Le paiement en 3 tranches m'a sauvé en tant qu'étudiant. Moniteurs patients, moto-école nickel.",
  },
  {
    name: "Mariam S.",
    city: "Ouidah",
    tag: "Permis B — Fongbe",
    text: "Ma mère a suivi les cours en fongbe : elle a tout compris du premier coup et elle a réussi l'examen.",
  },
  {
    name: "Jean-Marc T.",
    city: "Bohicon",
    tag: "Permis C",
    text: "Chauffeur de camion, je devais avoir le C. Formation pro, camions en super état, et un emploi retrouvé juste après.",
  },
  {
    name: "Grâce H.",
    city: "Calavi",
    tag: "Permis B",
    text: "Les cours du soir m'ont permis de garder mon travail pendant la formation. Professeurs disponibles même sur WhatsApp.",
  },
  {
    name: "Sètondji A.",
    city: "Porto-Novo",
    tag: "Permis A",
    text: "Inscrit en ligne en 5 minutes, la vague a démarré à la date annoncée. Sérieux, ponctuels, efficaces.",
  },
  {
    name: "Chantal V.",
    city: "Pahou",
    tag: "Permis B",
    text: "66 000 F tout inclus comme promis, pas un franc de plus. Je recommande les yeux fermés.",
  },
];

export default function Temoignages() {
  const ref = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 10);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scroll = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("article");
    const amount = card ? (card as HTMLElement).offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Titre + flèches */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            align="left"
            overline="Avis"
            title="Ils ont tracé leur route"
            sub="Des milliers d'élèves formés, voici ce qu'ils en disent."
          />

          <div className="flex gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll(-1)}
              disabled={!canPrev}
              aria-label="Avis précédents"
              className={cn(
                "group grid size-13 place-items-center rounded-full border-2 border-ink/10 bg-white text-ink shadow-sm transition-all duration-300",
                "hover:border-asphalt hover:bg-asphalt hover:text-signal active:scale-90",
                "disabled:opacity-30 disabled:hover:border-ink/10 disabled:hover:bg-white disabled:hover:text-ink"
              )}
            >
              <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-0.5" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll(1)}
              disabled={!canNext}
              aria-label="Avis suivants"
              className={cn(
                "group grid size-13 place-items-center rounded-full border-2 border-ink/10 bg-white text-ink shadow-sm transition-all duration-300",
                "hover:border-asphalt hover:bg-asphalt hover:text-signal active:scale-90",
                "disabled:opacity-30 disabled:hover:border-ink/10 disabled:hover:bg-white disabled:hover:text-ink"
              )}
            >
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
            </motion.button>
          </div>
        </div>

        {/* Carrousel */}
        <div
          ref={ref}
          onScroll={update}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TEMOIGNAGES.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-3xl border border-ink/5 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl sm:w-[46%] lg:w-[31.5%]"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="size-4 fill-signal text-signal" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-ink/70">« {t.text} »</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-display font-extrabold">{t.name}</p>
                  <p className="text-xs font-bold text-ink/40">{t.city}</p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  {t.tag}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Petit compteur */}
        <p className="mt-2 text-right text-xs font-black uppercase tracking-widest text-ink/30">
          {TEMOIGNAGES.length} avis vérifiés
        </p>
      </div>
    </section>
  );
}