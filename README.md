# 🎭 FESTICO 2026 — Plateforme Officielle

Plateforme web officielle du **Festival International de la Comédie** (FESTICO) 2026. Elle permet la réservation de billets, la soumission de candidatures (projets & Miss FESTICO), et la gestion administrative complète de l'événement.

---

## 🚀 Technologies utilisées

| Technologie | Rôle |
|---|---|
| **Next.js 14** (App Router) | Framework React principal |
| **Supabase** | Base de données PostgreSQL + Auth + Storage |
| **Tailwind CSS** | Style et mise en page |
| **Lucide React** | Icônes |
| **qrcode.react** | Génération des QR codes des billets |

---

## ✨ Fonctionnalités

### 👤 Espace Visiteur
- Consultation des événements et des artistes
- Inscription et connexion sécurisées
- Réservation de billets (événements gratuits et payants)
- Génération automatique de QR codes pour chaque billet
- Soumission de projets (Film, Humour, Miss FESTICO)

### 🔐 Espace Admin (`/admin/dashboard`)
- **Accessible uniquement** depuis "Mon Espace" si votre compte a le rôle `admin`
- Gestion des événements (publication / masquage, places)
- Suivi des ventes et des commandes
- Validation / rejet des candidatures de projets
- Gestion des candidates Miss FESTICO (avec photos)
- Scanner de billets QR (outil de guichet)

---

## 🛠️ Installation locale

### Prérequis
- Node.js ≥ 18
- Un compte [Supabase](https://supabase.com) (gratuit)

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/uwayezuines/festival.git
cd festival

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
# Créez un fichier .env.local avec:
# NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhb...

# 4. Démarrer le serveur de développement
npm run dev
```

### Configuration Supabase

1. Créez un projet sur [supabase.com](https://supabase.com)
2. Dans **SQL Editor**, exécutez le fichier `schema_and_seed.sql` (tables + données de démo)
3. Ensuite, exécutez `supabase_fix_rls.sql` pour les politiques de sécurité (RLS)
4. Copiez votre **URL** et **clé anon** dans `.env.local`

---

## 🗄️ Structure de la base de données

```
utilisateurs           → Profils liés à auth.users (rôle: admin | visiteur)
evenements             → Événements du festival
artistes_realisateurs  → Artistes, candidats projets et Miss FESTICO
commandes              → Réservations utilisateurs
billets                → Billets QR générés après paiement
paiements              → Traces de paiements Mobile Money
```

---

## 💳 Paiement

Actuellement, le paiement fonctionne en mode **simulation** (démonstration).

Pour activer un vrai paiement Mobile Money (MTN / Orange Money) au Cameroun, intégrez l'API **[Campay](https://campay.net)** ou **CinetPay**.

---

## 📁 Structure du projet

```
src/
├── app/
│   ├── page.js                     → Page d'accueil
│   ├── evenements/page.js          → Liste des événements
│   ├── checkout/[id]/page.js       → Processus de réservation
│   ├── billets/page.js             → Mon Espace (billets + lien admin)
│   ├── soumettre-un-projet/page.js → Formulaire de candidature
│   ├── admin/dashboard/page.js     → Tableau de bord administrateur
│   └── auth/                       → Login / Inscription
├── components/
│   ├── Navbar.js
│   └── Footer.js
└── lib/
    └── supabase.js
```

---

## 👑 Accès administrateur

Pour accéder au Dashboard Admin :

1. Connectez-vous avec un compte enregistré
2. Dans Supabase → **Table Editor** → `utilisateurs` → Changez le `role` de votre utilisateur à `admin`
3. Revenez sur **/billets** (Mon Espace) → Le bouton "Accéder au Dashboard Admin" apparaîtra

---

## 🎯 À propos du FESTICO

Le **Festival International de la Comédie (FESTICO)** est un événement culturel majeur qui célèbre l'humour africain, le cinéma comique et la beauté. Il réunit chaque année des comédiens, réalisateurs et candidates Miss venus de toute l'Afrique et de la diaspora.

---

## 📄 Licence

Ce projet est développé pour l'organisation FESTICO. Tous droits réservés.
