export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  author: string
  readTime: string
  image?: string
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'aides-renovation-2025',
    title: 'Les aides à la rénovation énergétique en 2025 : ce qui change',
    excerpt:
      'Découvrez les évolutions des dispositifs MaPrimeRénov\' et des primes CEE pour 2025.',
    content: `L'année 2025 apporte son lot de nouveautés dans le paysage des aides à la rénovation énergétique. Le gouvernement ajuste les dispositifs pour accélérer la transition énergétique du parc immobilier français.

## MaPrimeRénov' : les évolutions 2025

Le dispositif phare connaît plusieurs ajustements significatifs cette année. Les plafonds de revenus ont été réévalués pour permettre à davantage de ménages d'accéder aux tranches les plus avantageuses.

Le parcours "rénovation d'ampleur" est désormais privilégié par le gouvernement. Ce parcours encourage les rénovations globales avec un objectif de gain d'au moins deux classes sur le DPE. Les bonus peuvent atteindre jusqu'à 90% du coût des travaux pour les ménages les plus modestes.

### Les montants pour les travaux courants :
- **Isolation des murs par l'extérieur** : jusqu'à 75 €/m²
- **Isolation des combles** : jusqu'à 25 €/m²
- **Pompe à chaleur air-eau** : jusqu'à 5 000 €
- **Menuiseries** : jusqu'à 100 € par fenêtre

## Prime CEE : stabilité et simplification

Les Certificats d'Économies d'Énergie restent un pilier du financement. En 2025, les montants sont globalement maintenus avec une légère hausse pour l'isolation thermique par l'extérieur.

La grande nouveauté : la simplification des démarches. Les délais de versement sont raccourcis et les procédures allégées.

## Comment maximiser vos aides ?

1. **Privilégiez les rénovations globales** : Le parcours ampleur offre des bonus significatifs
2. **Faites appel à un professionnel RGE** : Condition indispensable pour les aides
3. **Cumulez les dispositifs** : MaPrimeRénov' + CEE + TVA réduite + Éco-PTZ

## ISO Home Energy vous accompagne

Notre équipe se tient informée des évolutions réglementaires pour vous proposer les solutions les plus avantageuses. Nous réalisons gratuitement la simulation de vos aides et nous occupons des démarches administratives.

Contactez-nous pour une étude personnalisée de votre projet.`,
    date: '2025-01-15',
    category: 'Aides',
    author: 'ISO Home Energy',
    readTime: '5 min',
    image: '/images/blog/aides-2025.webp',
    seo: {
      title: 'Aides rénovation énergétique 2025 | MaPrimeRénov\' CEE Grand Est',
      description:
        'Découvrez les aides à la rénovation énergétique en 2025 : MaPrimeRénov\', Prime CEE, rénovation d\'ampleur. Tous les changements expliqués.',
      keywords: [
        'aides rénovation 2025',
        'MaPrimeRénov 2025',
        'prime CEE 2025',
        'rénovation énergétique Grand Est',
      ],
    },
  },
  {
    id: '2',
    slug: 'isolation-thermique-exterieur-guide',
    title: 'Isolation thermique par l\'extérieur (ITE) : le guide complet',
    excerpt:
      'L\'ITE est la technique la plus performante pour isoler votre maison. Découvrez ses avantages.',
    content: `L'isolation thermique par l'extérieur (ITE) s'impose comme la solution la plus efficace pour améliorer la performance énergétique de votre habitation. En enveloppant vos murs d'un manteau isolant, vous supprimez les ponts thermiques et transformez l'aspect de votre façade.

## Qu'est-ce que l'ITE ?

L'ITE consiste à poser un isolant sur la face extérieure des murs, recouvert d'un enduit de finition ou d'un bardage. Contrairement à l'isolation par l'intérieur, cette technique préserve la surface habitable et l'inertie thermique des murs.

## Les avantages de l'ITE

### Performance thermique optimale
L'ITE supprime tous les ponts thermiques au niveau des planchers et des cloisons. Le résultat : une isolation continue et homogène sur toute l'enveloppe du bâtiment.

### Rénovation esthétique
En plus d'isoler, l'ITE offre l'opportunité de ravaler votre façade. Large choix de finitions : enduits grattés, talochés, ribbés, ou bardage bois/composite.

### Confort été comme hiver
Les murs conservent leur masse thermique, régulant naturellement la température intérieure. Fini les murs froids en hiver et la surchauffe en été.

### Pas de perte de surface habitable
L'isolation se fait par l'extérieur, vous conservez 100% de votre surface intérieure.

## Les techniques d'ITE

### ITE sous enduit
La plus répandue. L'isolant (PSE, laine de roche ou fibre de bois) est collé et/ou fixé mécaniquement sur le mur, puis recouvert d'un enduit armé et d'une finition.

### ITE sous bardage
L'isolant est posé dans une ossature, recouverte d'un bardage ventilé (bois, composite, métal). Solution idéale pour les bâtiments irréguliers.

## Les aides financières

L'ITE bénéficie d'aides substantielles :
- **MaPrimeRénov'** : jusqu'à 75 €/m²
- **Prime CEE** : jusqu'à 12 €/m²
- **TVA réduite** : 5,5%
- **Éco-PTZ** : jusqu'à 50 000 €

Au total, les aides peuvent couvrir 50 à 75% du coût des travaux.

## L'expertise ISO Home Energy

Nos façadiers qualifiés réalisent des ITE de qualité depuis plus de 10 ans dans le Grand Est. Nous maîtrisons toutes les techniques et tous les types d'isolants. Chaque chantier fait l'objet d'une étude personnalisée pour vous proposer la solution optimale.`,
    date: '2025-01-10',
    category: 'Isolation',
    author: 'ISO Home Energy',
    readTime: '6 min',
    image: '/images/blog/ite-guide.webp',
    seo: {
      title: 'Isolation thermique par l\'extérieur (ITE) | Guide complet 2025',
      description:
        'Tout savoir sur l\'ITE : techniques, avantages, prix et aides. L\'isolation par l\'extérieur pour une maison performante.',
      keywords: [
        'isolation thermique extérieur',
        'ITE',
        'isolation façade',
        'enduit isolant',
        'ravalement isolant',
      ],
    },
  },
  {
    id: '3',
    slug: 'ravalement-facade-quand-comment',
    title: 'Ravalement de façade : quand et comment le réaliser ?',
    excerpt:
      'Le ravalement est une obligation légale dans de nombreuses communes. Tout ce qu\'il faut savoir.',
    content: `Le ravalement de façade est une opération essentielle pour préserver et valoriser votre patrimoine immobilier. Au-delà de l'aspect esthétique, il protège vos murs contre les intempéries et peut même devenir une opportunité d'améliorer l'isolation de votre maison.

## Pourquoi ravaler sa façade ?

### Protection du bâti
Les façades sont exposées aux agressions climatiques : pluie, gel, UV, pollution. Sans entretien, les micro-fissures s'agrandissent, l'eau s'infiltre et les dégâts s'aggravent.

### Obligation légale
Dans de nombreuses communes, le ravalement est obligatoire tous les 10 ans. Des arrêtés municipaux peuvent imposer des travaux si votre façade est dégradée.

### Valorisation du bien
Une façade propre et en bon état augmente la valeur de votre bien et facilite sa vente ou sa location.

## Les étapes d'un ravalement réussi

### 1. Diagnostic préalable
Notre façadier inspecte l'état du support : nature des matériaux, type de pathologies (fissures, décollements, mousses, efflorescences).

### 2. Préparation du support
- Nettoyage haute pression
- Traitement anti-mousse et anti-algues
- Brossage et élimination des parties non adhérentes
- Rebouchage des fissures et trous

### 3. Application du revêtement
Selon l'état et vos souhaits :
- **Peinture de façade** : solution économique, large choix de couleurs
- **Enduit monocouche** : protection durable, aspect traditionnel
- **Enduit à la chaux** : pour les bâtis anciens, respirant
- **RPE (Revêtement Plastique Épais)** : imperméabilisant, souple

### 4. Finitions
Traitement des points singuliers : encadrements de fenêtres, soubassements, corniches.

## Ravalement et isolation : le duo gagnant

Profitez du ravalement pour isoler par l'extérieur ! L'ITE transforme votre façade tout en améliorant drastiquement la performance énergétique. Les aides disponibles rendent cette option très attractive.

## Le coût d'un ravalement

Les prix varient selon l'état du support et le revêtement choisi :
- Nettoyage simple + peinture : 30 à 50 €/m²
- Ravalement complet avec enduit : 50 à 80 €/m²
- Ravalement + ITE : 120 à 200 €/m²

## Faites confiance à ISO Home Energy

Nos équipes réalisent des ravalements de qualité dans tout le Grand Est. Du diagnostic à la réception des travaux, nous assurons un suivi rigoureux pour un résultat impeccable et durable.`,
    date: '2025-01-05',
    category: 'Façade',
    author: 'ISO Home Energy',
    readTime: '5 min',
    image: '/images/blog/ravalement-facade.webp',
    seo: {
      title: 'Ravalement de façade : guide complet | Obligation et prix',
      description:
        'Tout savoir sur le ravalement de façade : obligation légale, techniques, prix et possibilité de combiner avec l\'isolation.',
      keywords: [
        'ravalement façade',
        'rénovation façade',
        'enduit façade',
        'nettoyage façade',
        'obligation ravalement',
      ],
    },
  },
  {
    id: '4',
    slug: 'menuiseries-economies-energie',
    title: 'Menuiseries et économies d\'énergie : bien choisir ses fenêtres',
    excerpt:
      'Les fenêtres peuvent représenter jusqu\'à 15% des déperditions thermiques. Comment bien les choisir ?',
    content: `Le remplacement des menuiseries est un investissement rentable pour améliorer le confort et réduire les factures d'énergie. Fenêtres, portes et volets performants sont essentiels dans une démarche de rénovation énergétique globale.

## L'impact des menuiseries sur la performance énergétique

Des fenêtres anciennes ou en simple vitrage peuvent représenter 10 à 15% des déperditions thermiques d'un logement. Au-delà des pertes par le vitrage, les défauts d'étanchéité au niveau des joints et des ouvrants créent des courants d'air inconfortables.

## Les critères de performance

### Le coefficient Uw
Il mesure la déperdition thermique de la fenêtre (cadre + vitrage). Plus il est bas, meilleure est l'isolation. Pour bénéficier des aides, le Uw doit être ≤ 1,3 W/m².K.

### Le facteur solaire Sw
Il indique la quantité de chaleur solaire transmise à travers le vitrage. Un Sw élevé est souhaitable au sud pour profiter des apports solaires gratuits en hiver.

### L'affaiblissement acoustique
Exprimé en décibels (dB), il mesure la capacité à réduire les bruits extérieurs. Important si vous êtes en zone bruyante.

## PVC, aluminium ou bois ?

### Fenêtres PVC
- **Avantages** : Excellent rapport qualité-prix, très bonne isolation, entretien minimal
- **Inconvénients** : Choix de couleurs limité, moins durable que l'alu
- **Prix** : 300 à 600 € par fenêtre

### Fenêtres aluminium
- **Avantages** : Design moderne, profilés fins, large palette de couleurs, très durable
- **Inconvénients** : Prix plus élevé, isolation légèrement inférieure (avec rupture de pont thermique)
- **Prix** : 500 à 900 € par fenêtre

### Fenêtres bois
- **Avantages** : Esthétique chaleureuse, excellente isolation, matériau écologique
- **Inconvénients** : Entretien régulier (lasure tous les 5-10 ans)
- **Prix** : 400 à 800 € par fenêtre

## Double ou triple vitrage ?

Le **double vitrage** (4/16/4 avec argon) offre d'excellentes performances pour la plupart des situations. Uw de 1,1 à 1,3.

Le **triple vitrage** (4/12/4/12/4) est recommandé pour :
- Les maisons passives ou BBC
- Les régions très froides
- Les orientations nord peu ensoleillées

Il offre un Uw de 0,6 à 0,8 mais réduit les apports solaires.

## Les aides disponibles

Le remplacement de fenêtres simple vitrage par du double vitrage performant est éligible aux aides :
- **MaPrimeRénov'** : jusqu'à 100 € par fenêtre
- **Prime CEE** : jusqu'à 50 € par fenêtre
- **TVA 5,5%**

## ISO Home Energy, votre menuisier de confiance

Nous proposons une gamme complète de menuiseries haute performance : fenêtres, portes-fenêtres, portes d'entrée, volets roulants. Nos poseurs expérimentés garantissent une installation soignée pour une étanchéité parfaite.`,
    date: '2024-12-20',
    category: 'Menuiserie',
    author: 'ISO Home Energy',
    readTime: '6 min',
    image: '/images/blog/menuiseries.webp',
    seo: {
      title: 'Fenêtres et économies d\'énergie | Guide menuiseries 2025',
      description:
        'Comment choisir ses fenêtres pour économiser l\'énergie ? PVC, alu, bois, double ou triple vitrage. Guide complet avec prix et aides.',
      keywords: [
        'fenêtres PVC',
        'menuiseries',
        'double vitrage',
        'isolation fenêtres',
        'remplacement fenêtres',
      ],
    },
  },
  {
    id: '5',
    slug: 'dpe-location-2025',
    title: 'DPE et location : les échéances 2025 pour les propriétaires bailleurs',
    excerpt:
      'Les logements classés G sont interdits à la location depuis janvier 2025. Que faire ?',
    content: `Depuis le 1er janvier 2025, les logements classés G au DPE sont interdits à la location. Cette mesure impacte des milliers de propriétaires bailleurs qui doivent agir rapidement pour mettre leur bien en conformité.

## Le calendrier des interdictions

La loi Climat et Résilience impose un calendrier strict :

- **2025** : Interdiction des logements classés G
- **2028** : Interdiction étendue aux logements classés F
- **2034** : Interdiction étendue aux logements classés E

Les logements concernés sont considérés comme "indécents" et ne peuvent plus faire l'objet d'un nouveau bail.

## Qu'est-ce qu'une passoire thermique ?

Un logement est qualifié de passoire thermique lorsqu'il est classé F ou G, soit une consommation supérieure à 330 kWh/m²/an. Ces logements présentent généralement :
- Une isolation insuffisante
- Des fenêtres simple vitrage
- Un chauffage ancien et énergivore

## Les conséquences pour les bailleurs

### Gel des loyers
Les propriétaires de logements F ou G ne peuvent plus augmenter les loyers.

### Interdiction de location
Le logement ne peut plus être proposé à la location aux échéances mentionnées.

### Dévalorisation du patrimoine
Les passoires thermiques subissent une décote de 15 à 20% sur le marché immobilier.

## Les solutions pour sortir de la passoire

### L'isolation thermique
- **ITE** : gain de 2 à 3 classes DPE possible
- **Combles** : gain de 1 à 2 classes
- **Menuiseries** : amélioration du confort et des performances

### Le changement de chauffage
Une pompe à chaleur peut faire gagner 1 à 2 classes DPE par rapport à un chauffage électrique ou une vieille chaudière.

### La rénovation globale
Combiner plusieurs postes de travaux dans un parcours MaPrimeRénov' Ampleur permet d'atteindre les meilleures performances avec des aides maximisées.

## Les aides spécifiques aux bailleurs

- **MaPrimeRénov' Bailleurs** : mêmes montants que les propriétaires occupants
- **Déficit foncier** : déduction des travaux des revenus fonciers
- **Prime CEE** : accessible sans condition

## Agissez maintenant avec ISO Home Energy

N'attendez pas les échéances pour agir. Notre équipe réalise un audit énergétique de votre bien locatif et propose un plan de travaux pour atteindre la classe énergétique souhaitée au meilleur coût.`,
    date: '2025-01-08',
    category: 'Réglementation',
    author: 'ISO Home Energy',
    readTime: '5 min',
    image: '/images/blog/dpe-2025.webp',
    seo: {
      title: 'DPE location 2025 : interdiction logements G | Solutions',
      description:
        'Logements G interdits à la location en 2025. Calendrier, conséquences et solutions de rénovation pour les propriétaires bailleurs.',
      keywords: [
        'DPE location 2025',
        'passoire thermique',
        'interdiction location G',
        'rénovation bailleur',
        'classe énergétique',
      ],
    },
  },
]
