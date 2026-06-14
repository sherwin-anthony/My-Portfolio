import { cn } from './cn'

type SectionHeadingProps = {
  align?: 'left' | 'center'
  description: string
  eyebrow: string
  title: string
}

export function SectionHeading({
  align = 'left',
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mx-auto mb-10 max-w-3xl',
        align === 'center' ? 'text-center' : 'text-left',
      )}
    >
      <p className="mb-3 text-sm font-semibold uppercase text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p>
    </div>
  )
}
