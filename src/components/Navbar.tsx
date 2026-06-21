import { useState } from 'react'
import { navItems, personalInfo } from '../data/portfolio'
import { Icon } from './ui/Icon'
import { ThemeToggle } from './ui/ThemeToggle'
import { cn } from './ui/cn'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          className="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          href="#home"
          onClick={closeMenu}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-foreground text-sm font-bold text-background">
            S
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-bold text-foreground">{personalInfo.name}</span>
            <span className="mt-1 hidden text-xs text-muted sm:inline">Developer Portfolio</span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              className="rounded-md px-3 py-2 text-sm font-medium text-muted transition duration-200 hover:bg-surface-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-muted transition duration-200 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <Icon className="h-5 w-5" name={isOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          'border-t border-border bg-background px-4 py-4 md:hidden',
          isOpen ? 'block' : 'hidden',
        )}
        id="mobile-navigation"
      >
        <nav aria-label="Mobile navigation" className="mx-auto grid max-w-6xl gap-2">
          {navItems.map((item) => (
            <a
              className="rounded-md px-3 py-3 text-sm font-semibold text-muted transition duration-200 hover:bg-surface-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
