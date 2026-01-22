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
    id: 'isolation-exterieur',
    slug: 'isolation-thermique-exterieur',
    title: 'Isolation thermique par l\'extérieur',
    shortTitle: 'ITE',
    description: 'L\'isolation par l\'extérieur (ITE) enveloppe votre maison d\'un manteau isolant performant. Supprimez les ponts thermiques et transformez l\'aspect de votre façade en une seule intervention.',
    longDescription: `L'isolation thermique par l'extérieur (ITE) est la technique la plus efficace pour améliorer la performance énergétique de votre habitation. En enveloppant les murs extérieurs d'un isolant recouvert d'un enduit de finition, vous supprimez les ponts thermiques et conservez l'inertie thermique de vos murs.

Cette solution présente un double avantage : elle améliore considérablement l'isolation de votre logement tout en rénovant l'aspect extérieur de votre façade. Vous gagnez en confort, réduisez vos factures d'énergie et valorisez votre patrimoine.

ISO Home Energy réalise des ITE complètes avec des matériaux certifiés : polystyrène expansé, laine de roche ou fibre de bois selon vos préférences et les contraintes techniques de votre bâtiment.`,
    icon: 'home',
    features: [
      'Isolation en polystyrène expansé (PSE) haute densité',
      'Isolation en laine de roche pour une meilleure résistance au feu',
      'Isolation en fibre de bois pour une approche écologique',
      'Enduits de finition variés (gratté, taloché, ribbé)',
      'Traitement des points singuliers (fenêtres, angles, soubassements)',
      'Pose de profilés de départ, d\'angle et de finition',
    ],
    benefits: [
      'Suppression totale des ponts thermiques',
      'Économies de chauffage de 25 à 40%',
      'Rénovation esthétique de la façade',
      'Conservation de la surface habitable intérieure',
      'Amélioration du confort été comme hiver',
      'Valorisation importante du bien immobilier',
    ],
    process: [
      {
        step: 1,
        title: 'Diagnostic façade',
        description: 'Analyse de l\'état du support, mesures et choix de la solution technique adaptée.',
      },
      {
        step: 2,
        title: 'Devis et aides',
        description: 'Chiffrage détaillé avec simulation des aides MaPrimeRénov\' et CEE.',
      },
      {
        step: 3,
        title: 'Travaux d\'ITE',
        description: 'Pose de l\'isolant, marouflage, couche de base armée et enduit de finition.',
      },
      {
        step: 4,
        title: 'Finitions et réception',
        description: 'Traitement des détails, nettoyage et remise des documents de garantie.',
      },
    ],
    faq: [
      {
        question: 'Quelle épaisseur d\'isolant pour une ITE ?',
        answer: 'L\'épaisseur varie selon la performance souhaitée et les contraintes (débords de toit, limites de propriété). Généralement, on pose 12 à 18 cm d\'isolant pour atteindre une résistance thermique R ≥ 3,7 m².K/W, exigée pour les aides.',
      },
      {
        question: 'L\'ITE nécessite-t-elle une autorisation ?',
        answer: 'Oui, une déclaration préalable de travaux est obligatoire car l\'ITE modifie l\'aspect extérieur du bâtiment. Dans certaines zones protégées, un permis de construire peut être requis.',
      },
      {
        question: 'Combien de temps durent les travaux d\'ITE ?',
        answer: 'Pour une maison individuelle, comptez 2 à 4 semaines selon la surface et la complexité (nombre d\'ouvertures, étages). Les travaux se font par l\'extérieur sans perturber votre quotidien.',
      },
    ],
    seo: {
      title: 'Isolation thermique par l\'extérieur (ITE) | Façade isolée Grand Est',
      description: 'Spécialiste de l\'isolation par l\'extérieur dans le Grand Est. ITE en PSE, laine de roche ou fibre de bois. Artisans RGE certifiés. Aides MaPrimeRénov\' et CEE déduites. Devis gratuit.',
      keywords: ['isolation extérieure', 'ITE', 'isolation façade', 'isolation thermique extérieur', 'ravalement isolant', 'enduit isolant', 'artisan RGE'],
    },
    image: '/images/services/ite.webp',
  },
  {
    id: 'ravalement-facade',
    slug: 'ravalement-facade',
    title: 'Ravalement de façade',
    shortTitle: 'Ravalement',
    description: 'Redonnez vie à vos façades avec un ravalement professionnel. Nettoyage, réparation des fissures et application d\'un nouvel enduit pour protéger et embellir durablement votre habitat.',
    longDescription: `Le ravalement de façade est une opération essentielle pour préserver et valoriser votre patrimoine immobilier. Au-delà de l'aspect esthétique, il protège vos murs contre les infiltrations d'eau et les dégradations liées aux intempéries.

ISO Home Energy réalise des ravalements complets, du diagnostic initial à la finition. Nos façadiers qualifiés maîtrisent toutes les techniques : nettoyage haute pression, traitement des fissures, application d'enduits traditionnels ou modernes, peinture de façade.

Nous intervenons sur tous types de supports : enduit ciment, crépi, pierre, brique, béton. Chaque chantier fait l'objet d'une étude préalable pour choisir les produits les mieux adaptés à votre façade.`,
    icon: 'building2',
    features: [
      'Nettoyage haute pression et traitement anti-mousse',
      'Réparation des fissures et micro-fissures',
      'Rebouchage et ragréage des zones dégradées',
      'Application d\'enduits monocouches ou traditionnels',
      'Peinture de façade avec fixateur et finition',
      'Traitement hydrofuge pour une protection durable',
    ],
    benefits: [
      'Protection durable contre les intempéries',
      'Amélioration de l\'aspect esthétique',
      'Prévention des infiltrations d\'eau',
      'Valorisation du bien immobilier',
      'Mise en conformité avec les obligations légales',
      'Possibilité de combiner avec une ITE',
    ],
    process: [
      {
        step: 1,
        title: 'Diagnostic façade',
        description: 'Inspection complète pour identifier les pathologies et définir les travaux nécessaires.',
      },
      {
        step: 2,
        title: 'Devis détaillé',
        description: 'Proposition technique et financière avec planning d\'intervention.',
      },
      {
        step: 3,
        title: 'Préparation et travaux',
        description: 'Installation de l\'échafaudage, nettoyage, réparations et application des revêtements.',
      },
      {
        step: 4,
        title: 'Réception des travaux',
        description: 'Contrôle qualité final et remise du procès-verbal de réception.',
      },
    ],
    faq: [
      {
        question: 'Le ravalement de façade est-il obligatoire ?',
        answer: 'Oui, dans de nombreuses communes, le ravalement est obligatoire tous les 10 ans. Des arrêtés municipaux peuvent imposer des travaux. Renseignez-vous auprès de votre mairie.',
      },
      {
        question: 'Quelle est la durée de vie d\'un ravalement ?',
        answer: 'Un ravalement bien réalisé avec des produits de qualité dure 15 à 20 ans. L\'application d\'un traitement hydrofuge prolonge encore cette durée en protégeant la façade.',
      },
      {
        question: 'Peut-on faire un ravalement en hiver ?',
        answer: 'Les travaux de ravalement nécessitent des températures supérieures à 5°C et un temps sec. Nous planifions les chantiers en fonction des conditions météorologiques optimales.',
      },
    ],
    seo: {
      title: 'Ravalement de façade | Rénovation et nettoyage façade Grand Est',
      description: 'Entreprise de ravalement de façade dans le Grand Est. Nettoyage, réparation, enduit et peinture. Artisans qualifiés. Devis gratuit sous 48h.',
      keywords: ['ravalement façade', 'rénovation façade', 'nettoyage façade', 'enduit façade', 'peinture façade', 'crépi', 'façadier'],
    },
    image: '/images/services/ravalement.webp',
  },
  {
    id: 'menuiserie',
    slug: 'menuiserie',
    title: 'Menuiserie',
    shortTitle: 'Menuiserie',
    description: 'Fenêtres, portes et volets performants pour une isolation optimale. Nos menuiseries PVC, aluminium ou bois allient esthétique, sécurité et économies d\'énergie.',
    longDescription: `Les menuiseries représentent un poste clé de la performance énergétique de votre logement. Des fenêtres anciennes ou mal isolées peuvent être responsables de 10 à 15% des déperditions thermiques. Leur remplacement améliore significativement votre confort et réduit vos factures de chauffage.

ISO Home Energy vous propose une gamme complète de menuiseries haute performance : fenêtres et portes-fenêtres en PVC, aluminium ou bois, portes d'entrée sécurisées, volets roulants isolés. Tous nos produits sont certifiés et répondent aux exigences des aides à la rénovation.

Nos poseurs expérimentés assurent une installation soignée, garante de l'étanchéité à l'air et à l'eau. Chaque chantier fait l'objet d'une attention particulière aux finitions pour un résultat impeccable.`,
    icon: 'doorOpen',
    features: [
      'Fenêtres et portes-fenêtres PVC, alu ou bois',
      'Double ou triple vitrage à isolation renforcée',
      'Portes d\'entrée sécurisées et isolantes',
      'Volets roulants manuels ou motorisés',
      'Portes de garage sectionnelles ou enroulables',
      'Stores et protections solaires',
    ],
    benefits: [
      'Réduction des déperditions thermiques de 10 à 15%',
      'Amélioration de l\'isolation acoustique',
      'Renforcement de la sécurité du logement',
      'Modernisation de l\'esthétique de la maison',
      'Facilité d\'entretien (PVC et aluminium)',
      'Éligibilité aux aides MaPrimeRénov\' et CEE',
    ],
    process: [
      {
        step: 1,
        title: 'Prise de mesures',
        description: 'Relevé précis des dimensions et analyse des contraintes techniques.',
      },
      {
        step: 2,
        title: 'Choix des produits',
        description: 'Sélection des menuiseries selon vos besoins, budget et style architectural.',
      },
      {
        step: 3,
        title: 'Fabrication',
        description: 'Production sur mesure des menuiseries dans nos ateliers partenaires.',
      },
      {
        step: 4,
        title: 'Pose et finitions',
        description: 'Installation par nos menuisiers, réglages et nettoyage du chantier.',
      },
    ],
    faq: [
      {
        question: 'PVC, alu ou bois : quel matériau choisir ?',
        answer: 'Le PVC offre le meilleur rapport qualité/prix et un entretien minimal. L\'aluminium permet des profilés plus fins et des teintes variées. Le bois apporte chaleur et authenticité mais nécessite un entretien régulier.',
      },
      {
        question: 'Double ou triple vitrage ?',
        answer: 'Le double vitrage suffit dans la plupart des cas. Le triple vitrage est recommandé en zone très froide ou pour une maison passive. Nous vous conseillons selon votre situation géographique et vos objectifs.',
      },
      {
        question: 'Les menuiseries sont-elles éligibles aux aides ?',
        answer: 'Oui, le remplacement de fenêtres simple vitrage par du double vitrage performant est éligible à MaPrimeRénov\' et aux CEE, sous conditions de performance (Uw ≤ 1,3 W/m².K).',
      },
    ],
    seo: {
      title: 'Menuiserie | Fenêtres, portes et volets performants Grand Est',
      description: 'Installation de menuiseries PVC, alu et bois dans le Grand Est. Fenêtres, portes, volets roulants. Double et triple vitrage. Artisans certifiés RGE. Aides déduites.',
      keywords: ['menuiserie', 'fenêtres PVC', 'fenêtres alu', 'portes', 'volets roulants', 'double vitrage', 'triple vitrage', 'remplacement fenêtres'],
    },
    image: '/images/services/menuiserie.webp',
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
