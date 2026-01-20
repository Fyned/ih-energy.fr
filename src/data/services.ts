export interface Service {
  id: string
  slug: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  icon: string
  features: string[]
  benefits: string[]
  process: {
    step: number
    title: string
    description: string
  }[]
  faq: {
    question: string
    answer: string
  }[]
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  image?: string
}

export const services: Service[] = [
  {
    id: 'isolation',
    slug: 'isolation',
    title: 'Isolation des bâtiments',
    shortTitle: 'Isolation',
    description: 'Optimisez la performance énergétique de votre habitat grâce à une isolation thermique professionnelle. Réduisez vos factures de chauffage jusqu\'à 30% et améliorez votre confort intérieur toute l\'année.',
    longDescription: `L'isolation thermique représente le premier levier d'économies d'énergie pour votre logement. Une maison mal isolée laisse échapper jusqu'à 30% de la chaleur par le toit, 25% par les murs et 10% par les planchers.

Chez ISO Home Energy, nous réalisons un diagnostic complet de votre habitation pour identifier les zones de déperdition thermique. Nos techniciens certifiés RGE interviennent ensuite avec des matériaux isolants de haute qualité, adaptés à chaque configuration.

Que vous souhaitiez isoler vos combles perdus, vos murs par l'intérieur ou par l'extérieur, ou encore vos planchers bas, nous vous proposons des solutions sur mesure, éligibles aux aides de l'État.`,
    icon: 'home',
    features: [
      'Isolation des combles perdus par soufflage de laine minérale',
      'Isolation des combles aménagés sous rampants',
      'Isolation thermique des murs par l\'intérieur (ITI)',
      'Isolation thermique des murs par l\'extérieur (ITE)',
      'Isolation des planchers bas sur vide sanitaire ou cave',
      'Isolation des toitures-terrasses',
    ],
    benefits: [
      'Réduction de 25 à 30% sur vos factures de chauffage',
      'Confort thermique optimal été comme hiver',
      'Suppression des sensations de parois froides',
      'Amélioration de l\'étiquette énergétique du logement',
      'Valorisation du patrimoine immobilier',
      'Réduction de l\'empreinte carbone du foyer',
    ],
    process: [
      {
        step: 1,
        title: 'Diagnostic thermique',
        description: 'Visite technique pour évaluer les déperditions et définir la solution adaptée à votre logement.',
      },
      {
        step: 2,
        title: 'Devis détaillé et aides',
        description: 'Élaboration d\'un devis personnalisé avec simulation des aides financières disponibles.',
      },
      {
        step: 3,
        title: 'Réalisation des travaux',
        description: 'Intervention de nos artisans RGE avec des matériaux certifiés et un suivi de chantier rigoureux.',
      },
      {
        step: 4,
        title: 'Contrôle qualité',
        description: 'Vérification finale de l\'installation et remise des documents pour obtenir vos aides.',
      },
    ],
    faq: [
      {
        question: 'Quelle est la durée de vie d\'une isolation ?',
        answer: 'Une isolation de qualité, correctement posée, conserve ses performances pendant 30 à 50 ans. Les matériaux que nous utilisons sont garantis et certifiés pour assurer une efficacité durable.',
      },
      {
        question: 'Faut-il un permis de construire pour isoler ?',
        answer: 'Pour l\'isolation intérieure, aucune autorisation n\'est nécessaire. L\'isolation par l\'extérieur peut nécessiter une déclaration préalable de travaux selon les règles d\'urbanisme locales.',
      },
      {
        question: 'Combien de temps durent les travaux d\'isolation ?',
        answer: 'L\'isolation des combles perdus se réalise en une journée. Pour l\'isolation des murs ou des combles aménagés, comptez 3 à 5 jours selon la surface à traiter.',
      },
    ],
    seo: {
      title: 'Isolation des bâtiments | Isolation thermique murs, combles, planchers',
      description: 'Spécialiste de l\'isolation thermique en France. Isolation des combles, murs et planchers par des artisans RGE. Jusqu\'à 30% d\'économies sur vos factures. Devis gratuit et aides déduites.',
      keywords: ['isolation thermique', 'isolation combles', 'isolation murs', 'isolation plancher', 'ITE', 'ITI', 'artisan RGE', 'économies énergie'],
    },
    image: '/images/services/isolation.webp',
  },
  {
    id: 'chauffage',
    slug: 'chauffage',
    title: 'Solutions de chauffage',
    shortTitle: 'Chauffage',
    description: 'Passez à un système de chauffage performant et économique. Nos pompes à chaleur nouvelle génération divisent par 3 votre consommation tout en assurant un confort optimal.',
    longDescription: `Le chauffage représente plus de 60% de la consommation énergétique d'un foyer. Remplacer une ancienne chaudière par une pompe à chaleur moderne permet de réduire drastiquement cette dépense tout en bénéficiant d'un confort supérieur.

ISO Home Energy vous accompagne dans le choix et l'installation de votre nouveau système de chauffage. Pompe à chaleur air-eau pour alimenter vos radiateurs ou votre plancher chauffant, pompe à chaleur air-air pour une climatisation réversible... Nous analysons vos besoins pour vous proposer la solution la plus adaptée.

Toutes nos installations sont réalisées par des techniciens certifiés QualiPAC, garantissant une mise en service optimale et l'éligibilité aux aides financières.`,
    icon: 'flame',
    features: [
      'Pompe à chaleur air-eau pour radiateurs et plancher chauffant',
      'Pompe à chaleur air-air réversible (chauffage et climatisation)',
      'Remplacement de chaudière fioul ou gaz ancienne génération',
      'Installation de systèmes hybrides PAC + chaudière',
      'Mise en place de régulation et thermostat connecté',
      'Raccordement au réseau de chauffage existant',
    ],
    benefits: [
      'Division par 3 de la facture de chauffage',
      'Utilisation d\'une énergie renouvelable (aérothermie)',
      'Confort homogène dans toutes les pièces',
      'Possibilité de rafraîchissement en été',
      'Fonctionnement silencieux et automatique',
      'Durée de vie supérieure à 15 ans',
    ],
    process: [
      {
        step: 1,
        title: 'Étude de dimensionnement',
        description: 'Calcul des besoins thermiques de votre logement pour choisir la puissance adaptée.',
      },
      {
        step: 2,
        title: 'Proposition technique et financière',
        description: 'Présentation des solutions possibles avec chiffrage détaillé et simulation des aides.',
      },
      {
        step: 3,
        title: 'Installation par nos techniciens',
        description: 'Pose de l\'équipement par des installateurs certifiés QualiPAC.',
      },
      {
        step: 4,
        title: 'Mise en service et formation',
        description: 'Réglages optimaux et explication du fonctionnement de votre nouveau système.',
      },
    ],
    faq: [
      {
        question: 'Une pompe à chaleur fonctionne-t-elle par grand froid ?',
        answer: 'Les pompes à chaleur modernes fonctionnent efficacement jusqu\'à -15°C voire -20°C pour certains modèles. Nous sélectionnons des équipements adaptés à votre zone climatique.',
      },
      {
        question: 'Quel est le niveau sonore d\'une pompe à chaleur ?',
        answer: 'Les modèles actuels sont très silencieux, avec un niveau sonore de 35 à 45 dB pour l\'unité extérieure, comparable à une conversation à voix basse.',
      },
      {
        question: 'Puis-je garder mes radiateurs existants ?',
        answer: 'Dans la plupart des cas, oui. La pompe à chaleur air-eau s\'adapte aux radiateurs existants. Un dimensionnement correct permet d\'assurer le confort avec votre installation actuelle.',
      },
    ],
    seo: {
      title: 'Solutions de chauffage | Pompe à chaleur air-eau et air-air',
      description: 'Installation de pompes à chaleur par des artisans certifiés QualiPAC. Divisez par 3 votre facture de chauffage. Remplacement chaudière fioul/gaz. Aides MaPrimeRénov\' et CEE incluses.',
      keywords: ['pompe à chaleur', 'PAC air-eau', 'PAC air-air', 'chauffage économique', 'remplacement chaudière', 'QualiPAC', 'chauffage écologique'],
    },
    image: '/images/services/chauffage.webp',
  },
  {
    id: 'photovoltaique',
    slug: 'photovoltaique',
    title: 'Panneau photovoltaïque',
    shortTitle: 'Photovoltaïque',
    description: 'Produisez votre propre électricité et réduisez votre dépendance au réseau. Nos installations solaires vous garantissent une énergie propre et des économies durables sur vos factures.',
    longDescription: `L'énergie solaire photovoltaïque est aujourd'hui l'investissement le plus rentable pour réduire durablement vos factures d'électricité. En produisant votre propre énergie, vous vous protégez contre les hausses tarifaires tout en contribuant à la transition énergétique.

ISO Home Energy conçoit et installe des centrales photovoltaïques adaptées à votre toiture et à votre consommation. Nous privilégions l'autoconsommation avec vente du surplus : vous utilisez l'électricité produite en journée et revendez l'excédent à EDF OA.

Nos installations comprennent des panneaux haute performance, un onduleur de dernière génération et un système de monitoring pour suivre votre production en temps réel.`,
    icon: 'sun',
    features: [
      'Panneaux photovoltaïques monocristallins haut rendement',
      'Onduleurs et micro-onduleurs de dernière génération',
      'Système de monitoring et suivi de production en temps réel',
      'Installation en surimposition ou intégration au bâti',
      'Batterie de stockage pour optimiser l\'autoconsommation',
      'Raccordement au réseau et contrat EDF OA',
    ],
    benefits: [
      'Production d\'électricité gratuite pendant 25 ans minimum',
      'Revenu complémentaire grâce à la vente du surplus',
      'Protection contre les hausses du prix de l\'électricité',
      'Valorisation du bien immobilier',
      'Réduction de l\'empreinte carbone',
      'Indépendance énergétique accrue',
    ],
    process: [
      {
        step: 1,
        title: 'Étude de faisabilité',
        description: 'Analyse de votre toiture (orientation, inclinaison, ombrage) et de votre consommation.',
      },
      {
        step: 2,
        title: 'Dimensionnement et devis',
        description: 'Calcul de la puissance optimale et estimation de la production annuelle.',
      },
      {
        step: 3,
        title: 'Démarches administratives',
        description: 'Déclaration en mairie, demande de raccordement Enedis et contrat EDF OA.',
      },
      {
        step: 4,
        title: 'Installation et mise en service',
        description: 'Pose des panneaux, raccordement électrique et validation Consuel.',
      },
    ],
    faq: [
      {
        question: 'Quelle surface de toiture faut-il pour installer des panneaux ?',
        answer: 'Comptez environ 18 m² de toiture pour une installation de 3 kWc (6-8 panneaux), qui couvre les besoins d\'un foyer de 4 personnes. Nous adaptons la puissance à votre surface disponible.',
      },
      {
        question: 'Combien rapporte une installation photovoltaïque ?',
        answer: 'Une installation de 3 kWc produit environ 3 500 kWh/an en France, soit une économie de 700 à 900 € par an. Le retour sur investissement se situe entre 8 et 12 ans selon les aides obtenues.',
      },
      {
        question: 'Les panneaux fonctionnent-ils par temps nuageux ?',
        answer: 'Oui, les panneaux produisent même par temps couvert, mais avec un rendement réduit (10 à 25% de la production nominale). La production annuelle tient compte de toutes les conditions météo.',
      },
    ],
    seo: {
      title: 'Panneau photovoltaïque | Installation solaire en autoconsommation',
      description: 'Installation de panneaux solaires photovoltaïques par des professionnels certifiés. Autoconsommation et vente du surplus. Prime à l\'autoconsommation et TVA réduite. Devis gratuit.',
      keywords: ['panneau solaire', 'photovoltaïque', 'autoconsommation', 'installation solaire', 'énergie solaire', 'EDF OA', 'prime autoconsommation'],
    },
    image: '/images/services/photovoltaique.webp',
  },
  {
    id: 'chauffe-eau',
    slug: 'chauffe-eau',
    title: 'Chauffe-eau thermodynamique haute performance',
    shortTitle: 'Chauffe-eau',
    description: 'Le chauffe-eau thermodynamique capte les calories de l\'air pour chauffer votre eau sanitaire. Une technologie qui consomme 3 fois moins qu\'un cumulus électrique classique.',
    longDescription: `Le chauffe-eau thermodynamique (CET) représente la solution la plus économique pour produire votre eau chaude sanitaire. En utilisant le principe de la pompe à chaleur, il capte l'énergie présente dans l'air ambiant pour chauffer l'eau de votre ballon.

Cette technologie permet de diviser par 3 votre consommation d'énergie par rapport à un chauffe-eau électrique traditionnel. Pour une famille de 4 personnes, cela représente une économie de 200 à 300 € par an sur la facture d'électricité.

ISO Home Energy installe des chauffe-eaux thermodynamiques de marques reconnues, avec des capacités adaptées à la taille de votre foyer (150L à 300L). L'installation est simple et rapide, généralement réalisée en une demi-journée.`,
    icon: 'droplets',
    features: [
      'Technologie pompe à chaleur intégrée (COP jusqu\'à 3,5)',
      'Capacités de 150L, 200L, 250L ou 300L selon vos besoins',
      'Fonctionnement sur air ambiant, air extrait ou air extérieur',
      'Programmation horaire pour optimiser la consommation',
      'Mode boost électrique pour les pics de consommation',
      'Compatible avec une installation photovoltaïque',
    ],
    benefits: [
      'Économies de 60 à 70% sur la production d\'eau chaude',
      'Temps de chauffe rapide (6 à 8 heures)',
      'Fonctionnement silencieux (moins de 50 dB)',
      'Déshumidification du local d\'installation',
      'Durée de vie moyenne de 15 à 20 ans',
      'Éligible aux aides CEE et MaPrimeRénov\'',
    ],
    process: [
      {
        step: 1,
        title: 'Évaluation des besoins',
        description: 'Calcul du volume nécessaire selon le nombre d\'occupants et les équipements sanitaires.',
      },
      {
        step: 2,
        title: 'Choix du modèle',
        description: 'Sélection de l\'appareil adapté à votre configuration (emplacement, source d\'air).',
      },
      {
        step: 3,
        title: 'Installation',
        description: 'Pose et raccordement par nos techniciens en une demi-journée.',
      },
      {
        step: 4,
        title: 'Mise en service',
        description: 'Réglages, programmation et explication du fonctionnement.',
      },
    ],
    faq: [
      {
        question: 'Où installer un chauffe-eau thermodynamique ?',
        answer: 'L\'idéal est un local non chauffé d\'au moins 10 m³ (garage, buanderie, cave). Il peut aussi être installé dans une pièce chauffée avec une gaine d\'évacuation vers l\'extérieur.',
      },
      {
        question: 'Le chauffe-eau thermodynamique fait-il du bruit ?',
        answer: 'Le niveau sonore est d\'environ 45-50 dB, comparable à un réfrigérateur. Les modèles récents sont conçus pour minimiser les nuisances, mais il est préférable de l\'installer hors des pièces de vie.',
      },
      {
        question: 'Quelle capacité choisir ?',
        answer: 'Comptez environ 50L par personne : 150L pour 2-3 personnes, 200L pour 3-4 personnes, 250-300L pour 5 personnes et plus ou si vous avez une baignoire.',
      },
    ],
    seo: {
      title: 'Chauffe-eau thermodynamique | Production d\'eau chaude économique',
      description: 'Installation de chauffe-eau thermodynamique haute performance. 70% d\'économies sur l\'eau chaude. Artisans certifiés RGE. Éligible MaPrimeRénov\' et CEE. Devis gratuit.',
      keywords: ['chauffe-eau thermodynamique', 'ballon thermodynamique', 'eau chaude sanitaire', 'CET', 'économies eau chaude', 'pompe à chaleur eau chaude'],
    },
    image: '/images/services/chauffe-eau.webp',
  },
  {
    id: 'vmc',
    slug: 'vmc',
    title: 'Ventilation mécanique contrôlée (VMC)',
    shortTitle: 'VMC',
    description: 'Assurez un renouvellement constant de l\'air intérieur pour préserver votre santé et votre logement. La VMC double flux récupère jusqu\'à 90% de la chaleur de l\'air extrait.',
    longDescription: `La ventilation est un élément essentiel mais souvent négligé de la rénovation énergétique. Un logement bien isolé doit impérativement être bien ventilé pour évacuer l'humidité, les polluants et le CO2, tout en préservant la qualité de l'air intérieur.

La VMC (Ventilation Mécanique Contrôlée) assure un renouvellement d'air permanent et maîtrisé. Les systèmes hygroréglables adaptent automatiquement le débit en fonction de l'humidité détectée. La VMC double flux va plus loin en récupérant jusqu'à 90% de la chaleur de l'air évacué pour préchauffer l'air entrant.

ISO Home Energy installe des systèmes de ventilation adaptés à votre logement : VMC simple flux pour les budgets serrés, VMC double flux pour une performance maximale.`,
    icon: 'wind',
    features: [
      'VMC simple flux hygroréglable type A ou B',
      'VMC double flux haut rendement (jusqu\'à 92% de récupération)',
      'Bouches d\'extraction et d\'insufflation design',
      'Filtration de l\'air entrant (pollen, particules fines)',
      'Régulation automatique selon l\'humidité et la présence',
      'Bypass automatique pour le rafraîchissement nocturne d\'été',
    ],
    benefits: [
      'Air intérieur sain et renouvelé en permanence',
      'Évacuation de l\'humidité et prévention des moisissures',
      'Réduction des allergènes et polluants intérieurs',
      'Économies de chauffage (VMC double flux)',
      'Confort acoustique grâce à la filtration',
      'Préservation du bâti et des revêtements',
    ],
    process: [
      {
        step: 1,
        title: 'Diagnostic ventilation',
        description: 'Évaluation de la ventilation existante et des besoins de votre logement.',
      },
      {
        step: 2,
        title: 'Conception du réseau',
        description: 'Étude du passage des gaines et positionnement des bouches.',
      },
      {
        step: 3,
        title: 'Installation',
        description: 'Pose du caisson, des gaines et des bouches par nos techniciens.',
      },
      {
        step: 4,
        title: 'Équilibrage et mise en service',
        description: 'Réglage des débits et vérification du bon fonctionnement.',
      },
    ],
    faq: [
      {
        question: 'Quelle différence entre VMC simple flux et double flux ?',
        answer: 'La simple flux extrait l\'air vicié et laisse entrer l\'air frais par des entrées d\'air. La double flux récupère la chaleur de l\'air extrait pour préchauffer l\'air entrant, d\'où des économies de chauffage importantes.',
      },
      {
        question: 'La VMC fait-elle du bruit ?',
        answer: 'Une VMC bien installée et entretenue est très silencieuse (25-35 dB). Le caisson doit être correctement fixé et les gaines bien dimensionnées pour éviter les sifflements.',
      },
      {
        question: 'À quelle fréquence entretenir sa VMC ?',
        answer: 'Nettoyez les bouches et filtres tous les 3 mois. Faites vérifier le moteur et les gaines par un professionnel tous les 3 ans. Un entretien régulier garantit efficacité et longévité.',
      },
    ],
    seo: {
      title: 'VMC | Ventilation mécanique contrôlée simple et double flux',
      description: 'Installation de VMC simple flux et double flux par des professionnels. Air sain, économies de chauffage et prévention de l\'humidité. Éligible aux aides CEE. Devis gratuit.',
      keywords: ['VMC', 'ventilation mécanique contrôlée', 'VMC double flux', 'VMC simple flux', 'qualité air intérieur', 'ventilation maison', 'récupération chaleur'],
    },
    image: '/images/services/vmc.webp',
  },
]
