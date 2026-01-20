import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Award,
  Home,
  Zap,
  Percent,
  PiggyBank,
  Sun,
  Building,
  Briefcase,
  ArrowRight,
} from 'lucide-react'
import { Container, SectionHeading, Card } from '@/components/common'
import { aides } from '@/data/aides'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  award: Award,
  home: Home,
  zap: Zap,
  percent: Percent,
  'piggy-bank': PiggyBank,
  sun: Sun,
  building: Building,
  briefcase: Briefcase,
}

interface AidesGridProps {
  title: string
  subtitle?: string
  description?: string
  limit?: number
}

export function AidesGrid({ title, subtitle, description, limit }: AidesGridProps) {
  const displayedAides = limit ? aides.slice(0, limit) : aides

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          title={title}
          subtitle={subtitle}
          description={description}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedAides.map((aide, index) => {
            const Icon = iconMap[aide.icon] || Award
            return (
              <motion.div
                key={aide.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card to={`/les-aides/${aide.slug}`} className="h-full group text-center">
                  <div className="flex flex-col items-center h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {aide.shortTitle}
                    </h3>

                    {/* Amount */}
                    {aide.amount && (
                      <p className="text-sm text-accent font-semibold mb-3">
                        {aide.amount}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-sm text-neutral-600 flex-1 line-clamp-3">
                      {aide.description}
                    </p>

                    {/* Arrow */}
                    <div className="mt-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {limit && limit < aides.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/les-aides"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25"
            >
              Voir toutes les aides
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </Container>
    </section>
  )
}
