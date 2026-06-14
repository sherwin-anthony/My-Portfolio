import type { ReactNode } from 'react'
import { cn } from './cn'

type SectionShellProps = {
  children: ReactNode
  className?: string
  id: string
}

export function SectionShell({ children, className, id }: SectionShellProps) {
  return (
    <section className={cn('scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8', className)} id={id}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}
