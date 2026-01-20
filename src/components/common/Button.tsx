import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
    to?: never
  }

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    to?: never
  }

type ButtonAsRouterLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href?: never
    to: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-dark focus:ring-accent/50 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30',
  secondary:
    'bg-primary text-white hover:bg-primary-light focus:ring-primary/50',
  outline:
    'border-2 border-accent text-accent hover:bg-accent hover:text-white focus:ring-accent/50',
  ghost:
    'text-primary hover:bg-neutral-100 focus:ring-primary/50',
  dark:
    'bg-primary text-white hover:bg-primary-light focus:ring-primary/50',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  { variant = 'primary', size = 'md', fullWidth = false, className, children, ...props },
  ref
) {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className
  )

  if ('to' in props && props.to) {
    const { to, ...rest } = props
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        to={to}
        className={baseStyles}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={baseStyles}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={baseStyles}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
})
