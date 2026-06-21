import profilePhoto from '../assets/profile.jpg'
import { personalInfo, socialLinks } from '../data/portfolio'
import { ButtonLink } from './ui/Button'
import { Icon } from './ui/Icon'

const heroStrengths = ['React with TypeScript + Laravel', 'Next.js + Nest.ts', 'PostgreSQL / Supabase',]

export function Hero() {
  return (
    <section className="overflow-hidden px-4 pb-20 pt-14 sm:px-6 lg:px-8" id="home">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="motion-safe:animate-[fadeUp_650ms_ease-out_both]">
          <p className="mb-5 inline-flex rounded-md border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
            {personalInfo.role}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            {personalInfo.name}
            <span className="mt-3 block text-2xl font-semibold text-muted sm:text-3xl">
              {personalInfo.headline}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{personalInfo.summary}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#projects" iconName="arrowRight" iconPosition="right">
              View Projects
            </ButtonLink>
            <ButtonLink
              download={personalInfo.resumeFileName}
              href={personalInfo.resumeUrl}
              iconName="download"
              variant="secondary"
            >
              Download Resume
            </ButtonLink>
            <ButtonLink href="#contact" iconName="mail" variant="ghost">
              Contact Me
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => (
              <a
                aria-label={link.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface text-muted transition duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                href={link.href}
                key={link.label}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                target={link.href.startsWith('http') ? '_blank' : undefined}
              >
                <Icon className="h-5 w-5" name={link.icon} />
              </a>
            ))}
            <span className="text-sm font-medium text-muted">{personalInfo.availability}</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md motion-safe:animate-[fadeUp_800ms_ease-out_both]">
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)]">
            <div
              className="flex aspect-[4/5] flex-col justify-between rounded-xl border border-border bg-[linear-gradient(135deg,var(--surface-muted),var(--surface))] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-background px-3 py-1 text-sm font-semibold text-muted">
                  Portfolio
                </span>
                <span className="h-3 w-3 rounded-full bg-accent" />
              </div>
              <div className="grid place-items-center">
                <img
                  alt={`${personalInfo.name} profile photo`}
                  className="h-36 w-36 rounded-full border border-border bg-surface object-cover shadow-[var(--shadow-card)]"
                  height="144"
                  src={profilePhoto}
                  width="144"
                />
              </div>
              <div>
                <p className="text-xl font-bold text-foreground">Fresh Graduate Developer</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Practical full stack foundation, internship exposure, and a steady focus on
                  clean, useful software.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {heroStrengths.map((strength) => (
              <div
                className="rounded-lg border border-border bg-surface p-3 text-center text-sm font-semibold text-foreground shadow-[var(--shadow-card)]"
                key={strength}
              >
                {strength}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
