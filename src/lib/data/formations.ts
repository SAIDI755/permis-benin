import { Bike, CarFront, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Formation = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  installments: string[];
  duration: string;
  audience: string;
  desc: string;
  icon: LucideIcon;
  popular?: boolean;
};

export const FORMATIONS: Formation[] = [
  {
    id: "b-fr",
    title: "Permis B — Français",
    subtitle: "Voiture",
    price: "66 000 F",
    installments: [
      "Inscription : 20 000 F",
      "1ʳᵉ tranche : 20 000 F",
      "2ᵉ tranche : 26 000 F",
    ],
    duration: "1 à 3 mois",
    audience: "Étudiants, travailleurs, entrepreneurs",
    desc: "La formule star : apprends à conduire une voiture avec des cours de code en français, en présentiel ou en ligne.",
    icon: CarFront,
    popular: true,
  },
  {
    id: "b-fon",
    title: "Permis B — Fongbe / Goun",
    subtitle: "Voiture",
    price: "76 000 F",
    installments: [
      "Inscription : 25 000 F",
      "1ʳᵉ tranche : 25 000 F",
      "2ᵉ tranche : 26 000 F",
    ],
    duration: "1 à 3 mois",
    audience: "Ceux qui préfèrent apprendre dans leur langue",
    desc: "La même formation complète, avec des cours de code en fongbe ou en goun pour comprendre sans aucune barrière.",
    icon: CarFront,
  },
  {
    id: "a",
    title: "Permis A1, A2 & A3",
    subtitle: "Moto",
    price: "50 000 F",
    installments: ["Paiement en 3 tranches disponible"],
    duration: "1 à 2 mois",
    audience: "Zémidjan, livreurs, particuliers",
    desc: "Maîtrise la moto en toute sécurité : équilibre, code de la route et conduite en ville avec des moniteurs expérimentés.",
    icon: Bike,
  },
  {
    id: "c",
    title: "Permis C, C1 & Dr",
    subtitle: "Poids lourds & bus",
    price: "96 000 F",
    installments: ["Paiement en 3 tranches disponible"],
    duration: "2 à 3 mois",
    audience: "Chauffeurs professionnels",
    desc: "Forme-toi aux métiers du transport : camions, gros porteurs et bus, pour décrocher des emplois qualifiés.",
    icon: Truck,
  },
];