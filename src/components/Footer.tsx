import { personalInfo, socialLinks } from '../data/portfolio'
import { Icon } from './ui/Icon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Copyright {year} {personalInfo.name}. Built with React, TypeScript, Vite, and Tailwind CSS.
        </p>

        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              aria-label={link.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-muted transition duration-200 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              href={link.href}
              key={link.label}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              target={link.href.startsWith('http') ? '_blank' : undefined}
            >
              <Icon className="h-4 w-4" name={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
