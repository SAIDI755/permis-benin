import { Bike, CarFront, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Tariff = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  installments: string[];
  icon: LucideIcon;
  popular?: boolean;
};

export const TARIFFS: Tariff[] = [
  {
    id: "b-fr",
    title: "Permis B",
    subtitle: "Français",
    price: "66 000 F",
    installments: [
      "Inscription : 20 000 F",
      "1ʳᵉ tranche : 20 000 F",
      "2ᵉ tranche : 26 000 F",
    ],
    icon: CarFront,
    popular: true,
  },
  {
    id: "b-fon",
    title: "Permis B",
    subtitle: "Fongbe / Goun",
    price: "76 000 F",
    installments: [
      "Inscription : 25 000 F",
      "1ʳᵉ tranche : 25 000 F",
      "2ᵉ tranche : 26 000 F",
    ],
    icon: CarFront,
  },
  {
    id: "a",
    title: "Permis A1, A2 & A3",
    subtitle: "Moto",
    price: "50 000 F",
    installments: ["Paiement en 3 tranches disponible"],
    icon: Bike,
  },
  {
    id: "c",
    title: "Permis C, C1 & Dr",
    subtitle: "Poids lourds & bus",
    price: "96 000 F",
    installments: ["Paiement en 3 tranches disponible"],
    icon: Truck,
  },
];

export const INCLUDED = [
  "Cours de code (théorie)",
  "Cours de conduite (pratique)",
  "Frais d'examen inclus",
  "Accès aux cours en ligne",
];