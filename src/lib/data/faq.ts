export type FaqItem = { q: string; a: string };
export type FaqCategory = { name: string; items: FaqItem[] };

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    name: "Inscription & paiement",
    items: [
      {
        q: "Quels documents faut-il pour s'inscrire ?",
        a: "Une simple pièce d'identité : CIP, passeport ou acte de naissance. Pour le reste, on t'accompagne pas à pas lors de l'inscription.",
      },
      {
        q: "Puis-je payer en plusieurs fois ?",
        a: "Oui, en 3 tranches : l'inscription puis deux tranches. Exemple pour le permis B en français : 20 000 F + 20 000 F + 26 000 F.",
      },
      {
        q: "Le prix est vraiment tout inclus ?",
        a: "Oui. Inscription, cours de code, cours de conduite et frais d'examen : tout est compris. Pas de surprise, pas de frais cachés.",
      },
      {
        q: "Comment s'inscrire en ligne ?",
        a: "Remplis le formulaire sur la page Inscription ou écris-nous sur WhatsApp. Notre équipe te rappelle en moins de 24h.",
      },
    ],
  },
  {
    name: "Formation & cours",
    items: [
      {
        q: "Combien de temps dure la formation ?",
        a: "Entre 1 et 3 mois selon la catégorie et ton rythme. Créneaux matin, après-midi, soir et weekend pour s'adapter à ton emploi du temps.",
      },
      {
        q: "Comment marchent les cours en ligne ?",
        a: "Après ton inscription, tu reçois tes accès au code sur ton téléphone : vidéos, quiz et un groupe WhatsApp pour poser toutes tes questions.",
      },
      {
        q: "Dans quelles langues sont les cours ?",
        a: "En français, en fongbe et en goun. Choisis la langue dans laquelle tu es le plus à l'aise.",
      },
    ],
  },
  {
    name: "Examen & permis",
    items: [
      {
        q: "Et si je rate l'examen ?",
        a: "Pas de stress. On te prépare sérieusement, et en cas de besoin on t'accompagne jusqu'à la session suivante.",
      },
      {
        q: "Quelle catégorie de permis choisir ?",
        a: "A pour la moto, B pour la voiture, C et D pour les poids lourds et bus. Si tu hésites, écris-nous : on te conseille gratuitement.",
      },
      {
        q: "Le permis est-il reconnu à l'international ?",
        a: "Oui, et nous t'accompagnons aussi pour l'obtention du permis international si tu voyages.",
      },
    ],
  },
];