import { motion } from 'framer-motion'
import { Container, SectionHeading } from '@/components/common'

interface Step {
  number: string
  title: string
  description: string
}

interface ProcessStepsProps {
  title: string
  subtitle?: string
  description?: string
  steps: Step[]
}

export function ProcessSteps({ title, subtitle, description, steps }: ProcessStepsProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          title={title}
          subtitle={subtitle}
          description={description}
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent to-accent/30" />
              )}

              {/* Step Number */}
              <div className="relative z-10 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent-dark text-white text-3xl font-bold mb-6 shadow-lg shadow-accent/30">
                {step.number}
              </div>

              <h3 className="text-xl font-bold text-primary mb-3">
                {step.title}
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
