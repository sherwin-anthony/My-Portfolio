import { skillCategories } from '../data/portfolio'
import { Card } from './ui/Card'
import { Icon } from './ui/Icon'
import { SectionHeading } from './ui/SectionHeading'
import { SectionShell } from './ui/SectionShell'
import { TechnologyBadge } from './ui/TechnologyBadge'

export function Skills() {
  return (
    <SectionShell id="skills">
      <SectionHeading
        align="center"
        description="A focused technical toolkit for building web applications, integrating APIs, and working with relational data."
        eyebrow="Technical Skills"
        title="Skills organized for recruiter scanning"
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <Card className="flex h-full flex-col p-6" key={category.title}>
            <div className="mb-5 flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" name={category.icon} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{category.description}</p>
              </div>
            </div>

            <div className="mt-auto flex flex-wrap gap-2">
              {category.technologies.map((technology) => (
                <TechnologyBadge
                  iconLabel={technology.iconLabel}
                  key={technology.name}
                  name={technology.name}
                />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}
