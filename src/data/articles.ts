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
    slug: 'nouvelles-aides-2024',
    title: 'Les nouvelles aides à la rénovation énergétique en 2024',
    excerpt:
      'Découvrez les évolutions des dispositifs MaPrimeRénov\' et des primes CEE pour cette année.',
    content: `L'année 2024 marque un tournant important dans le paysage des aides à la rénovation énergétique en France. Le gouvernement a annoncé plusieurs modifications significatives aux dispositifs existants, avec pour objectif d'accélérer la transition énergétique des logements français.

## MaPrimeRénov' : des évolutions majeures

Le dispositif phare de l'État connaît plusieurs ajustements en 2024. Les plafonds de revenus ont été réévalués pour tenir compte de l'inflation, permettant à davantage de ménages d'accéder aux tranches les plus avantageuses. Les montants des primes pour certains travaux, notamment l'installation de pompes à chaleur, ont été revus à la hausse.

Une nouveauté importante : la création du parcours "rénovation d'ampleur" qui encourage les rénovations globales plutôt que les travaux isolés. Ce parcours permet d'obtenir des aides bonifiées lorsque plusieurs postes de travaux sont réalisés simultanément, avec un objectif de gain énergétique d'au moins deux classes sur le DPE.

## Prime CEE : stabilité et simplification

Les Certificats d'Économies d'Énergie (CEE) restent un pilier du financement de la rénovation énergétique. En 2024, le dispositif se stabilise après plusieurs années d'ajustements. Les montants des primes sont globalement maintenus, avec une légère hausse pour certains travaux d'isolation.

La grande nouveauté réside dans la simplification des démarches administratives. Les délais de versement ont été raccourcis et les procédures allégées pour faciliter l'accès aux aides.

## Comment maximiser vos aides ?

Pour bénéficier du maximum d'aides en 2024, plusieurs stratégies s'offrent à vous :

1. **Privilégiez les rénovations globales** : Le parcours rénovation d'ampleur offre des bonus significatifs
2. **Anticipez vos travaux** : Certaines aides sont soumises à des enveloppes budgétaires limitées
3. **Faites appel à un professionnel RGE** : Condition indispensable pour la plupart des aides
4. **Cumulez les dispositifs** : MaPrimeRénov' + CEE + TVA réduite + Éco-PTZ

## ISO Home Energy vous accompagne

Notre équipe se tient informée en permanence des évolutions réglementaires pour vous proposer les solutions les plus avantageuses. Nous réalisons gratuitement la simulation de vos aides et nous occupons de l'ensemble des démarches administratives.

Contactez-nous pour une étude personnalisée de votre projet et découvrez le montant des aides auxquelles vous avez droit.`,
    date: '2024-01-15',
    category: 'Aides',
    author: 'ISO Home Energy',
    readTime: '5 min',
    image: '/images/blog/aides-2024.webp',
    seo: {
      title: 'Nouvelles aides rénovation énergétique 2024 | MaPrimeRénov\' CEE',
      description:
        'Découvrez les évolutions des aides à la rénovation énergétique en 2024 : MaPrimeRénov\', Prime CEE, rénovation d\'ampleur. Tous les changements expliqués.',
      keywords: [
        'aides rénovation 2024',
        'MaPrimeRénov 2024',
        'prime CEE 2024',
        'rénovation énergétique',
      ],
    },
  },
  {
    id: '2',
    slug: 'pompe-a-chaleur-guide',
    title: 'Pompe à chaleur : le guide complet pour bien choisir',
    excerpt:
      'Air-eau, air-air, géothermique... Quel type de PAC pour votre logement ? Nos conseils.',
    content: `La pompe à chaleur (PAC) s'impose aujourd'hui comme la solution de chauffage la plus performante et la plus économique sur le long terme. Mais face à la diversité des modèles disponibles, comment faire le bon choix ? Ce guide vous aide à y voir plus clair.

## Les différents types de pompes à chaleur

### Pompe à chaleur air-eau

C'est le modèle le plus répandu en France. La PAC air-eau capte les calories présentes dans l'air extérieur pour chauffer l'eau du circuit de chauffage central. Elle peut alimenter des radiateurs ou un plancher chauffant.

**Avantages :**
- Compatible avec un système de chauffage existant
- Peut produire l'eau chaude sanitaire
- Bon rendement même par temps froid
- Éligible à toutes les aides

**Inconvénients :**
- Nécessite un espace extérieur pour l'unité
- Bruit de fonctionnement (à considérer pour le voisinage)

### Pompe à chaleur air-air

Aussi appelée climatisation réversible, la PAC air-air diffuse directement l'air chaud (ou froid en été) dans les pièces via des unités murales.

**Avantages :**
- Installation simple et rapide
- Fonction climatisation en été
- Coût d'achat plus accessible

**Inconvénients :**
- Ne produit pas d'eau chaude sanitaire
- Aides financières limitées
- Confort moindre qu'un chauffage central

### Pompe à chaleur géothermique

La PAC géothermique puise la chaleur dans le sol, offrant un rendement exceptionnel et constant toute l'année.

**Avantages :**
- Meilleur rendement (COP jusqu'à 5)
- Silencieuse (pas d'unité extérieure visible)
- Performance stable quelle que soit la température

**Inconvénients :**
- Coût d'installation élevé
- Travaux de terrassement importants
- Nécessite un terrain adapté

## Comment choisir la bonne puissance ?

Le dimensionnement de votre pompe à chaleur est crucial. Une PAC sous-dimensionnée ne parviendra pas à chauffer correctement votre logement, tandis qu'une PAC surdimensionnée engendrera une surconsommation et une usure prématurée.

Le calcul prend en compte :
- La surface à chauffer
- L'isolation du logement
- La zone climatique
- Vos habitudes de chauffage

Seule une étude thermique réalisée par un professionnel permet de déterminer la puissance optimale.

## Les aides financières disponibles

L'installation d'une pompe à chaleur bénéficie d'aides substantielles :

- **MaPrimeRénov'** : jusqu'à 5 000 € selon revenus
- **Prime CEE** : jusqu'à 4 000 € selon zone et revenus
- **TVA réduite** : 5,5% au lieu de 20%
- **Éco-PTZ** : financement à taux zéro

Au total, les aides peuvent couvrir 50 à 75% du coût de l'installation.

## L'expertise ISO Home Energy

Nos conseillers vous accompagnent dans le choix de la pompe à chaleur adaptée à votre situation. Nous réalisons une étude thermique complète et vous proposons un devis détaillé avec le montant exact des aides déduites.

Tous nos artisans sont certifiés RGE et nos installations bénéficient de la garantie décennale.`,
    date: '2024-01-10',
    category: 'Conseils',
    author: 'ISO Home Energy',
    readTime: '7 min',
    image: '/images/blog/pompe-chaleur-guide.webp',
    seo: {
      title: 'Guide pompe à chaleur 2024 | Air-eau, air-air, géothermique',
      description:
        'Comment choisir sa pompe à chaleur ? Comparatif air-eau, air-air, géothermique. Avantages, inconvénients, prix et aides. Guide complet.',
      keywords: [
        'pompe à chaleur',
        'PAC air eau',
        'PAC air air',
        'chauffage économique',
        'guide PAC',
      ],
    },
  },
  {
    id: '3',
    slug: 'isolation-combles-economies',
    title: 'Isolation des combles : jusqu\'à 30% d\'économies sur votre facture',
    excerpt:
      'L\'isolation des combles est le geste le plus efficace pour réduire vos dépenses énergétiques.',
    content: `L'isolation des combles représente le premier poste de déperdition thermique d'une maison. Jusqu'à 30% de la chaleur s'échappe par le toit lorsque les combles sont mal isolés. C'est pourquoi ce chantier est considéré comme prioritaire par les experts en rénovation énergétique.

## Pourquoi isoler ses combles en priorité ?

La chaleur monte naturellement et s'accumule sous la toiture. Sans isolation performante, cette chaleur traverse le plafond et se dissipe vers l'extérieur. En hiver, votre chauffage fonctionne en permanence sans jamais atteindre une température confortable. En été, la chaleur du soleil pénètre et transforme vos pièces en étuve.

Une bonne isolation des combles permet de :
- Réduire votre facture de chauffage de 25 à 30%
- Améliorer votre confort été comme hiver
- Valoriser votre bien immobilier
- Réduire votre empreinte carbone

## Combles perdus ou combles aménagés ?

### Isolation des combles perdus

Les combles perdus sont les espaces sous toiture non habitables (hauteur insuffisante, charpente encombrante). L'isolation se réalise au niveau du plancher, par soufflage ou déroulage de laine minérale.

**Technique du soufflage :**
Un isolant en flocons (laine de verre, laine de roche ou ouate de cellulose) est projeté mécaniquement sur toute la surface du plancher. Cette technique permet de couvrir parfaitement tous les recoins et d'atteindre une épaisseur homogène.

- Durée : 2 à 3 heures pour une maison standard
- Épaisseur recommandée : 30 à 40 cm (R ≥ 7)
- Coût moyen : 20 à 35 €/m²

### Isolation des combles aménagés

Lorsque les combles sont habitables ou destinés à l'être, l'isolation se fait sous les rampants de toiture. Plusieurs techniques sont possibles :

**Isolation par l'intérieur :**
Pose de panneaux ou rouleaux d'isolant entre les chevrons, puis finition avec des plaques de plâtre. Solution économique mais qui réduit légèrement le volume habitable.

**Isolation par l'extérieur (sarking) :**
L'isolant est posé sur la charpente, sous la couverture. Cette technique préserve le volume intérieur et supprime tous les ponts thermiques. Plus coûteuse, elle est idéale lors d'une réfection de toiture.

## Quel isolant choisir ?

| Isolant | Performance | Avantages | Prix |
|---------|------------|-----------|------|
| Laine de verre | R = 2,5/10 cm | Économique, bon rapport qualité-prix | € |
| Laine de roche | R = 2,5/10 cm | Résistante au feu, bonne acoustique | €€ |
| Ouate de cellulose | R = 2,5/10 cm | Écologique, bon confort d'été | €€ |
| Polyuréthane | R = 4/10 cm | Très performant, faible épaisseur | €€€ |

## Les aides pour l'isolation des combles

L'isolation des combles bénéficie d'un financement avantageux :

- **MaPrimeRénov'** : jusqu'à 25 €/m² selon revenus
- **Prime CEE** : jusqu'à 12 €/m²
- **TVA 5,5%** : applicable sur l'ensemble du devis
- **Éco-PTZ** : pour financer le reste à charge

Pour les ménages aux revenus modestes, le reste à charge peut être quasi nul grâce au cumul des aides.

## Notre engagement qualité

ISO Home Energy travaille exclusivement avec des isolants certifiés et des artisans qualifiés RGE. Nous garantissons une mise en œuvre conforme aux règles de l'art, avec une attention particulière portée à l'étanchéité à l'air et au traitement des ponts thermiques.

Chaque chantier fait l'objet d'un contrôle qualité et vous recevez une attestation de fin de travaux indispensable pour l'obtention des aides.`,
    date: '2024-01-05',
    category: 'Isolation',
    author: 'ISO Home Energy',
    readTime: '6 min',
    image: '/images/blog/isolation-combles.webp',
    seo: {
      title: 'Isolation combles : économies, techniques et aides 2024',
      description:
        'Tout savoir sur l\'isolation des combles : techniques, isolants, prix et aides financières. Jusqu\'à 30% d\'économies sur votre facture de chauffage.',
      keywords: [
        'isolation combles',
        'isolation thermique',
        'économies énergie',
        'laine de verre',
        'combles perdus',
      ],
    },
  },
  {
    id: '4',
    slug: 'dpe-obligatoire-location',
    title: 'DPE et location : ce qui change pour les propriétaires bailleurs',
    excerpt:
      'Les passoires thermiques progressivement interdites à la location. Calendrier et solutions.',
    content: `La loi Climat et Résilience impose un calendrier strict pour l'amélioration de la performance énergétique des logements mis en location. Les propriétaires bailleurs doivent anticiper ces échéances pour éviter de se retrouver dans l'impossibilité de louer leur bien.

## Le calendrier des interdictions

Le gouvernement a fixé des échéances progressives basées sur le classement DPE (Diagnostic de Performance Énergétique) :

- **2025** : Interdiction de louer les logements classés G
- **2028** : Interdiction étendue aux logements classés F
- **2034** : Interdiction étendue aux logements classés E

À ces dates, les logements concernés seront considérés comme "indécents" au sens de la loi et ne pourront plus faire l'objet d'un nouveau bail ni d'un renouvellement.

## Qu'est-ce qu'une passoire thermique ?

Un logement est qualifié de "passoire thermique" ou "passoire énergétique" lorsqu'il est classé F ou G sur le DPE. Cela correspond à une consommation énergétique supérieure à 330 kWh/m²/an.

Ces logements présentent généralement :
- Une isolation insuffisante ou inexistante
- Des fenêtres simple vitrage
- Un système de chauffage ancien et énergivore
- Des problèmes d'étanchéité à l'air

## Les conséquences pour les propriétaires

### Gel des loyers
Depuis août 2022, les propriétaires de logements classés F ou G ne peuvent plus augmenter le loyer, même lors d'un changement de locataire ou d'un renouvellement de bail.

### Interdiction de location
À partir des dates mentionnées, le logement ne pourra plus être proposé à la location. Le propriétaire devra soit :
- Réaliser des travaux de rénovation énergétique
- Vendre le bien
- Le retirer du marché locatif

### Dévalorisation du patrimoine
Les passoires thermiques subissent déjà une décote significative sur le marché immobilier, pouvant atteindre 15 à 20% par rapport à un bien équivalent bien isolé.

## Les solutions de rénovation

Pour sortir du statut de passoire thermique, plusieurs travaux sont à envisager :

### 1. L'isolation thermique
- Combles : gain de 1 à 2 classes DPE
- Murs : gain de 1 à 2 classes DPE
- Planchers bas : gain modéré mais complémentaire

### 2. Le changement de chauffage
Le remplacement d'une chaudière fioul ou gaz ancienne par une pompe à chaleur peut faire gagner 1 à 2 classes DPE.

### 3. La ventilation
L'installation d'une VMC améliore la qualité de l'air et participe à l'efficacité énergétique globale.

### 4. Les menuiseries
Le remplacement des fenêtres simple vitrage par du double ou triple vitrage améliore le confort et réduit les déperditions.

## Les aides spécifiques aux bailleurs

Les propriétaires bailleurs ont accès à des aides adaptées :

- **MaPrimeRénov' Bailleurs** : montants identiques aux propriétaires occupants
- **Loc'Avantages** : réduction d'impôt en contrepartie d'un loyer modéré
- **Déficit foncier** : déduction des travaux des revenus fonciers
- **Prime CEE** : accessible sans condition de statut

## Anticipez avec ISO Home Energy

N'attendez pas les échéances réglementaires pour agir. Plus vous anticipez, plus vous avez de choix dans les solutions et les artisans disponibles.

Notre équipe réalise un audit énergétique complet de votre bien locatif et vous propose un plan de travaux hiérarchisé pour atteindre la classe énergétique souhaitée au meilleur coût.`,
    date: '2024-01-02',
    category: 'Réglementation',
    author: 'ISO Home Energy',
    readTime: '6 min',
    image: '/images/blog/dpe-location.webp',
    seo: {
      title: 'DPE location 2024 : calendrier interdictions et solutions',
      description:
        'Passoires thermiques interdites à la location : calendrier 2025-2034, conséquences pour les bailleurs et solutions de rénovation énergétique.',
      keywords: [
        'DPE location',
        'passoire thermique',
        'interdiction location',
        'rénovation bailleur',
        'loi climat',
      ],
    },
  },
  {
    id: '5',
    slug: 'panneaux-solaires-autoconsommation',
    title: 'Panneaux solaires : l\'autoconsommation, un investissement rentable',
    excerpt:
      'Produire sa propre électricité avec le photovoltaïque : fonctionnement, rentabilité et aides.',
    content: `Face à la hausse continue des prix de l'électricité, l'autoconsommation photovoltaïque séduit de plus en plus de particuliers. Produire sa propre électricité permet de réduire significativement sa facture tout en participant à la transition énergétique.

## Comment fonctionne l'autoconsommation ?

L'autoconsommation consiste à consommer directement l'électricité produite par vos panneaux solaires. Le principe est simple :

1. Les panneaux captent l'énergie solaire et la convertissent en électricité
2. Un onduleur transforme le courant continu en courant alternatif utilisable
3. L'électricité alimente en priorité vos appareils en fonctionnement
4. Le surplus est soit injecté sur le réseau (avec revente), soit stocké dans une batterie

En moyenne, un foyer autoconsomme entre 30 et 50% de sa production. Ce taux peut atteindre 70 à 80% avec une batterie de stockage.

## Quelle rentabilité espérer ?

### Coût d'installation
Pour une installation de 3 kWc (environ 8 panneaux), comptez entre 7 000 et 10 000 € TTC, aides déduites. Ce dimensionnement convient à la plupart des maisons individuelles.

### Économies réalisées
Avec un prix de l'électricité à 0,25 €/kWh, une installation de 3 kWc permet d'économiser environ 400 à 600 €/an en autoconsommation. La revente du surplus (à 0,13 €/kWh) génère un complément de 100 à 200 €/an.

### Temps de retour sur investissement
En tenant compte des aides et de l'augmentation prévisible des tarifs de l'électricité, le temps de retour sur investissement se situe entre 8 et 12 ans. Les panneaux ayant une durée de vie de 25 à 30 ans, la rentabilité est assurée sur le long terme.

## Les aides à l'installation photovoltaïque

### Prime à l'autoconsommation
L'État verse une prime dégressive sur 5 ans pour les installations en autoconsommation avec vente du surplus :
- Installation ≤ 3 kWc : 370 €/kWc
- Installation de 3 à 9 kWc : 280 €/kWc
- Installation de 9 à 36 kWc : 200 €/kWc

### Obligation d'achat
EDF OA (Obligation d'Achat) rachète votre surplus de production à un tarif garanti pendant 20 ans.

### TVA réduite
Les installations de moins de 3 kWc bénéficient d'une TVA à 10% au lieu de 20%.

### Exonération d'impôt
Les revenus de la vente d'électricité sont exonérés d'impôt pour les installations de moins de 3 kWc.

## Les critères d'une bonne installation

### L'orientation
L'idéal est une orientation plein sud avec une inclinaison de 30 à 35°. Les orientations sud-est ou sud-ouest restent très performantes (90% du rendement optimal).

### L'absence d'ombrage
Même partiel, l'ombrage réduit significativement la production. Attention aux arbres, cheminées et bâtiments voisins.

### La qualité du matériel
Privilégiez des panneaux de marques reconnues (garantie 25 ans) et des onduleurs fiables (garantie 10 à 20 ans).

### L'installateur RGE
Seule une installation réalisée par un professionnel QualiPV (RGE) ouvre droit aux aides et garantit une mise en œuvre dans les règles de l'art.

## ISO Home Energy, votre partenaire photovoltaïque

Notre équipe vous accompagne de l'étude de faisabilité à la mise en service :

- Analyse de votre toiture et de votre consommation
- Dimensionnement optimal de l'installation
- Démarches administratives (mairie, Enedis, EDF OA)
- Installation par artisans certifiés QualiPV
- Suivi de production et maintenance

Demandez votre étude gratuite et découvrez le potentiel solaire de votre toiture.`,
    date: '2023-12-20',
    category: 'Photovoltaïque',
    author: 'ISO Home Energy',
    readTime: '7 min',
    image: '/images/blog/panneaux-solaires.webp',
    seo: {
      title: 'Panneaux solaires autoconsommation : rentabilité et aides 2024',
      description:
        'Installer des panneaux solaires en autoconsommation : fonctionnement, rentabilité, aides financières. Guide complet pour votre projet photovoltaïque.',
      keywords: [
        'panneaux solaires',
        'autoconsommation',
        'photovoltaïque',
        'prime solaire',
        'électricité verte',
      ],
    },
  },
]
