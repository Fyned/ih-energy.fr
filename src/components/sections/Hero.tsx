import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button, Container } from '@/components/common'
import { cn } from '@/utils/cn'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  features?: string[]
  image?: string
  variant?: 'default' | 'centered' | 'split'
  dark?: boolean
  badge?: string
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  features,
  image,
  variant = 'default',
  dark = false,
  badge,
}: HeroProps) {
  const isCentered = variant === 'centered'

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        dark
          ? 'bg-gradient-to-br from-primary via-primary-light to-primary'
          : 'bg-gradient-to-br from-neutral-50 via-white to-accent/5'
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className={cn(
            'absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl',
            dark ? 'bg-accent/20' : 'bg-accent/30'
          )}
        />
        <div
          className={cn(
            'absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl',
            dark ? 'bg-accent/10' : 'bg-accent/20'
          )}
        />
      </div>

      <Container className="relative">
        <div
          className={cn(
            'py-20 lg:py-32',
            isCentered
              ? 'text-center max-w-4xl mx-auto'
              : 'grid lg:grid-cols-2 gap-12 items-center'
          )}
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={isCentered ? '' : 'lg:pr-8'}
          >
            {badge && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className={cn(
                  'inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-6',
                  dark
                    ? 'bg-accent text-white'
                    : 'bg-accent/10 text-accent'
                )}
              >
                {badge}
              </motion.span>
            )}

            {subtitle && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={cn(
                  'text-sm font-semibold uppercase tracking-wider mb-4',
                  dark ? 'text-accent' : 'text-accent'
                )}
              >
                {subtitle}
              </motion.p>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={cn(
                'text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight',
                dark ? 'text-white' : 'text-primary'
              )}
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={cn(
                  'mt-6 text-lg lg:text-xl leading-relaxed',
                  dark ? 'text-white/80' : 'text-neutral-600',
                  isCentered ? 'max-w-2xl mx-auto' : 'max-w-xl'
                )}
              >
                {description}
              </motion.p>
            )}

            {features && features.length > 0 && (
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={cn(
                  'mt-8 space-y-3',
                  isCentered && 'flex flex-wrap justify-center gap-4'
                )}
              >
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className={cn(
                      'flex items-center gap-3',
                      dark ? 'text-white/90' : 'text-neutral-700'
                    )}
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </motion.ul>
            )}

            {(primaryCTA || secondaryCTA) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={cn(
                  'mt-10 flex flex-wrap gap-4',
                  isCentered && 'justify-center'
                )}
              >
                {primaryCTA && (
                  <Button to={primaryCTA.href} size="lg">
                    {primaryCTA.label}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                )}
                {secondaryCTA && (
                  <Button
                    to={secondaryCTA.href}
                    variant={dark ? 'outline' : 'ghost'}
                    size="lg"
                  >
                    {secondaryCTA.label}
                  </Button>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Image */}
          {image && !isCentered && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={image}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent/30 rounded-full -z-10" />
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  )
}
