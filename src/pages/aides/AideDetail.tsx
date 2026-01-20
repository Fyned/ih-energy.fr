import { useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, FileText, ArrowRight, HelpCircle } from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, SectionHeading, Card, Accordion } from '@/components/common'
import { Hero, CTASection } from '@/components/sections'
import { aides } from '@/data/aides'

export function AideDetail() {
  const { slug } = useParams<{ slug: string }>()
  const aide = aides.find((a) => a.slug === slug)

  // Smooth scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (!aide) {
    return <Navigate to="/les-aides" replace />
  }

  const otherAides = aides.filter((a) => a.id !== aide.id).slice(0, 4)

  // Convert FAQ to accordion format
  const faqItems = aide.faq.map((item, index) => ({
    id: String(index + 1),
    title: item.question,
    content: item.answer,
  }))

  return (
    <>
      <SEO
        title={aide.seo.title}
        description={aide.seo.description}
        canonical={`/les-aides/${aide.slug}`}
      />

      <Hero
        title={aide.title}
        description={aide.description}
        variant="centered"
        badge="Les aides"
        primaryCTA={{
          label: 'Vérifier mon éligibilité',
          href: '/contact',
        }}
      />

      {/* Amount Highlight */}
      {aide.amount && (
        <section className="py-12 bg-accent">
          <Container>
            <div className="text-center text-white">
              <p className="text-lg mb-2">Montant de l'aide</p>
              <p className="text-4xl lg:text-5xl font-bold">{aide.amount}</p>
            </div>
          </Container>
        </section>
      )}

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
                Comprendre {aide.shortTitle}
              </h2>
              <div className="prose prose-lg max-w-none text-neutral-600">
                {aide.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Eligibility & Documents Section */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 block">
                Conditions
              </span>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Qui peut en bénéficier ?
              </h2>

              <ul className="space-y-4">
                {aide.eligibility.map((item, index) => (
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
                    <span className="text-primary">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 block">
                Documents
              </span>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Pièces à fournir
              </h2>

              <ul className="space-y-4">
                {aide.documents.map((doc, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-accent/5 border border-accent/20 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-primary">{doc}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <p className="text-neutral-600 text-sm">
                  <strong className="text-primary">Bon à savoir :</strong> Notre équipe s'occupe
                  du montage complet de votre dossier. Nous vous guidons dans la
                  collecte des documents nécessaires.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Steps Section */}
      {aide.steps && aide.steps.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <Container>
            <SectionHeading
              subtitle="Comment ça marche"
              title="Les étapes pour obtenir cette aide"
              description="Suivez ces étapes simples pour bénéficier de l'aide"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {aide.steps.map((step, index) => (
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

      {/* FAQ Section */}
      {faqItems.length > 0 && (
        <section className="py-20 lg:py-28 bg-neutral-50">
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
                  Tout savoir sur {aide.shortTitle}
                </h2>
                <p className="text-neutral-600 mb-8">
                  Les réponses aux questions les plus posées par nos clients concernant cette aide.
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

      {/* Other Aides */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeading
            subtitle="À découvrir"
            title="Les autres aides disponibles"
            description="Découvrez les autres dispositifs pour financer votre rénovation énergétique"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherAides.map((otherAide) => (
              <Card
                key={otherAide.id}
                to={`/les-aides/${otherAide.slug}`}
                className="group text-center"
              >
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {otherAide.shortTitle}
                </h3>
                {otherAide.amount && (
                  <p className="text-sm text-accent font-semibold mb-3">
                    {otherAide.amount}
                  </p>
                )}
                <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                  {otherAide.description.substring(0, 80)}...
                </p>
                <div className="flex items-center justify-center text-accent text-sm font-semibold mt-auto">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/les-aides"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
            >
              Voir toutes les aides
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>

      <CTASection
        title="Besoin d'accompagnement ?"
        description="Nous nous occupons de toutes vos démarches administratives pour obtenir vos aides."
        primaryCTA={{
          label: 'Demander un devis gratuit',
          href: '/contact',
        }}
        secondaryCTA={{
          label: 'Simuler mes aides',
          href: '/contact',
        }}
      />
    </>
  )
}
