import { TrafficCone } from "lucide-react";

const ITEMS = [
  "Permis B — 66 000 F",
  "Permis A — 50 000 F",
  "Permis C, C1 & D — 96 000 F",
  "Permis international",
  "Cours en ligne & présentiel",
  "8+ villes au Bénin",
];

export default function Marquee() {
  return (
    <div className="relative z-10 -rotate-1 overflow-hidden bg-asphalt py-4 shadow-xl">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex items-center gap-8 pr-8">
            {ITEMS.map((t) => (
              <span
                key={t}
                className="flex items-center gap-8 whitespace-nowrap text-sm font-black uppercase tracking-[0.2em] text-cream"
              >
                {t}
                <TrafficCone className="size-4 text-signal" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}