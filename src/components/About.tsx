import { Card } from './ui/Card'
import { Icon, type IconName } from './ui/Icon'
import { SectionHeading } from './ui/SectionHeading'
import { SectionShell } from './ui/SectionShell'

type AboutCard = {
  icon: IconName
  title: string
  text: string
}

const aboutCards: AboutCard[] = [
  {
    icon: 'briefcase',
    title: 'Career Objective',
    text: 'Start strong in a junior developer role where I can contribute to production features, learn from experienced engineers, and grow into a dependable full stack contributor.',
  },
  {
    icon: 'code',
    title: 'Problem-Solving Mindset',
    text: 'I enjoy breaking unclear requirements into smaller technical steps, then building interfaces, APIs, and data flows that make the result easier to use and maintain.',
  },
  {
    icon: 'layers',
    title: 'Technical Growth',
    text: 'Internship work strengthened my understanding of MVC, OOP, React + TypeScript screens, Laravel APIs, database integration, and business-focused software delivery.',
  },
]

export function About() {
  return (
    <SectionShell className="bg-surface/45" id="about">
      <SectionHeading
        description="A concise look at the career direction, working style, and technical foundation behind this portfolio."
        eyebrow="About Me"
        title="Fresh graduate with a practical software mindset"
      />

      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-lg border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
          <p className="text-lg leading-8 text-muted">
            I am a Bachelor of Science in Computer Science fresh graduate seeking a Junior
            Software Developer or Full Stack Developer role. My goal is to join a team where I can
            build dependable application features, improve real workflows, and keep learning
            through code reviews, collaboration, and business context.
          </p>
          <p className="mt-5 text-lg leading-8 text-muted">
            I am especially interested in software that connects clear user interfaces with solid
            backend logic. During internship work, I gained experience translating requirements
            into module improvements, handling CRUD operations, and connecting React + TypeScript
            frontends with Laravel API endpoints.
          </p>
        </div>

        <div className="grid gap-4">
          {aboutCards.map((card) => (
            <Card className="p-5" key={card.title}>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" name={card.icon} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{card.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
