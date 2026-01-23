import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Home, Building2, DoorOpen, Flame, Wind } from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container } from '@/components/common'
import { Hero, CTASection } from '@/components/sections'
import { realisations, categories } from '@/data/realisations'
import { cn } from '@/utils/cn'

const categoryIcons: Record<string, React.ElementType> = {
  ITE: Home,
  Ravalement: Building2,
  Menuiserie: DoorOpen,
  Chauffage: Flame,
  VMC: Wind,
}

export function Realisations() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredRealisations = activeCategory === 'all'
    ? realisations
    : realisations.filter((r) => r.category === activeCategory)

  return (
    <>
      <SEO
        title="Nos réalisations | ITE et ravalement Vosges & Grand Est"
        description="Découvrez nos réalisations en ITE, ravalement de façade et rénovation énergétique dans les Vosges et le Grand Est : Strasbourg, Metz, Nancy, Épinal, Colmar. Photos de nos projets."
        canonical="/nos-realisations"
      />

      <Hero
        title="Nos réalisations"
        description="Découvrez nos projets de rénovation énergétique réalisés dans les Vosges et le Grand Est. ITE, ravalement de façade, menuiseries, chauffage... Nos artisans RGE locaux interviennent à Strasbourg, Metz, Nancy, Épinal, Colmar et dans toute la région."
        variant="centered"
        badge="Portfolio - Vosges & Grand Est"
      />

      <section className="py-20 lg:py-28 bg-white">
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-medium transition-all',
                  activeCategory === category.id
                    ? 'bg-accent text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRealisations.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-neutral-100"
              >
                {/* Image Placeholder with Icon */}
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {(() => {
                      const IconComponent = categoryIcons[project.category] || Home
                      return <IconComponent className="w-16 h-16 text-accent/50 mb-2" />
                    })()}
                    <span className="text-neutral-500 text-xs">Photo à venir</span>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {new Date(project.date).toLocaleDateString('fr-FR', {
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredRealisations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500">
                Aucun projet dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </Container>
      </section>

      <CTASection
        title="Vous avez un projet similaire ?"
        description="Contactez-nous pour une étude gratuite. Nos équipes sont à votre disposition pour répondre à toutes vos questions."
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
