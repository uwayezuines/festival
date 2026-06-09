// src/data/festicoData.ts

// === NAVIGATION ===
export const TABS = [
    { id: 'accueil', href: '/accueil', label: 'Accueil', emoji: '🏠' },
    { id: 'essence', href: '/essence', label: "L'Essence", emoji: '💡' },
    { id: 'bienfaits', href: '/bienfaits', label: 'Bienfaits', emoji: '😄' },
    { id: 'partenaires', href: '/partenaires', label: 'Partenaires', emoji: '🤝' },
    { id: 'contacts', href: '/contacts', label: 'Contacts', emoji: '📞' },
    { id: 'edition2026', href: '/edition2026', label: '14e Édition', emoji: '🎭' },
];

// === ONGLET 1 : ACCUEIL ===
export const TEXTE_ACCUEIL = `FESTICO est le Festival International des Images Comiques. Mis sur pied par un groupe de jeunes philanthropes passionnés de culture et de cinéma, ce festival unique brise la frontière parfois artificielle qui sépare les professionnels du septième art du reste des spectateurs. C'est un événement fédérateur, à la fois culturel, cinématographique, humanitaire et thérapeutique, entièrement axé autour du rire et de la bonne humeur.

Face aux crises du monde actuel, FESTICO place l'humain au centre en se rassemblant pour partager des moments de légèreté et de joie. À ce jour, il s'impose comme la seule plateforme d'envergure dédiée exclusivement au genre humoristique en Afrique au sud du Sahara.`;

export const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/CxoNxjQTUR4';

// === PHOTOS CAROUSEL ===
export const CAROUSEL_PHOTOS = [
    "/photo/1743287608432.jpg",
    "/photo/1773309802298.jpg",
    "/photo/1773839347357.jpg",
    "/photo/1773914045490.jpg",
    "/photo/1774041414723.jpg",
    "/photo/1774186817986.jpg",
    "/photo/1781029958313.jpg",
    "/photo/1781029984154.jpg",
    "/photo/1781030011490.jpg",
    "/photo/1781030041449.jpg",
    "/photo/1781030060338.jpg",
    "/photo/1781030097441.jpg",
    "/photo/1781030135350.jpg",
    "/photo/1781030161013.jpg",
    "/photo/1781030189567.jpg",
    "/photo/1781030214242.jpg",
    "/photo/1781030243507.jpg",
    "/photo/1781030265003.jpg",
    "/photo/1781030299772.jpg",
    "/photo/IMG_20260609_192427_687.jpg",
    "/photo/IMG_20260609_192504_942.jpg",
    "/photo/IMG_20260609_192537_562.jpg",
    "/photo/IMG_20260609_192655_750.jpg",
    "/photo/IMG_20260609_192930_476.jpg",
    "/photo/IMG_20260609_193023_211.jpg",
    "/photo/IMG_20260609_193045_939.jpg",
    "/photo/PXL_20240625_190521877.NIGHT.jpg"
];

// === ONGLET 2 : L'ESSENCE ===
export const ESSENCE_ITEMS = [
    {
        question: 'QUAND ?',
        icon: '📅',
        answer: "Fidèle à ses principes et surtout à la période hautement symbolique à laquelle il a lieu, le FESTICO se tient toujours durant la semaine internationale du rire et du bonheur.",
    },
    {
        question: 'OÙ ?',
        icon: '📍',
        answer: "La ville de Yaoundé a été choisie pour son positionnement géographique et stratégique, ses nombreux espaces verts, sa population dense/multiculturelle et ses sites touristiques.",
    },
    {
        question: 'POUR QUI ?',
        icon: '👥',
        answer: "Dédié aux populations, aux cinéastes, aux humoristes, aux acteurs du secteur culturel et aux amateurs du rire sans distinction de race, de sexe, d'âge, de religion et de rang social. Les circuits de diffusion de films et spectacles comiques y sont différents des circuits habituels.",
    },
    {
        question: 'PAR QUI ?',
        icon: '🏛️',
        answer: "L'association FESTICO, rejointe par des mécènes aux parcours multiples et activités diverses.",
    },
    {
        question: 'COMMENT ?',
        icon: '⚙️',
        answer: "Un challenge relevé grâce à une équipe motivée et aux soutiens du gouvernement camerounais ainsi que d'institutions nationales et internationales pour reconstruire la bonne humeur.",
    },
    {
        question: 'POURQUOI ?',
        icon: '❓',
        answer: "Assainir une atmosphère tendue et surtout valoriser le genre comique qui semble être effacé dans les chaînes de production et diffusion cinématographiques.",
    },
];

