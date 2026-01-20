import { type ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string
  badge?: string
  align?: 'left' | 'center' | 'right'
  children?: ReactNode
  className?: string
  dark?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  description,
  badge,
  align = 'center',
  children,
  className,
  dark = false,
}: SectionHeadingProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <div className={cn('max-w-3xl mb-12', alignStyles[align], className)}>
      {badge && (
        <span
          className={cn(
            'inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4',
            dark
              ? 'bg-white/10 text-white'
              : 'bg-accent/10 text-accent'
          )}
        >
          {badge}
        </span>
      )}
      {subtitle && (
        <p
          className={cn(
            'text-sm font-semibold uppercase tracking-wider mb-2',
            dark ? 'text-accent' : 'text-accent'
          )}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight',
          dark ? 'text-white' : 'text-primary'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg',
            dark ? 'text-white/80' : 'text-neutral-600'
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
