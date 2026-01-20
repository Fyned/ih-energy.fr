import { useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, HelpCircle } from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, SectionHeading, Card, Accordion } from '@/components/common'
import { Hero, CTASection, AidesGrid } from '@/components/sections'
import { services } from '@/data/services'

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)

  // Smooth scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (!service) {
    return <Navigate to="/nos-services" replace />
  }

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3)

  // Convert FAQ to accordion format
  const faqItems = service.faq.map((item, index) => ({
    id: String(index + 1),
    title: item.question,
    content: item.answer,
  }))

  return (
    <>
      <SEO
        title={service.seo.title}
        description={service.seo.description}
        canonical={`/nos-services/${service.slug}`}
      />

      <Hero
        title={service.title}
        description={service.description}
        variant="centered"
        badge="Nos services"
        primaryCTA={{
          label: 'Demander un devis gratuit',
          href: '/contact',
        }}
      />

      {/* Long Description Section */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 block">
                Présentation
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
                {service.shortTitle} : une solution efficace
              </h2>
              <div className="prose prose-lg max-w-none text-neutral-600">
                {service.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 block">
                Ce que nous proposons
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
                Nos prestations
              </h2>

              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-primary font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 block">
                Les avantages
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
                Pourquoi choisir cette solution ?
              </h2>

              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-accent/5 border border-accent/20 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-primary font-medium">{benefit}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Process Steps Section */}
      {service.process && service.process.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <Container>
            <SectionHeading
              subtitle="Comment ça marche"
              title="Notre processus d'intervention"
              description="Un accompagnement de A à Z pour votre projet"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {service.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-neutral-50 rounded-2xl p-6 border border-neutral-100"
                >
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Aides Section */}
      <AidesGrid
        subtitle="Financez vos travaux"
        title="Les aides disponibles"
        description="Profitez des nombreuses aides pour financer votre projet"
        limit={4}
      />

      {/* FAQ Section */}
      {faqItems.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 block">
                  Questions fréquentes
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Tout savoir sur {service.shortTitle.toLowerCase()}
                </h2>
                <p className="text-neutral-600 mb-8">
                  Les réponses aux questions les plus posées par nos clients concernant ce service.
                </p>
                <div className="flex items-center gap-4 p-4 bg-accent/5 rounded-xl border border-accent/20">
                  <HelpCircle className="w-8 h-8 text-accent flex-shrink-0" />
                  <p className="text-sm text-neutral-600">
                    Vous avez d'autres questions ? Contactez-nous pour un conseil personnalisé.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Accordion items={faqItems} />
              </motion.div>
            </div>
          </Container>
        </section>
      )}

      {/* Other Services */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <Container>
          <SectionHeading
            subtitle="Découvrez aussi"
            title="Nos autres services"
            description="Découvrez l'ensemble de nos solutions pour améliorer la performance énergétique de votre logement"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((otherService) => (
              <Card
                key={otherService.id}
                to={`/nos-services/${otherService.slug}`}
                className="group"
              >
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {otherService.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                  {otherService.description}
                </p>
                <div className="flex items-center text-accent font-medium text-sm">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/nos-services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
            >
              Voir tous nos services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>

      <CTASection
        title="Prêt à améliorer votre confort ?"
        description="Obtenez votre devis gratuit et découvrez les aides auxquelles vous avez droit."
        primaryCTA={{
          label: 'Demander un devis gratuit',
          href: '/contact',
        }}
        secondaryCTA={{
          label: 'Simuler mes aides',
          href: '/les-aides',
        }}
      />
    </>
  )
}
