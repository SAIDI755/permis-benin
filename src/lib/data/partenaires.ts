export type Partner = {
  name: string;
  initials: string;
  color: string;
  city: string;
  type: string;
};

export const PARTNERS: Partner[] = [
  { name: "GCS Group Auto-École", initials: "GCS", color: "bg-primary text-cream", city: "Cotonou", type: "Auto-école" },
  { name: "Eloi Service Plus", initials: "ES", color: "bg-signal text-ink", city: "Cotonou", type: "Auto-école" },
  { name: "Allo Labo!", initials: "AL", color: "bg-stop text-cream", city: "Cotonou", type: "Labo partenaire" },
  { name: "Conduite 229", initials: "229", color: "bg-asphalt text-cream", city: "Calavi", type: "Auto-école" },
  { name: "Auto-École du Plateau", initials: "AP", color: "bg-primary text-cream", city: "Porto-Novo", type: "Auto-école" },
  { name: "Les Palmiers Conduite", initials: "LP", color: "bg-signal text-ink", city: "Ouidah", type: "Auto-école" },
  { name: "Étoile du Bénin", initials: "EB", color: "bg-stop text-cream", city: "Bohicon", type: "Auto-école" },
  { name: "Parakou Route Academy", initials: "PR", color: "bg-asphalt text-cream", city: "Parakou", type: "Auto-école" },
];