import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { Container } from '@/components/common'
import { siteConfig } from '@/data/siteConfig'

interface CTASectionProps {
  title: string
  description?: string
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  showPhone?: boolean
}

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  showPhone = true,
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-accent via-accent to-accent-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {primaryCTA && (
              <Link
                to={primaryCTA.href}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-white text-accent hover:bg-neutral-100"
              >
                {primaryCTA.label}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            )}

            {secondaryCTA && (
              <Link
                to={secondaryCTA.href}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-accent"
              >
                {secondaryCTA.label}
              </Link>
            )}

            {showPhone && siteConfig.contact.phone && (
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 px-6 py-4 text-white font-semibold hover:bg-white/10 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.contact.phone}
              </a>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
