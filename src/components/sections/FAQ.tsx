import { motion } from 'framer-motion'
import { Container, SectionHeading, Accordion } from '@/components/common'

interface FAQItem {
  id: string
  title: string
  content: string
}

interface FAQProps {
  title: string
  subtitle?: string
  description?: string
  items: FAQItem[]
}

export function FAQ({ title, subtitle, description, items }: FAQProps) {
  const accordionItems = items.map((item) => ({
    id: item.id,
    title: item.title,
    content: <p>{item.content}</p>,
  }))

  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <Container size="md">
        <SectionHeading
          title={title}
          subtitle={subtitle}
          description={description}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion items={accordionItems} />
        </motion.div>
      </Container>
    </section>
  )
}
