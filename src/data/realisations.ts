export interface Realisation {
  id: string
  title: string
  category: string
  location: string
  description: string
  images: string[]
  date: string
}

export const realisations: Realisation[] = [
  {
    id: '1',
    title: 'Isolation thermique par l\'extérieur - Maison individuelle',
    category: 'ITE',
    location: 'Strasbourg (67)',
    description: 'Réalisation d\'une ITE complète sur une maison de 140m² avec enduit de finition gratté. Gain de 2 classes DPE.',
    images: ['/images/realisations/ite-strasbourg.webp'],
    date: '2025-01',
  },
  {
    id: '2',
    title: 'Ravalement de façade avec peinture',
    category: 'Ravalement',
    location: 'Metz (57)',
    description: 'Nettoyage complet, traitement des fissures et application d\'une peinture de façade haute qualité.',
    images: ['/images/realisations/ravalement-metz.webp'],
    date: '2024-12',
  },
  {
    id: '3',
    title: 'Remplacement menuiseries PVC',
    category: 'Menuiserie',
    location: 'Nancy (54)',
    description: 'Pose de 12 fenêtres PVC double vitrage et 2 portes-fenêtres. Amélioration confort et isolation acoustique.',
    images: ['/images/realisations/menuiserie-nancy.webp'],
    date: '2024-11',
  },
  {
    id: '4',
    title: 'Installation pompe à chaleur air-eau',
    category: 'Chauffage',
    location: 'Colmar (68)',
    description: 'Remplacement d\'une chaudière fioul par une PAC air-eau Daikin 11kW. Économies de 60% sur le chauffage.',
    images: ['/images/realisations/pac-colmar.webp'],
    date: '2024-10',
  },
  {
    id: '5',
    title: 'ITE + Ravalement complet',
    category: 'ITE',
    location: 'Mulhouse (68)',
    description: 'Isolation par l\'extérieur en laine de roche 14cm avec enduit taloché. Rénovation complète de la façade.',
    images: ['/images/realisations/ite-mulhouse.webp'],
    date: '2024-09',
  },
  {
    id: '6',
    title: 'Installation VMC double flux',
    category: 'VMC',
    location: 'Reims (51)',
    description: 'Pose d\'une VMC double flux haut rendement avec récupération de chaleur. Air sain et économies garanties.',
    images: ['/images/realisations/vmc-reims.webp'],
    date: '2024-08',
  },
  {
    id: '7',
    title: 'Menuiseries aluminium + volets roulants',
    category: 'Menuiserie',
    location: 'Troyes (10)',
    description: 'Installation de menuiseries alu gris anthracite avec volets roulants motorisés. Design moderne et performances.',
    images: ['/images/realisations/menuiserie-troyes.webp'],
    date: '2024-07',
  },
  {
    id: '8',
    title: 'Rénovation globale - Maison des années 70',
    category: 'ITE',
    location: 'Épinal (88)',
    description: 'Rénovation d\'ampleur : ITE, menuiseries, PAC et VMC. Passage de G à C sur le DPE.',
    images: ['/images/realisations/renovation-epinal.webp'],
    date: '2024-06',
  },
]

export const categories = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'ITE', label: 'Isolation extérieure' },
  { id: 'Ravalement', label: 'Ravalement' },
  { id: 'Menuiserie', label: 'Menuiserie' },
  { id: 'Chauffage', label: 'Chauffage' },
  { id: 'VMC', label: 'VMC' },
]
