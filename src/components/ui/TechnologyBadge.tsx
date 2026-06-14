import { cn } from './cn'

type TechnologyBadgeProps = {
  iconLabel?: string
  name: string
  subtle?: boolean
}

export function TechnologyBadge({ iconLabel, name, subtle = false }: TechnologyBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition duration-200',
        subtle
          ? 'border-border bg-surface-muted text-muted'
          : 'border-border bg-surface text-foreground hover:border-primary/50 hover:text-primary',
      )}
    >
      {iconLabel ? (
        <span className="flex h-6 min-w-6 items-center justify-center rounded bg-surface-muted px-1 text-xs font-bold text-primary">
          {iconLabel}
        </span>
      ) : null}
      {name}
    </span>
  )
}
