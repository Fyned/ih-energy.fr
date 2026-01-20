import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
  href?: string
  to?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({
  children,
  className,
  href,
  to,
  hover = true,
  padding = 'md',
}: CardProps) {
  const baseStyles = cn(
    'bg-white rounded-2xl shadow-sm border border-neutral-100',
    hover && 'transition-all duration-300 hover:shadow-lg hover:border-accent/20 hover:-translate-y-1',
    paddingStyles[padding],
    className
  )

  if (to) {
    return (
      <Link to={to} className={cn(baseStyles, 'block')}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cn(baseStyles, 'block')}>
        {children}
      </a>
    )
  }

  return <div className={baseStyles}>{children}</div>
}
