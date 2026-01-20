import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Flame, Sun, Droplets, Wind, ArrowRight } from 'lucide-react'
import { Container, SectionHeading, Card } from '@/components/common'
import { services } from '@/data/services'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  flame: Flame,
  sun: Sun,
  droplets: Droplets,
  wind: Wind,
}

interface ServiceCardsProps {
  title: string
  subtitle?: string
  description?: string
  showAll?: boolean
}

export function ServiceCards({ title, subtitle, description, showAll = true }: ServiceCardsProps) {
  const displayedServices = showAll ? services : services.slice(0, 4)

  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <Container>
        <SectionHeading
          title={title}
          subtitle={subtitle}
          description={description}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Home
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card to={`/nos-services/${service.slug}`} className="h-full group" padding="none">
                  <div className="flex flex-col h-full">
                    {/* Service Image */}
                    {service.image ? (
                      <div className="aspect-video overflow-hidden rounded-t-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 rounded-t-2xl flex items-center justify-center">
                        <Icon className="w-12 h-12 text-accent/50" />
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-1">
                      {/* Icon Badge */}
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center -mt-12 mb-4 relative z-10 border-4 border-white group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-neutral-600 mb-6 flex-1 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Link */}
                      <div className="flex items-center text-accent font-semibold group-hover:gap-3 transition-all">
                        En savoir plus
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/nos-services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
            >
              Découvrir tous nos services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </Container>
    </section>
  )
}
