import { projects, type Project } from '../data/portfolio'
import { ButtonLink } from './ui/Button'
import { Card } from './ui/Card'
import { Icon } from './ui/Icon'
import { SectionHeading } from './ui/SectionHeading'
import { SectionShell } from './ui/SectionShell'
import { TechnologyBadge } from './ui/TechnologyBadge'
import { cn } from './ui/cn'

const visualStyles: Record<Project['type'], string> = {
  ai: 'from-emerald-500/20 via-primary/10 to-surface-muted',
  analytics: 'from-blue-500/20 via-accent/10 to-surface-muted',
  mvc: 'from-slate-500/20 via-primary/10 to-surface-muted',
  mobile: 'from-teal-500/20 via-blue-500/10 to-surface-muted',
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.imageUrl) {
    return (
      <div className="overflow-hidden rounded-lg border border-border bg-surface-muted shadow-[var(--shadow-card)]">
        <img
          alt={`${project.title} screenshot`}
          className="aspect-[2.16/1] w-full object-contain"
          height="720"
          loading="lazy"
          src={project.imageUrl}
          width="1280"
        />
      </div>
    )
  }

  return (
    <div
      aria-label={`${project.title} screenshot placeholder`}
      className={cn(
        'relative overflow-hidden rounded-lg border border-border bg-gradient-to-br p-4',
        visualStyles[project.type],
      )}
      role="img"
    >
      <div className="rounded-md border border-border bg-surface/85 p-3 shadow-[var(--shadow-card)] backdrop-blur-sm">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <span className="h-2 w-20 rounded-full bg-border" />
        </div>

        <div className="grid gap-3 sm:grid-cols-[0.7fr_1fr]">
          <div className="grid gap-2">
            <span className="h-16 rounded-md bg-primary/15" />
            <span className="h-10 rounded-md bg-accent/15" />
          </div>
          <div className="grid gap-2">
            <span className="h-3 rounded-full bg-border" />
            <span className="h-3 rounded-full bg-border" />
            <span className="h-3 w-3/4 rounded-full bg-border" />
            <div className="mt-2 grid grid-cols-3 gap-2">
              <span className="h-12 rounded-md bg-surface-muted" />
              <span className="h-12 rounded-md bg-surface-muted" />
              <span className="h-12 rounded-md bg-surface-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <SectionShell id="projects">
      <SectionHeading
        align="center"
        description="Selected academic, internship-inspired, and practical software projects presented around business value and contribution."
        eyebrow="Featured Projects"
        title="Project work with full stack thinking"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <Card className="flex h-full flex-col overflow-hidden" key={project.title}>
            <div className="p-4">
              <ProjectVisual project={project} />
            </div>

            <div className="flex flex-1 flex-col p-6 pt-2">
              {project.category ? (
                <p className="mb-2 text-sm font-semibold uppercase text-primary">
                  {project.category}
                </p>
              ) : null}
              <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              <p className="mt-3 leading-7 text-muted">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <TechnologyBadge key={technology} name={technology} subtle />
                ))}
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold uppercase text-primary">
                  {project.listLabel ?? 'Key Contributions'}
                </p>
                <ul className="mt-3 grid gap-3">
                  {project.contributions.map((contribution) => (
                    <li className="flex gap-3 text-sm leading-6 text-muted" key={contribution}>
                      <Icon className="mt-1 h-4 w-4 shrink-0 text-accent" name="check" />
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.githubUrl || project.liveUrl ? (
                <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                  {project.githubUrl ? (
                    <ButtonLink
                      className="w-full sm:w-auto"
                      href={project.githubUrl}
                      iconName="github"
                      target="_blank"
                      variant="secondary"
                    >
                      GitHub
                    </ButtonLink>
                  ) : null}
                  {project.liveUrl ? (
                    <ButtonLink
                      className="w-full sm:w-auto"
                      href={project.liveUrl}
                      iconName="external"
                      target="_blank"
                    >
                      Live Demo
                    </ButtonLink>
                  ) : null}
                </div>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}
