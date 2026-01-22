export interface NavItem {
  label: string
  href: string
  description?: string
  icon?: string
}

export interface NavCategory {
  label: string
  href?: string
  items?: NavItem[]
}

export const mainNavigation: NavCategory[] = [
  {
    label: 'Accueil',
    href: '/',
  },
  {
    label: 'ISO HOME ENERGY',
    href: '/iso-home-energy',
    items: [
      {
        label: 'Qui sommes-nous',
        href: '/iso-home-energy#qui-sommes-nous',
        description: 'Découvrez notre entreprise et notre engagement',
      },
      {
        label: 'Notre mission',
        href: '/iso-home-energy#mission',
        description: 'Rendre la rénovation énergétique accessible à tous les Français',
      },
      {
        label: 'Nos valeurs',
        href: '/iso-home-energy#valeurs',
        description: 'Excellence, transparence et proximité client',
      },
    ],
  },
  {
    label: 'Nos Services',
    href: '/nos-services',
    items: [
      {
        label: 'Isolation des bâtiments',
        href: '/nos-services/isolation',
        description: 'Isolation thermique performante pour murs, combles et planchers',
        icon: 'home',
      },
      {
        label: 'Isolation thermique par l\'extérieur',
        href: '/nos-services/isolation-thermique-exterieur',
        description: 'ITE : isolation et rénovation de façade en une seule intervention',
        icon: 'home',
      },
      {
        label: 'Ravalement de façade',
        href: '/nos-services/ravalement-facade',
        description: 'Nettoyage, réparation et embellissement de vos façades',
        icon: 'building2',
      },
      {
        label: 'Solutions de chauffage',
        href: '/nos-services/chauffage',
        description: 'Pompes à chaleur et systèmes de chauffage nouvelle génération',
        icon: 'flame',
      },
      {
        label: 'Menuiserie',
        href: '/nos-services/menuiserie',
        description: 'Fenêtres, portes et volets pour une isolation optimale',
        icon: 'doorOpen',
      },
      {
        label: 'Chauffe-eau thermodynamique',
        href: '/nos-services/chauffe-eau',
        description: 'Production d\'eau chaude économique et écologique',
        icon: 'droplets',
      },
      {
        label: 'VMC',
        href: '/nos-services/vmc',
        description: 'Système de ventilation pour un air intérieur sain',
        icon: 'wind',
      },
    ],
  },
  {
    label: 'Les Aides',
    href: '/les-aides',
    items: [
      {
        label: 'MaPrimeRénov\'',
        href: '/les-aides/ma-prime-renov',
        description: 'L\'aide principale de l\'État pour vos travaux de rénovation',
      },
      {
        label: 'Prime CEE',
        href: '/les-aides/prime-cee',
        description: 'Certificats d\'Économies d\'Énergie versés par les fournisseurs',
      },
      {
        label: 'Coup de Pouce',
        href: '/les-aides/coup-de-pouce',
        description: 'Primes bonifiées pour le chauffage et l\'isolation',
      },
      {
        label: 'TVA Réduite 5,5%',
        href: '/les-aides/tva-reduite',
        description: 'Taux de TVA réduit sur vos travaux de rénovation énergétique',
      },
      {
        label: 'Éco-PTZ',
        href: '/les-aides/eco-ptz',
        description: 'Prêt à taux zéro jusqu\'à 50 000 € sans conditions de revenus',
      },
      {
        label: 'Prime Autoconsommation',
        href: '/les-aides/prime-autoconsommation',
        description: 'Aide financière pour votre installation photovoltaïque',
      },
      {
        label: 'Rénovation d\'Ampleur',
        href: '/les-aides/renovation-ampleur',
        description: 'Aides majorées pour les rénovations globales performantes',
      },
      {
        label: 'Prêt Action Logement',
        href: '/les-aides/pret-action-logement',
        description: 'Financement avantageux pour les salariés du privé',
      },
    ],
  },
  {
    label: 'Réalisations',
    href: '/nos-realisations',
  },
  {
    label: 'Actualités',
    href: '/actualites',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const footerNavigation = {
  services: [
    { label: 'Isolation des bâtiments', href: '/nos-services/isolation' },
    { label: 'Isolation par l\'extérieur (ITE)', href: '/nos-services/isolation-thermique-exterieur' },
    { label: 'Ravalement de façade', href: '/nos-services/ravalement-facade' },
    { label: 'Solutions de chauffage', href: '/nos-services/chauffage' },
    { label: 'Menuiserie', href: '/nos-services/menuiserie' },
    { label: 'Chauffe-eau thermodynamique', href: '/nos-services/chauffe-eau' },
    { label: 'VMC', href: '/nos-services/vmc' },
  ],
  aides: [
    { label: 'MaPrimeRénov\'', href: '/les-aides/ma-prime-renov' },
    { label: 'Prime CEE', href: '/les-aides/prime-cee' },
    { label: 'Coup de Pouce', href: '/les-aides/coup-de-pouce' },
    { label: 'Éco-PTZ', href: '/les-aides/eco-ptz' },
  ],
  company: [
    { label: 'ISO Home Energy', href: '/iso-home-energy' },
    { label: 'Nos réalisations', href: '/nos-realisations' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
  ],
}

export const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/company/ih-energy' },
  { name: 'Facebook', url: 'https://facebook.com/ihenergy' },
]
