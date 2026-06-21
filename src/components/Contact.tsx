import { personalInfo, socialLinks } from '../data/portfolio'
import { Card } from './ui/Card'
import { Icon } from './ui/Icon'
import { SectionHeading } from './ui/SectionHeading'
import { SectionShell } from './ui/SectionShell'

export function Contact() {
  return (
    <SectionShell className="bg-surface/45" id="contact">
      <SectionHeading
        align="center"
        description="For opportunities, project discussions, or technical interviews, you can reach me directly through these links."
        eyebrow="Contact"
        title="Get in touch"
      />

      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
        {socialLinks.map((link) => {
          const isExternal = link.href.startsWith('http')
          const detail =
            link.icon === 'mail'
              ? personalInfo.email
              : link.href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

          return (
            <Card className="p-5" key={link.label}>
              <a
                className="flex h-full flex-col gap-4 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                href={link.href}
                rel={isExternal ? 'noreferrer' : undefined}
                target={isExternal ? '_blank' : undefined}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" name={link.icon} />
                </span>
                <span>
                  <span className="block text-lg font-bold text-foreground">{link.label}</span>
                  <span className="mt-2 block break-words text-sm leading-6 text-muted">
                    {detail}
                  </span>
                </span>
              </a>
            </Card>
          )
        })}
      </div>
    </SectionShell>
  )
}
