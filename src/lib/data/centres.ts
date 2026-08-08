export type Centre = {
  city: string;
  address: string;
};

export const CENTRES: Centre[] = [
  { city: "Cotonou", address: "Avenue Steinmetz, près du grand marché" },
  { city: "Calavi", address: "Carrefour Calavi, près du campus UAC" },
  { city: "Ouidah", address: "Centre-ville, près de la Porte du Non-Retour" },
  { city: "Parakou", address: "Quartier Zongo, près du grand marché" },
  { city: "Porto-Novo", address: "Centre-ville, près du jardin des plantes" },
  { city: "Pahou", address: "Carrefour Pahou, axe Cotonou-Ouidah" },
  { city: "Bohicon", address: "Quartier Gnidjazoun" },
];

export const LANGUES = [
  { name: "Français", style: "bg-signal text-ink" },
  { name: "Fongbe", style: "bg-primary text-cream" },
  { name: "Goun", style: "bg-stop text-cream" },
];