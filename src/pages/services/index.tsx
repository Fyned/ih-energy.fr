import { SEO } from '@/components/seo'
import { Hero, ServiceCards, CTASection } from '@/components/sections'

export function ServicesIndex() {
  return (
    <>
      <SEO
        title="Nos Services"
        description="Découvrez nos services de rénovation énergétique : isolation, chauffage, photovoltaïque, chauffe-eau thermodynamique, VMC. Artisans certifiés RGE."
        canonical="/nos-services"
      />

      <Hero
        title="Nos services de rénovation énergétique"
        description="Du diagnostic à la réalisation, nous vous accompagnons dans tous vos projets d'amélioration de la performance énergétique de votre habitat."
        variant="centered"
        badge="Nos expertises"
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
