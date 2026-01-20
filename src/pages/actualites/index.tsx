import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, SectionHeading, Card } from '@/components/common'
import { Hero } from '@/components/sections'
import { articles } from '@/data/articles'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function ActualitesIndex() {
  return (
    <>
      <SEO
        title="Actualités"
        description="Suivez les dernières actualités de la rénovation énergétique : nouvelles aides, conseils pratiques, évolutions réglementaires."
        canonical="/actualites"
      />

      <Hero
        title="Actualités"
        description="Restez informé des dernières nouveautés en matière de rénovation énergétique, d'aides financières et de conseils pratiques."
        variant="centered"
        badge="Blog"
      />

      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeading
            subtitle="Derniers articles"
            title="Nos publications récentes"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  to={`/actualites/${article.slug}`}
                  className="h-full group"
                  padding="none"
                >
                  {/* Article Image */}
                  {article.image ? (
                    <div className="aspect-video overflow-hidden rounded-t-2xl">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 rounded-t-2xl" />
                  )}

                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Date & Link */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center text-accent text-sm font-medium">
                        Lire
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
