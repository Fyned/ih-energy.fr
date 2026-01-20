export interface Aide {
  id: string
  slug: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  icon: string
  amount?: string
  eligibility: string[]
  documents: string[]
  steps: {
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
}

// Sıralama: MaPrimeRénov' en başta (müşteri isteği)
export const aides: Aide[] = [
  {
    id: 'ma-prime-renov',
    slug: 'ma-prime-renov',
    title: 'MaPrimeRénov\'',
    shortTitle: 'MaPrimeRénov\'',
    description: 'MaPrimeRénov\' est le dispositif principal de l\'État français pour soutenir la rénovation énergétique des logements. Cette aide s\'adapte aux revenus de chaque foyer et peut couvrir jusqu\'à 90% du montant des travaux.',
    longDescription: `MaPrimeRénov' est née de la fusion du crédit d'impôt pour la transition énergétique (CITE) et des aides de l'ANAH. Accessible à tous les propriétaires depuis 2021, elle constitue aujourd'hui le pilier central du financement de la rénovation énergétique en France.

Le montant de l'aide varie selon deux critères : les revenus du foyer et le type de travaux réalisés. Quatre catégories de revenus sont définies (bleu, jaune, violet, rose), avec des plafonds différents selon la zone géographique.

ISO Home Energy prend en charge l'intégralité du montage de votre dossier MaPrimeRénov'. Nous réalisons la simulation de vos droits, constituons le dossier de demande et assurons le suivi jusqu'au versement de la prime.`,
    icon: 'home',
    amount: 'Jusqu\'à 90% des travaux selon revenus',
    eligibility: [
      'Propriétaires occupants ou bailleurs',
      'Logement construit depuis plus de 15 ans (2 ans pour changement de chauffage)',
      'Logement utilisé comme résidence principale',
      'Travaux réalisés par un artisan certifié RGE',
      'Montant selon revenus du foyer fiscal',
    ],
    documents: [
      'Dernier avis d\'imposition',
      'Justificatif de propriété (taxe foncière)',
      'Devis des travaux envisagés',
      'Photos de l\'état actuel du logement',
      'Plan ou croquis du logement',
    ],
    steps: [
      {
        step: 1,
        title: 'Création du compte',
        description: 'Inscription sur le site maprimerenov.gouv.fr avec vos informations personnelles.',
      },
      {
        step: 2,
        title: 'Dépôt de la demande',
        description: 'Envoi du devis et des justificatifs avant le début des travaux.',
      },
      {
        step: 3,
        title: 'Accord de l\'ANAH',
        description: 'Réception de la notification d\'accord et du montant de la prime.',
      },
      {
        step: 4,
        title: 'Réalisation des travaux',
        description: 'Intervention de l\'artisan RGE et paiement de la facture.',
      },
      {
        step: 5,
        title: 'Versement de la prime',
        description: 'Envoi de la facture et versement sous 2 à 4 semaines.',
      },
    ],
    faq: [
      {
        question: 'MaPrimeRénov\' est-elle cumulable avec d\'autres aides ?',
        answer: 'Oui, MaPrimeRénov\' est cumulable avec les primes CEE, l\'éco-PTZ, la TVA réduite et les aides locales. Le cumul permet souvent de financer jusqu\'à 90% du montant des travaux pour les ménages modestes.',
      },
      {
        question: 'Quel est le délai pour recevoir MaPrimeRénov\' ?',
        answer: 'Après envoi de la facture acquittée, le versement intervient généralement sous 2 à 4 semaines. Le délai total, de la demande au versement, est d\'environ 3 à 4 mois.',
      },
      {
        question: 'Faut-il avancer l\'argent des travaux ?',
        answer: 'Oui, dans la plupart des cas. Cependant, ISO Home Energy peut déduire directement les aides CEE de votre devis, réduisant ainsi le montant à avancer.',
      },
    ],
    seo: {
      title: 'MaPrimeRénov\' 2024 | Conditions, montants et simulation',
      description: 'Tout savoir sur MaPrimeRénov\' : conditions d\'éligibilité, montants par type de travaux, démarches. ISO Home Energy gère votre dossier de A à Z. Simulation gratuite.',
      keywords: ['MaPrimeRénov', 'aide rénovation énergétique', 'prime État', 'ANAH', 'aide travaux', 'subvention isolation', 'prime chauffage'],
    },
  },
  {
    id: 'prime-cee',
    slug: 'prime-cee',
    title: 'Prime CEE - Certificats d\'Économies d\'Énergie',
    shortTitle: 'Prime CEE',
    description: 'Les fournisseurs d\'énergie sont obligés par l\'État de financer des travaux de rénovation énergétique chez les particuliers. Cette obligation se traduit par le versement de primes CEE, accessibles à tous sans conditions de revenus.',
    longDescription: `Le dispositif des Certificats d'Économies d'Énergie (CEE) a été créé par la loi POPE en 2005. Il impose aux fournisseurs d'énergie (EDF, Engie, Total...) de réaliser ou de financer des économies d'énergie chez les consommateurs.

Concrètement, ces entreprises proposent des primes aux particuliers qui réalisent des travaux d'efficacité énergétique. Le montant dépend du type de travaux, de la zone géographique et parfois des revenus du ménage (primes bonifiées).

L'avantage majeur des primes CEE : elles sont versées sans condition de revenus et sont cumulables avec MaPrimeRénov'. ISO Home Energy vous permet de bénéficier de ces primes en les déduisant directement de votre devis.`,
    icon: 'award',
    amount: 'Variable selon les travaux et la zone',
    eligibility: [
      'Tous les propriétaires et locataires',
      'Logement achevé depuis plus de 2 ans',
      'Travaux réalisés par un professionnel RGE',
      'Aucune condition de revenus',
      'Engagement avant signature du devis',
    ],
    documents: [
      'Attestation sur l\'honneur (fournie par ISO Home Energy)',
      'Copie du devis signé',
      'Facture des travaux',
      'Justificatif de domicile',
    ],
    steps: [
      {
        step: 1,
        title: 'Simulation',
        description: 'Calcul du montant de la prime selon vos travaux et votre situation.',
      },
      {
        step: 2,
        title: 'Engagement',
        description: 'Signature de l\'attestation sur l\'honneur AVANT le devis.',
      },
      {
        step: 3,
        title: 'Travaux',
        description: 'Réalisation des travaux par nos artisans RGE.',
      },
      {
        step: 4,
        title: 'Versement',
        description: 'Prime déduite du devis ou versée après travaux.',
      },
    ],
    faq: [
      {
        question: 'Quelle différence entre CEE et CEE bonifiés ?',
        answer: 'Les CEE standards sont accessibles à tous. Les CEE bonifiés (ou "Coup de Pouce") offrent des montants plus élevés pour certains travaux prioritaires ou pour les ménages modestes.',
      },
      {
        question: 'Peut-on choisir son fournisseur de CEE ?',
        answer: 'ISO Home Energy travaille avec plusieurs partenaires obligés pour vous obtenir les meilleures primes. Nous comparons les offres et choisissons la plus avantageuse pour vous.',
      },
      {
        question: 'Combien de temps pour recevoir la prime CEE ?',
        answer: 'Avec ISO Home Energy, la prime est généralement déduite directement de votre facture. Si elle est versée après travaux, comptez 4 à 8 semaines après réception du dossier complet.',
      },
    ],
    seo: {
      title: 'Prime CEE | Certificats d\'Économies d\'Énergie - Conditions et montants',
      description: 'Prime CEE : comment en bénéficier pour vos travaux de rénovation énergétique. Aucune condition de revenus, cumulable avec MaPrimeRénov\'. Prime déduite directement de votre devis.',
      keywords: ['prime CEE', 'certificat économie énergie', 'aide rénovation', 'prime énergie', 'prime travaux', 'obligé CEE'],
    },
  },
  {
    id: 'coup-de-pouce',
    slug: 'coup-de-pouce',
    title: 'Prime Coup de Pouce',
    shortTitle: 'Coup de Pouce',
    description: 'Les primes Coup de Pouce sont des aides bonifiées versées dans le cadre des CEE pour encourager certains travaux prioritaires : remplacement d\'une chaudière au fioul ou au gaz, isolation des combles et des planchers.',
    longDescription: `Le dispositif Coup de Pouce a été lancé en 2019 pour accélérer la rénovation énergétique des logements français. Il offre des primes significativement plus élevées que les CEE standards pour deux types de travaux considérés comme prioritaires.

Le "Coup de Pouce Chauffage" permet de bénéficier d'une aide importante pour remplacer une chaudière au fioul, au gaz ou au charbon par un système de chauffage performant (pompe à chaleur, chaudière biomasse...).

Le "Coup de Pouce Isolation" finance l'isolation des combles, des toitures et des planchers bas à des tarifs très avantageux. Ces primes sont majorées pour les ménages aux revenus modestes.`,
    icon: 'zap',
    amount: 'Primes bonifiées selon travaux et revenus',
    eligibility: [
      'Tous les ménages français',
      'Remplacement d\'une chaudière fioul, gaz ou charbon',
      'Isolation des combles, toitures ou planchers bas',
      'Travaux réalisés par un professionnel RGE',
      'Engagement avant acceptation du devis',
    ],
    documents: [
      'Attestation sur l\'honneur',
      'Facture de l\'ancien équipement (pour le chauffage)',
      'Devis détaillé des travaux',
      'Avis d\'imposition (pour les primes bonifiées)',
    ],
    steps: [
      {
        step: 1,
        title: 'Vérification de l\'éligibilité',
        description: 'Contrôle de l\'ancien équipement ou de la zone à isoler.',
      },
      {
        step: 2,
        title: 'Engagement Coup de Pouce',
        description: 'Signature des documents AVANT le devis de travaux.',
      },
      {
        step: 3,
        title: 'Réalisation des travaux',
        description: 'Intervention certifiée avec dépose de l\'ancien équipement.',
      },
      {
        step: 4,
        title: 'Versement de la prime',
        description: 'Déduite du devis ou versée sous 4 à 8 semaines.',
      },
    ],
    faq: [
      {
        question: 'Coup de Pouce est-il cumulable avec MaPrimeRénov\' ?',
        answer: 'Oui, les primes Coup de Pouce sont cumulables avec MaPrimeRénov\', l\'éco-PTZ et la TVA réduite. Ce cumul permet de financer une grande partie des travaux.',
      },
      {
        question: 'Ma chaudière gaz récente est-elle éligible au Coup de Pouce ?',
        answer: 'Oui, depuis 2023, le remplacement des chaudières gaz (même récentes) est éligible au Coup de Pouce Chauffage pour l\'installation d\'une pompe à chaleur.',
      },
      {
        question: 'Quel est le montant du Coup de Pouce Chauffage ?',
        answer: 'Le montant varie selon vos revenus et le nouveau système installé. Pour une pompe à chaleur, comptez de 4 000 € à 5 000 € pour les ménages modestes, et de 2 500 € à 4 000 € pour les autres ménages.',
      },
    ],
    seo: {
      title: 'Prime Coup de Pouce | Chauffage et Isolation - Montants 2024',
      description: 'Prime Coup de Pouce Chauffage et Isolation : montants, conditions et démarches. Jusqu\'à 5 000 € pour remplacer votre chaudière. Cumulable avec MaPrimeRénov\'.',
      keywords: ['coup de pouce chauffage', 'coup de pouce isolation', 'prime bonifiée', 'remplacement chaudière', 'aide pompe à chaleur'],
    },
  },
  {
    id: 'tva-reduite',
    slug: 'tva-reduite',
    title: 'TVA Réduite à 5,5%',
    shortTitle: 'TVA 5,5%',
    description: 'Les travaux de rénovation énergétique bénéficient d\'un taux de TVA réduit à 5,5% au lieu de 20%. Cette réduction s\'applique automatiquement sur la main d\'œuvre et les matériaux fournis par l\'entreprise.',
    longDescription: `La TVA à taux réduit de 5,5% constitue un avantage fiscal significatif pour les travaux de rénovation énergétique. Elle s'applique à la fois sur le coût des matériaux et sur la main d'œuvre, représentant une économie de 14,5% par rapport au taux normal de 20%.

Pour en bénéficier, les travaux doivent être réalisés dans un logement achevé depuis plus de 2 ans, qu'il s'agisse d'une résidence principale ou secondaire. L'entreprise qui réalise les travaux applique directement ce taux réduit sur sa facture.

Contrairement aux autres aides, la TVA à 5,5% ne nécessite aucune démarche particulière de votre part. ISO Home Energy l'applique automatiquement sur tous les travaux éligibles.`,
    icon: 'percent',
    amount: 'Économie de 14,5% sur le montant TTC',
    eligibility: [
      'Logement achevé depuis plus de 2 ans',
      'Résidence principale ou secondaire',
      'Propriétaire, locataire ou occupant à titre gratuit',
      'Travaux d\'amélioration énergétique',
      'Travaux facturés par un professionnel',
    ],
    documents: [
      'Attestation simplifiée (fournie par ISO Home Energy)',
      'Aucun autre document nécessaire',
    ],
    steps: [
      {
        step: 1,
        title: 'Vérification',
        description: 'Contrôle de l\'éligibilité du logement (plus de 2 ans).',
      },
      {
        step: 2,
        title: 'Attestation',
        description: 'Signature de l\'attestation simplifiée fournie par nos soins.',
      },
      {
        step: 3,
        title: 'Facturation',
        description: 'Application automatique du taux de 5,5% sur votre facture.',
      },
    ],
    faq: [
      {
        question: 'La TVA à 5,5% s\'applique-t-elle aux matériaux ?',
        answer: 'Oui, lorsque les matériaux sont fournis et facturés par l\'entreprise qui réalise les travaux. Si vous achetez les matériaux vous-même, ils seront facturés à 20% de TVA.',
      },
      {
        question: 'Quels travaux sont concernés par la TVA à 5,5% ?',
        answer: 'Tous les travaux de rénovation énergétique : isolation, chauffage, ventilation, panneaux solaires, ainsi que les travaux induits (électricité, plâtrerie liées aux travaux principaux).',
      },
      {
        question: 'La TVA à 5,5% est-elle cumulable avec les autres aides ?',
        answer: 'Oui, la TVA réduite se cumule avec MaPrimeRénov\', les primes CEE, l\'éco-PTZ et toutes les autres aides à la rénovation énergétique.',
      },
    ],
    seo: {
      title: 'TVA 5,5% | TVA réduite pour travaux de rénovation énergétique',
      description: 'TVA à 5,5% pour vos travaux de rénovation énergétique : conditions et travaux éligibles. Économisez 14,5% sur votre facture. Application automatique par ISO Home Energy.',
      keywords: ['TVA réduite', 'TVA 5,5%', 'TVA travaux', 'TVA rénovation', 'économie TVA', 'taux réduit TVA'],
    },
  },
  {
    id: 'eco-ptz',
    slug: 'eco-ptz',
    title: 'Éco-Prêt à Taux Zéro',
    shortTitle: 'Éco-PTZ',
    description: 'L\'éco-PTZ permet de financer vos travaux de rénovation énergétique avec un prêt sans intérêts. Accordé sans conditions de ressources, il peut atteindre 50 000 € remboursables sur 20 ans.',
    longDescription: `L'éco-prêt à taux zéro (éco-PTZ) est un dispositif bancaire soutenu par l'État qui permet de financer des travaux de rénovation énergétique sans payer d'intérêts. Les intérêts sont pris en charge par l'État, ce qui en fait un outil de financement très avantageux.

Depuis 2022, le plafond de l'éco-PTZ a été relevé à 50 000 € pour les rénovations d'ampleur (gain de 2 classes énergétiques minimum). Pour des travaux simples, le plafond varie de 15 000 € à 30 000 € selon le nombre de travaux réalisés.

L'éco-PTZ est accordé sans conditions de ressources et peut être cumulé avec toutes les autres aides. Il est distribué par les banques ayant signé une convention avec l'État.`,
    icon: 'piggy-bank',
    amount: 'Jusqu\'à 50 000 € à taux zéro',
    eligibility: [
      'Propriétaires occupants ou bailleurs',
      'Logement construit avant le 1er janvier 1990',
      'Logement déclaré comme résidence principale',
      'Aucune condition de ressources',
      'Travaux réalisés par des professionnels RGE',
    ],
    documents: [
      'Formulaire emprunteur (fourni par la banque)',
      'Devis des travaux détaillés',
      'Justificatif de propriété (titre de propriété ou taxe foncière)',
      'Avis d\'imposition',
      'Justificatif de domicile',
    ],
    steps: [
      {
        step: 1,
        title: 'Devis des travaux',
        description: 'Obtention du devis détaillé auprès d\'ISO Home Energy.',
      },
      {
        step: 2,
        title: 'Demande de prêt',
        description: 'Dépôt du dossier auprès d\'une banque partenaire.',
      },
      {
        step: 3,
        title: 'Accord bancaire',
        description: 'Étude du dossier et déblocage des fonds.',
      },
      {
        step: 4,
        title: 'Réalisation des travaux',
        description: 'Intervention et facturation des travaux.',
      },
      {
        step: 5,
        title: 'Remboursement',
        description: 'Mensualités sans intérêts sur 15 à 20 ans.',
      },
    ],
    faq: [
      {
        question: 'Quelle banque propose l\'éco-PTZ ?',
        answer: 'La plupart des grandes banques françaises proposent l\'éco-PTZ : BNP Paribas, Crédit Agricole, Société Générale, Banque Populaire, Caisse d\'Épargne, Crédit Mutuel...',
      },
      {
        question: 'Peut-on cumuler éco-PTZ et prêt immobilier classique ?',
        answer: 'Oui, l\'éco-PTZ peut compléter un prêt immobilier classique ou un prêt travaux. Il peut aussi être cumulé avec un PTZ classique pour l\'acquisition.',
      },
      {
        question: 'Quel est le délai pour obtenir un éco-PTZ ?',
        answer: 'Comptez environ 3 à 4 semaines entre le dépôt du dossier complet et le déblocage des fonds. Les travaux doivent être réalisés dans les 3 ans suivant l\'obtention du prêt.',
      },
    ],
    seo: {
      title: 'Éco-PTZ | Prêt à taux zéro pour rénovation énergétique',
      description: 'Éco-prêt à taux zéro : financez vos travaux jusqu\'à 50 000 € sans intérêts. Aucune condition de revenus. Démarches et banques partenaires. Simulation gratuite.',
      keywords: ['éco-PTZ', 'prêt taux zéro', 'financement rénovation', 'prêt travaux', 'éco-prêt', 'crédit rénovation'],
    },
  },
  {
    id: 'prime-autoconsommation',
    slug: 'prime-autoconsommation',
    title: 'Prime à l\'Autoconsommation',
    shortTitle: 'Prime Autoconso',
    description: 'L\'État verse une prime aux particuliers qui installent des panneaux photovoltaïques en autoconsommation avec vente du surplus. Cette aide, versée sur 5 ans, réduit significativement le coût de votre installation solaire.',
    longDescription: `La prime à l'autoconsommation photovoltaïque a été mise en place pour encourager les particuliers à produire et consommer leur propre électricité. Elle est versée aux propriétaires qui choisissent le mode "autoconsommation avec vente du surplus" (le mode le plus répandu).

Le montant de la prime dépend de la puissance de l'installation. Elle est versée en une seule fois, généralement dans l'année suivant la mise en service. Ce versement intervient automatiquement une fois le contrat de raccordement signé avec EDF OA.

En complément de cette prime, l'électricité non consommée et injectée sur le réseau est rachetée par EDF OA à un tarif garanti pendant 20 ans, ce qui améliore encore la rentabilité de votre installation.`,
    icon: 'sun',
    amount: 'De 100 € à 500 € par kWc installé',
    eligibility: [
      'Installation photovoltaïque de puissance ≤ 100 kWc',
      'Mode autoconsommation avec vente du surplus',
      'Installation réalisée par un professionnel qualifié',
      'Raccordement au réseau électrique public',
      'Contrat d\'achat avec EDF OA ou autre acheteur obligé',
    ],
    documents: [
      'Contrat de raccordement Enedis',
      'Attestation de conformité Consuel',
      'Contrat d\'achat EDF OA',
      'Facture de l\'installation',
      'RIB pour le versement',
    ],
    steps: [
      {
        step: 1,
        title: 'Installation',
        description: 'Pose des panneaux par un installateur qualifié.',
      },
      {
        step: 2,
        title: 'Raccordement',
        description: 'Mise en service et validation Consuel.',
      },
      {
        step: 3,
        title: 'Contrat EDF OA',
        description: 'Signature du contrat d\'achat du surplus.',
      },
      {
        step: 4,
        title: 'Versement',
        description: 'Prime versée automatiquement sous 12 mois.',
      },
    ],
    faq: [
      {
        question: 'Quel est le montant exact de la prime autoconsommation ?',
        answer: 'Les montants varient chaque trimestre. En 2024, comptez environ 370 €/kWc pour une installation ≤ 3 kWc, 280 €/kWc entre 3 et 9 kWc, et 200 €/kWc entre 9 et 36 kWc.',
      },
      {
        question: 'La prime autoconsommation est-elle imposable ?',
        answer: 'Non, la prime à l\'autoconsommation n\'est pas imposable pour les installations de puissance inférieure à 3 kWc. Au-delà, les revenus du solaire peuvent être soumis à l\'impôt.',
      },
      {
        question: 'Peut-on cumuler la prime avec d\'autres aides ?',
        answer: 'Oui, la prime autoconsommation se cumule avec la TVA réduite à 10% (installations ≤ 3 kWc sur logement de plus de 2 ans) et les éventuelles aides locales.',
      },
    ],
    seo: {
      title: 'Prime Autoconsommation | Aide photovoltaïque 2024',
      description: 'Prime à l\'autoconsommation photovoltaïque : montants, conditions et démarches. Jusqu\'à 500 €/kWc pour votre installation solaire. Versement automatique.',
      keywords: ['prime autoconsommation', 'aide photovoltaïque', 'prime solaire', 'EDF OA', 'autoconsommation', 'panneau solaire aide'],
    },
  },
  {
    id: 'renovation-ampleur',
    slug: 'renovation-ampleur',
    title: 'Rénovation d\'Ampleur',
    shortTitle: 'Réno Ampleur',
    description: 'Le parcours Rénovation d\'Ampleur offre des aides majorées pour les projets de rénovation globale permettant un gain d\'au moins 2 classes énergétiques. Un accompagnement personnalisé est inclus dans le dispositif.',
    longDescription: `Le parcours "Rénovation d'Ampleur" est le nouveau dispositif phare de MaPrimeRénov' pour 2024. Il cible les rénovations globales et performantes, avec l'objectif d'atteindre un gain minimum de 2 classes sur le DPE (Diagnostic de Performance Énergétique).

Ce parcours se distingue par des aides significativement plus élevées que les aides par geste (travaux isolés). Il intègre obligatoirement un accompagnement par un "Accompagnateur Rénov'", un professionnel agréé qui vous guide tout au long du projet.

L'aide peut couvrir jusqu'à 90% du montant des travaux pour les ménages les plus modestes, avec un plafond de dépenses de 70 000 €. C'est la solution idéale pour sortir définitivement un logement du statut de "passoire thermique".`,
    icon: 'building',
    amount: 'Jusqu\'à 63 000 € d\'aides',
    eligibility: [
      'Gain minimum de 2 classes énergétiques sur le DPE',
      'Logement classé F ou G avant travaux (passoire thermique)',
      'Accompagnement obligatoire par un Accompagnateur Rénov\'',
      'Bouquet de travaux cohérent (isolation + chauffage minimum)',
      'Travaux réalisés par des professionnels RGE',
    ],
    documents: [
      'Audit énergétique réglementaire',
      'Devis de l\'ensemble des travaux',
      'Plan de financement détaillé',
      'Contrat avec l\'Accompagnateur Rénov\'',
      'Avis d\'imposition du foyer',
    ],
    steps: [
      {
        step: 1,
        title: 'Audit énergétique',
        description: 'Réalisation d\'un audit complet par un professionnel certifié.',
      },
      {
        step: 2,
        title: 'Accompagnement',
        description: 'Contractualisation avec un Accompagnateur Rénov\' agréé.',
      },
      {
        step: 3,
        title: 'Projet de travaux',
        description: 'Définition du bouquet de travaux pour atteindre l\'objectif.',
      },
      {
        step: 4,
        title: 'Dossier d\'aides',
        description: 'Montage et dépôt du dossier MaPrimeRénov\' Parcours Accompagné.',
      },
      {
        step: 5,
        title: 'Travaux et contrôle',
        description: 'Réalisation des travaux et DPE final pour valider le gain.',
      },
    ],
    faq: [
      {
        question: 'Qu\'est-ce qu\'un Accompagnateur Rénov\' ?',
        answer: 'C\'est un professionnel agréé par l\'État qui vous accompagne de l\'audit initial jusqu\'à la réception des travaux. Il vous aide à définir le projet, choisir les artisans et monter les dossiers d\'aides.',
      },
      {
        question: 'L\'accompagnement est-il payant ?',
        answer: 'Oui, mais il est largement subventionné. MaPrimeRénov\' finance jusqu\'à 2 000 € de prestation d\'accompagnement pour les ménages modestes.',
      },
      {
        question: 'Peut-on faire les travaux en plusieurs fois ?',
        answer: 'Le parcours Rénovation d\'Ampleur prévoit une réalisation des travaux sur 18 mois maximum. Un échelonnement est possible mais l\'objectif de gain de 2 classes doit être atteint.',
      },
    ],
    seo: {
      title: 'Rénovation d\'Ampleur | MaPrimeRénov\' Parcours Accompagné 2024',
      description: 'Rénovation d\'Ampleur : jusqu\'à 90% d\'aides pour sortir votre logement du statut de passoire thermique. Accompagnement inclus, gain de 2 classes DPE garanti.',
      keywords: ['rénovation ampleur', 'MaPrimeRénov parcours accompagné', 'rénovation globale', 'passoire thermique', 'DPE', 'audit énergétique'],
    },
  },
  {
    id: 'pret-action-logement',
    slug: 'pret-action-logement',
    title: 'Prêt Action Logement',
    shortTitle: 'Action Logement',
    description: 'Action Logement propose aux salariés du secteur privé un prêt à taux très avantageux (1%) pour financer leurs travaux de rénovation énergétique. Ce prêt peut atteindre 10 000 € remboursables sur 10 ans.',
    longDescription: `Action Logement (anciennement 1% Logement) est un organisme financé par les cotisations des entreprises de plus de 50 salariés. Il propose diverses aides au logement pour les salariés du secteur privé, dont le prêt travaux d'amélioration de la performance énergétique.

Ce prêt à 1% (hors assurance) permet de financer des travaux de rénovation énergétique dans votre résidence principale. Il est particulièrement intéressant car il peut compléter les autres aides (MaPrimeRénov', CEE) pour couvrir le reste à charge.

Le prêt Action Logement est accessible aux salariés des entreprises du secteur privé de plus de 10 salariés. Les conditions d'attribution prennent en compte les ressources du foyer.`,
    icon: 'briefcase',
    amount: 'Jusqu\'à 10 000 € à 1%',
    eligibility: [
      'Salarié d\'une entreprise du secteur privé (≥ 10 salariés)',
      'Résidence principale (propriétaire ou locataire)',
      'Travaux d\'amélioration de la performance énergétique',
      'Ressources inférieures aux plafonds Action Logement',
      'Logement situé en France métropolitaine ou DOM',
    ],
    documents: [
      'Attestation employeur',
      'Derniers bulletins de salaire',
      'Avis d\'imposition',
      'Devis des travaux envisagés',
      'Justificatif de domicile',
    ],
    steps: [
      {
        step: 1,
        title: 'Vérification éligibilité',
        description: 'Contrôle des conditions (emploi, ressources, logement).',
      },
      {
        step: 2,
        title: 'Constitution du dossier',
        description: 'Rassemblement des justificatifs et devis de travaux.',
      },
      {
        step: 3,
        title: 'Demande en ligne',
        description: 'Dépôt du dossier sur le site Action Logement.',
      },
      {
        step: 4,
        title: 'Déblocage des fonds',
        description: 'Versement du prêt après accord.',
      },
      {
        step: 5,
        title: 'Remboursement',
        description: 'Mensualités à 1% sur 10 ans maximum.',
      },
    ],
    faq: [
      {
        question: 'Mon entreprise doit-elle cotiser à Action Logement ?',
        answer: 'Oui, vous devez être salarié d\'une entreprise du secteur privé de 10 salariés ou plus qui cotise à Action Logement. Les salariés du secteur public ne sont pas éligibles.',
      },
      {
        question: 'Le prêt Action Logement est-il cumulable avec l\'éco-PTZ ?',
        answer: 'Oui, les deux prêts sont cumulables. Vous pouvez ainsi bénéficier de jusqu\'à 60 000 € de prêts à taux très avantageux pour financer vos travaux.',
      },
      {
        question: 'Quels travaux sont éligibles ?',
        answer: 'Tous les travaux de rénovation énergétique : isolation, chauffage, ventilation, fenêtres... Les travaux doivent améliorer la performance énergétique du logement.',
      },
    ],
    seo: {
      title: 'Prêt Action Logement | Financement travaux à 1% pour salariés',
      description: 'Prêt Action Logement : jusqu\'à 10 000 € à 1% pour vos travaux de rénovation énergétique. Réservé aux salariés du privé. Conditions et démarches.',
      keywords: ['action logement', 'prêt travaux', 'prêt 1%', '1% logement', 'aide salarié', 'financement rénovation'],
    },
  },
]
