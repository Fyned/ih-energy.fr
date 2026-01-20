import { motion } from 'framer-motion'
import { Shield, Award, Users, Clock, ThumbsUp, Leaf } from 'lucide-react'
import { Container, SectionHeading } from '@/components/common'

const reasons = [
  {
    icon: Shield,
    title: 'Artisans certifiés RGE',
    description:
      'Tous nos artisans sont certifiés RGE (Reconnu Garant de l\'Environnement), gage de qualité et condition pour bénéficier des aides.',
  },
  {
    icon: Award,
    title: 'Accompagnement personnalisé',
    description:
      'Un conseiller dédié vous accompagne de A à Z : étude de projet, montage des dossiers d\'aides et suivi des travaux.',
  },
  {
    icon: Users,
    title: 'Équipe expérimentée',
    description:
      'Plus de 10 ans d\'expérience dans la rénovation énergétique. Des milliers de chantiers réalisés avec succès.',
  },
  {
    icon: Clock,
    title: 'Intervention rapide',
    description:
      'Devis gratuit sous 48h et planification des travaux selon vos disponibilités. Réactivité garantie.',
  },
  {
    icon: ThumbsUp,
    title: 'Garantie décennale',
    description:
      'Tous nos travaux sont couverts par une garantie décennale. Votre tranquillité est notre priorité.',
  },
  {
    icon: Leaf,
    title: 'Engagement écologique',
    description:
      'Nous privilégions les matériaux écologiques et les solutions les plus respectueuses de l\'environnement.',
  },
]

interface WhyChooseUsProps {
  title?: string
  subtitle?: string
  description?: string
}

export function WhyChooseUs({
  title = 'Pourquoi nous choisir ?',
  subtitle = 'Nos engagements',
  description = 'Des experts à votre service pour une rénovation énergétique réussie',
}: WhyChooseUsProps) {
  return (
    <section className="py-20 lg:py-28 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <SectionHeading
          title={title}
          subtitle={subtitle}
          description={description}
          dark
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                  <reason.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
