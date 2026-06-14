import { useState } from 'react'
import { Icon } from './Icon'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (document.documentElement.classList.contains('dark')) {
    return 'dark'
  }

  return 'light'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    localStorage.setItem('theme', nextTheme)
    setTheme(nextTheme)
  }

  return (
    <button
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-muted transition duration-200 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      onClick={toggleTheme}
      type="button"
    >
      <Icon className="h-4 w-4" name={theme === 'dark' ? 'sun' : 'moon'} />
    </button>
  )
}
