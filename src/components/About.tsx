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
    text: 'To start my professional career as a Software Developer or Full-Stack Developer, contributing to real-world applications while continuously improving my technical skills, problem-solving abilities, and understanding of software architecture and industry best practices.',
  },
  {
    icon: 'code',
    title: 'Problem-Solving Mindset',
    text: 'I enjoy analyzing requirements, breaking complex problems into manageable tasks, and building solutions that are maintainable, efficient, and focused on delivering value to users and businesses.',
  },
  {
    icon: 'layers',
    title: 'Technical Growth',
    text: 'My internship and project experience strengthened my knowledge of full-stack development, API integration, database design, authentication systems, version control, and modern web technologies. I am committed to continuous learning and adapting to new tools, frameworks, and development practices as technology evolves.',
  }
]

export function About() {
  return (
    <SectionShell className="bg-surface/45" id="about">
      <SectionHeading
        description="A concise look at the career direction, working style, and technical foundation behind this portfolio."
        eyebrow="About Me"
        title="Computer Science Graduate | Full-Stack Developer"
      />

      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-lg border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
          <p className="text-lg leading-8 text-muted">
           I am a Bachelor of Science in Computer Science graduate with hands-on experience developing full-stack web applications using Next.js, React, TypeScript, NestJS, Laravel, PostgreSQL, and Supabase. Through academic projects, internship experience, and personal development work, I have built systems that include authentication, project management, analytics dashboards, database integration, REST APIs, and AI-powered features.
          </p>
          <p className="mt-5 text-lg leading-8 text-muted">
           I enjoy turning business requirements into practical software solutions by designing user-friendly interfaces, developing scalable backend services, and creating reliable database structures. My experience includes working on analytics platforms, management systems, and business websites where I contributed to both frontend and backend development.
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
