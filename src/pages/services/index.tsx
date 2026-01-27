import { SEO } from '@/components/seo'
import { Hero, ServiceCards, CTASection } from '@/components/sections'

export function ServicesIndex() {
  return (
    <>
      <SEO
        title="Nos Services | ITE, Ravalement, Isolation Vosges & Grand Est"
        description="Découvrez nos services de rénovation énergétique dans les Vosges et le Grand Est : ITE, ravalement de façade, isolation, menuiserie, chauffage, VMC. Artisans RGE certifiés."
        canonical="/nos-services"
      />

      <Hero
        title="Nos services de rénovation énergétique"
        description="Du diagnostic à la réalisation, nous vous accompagnons dans tous vos projets d'amélioration de la performance énergétique de votre habitat dans les Vosges et le Grand Est. Spécialistes ITE et ravalement de façade."
        variant="centered"
        badge="Nos expertises - Vosges & Grand Est"
        backgroundImage="/images/hero/services-hero.webp"
      />

      <ServiceCards
        subtitle="Nos solutions"
        title="Des services adaptés à vos besoins"
        description="Isolation, chauffage, production d'énergie... Découvrez nos solutions pour améliorer le confort de votre logement"
        showAll
      />

      <CTASection
        title="Quel service pour votre projet ?"
        description="Nos conseillers vous aident à identifier les travaux prioritaires pour votre habitat."
        primaryCTA={{
          label: 'Demander un diagnostic gratuit',
          href: '/contact',
        }}
      />
    </>
  )
}
