# Permis Bénin

Plateforme web pour auto-école : présentation, inscription et réservation de leçons de conduite au Bénin.

## Stack

- **Frontend** : Next.js 14
- **Backend** : Symfony 7 / API Platform
- **Base de données** : MySQL / PostgreSQL

## Fonctionnalités

- Inscription et gestion de profil élève
- Réservation de leçons de conduite
- Consultation du planning des cours
- Page de présentation de l'auto-école (offres, tarifs, contact)

## Lancer le projet en local

### Backend (Symfony)

```bash
cd backend
composer install
cp .env.example .env
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
symfony server:start
```

### Frontend (Next.js)

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

## Captures d'écran

<!-- Ajoute ici 2-3 screenshots : page d'accueil, réservation, dashboard -->

## Statut

Projet personnel, en développement.

## Auteur

**Zahirou SAIDI** — [github.com/SAIDI755](https://github.com/SAIDI755) · [linkedin.com/in/zahirou-saidi-1380b5315](https://linkedin.com/in/zahirou-saidi-1380b5315)
