import { motion } from 'framer-motion'
import { Container, SectionHeading } from '@/components/common'

const partners = [
  {
    name: 'Esso',
    logo: '/images/partners/esso.webp',
  },
  {
    name: 'EDF',
    logo: '/images/partners/edf.webp',
  },
  {
    name: 'ITE-K',
    logo: '/images/partners/itek.webp',
  },
  {
    name: 'Gedimat',
    logo: '/images/partners/gedimat.webp',
  },
]

interface PartnersProps {
  className?: string
}

export function Partners({ className }: PartnersProps) {
  return (
    <section className={`py-16 lg:py-20 bg-neutral-50 ${className || ''}`}>
      <Container>
        <SectionHeading
          subtitle="Nos partenaires"
          title="Ils nous font confiance"
          description="Nous travaillons avec des partenaires de qualité pour vous offrir les meilleures solutions"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
