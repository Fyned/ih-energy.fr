import { motion } from 'framer-motion'
import { Target, Heart, Award, CheckCircle, Handshake, Shield, Users, Clock } from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, SectionHeading } from '@/components/common'
import { Hero, CTASection } from '@/components/sections'

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Chaque projet bénéficie de notre expertise technique et de matériaux certifiés. Nos artisans RGE garantissent une mise en œuvre irréprochable.',
  },
  {
    icon: Heart,
    title: 'Transparence',
    description:
      'Des devis détaillés sans surprise, une communication claire sur les délais et le déroulement des travaux. Aucun frais caché.',
  },
  {
    icon: Handshake,
    title: 'Proximité',
    description:
      'Un conseiller dédié vous accompagne du premier contact jusqu\'à la fin du chantier. Joignable, réactif et à l\'écoute de vos besoins.',
  },
  {
    icon: Target,
    title: 'Résultats',
    description:
      'Notre engagement porte sur les performances réelles : économies d\'énergie mesurables, confort amélioré et satisfaction garantie.',
  },
]

const milestones = [
  { number: '10+', label: 'Années d\'expertise' },
  { number: '5000+', label: 'Projets réalisés' },
  { number: '98%', label: 'Clients satisfaits' },
  { number: '100%', label: 'Artisans certifiés RGE' },
]

const engagements = [
  {
    icon: Shield,
    title: 'Garantie décennale',
    description: 'Tous nos travaux sont couverts par une garantie décennale, assurant votre tranquillité sur le long terme.',
  },
  {
    icon: Users,
    title: 'Artisans locaux RGE',
    description: 'Nous travaillons exclusivement avec des artisans certifiés RGE, reconnus pour leur savoir-faire et leur sérieux.',
  },
  {
    icon: Clock,
    title: 'Délais respectés',
    description: 'Planning de travaux établi ensemble et respecté. Nous nous engageons sur les dates de début et de fin de chantier.',
  },
]

export function IsoHomeEnergy() {
  return (
    <>
      <SEO
        title="ISO Home Energy | Spécialiste rénovation énergétique en France"
        description="ISO Home Energy accompagne les particuliers dans leurs projets de rénovation énergétique : isolation, chauffage, photovoltaïque. Artisans RGE, aides déduites, devis gratuit."
        canonical="/iso-home-energy"
      />

      <Hero
        title="Votre partenaire de confiance pour la rénovation énergétique"
        description="ISO Home Energy accompagne les propriétaires français dans l'amélioration de la performance énergétique de leur habitat. Isolation, chauffage, ventilation, photovoltaïque : nous proposons des solutions complètes, réalisées par des artisans certifiés RGE."
        variant="centered"
        badge="Qui sommes-nous"
      />

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {item.number}
                </div>
                <div className="text-white/80">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Qui sommes-nous Section */}
      <section id="qui-sommes-nous" className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 block">
                À propos
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Une entreprise engagée pour la transition énergétique
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Fondée par des professionnels du bâtiment et de l'énergie, ISO Home Energy
                  s'est donnée pour vocation d'accompagner les ménages français vers un habitat
                  plus performant et plus économique.
                </p>
                <p>
                  Face à la hausse des prix de l'énergie et aux enjeux climatiques, nous avons
                  la conviction que la rénovation énergétique doit être accessible à tous. C'est
                  pourquoi nous prenons en charge l'intégralité de votre projet : étude technique,
                  montage des dossiers d'aides, coordination des travaux et suivi qualité.
                </p>
                <p>
                  Notre réseau d'artisans certifiés RGE intervient sur l'ensemble du territoire
                  français, garantissant des travaux conformes aux normes en vigueur et éligibles
                  aux aides de l'État.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/about/artisan-work.webp"
                alt="Artisan ISO Home Energy en intervention"
                className="aspect-[6/5] w-full object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 lg:py-28 bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="/images/about/artisan-work.webp"
                alt="Artisan RGE en intervention - Installation et rénovation"
                className="aspect-[6/5] w-full object-cover rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 block">
                Notre mission
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Simplifier la rénovation énergétique pour tous
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Notre mission est claire : permettre à chaque propriétaire de bénéficier
                  d'un logement confortable, économique et respectueux de l'environnement,
                  sans se perdre dans les démarches administratives.
                </p>
                <p>
                  Nous gérons pour vous l'ensemble du processus : de l'audit initial à la
                  réception des travaux, en passant par le montage des dossiers MaPrimeRénov',
                  CEE et autres aides disponibles.
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {[
                  'Diagnostic gratuit de votre logement',
                  'Simulation personnalisée des aides financières',
                  'Coordination complète des travaux',
                  'Accompagnement administratif de A à Z',
                  'Suivi qualité et service après-vente',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section id="valeurs" className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeading
            subtitle="Nos valeurs"
            title="Les principes qui guident notre action"
            description="Chez ISO Home Energy, nous plaçons la satisfaction client et la qualité au cœur de notre démarche"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 rounded-2xl p-6 hover:shadow-lg hover:bg-white transition-all border border-transparent hover:border-accent/20"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Engagements Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <Container>
          <SectionHeading
            subtitle="Nos engagements"
            title="Ce que nous vous garantissons"
            description="Des engagements concrets pour une rénovation sereine"
            dark
          />

          <div className="grid md:grid-cols-3 gap-8">
            {engagements.map((engagement, index) => (
              <motion.div
                key={engagement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <engagement.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {engagement.title}
                </h3>
                <p className="text-white/70 text-sm">{engagement.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 block">
                Zone d'intervention
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Présents sur le Grand Est
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  ISO Home Energy intervient sur l'ensemble de la région Grand Est grâce à
                  son réseau d'artisans partenaires locaux. De l'Alsace à la Champagne-Ardenne,
                  en passant par la Lorraine, nous avons les ressources pour mener à bien votre projet de rénovation.
                </p>
                <p>
                  Notre implantation locale nous permet de vous proposer des artisans
                  connaissant parfaitement les spécificités climatiques de la région et les
                  exigences techniques propres au Grand Est.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Alsace', 'Lorraine', 'Champagne-Ardenne'].map((region) => (
                  <span
                    key={region}
                    className="px-4 py-2 bg-white rounded-full text-sm text-primary border border-neutral-200"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/about/france-map.webp"
                alt="Carte du Grand Est - Zone d'intervention ISO Home Energy"
                className="aspect-[6/5] w-full object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Prêt à améliorer votre habitat ?"
        description="Contactez-nous pour une étude gratuite de votre projet. Nos conseillers sont à votre disposition pour répondre à toutes vos questions."
        primaryCTA={{
          label: 'Demander un devis gratuit',
          href: '/contact',
        }}
        secondaryCTA={{
          label: 'Découvrir nos services',
          href: '/nos-services',
        }}
      />
    </>
  )
}
