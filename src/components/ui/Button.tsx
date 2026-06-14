import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import { cn } from './cn'
import { Icon, type IconName } from './Icon'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'border-primary bg-primary text-white shadow-[var(--shadow-card)] hover:bg-primary-strong hover:border-primary-strong dark:text-[#081018]',
  secondary:
    'border-border bg-surface text-foreground hover:border-primary/55 hover:text-primary',
  ghost:
    'border-transparent bg-transparent text-muted hover:bg-surface-muted hover:text-foreground',
}

const baseStyles =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

type SharedButtonProps = {
  children: ReactNode
  iconName?: IconName
  iconPosition?: 'left' | 'right'
  variant?: ButtonVariant
}

export function ButtonLink({
  children,
  className,
  iconName,
  iconPosition = 'left',
  target,
  variant = 'primary',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & SharedButtonProps) {
  const icon = iconName ? <Icon className="h-4 w-4 shrink-0" name={iconName} /> : null

  return (
    <a
      className={cn(baseStyles, variantStyles[variant], className)}
      rel={target === '_blank' ? 'noreferrer' : undefined}
      target={target}
      {...props}
    >
      {iconPosition === 'left' ? icon : null}
      <span>{children}</span>
      {iconPosition === 'right' ? icon : null}
    </a>
  )
}

export function Button({
  children,
  className,
  iconName,
  iconPosition = 'left',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & SharedButtonProps) {
  const icon = iconName ? <Icon className="h-4 w-4 shrink-0" name={iconName} /> : null

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      type={type}
      {...props}
    >
      {iconPosition === 'left' ? icon : null}
      <span>{children}</span>
      {iconPosition === 'right' ? icon : null}
    </button>
  )
}