// === ONGLET 3 : BIENFAITS DU RIRE ===
export const BIENFAITS = [
    {
        titre: 'Mental & Confiance',
        icon: '🧠',
        color: 'from-violet-500/20 to-purple-500/10 border-violet-500/30',
        description: "Combat la timidité, augmente la confiance en soi et amène une vision positive des choses.",
    },
    {
        titre: 'Anti-Stress',
        icon: '😌',
        color: 'from-sky-500/20 to-blue-500/10 border-sky-500/30',
        description: "L'un des remèdes les plus efficaces, économiques et faciles à administrer contre le stress.",
    },
    {
        titre: 'Maladies Graves',
        icon: '💪',
        color: 'from-rose-500/20 to-pink-500/10 border-rose-500/30',
        description: "Les effets positifs du rire sur le système immunitaire peuvent renforcer la résistance des personnes souffrant du SIDA et du CANCER. C'est précieux pour les personnes vulnérables.",
    },
    {
        titre: 'Effet Antalgique',
        icon: '💊',
        color: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30',
        description: "Provoque la sécrétion d'endorphines dans le corps, réduisant immédiatement la douleur.",
    },
    {
        titre: 'Circulation & Relaxation',
        icon: '❤️',
        color: 'from-emerald-500/20 to-green-500/10 border-emerald-500/30',
        description: "Assure une bonne oxygénation du sang, favorise la circulation sanguine et agit comme un puissant relaxant musculaire.",
    },
    {
        titre: 'Santé Cardiaque',
        icon: '🫀',
        color: 'from-red-500/20 to-rose-500/10 border-red-500/30',
        description: "Réduit la tension artérielle, indispensable pour la santé du cœur.",
    },
    {
        titre: 'Système Immunitaire',
        icon: '🛡️',
        color: 'from-teal-500/20 to-cyan-500/10 border-teal-500/30',
        description: "Contribue à accroître le taux d'anticorps (Immunoglobuline A) dans les muqueuses du nez et des voies respiratoires après une thérapie par le rire.",
    },
];

// === ONGLET 4 : PARTENAIRES ===
export const ARGUMENTS_PARTENARIATS = [
    "Associer son image à une initiative populaire et unique",
    "Permettre d'oublier le stress quotidien",
    "Contribuer à la dynamique culturelle africaine",
    "Profiter de places privilégiées",
    "Contribuer à la formation des jeunes locaux et freiner l'exode",
];

export const PARTENAIRES = [
    { nom: "République du Cameroun" },
    { nom: "Ministère des Arts et de la Culture" },
    { nom: "Fondation Canal+" },
    { nom: "Canal+ University" },
    { nom: "TV5 Monde" },
    { nom: "Unesco" },
    { nom: "Cosy Hotel" },
    { nom: "Miyu" },
    { nom: "African Studio" },
    { nom: "Touch Studios" },
    { nom: "France Volontaires" },
    { nom: "IFCPA" },
    { nom: "Ebenor" },
    { nom: "Sudu — The PanAfrican Film Network" },
];

// === ONGLET 5 : CONTACTS & ÉQUIPE ===
export const EQUIPE = [
    { nom: "Ferdinand Sylvère ENGO", titre: "Délégué général du Festico", initial: "FE" },
    { nom: "Kevine Islavia KEMAJOU", titre: "Directrice déléguée du Festico", initial: "KK" },
    { nom: "Rosine ASSOGO", titre: "Chargée de la communication & Coordinatrice MiSS FESTICO", initial: "RA" },
];

export const CONTACTS = {
    telMTN: "(+237) 677 86 75 57",
    telOrange: "(+237) 690 667 871",
    emailPrincipal: "festico237@gmail.com",
    emailSecondaire: "engoferdinand@yahoo.fr",
    facebook: "https://www.facebook.com/Festico237",
};

// === ONGLET 6 : 14e ÉDITION ===
export const EDITION_INFO = {
    dates: "23 – 27 juin 2026",
    lieu: "Village du Festival — Hôtel de ville de Yaoundé",
    theme: "La comédie : le genre idéal pour la sensibilisation et l'éducation des masses à travers le digital",
    slogan: "Le divertissement au service de l'humanitaire",
    affluence: "12 000 visiteurs attendus",
};

export const ACTIVITES = [
    { titre: "Projections en plein air de films comiques", icon: "🎬" },
    { titre: "Conférences & Débats", icon: "🎤" },
    { titre: "Masterclass & Ateliers", icon: "🎓" },
    { titre: "Compétition Miss FESTICO 2026", icon: "👑" },
    { titre: "Spectacles live tous les soirs", icon: "🌟" },
    { titre: "MiNi-FESTICO de Paris & Douala", icon: "🌍" },
];
