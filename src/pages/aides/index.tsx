import { SEO } from '@/components/seo'
import { Hero, AidesGrid, CTASection, FAQ } from '@/components/sections'

const faqItems = [
  {
    id: '1',
    title: 'Qui peut bénéficier des aides à la rénovation énergétique ?',
    content:
      'Tous les propriétaires (occupants ou bailleurs) et certains locataires peuvent bénéficier des aides. Les conditions varient selon chaque dispositif, mais la plupart sont accessibles sans conditions de revenus pour la Prime CEE.',
  },
  {
    id: '2',
    title: 'Les aides sont-elles cumulables entre elles ?',
    content:
      'Oui, la plupart des aides sont cumulables : Prime CEE + MaPrimeRénov\' + TVA 5,5% + Éco-PTZ. Notre équipe optimise votre dossier pour maximiser le montant total des aides.',
  },
  {
    id: '3',
    title: 'Comment sont versées les aides ?',
    content:
      'Les aides peuvent être versées directement (virement) ou déduites de votre facture. La Prime CEE peut être versée sous forme de chèque, virement ou déduite directement du devis.',
  },
  {
    id: '4',
    title: 'Dois-je avancer l\'argent pour les travaux ?',
    content:
      'Grâce au dispositif de Prime CEE et à MaPrimeRénov\', il est possible de réduire considérablement votre avance. Dans certains cas, le reste à charge peut être nul pour les ménages modestes.',
  },
]

export function AidesIndex() {
  return (
    <>
      <SEO
        title="Les Aides à la Rénovation Énergétique"
        description="Découvrez toutes les aides financières pour vos travaux de rénovation énergétique : Prime CEE, MaPrimeRénov', Éco-PTZ, TVA réduite... Nous vous accompagnons."
        canonical="/les-aides"
      />

      <Hero
        title="Les aides à la rénovation énergétique"
        description="De nombreuses aides existent pour financer vos travaux de rénovation énergétique. Découvrez les dispositifs auxquels vous avez droit et laissez-nous nous occuper des démarches."
        variant="centered"
        badge="Financez vos travaux"
      />

      <AidesGrid
        subtitle="Les dispositifs"
        title="Toutes les aides disponibles"
        description="Un panorama complet des aides pour financer votre rénovation énergétique"
      />

      <CTASection
        title="Besoin d'aide pour vos démarches ?"
        description="Notre équipe s'occupe du montage complet de vos dossiers d'aides. Service gratuit et sans engagement."
        primaryCTA={{
          label: 'Estimer mes aides',
          href: '/contact',
        }}
      />

      <FAQ
        subtitle="Questions fréquentes"
        title="Tout savoir sur les aides"
        items={faqItems}
      />
    </>
  )
}
