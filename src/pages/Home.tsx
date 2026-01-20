import { SEO } from '@/components/seo'
import {
  Hero,
  ProcessSteps,
  ServiceCards,
  WhyChooseUs,
  AidesGrid,
  CTASection,
  FAQ,
} from '@/components/sections'

const processSteps = [
  {
    number: '01',
    title: 'Diagnostic gratuit',
    description:
      'Un conseiller analyse votre logement et vos factures pour identifier les travaux prioritaires. Simulation des aides financières incluse.',
  },
  {
    number: '02',
    title: 'Devis détaillé',
    description:
      'Recevez un devis clair avec le montant des travaux, des aides déduites et votre reste à charge. Sans engagement.',
  },
  {
    number: '03',
    title: 'Travaux réalisés',
    description:
      'Nos artisans certifiés RGE interviennent selon le planning convenu. Garantie décennale et suivi qualité inclus.',
  },
]

const faqItems = [
  {
    id: '1',
    title: 'Quelles sont les conditions pour bénéficier des aides ?',
    content:
      'Pour être éligible aux aides à la rénovation énergétique, votre logement doit être achevé depuis plus de 2 ans et les travaux doivent être réalisés par un professionnel certifié RGE. Le montant des aides varie selon vos revenus (MaPrimeRénov\') et le type de travaux réalisés.',
  },
  {
    id: '2',
    title: 'Quel est le coût moyen d\'une rénovation énergétique ?',
    content:
      'Le budget dépend des travaux envisagés : isolation des combles (1 500 à 3 000 €), pompe à chaleur (8 000 à 15 000 €), panneaux solaires (7 000 à 12 000 €). Avec les aides cumulées (MaPrimeRénov\', CEE, TVA 5,5%), le reste à charge peut être réduit de 50 à 90%.',
  },
  {
    id: '3',
    title: 'Combien de temps durent les travaux de rénovation ?',
    content:
      'La durée varie selon les travaux : 1 journée pour l\'isolation des combles, 2 à 3 jours pour une pompe à chaleur, 1 à 2 jours pour des panneaux photovoltaïques. Le planning est défini ensemble avant le démarrage du chantier.',
  },
  {
    id: '4',
    title: 'Les aides sont-elles cumulables entre elles ?',
    content:
      'Oui, la plupart des aides sont cumulables : MaPrimeRénov\' + Prime CEE + TVA 5,5% + Éco-PTZ. Cette combinaison permet souvent de financer 70 à 90% du montant des travaux. Notre équipe optimise systématiquement votre dossier pour maximiser vos aides.',
  },
  {
    id: '5',
    title: 'Qu\'est-ce que la certification RGE ?',
    content:
      'RGE (Reconnu Garant de l\'Environnement) est une certification délivrée aux professionnels formés aux techniques de rénovation énergétique. Elle est obligatoire pour que vos travaux ouvrent droit aux aides de l\'État. Tous les artisans du réseau ISO Home Energy sont certifiés RGE.',
  },
  {
    id: '6',
    title: 'Dois-je avancer l\'argent pour les travaux ?',
    content:
      'Les primes CEE peuvent être déduites directement de votre devis. Pour MaPrimeRénov\', le versement intervient après travaux, mais l\'éco-PTZ permet de financer le reste à charge sans avancer d\'argent. Nous vous accompagnons pour trouver la meilleure solution de financement.',
  },
  {
    id: '7',
    title: 'Intervenez-vous dans toute la France ?',
    content:
      'Oui, ISO Home Energy dispose d\'un réseau d\'artisans partenaires couvrant l\'ensemble du territoire français métropolitain. Nous pouvons intervenir quelle que soit votre localisation, en zone urbaine comme en zone rurale.',
  },
]

export function Home() {
  return (
    <>
      <SEO
        title="Rénovation énergétique | Isolation, Chauffage, Photovoltaïque"
        description="ISO Home Energy, spécialiste de la rénovation énergétique en France. Isolation thermique, pompe à chaleur, panneaux solaires. Artisans RGE, aides MaPrimeRénov' et CEE déduites. Devis gratuit."
        canonical="/"
      />

      <Hero
        badge="Spécialiste rénovation énergétique"
        title="Améliorez votre habitat, réduisez vos factures d'énergie"
        description="ISO Home Energy vous accompagne dans vos projets d'isolation, de chauffage et d'énergie solaire. Bénéficiez des aides de l'État : MaPrimeRénov', CEE, TVA 5,5%. Artisans certifiés RGE, garantie décennale."
        primaryCTA={{
          label: 'Demander un devis gratuit',
          href: '/contact',
        }}
        secondaryCTA={{
          label: 'Découvrir nos services',
          href: '/nos-services',
        }}
        features={[
          'Artisans certifiés RGE',
          'Jusqu\'à 90% d\'aides',
          'Garantie décennale',
        ]}
        image="/images/hero/home-hero.webp"
      />

      <ProcessSteps
        subtitle="Comment ça marche ?"
        title="Votre projet de rénovation en 3 étapes"
        description="De l'étude à la réception des travaux, nous gérons tout pour vous"
        steps={processSteps}
      />

      <ServiceCards
        subtitle="Nos solutions"
        title="Une offre complète pour votre rénovation énergétique"
        description="Isolation, chauffage, photovoltaïque, ventilation : découvrez nos services pour améliorer la performance énergétique de votre logement"
        showAll
      />

      <WhyChooseUs />

      <AidesGrid
        subtitle="Financez vos travaux"
        title="Les aides à votre disposition"
        description="MaPrimeRénov', CEE, Coup de Pouce, TVA 5,5%, Éco-PTZ... Nous vous aidons à obtenir toutes les aides auxquelles vous avez droit"
        limit={4}
      />

      <CTASection
        title="Prêt à réduire vos factures d'énergie ?"
        description="Demandez votre étude gratuite et découvrez combien vous pouvez économiser sur vos travaux de rénovation."
        primaryCTA={{
          label: 'Obtenir mon devis gratuit',
          href: '/contact',
        }}
        secondaryCTA={{
          label: 'Simuler mes aides',
          href: '/les-aides',
        }}
      />

      <FAQ
        subtitle="Questions fréquentes"
        title="Tout savoir sur la rénovation énergétique"
        description="Les réponses aux questions les plus posées par nos clients"
        items={faqItems}
      />
    </>
  )
}
