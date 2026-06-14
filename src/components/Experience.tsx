import { experienceItems } from '../data/portfolio'
import { Card } from './ui/Card'
import { Icon } from './ui/Icon'
import { SectionHeading } from './ui/SectionHeading'
import { SectionShell } from './ui/SectionShell'

export function Experience() {
  return (
    <SectionShell className="bg-surface/45" id="experience">
      <SectionHeading
        description="Internship experience framed around practical contribution, business requirements, and full stack implementation habits."
        eyebrow="Experience"
        title="Real-world software exposure"
      />

      <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
        <Card className="p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Icon className="h-6 w-6" name="briefcase" />
          </div>
          <h3 className="mt-5 text-xl font-bold text-foreground">Internship Focus</h3>
          <p className="mt-3 leading-7 text-muted">
            Built confidence working with existing systems, understanding business requests, and
            delivering maintainable improvements within a team environment.
          </p>
        </Card>

        <div className="grid gap-5">
          {experienceItems.map((item) => (
            <Card className="p-6" key={item.role}>
              <div className="flex flex-col gap-2 border-b border-border pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-primary">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-bold text-foreground">{item.role}</h3>
                  <p className="mt-1 text-muted">{item.company}</p>
                </div>
                <span className="w-fit rounded-md border border-border bg-surface-muted px-3 py-1.5 text-sm font-semibold text-muted">
                  React + Laravel
                </span>
              </div>

              <ul className="mt-6 grid gap-4">
                {item.highlights.map((highlight) => (
                  <li className="flex gap-3 text-muted" key={highlight}>
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Icon className="h-3.5 w-3.5" name="check" />
                    </span>
                    <span className="leading-7">{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
