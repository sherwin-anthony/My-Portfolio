import { useState } from 'react'
import { personalInfo, socialLinks } from '../data/portfolio'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { Icon } from './ui/Icon'
import { SectionHeading } from './ui/SectionHeading'
import { SectionShell } from './ui/SectionShell'
import { cn } from './ui/cn'

type ContactForm = {
  email: string
  message: string
  name: string
}

type ContactErrors = Partial<Record<keyof ContactForm, string>>

const initialForm: ContactForm = {
  email: '',
  message: '',
  name: '',
}

function validateContactForm(form: ContactForm): ContactErrors {
  const errors: ContactErrors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (form.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }

  if (!emailPattern.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (form.message.trim().length < 20) {
    errors.message = 'Please write a message with at least 20 characters.'
  }

  return errors
}

export function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [status, setStatus] = useState('')
  const errors = hasSubmitted ? validateContactForm(form) : {}

  function updateField(field: keyof ContactForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateContactForm(form)
    setHasSubmitted(true)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('')
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name.trim()}`)
    const body = encodeURIComponent(`${form.message.trim()}\n\nReply to: ${form.email.trim()}`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setStatus('Your message is ready in your email client.')
    setForm(initialForm)
    setHasSubmitted(false)
  }

  return (
    <SectionShell className="bg-surface/45" id="contact">
      <SectionHeading
        description="For internships, junior developer opportunities, project discussions, or technical interviews, the fastest path is email or LinkedIn."
        eyebrow="Contact"
        title="Let's talk about the next role"
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-4">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" name="mail" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">Email</h3>
                <a
                  className="mt-2 inline-flex text-muted transition duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  href={`mailto:${personalInfo.email}`}
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </Card>

          {socialLinks
            .filter((link) => link.icon !== 'mail')
            .map((link) => (
              <Card className="p-6" key={link.label}>
                <a
                  className="flex items-center justify-between gap-4 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" name={link.icon} />
                    </span>
                    <span>
                      <span className="block text-lg font-bold text-foreground">{link.label}</span>
                      <span className="mt-1 block text-sm text-muted">View professional profile</span>
                    </span>
                  </span>
                  <Icon className="h-4 w-4 text-muted" name="external" />
                </a>
              </Card>
            ))}
        </div>

        <Card className="p-6">
          <form className="grid gap-5" noValidate onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="name">
                Name
              </label>
              <input
                aria-describedby={errors.name ? 'name-error' : undefined}
                aria-invalid={Boolean(errors.name)}
                className={cn(
                  'min-h-12 w-full rounded-md border bg-background px-4 text-foreground outline-none transition duration-200 placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/15',
                  errors.name ? 'border-red-500' : 'border-border',
                )}
                id="name"
                onChange={(event) => updateField('name', event.target.value)}
                placeholder="Your name"
                type="text"
                value={form.name}
              />
              {errors.name ? (
                <p className="mt-2 text-sm font-medium text-red-500" id="name-error">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="email">
                Email
              </label>
              <input
                aria-describedby={errors.email ? 'email-error' : undefined}
                aria-invalid={Boolean(errors.email)}
                className={cn(
                  'min-h-12 w-full rounded-md border bg-background px-4 text-foreground outline-none transition duration-200 placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/15',
                  errors.email ? 'border-red-500' : 'border-border',
                )}
                id="email"
                onChange={(event) => updateField('email', event.target.value)}
                placeholder="you@example.com"
                type="email"
                value={form.email}
              />
              {errors.email ? (
                <p className="mt-2 text-sm font-medium text-red-500" id="email-error">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="message">
                Message
              </label>
              <textarea
                aria-describedby={errors.message ? 'message-error' : undefined}
                aria-invalid={Boolean(errors.message)}
                className={cn(
                  'min-h-36 w-full resize-y rounded-md border bg-background px-4 py-3 text-foreground outline-none transition duration-200 placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/15',
                  errors.message ? 'border-red-500' : 'border-border',
                )}
                id="message"
                onChange={(event) => updateField('message', event.target.value)}
                placeholder="Share the role, project, or interview details."
                value={form.message}
              />
              {errors.message ? (
                <p className="mt-2 text-sm font-medium text-red-500" id="message-error">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <Button className="w-full sm:w-fit" iconName="mail" type="submit">
              Send Message
            </Button>

            {status ? <p className="text-sm font-medium text-accent">{status}</p> : null}
          </form>
        </Card>
      </div>
    </SectionShell>
  )
}
