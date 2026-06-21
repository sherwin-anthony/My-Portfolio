import managementToolScreenshot from '../assets/projects/management-tool.jpg'
import franchiseAnalyticsScreenshot from '../assets/projects/franchise-analytics-system.jpg'
import type { IconName } from '../components/ui/Icon'

export type NavItem = {
  href: string
  label: string
}

export type SocialLink = {
  href: string
  icon: IconName
  label: string
}

export type SkillTechnology = {
  iconLabel: string
  name: string
}

export type SkillCategory = {
  description: string
  icon: IconName
  technologies: SkillTechnology[]
  title: string
}

export type ExperienceItem = {
  company: string
  highlights: string[]
  period: string
  role: string
}

export type Project = {
  category?: string
  contributions: string[]
  description: string
  githubUrl?: string
  imageUrl?: string
  listLabel?: string
  liveUrl?: string
  stack: string[]
  title: string
  type: 'ai' | 'analytics' | 'mvc' | 'mobile'
}

export const navItems: NavItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const personalInfo = {
  availability: 'Open to Junior Software Developer and Full Stack Developer roles',
  email: 'rabesherwin419@gmail.com',
  headline: 'Junior Software Developer | Full Stack Developer',
  name: 'Sherwin Anthony Rabe',
  resumeFileName: 'Sherwin-Anthony-Rabe-Resume.pdf',
  resumeUrl: '/Sherwin-Anthony-Rabe-Resume.pdf',
  role: 'BS Computer Science Fresh Graduate',
  summary:
    'A Computer Science graduate focused on building reliable and maintainable web applications. I enjoy transforming business requirements into practical software solutions through intuitive user interfaces, efficient backend systems, and data-driven applications. With experience developing analytics dashboards, business monitoring systems, and database-integrated applications, I am passionate about creating software that delivers real value while continuously improving my technical skills and problem-solving abilitiess'

}

export const socialLinks: SocialLink[] = [
  { href: 'https://github.com/sherwin-anthony', icon: 'github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/sherwin-rabe-633253258', icon: 'linkedin', label: 'LinkedIn' },
  { href: `mailto:${personalInfo.email}`, icon: 'mail', label: 'Email' },
]

export const skillCategories: SkillCategory[] = [
  {
    description: 'Core languages used across coursework, application development, and internship work.',
    icon: 'code',
    technologies: [
      { iconLabel: 'JA', name: 'Java' },
      { iconLabel: 'KT', name: 'Kotlin' },
      { iconLabel: 'C#', name: 'C#' },
      { iconLabel: 'PHP', name: 'PHP' },
      { iconLabel: 'SQL', name: 'SQL' },
      { iconLabel: 'TS', name: 'TypeScript' },
      { iconLabel: 'JS', name: 'JavaScript' },
    ],
    title: 'Programming Languages',
  },
  {
    description: 'Modern UI development with component-driven React interfaces and responsive layouts.',
    icon: 'layers',
    technologies: [
      { iconLabel: 'RE', name: 'React' },
      { iconLabel: 'TW', name: 'Tailwind CSS' },
      { iconLabel: 'HT', name: 'HTML' },
      { iconLabel: 'CS', name: 'CSS' },
    ],
    title: 'Frontend Development',
  },
  {
    description: 'Backend implementation for business logic, MVC patterns, and API-backed applications.',
    icon: 'server',
    technologies: [
      { iconLabel: 'LV', name: 'Laravel' },
      { iconLabel: 'API', name: 'REST APIs' },
      { iconLabel: 'MVC', name: 'MVC Architecture' },
      { iconLabel: 'OOP', name: 'Object-Oriented Programming' },
    ],
    title: 'Backend Development',
  },
  {
    description: 'Relational data modeling, query writing, and persistence for CRUD workflows.',
    icon: 'database',
    technologies: [
      { iconLabel: 'MY', name: 'MySQL' },
      { iconLabel: 'PG', name: 'PostgreSQL' },
      { iconLabel: 'SB', name: 'Supabase' },
    ],
    title: 'Databases',
  },
  {
    description: 'Practical experience connecting interfaces to APIs, validating data, and handling state.',
    icon: 'api',
    technologies: [
      { iconLabel: 'JS', name: 'JSON' },
      { iconLabel: 'CR', name: 'CRUD Operations' },
      { iconLabel: 'VD', name: 'Form Validation' },
      { iconLabel: 'INT', name: 'API Integration' },
    ],
    title: 'APIs & Data Handling',
  },
  {
    description: 'Daily development tools for version control, collaboration, debugging, and delivery.',
    icon: 'tools',
    technologies: [
      { iconLabel: 'GT', name: 'Git' },
      { iconLabel: 'GH', name: 'GitHub' },
      { iconLabel: 'VS', name: 'VS Code' },
      { iconLabel: 'NP', name: 'npm' },
    ],
    title: 'Tools & Version Control',
  },
]

export const experienceItems: ExperienceItem[] = [
  {
    company: 'Internal Software Systems',
    highlights: [
      'Contributed to the development of an internal analytics and monitoring system used to track business performance and operational metrics.',
      'Developed and maintained dashboard pages, reports, and data visualizations using PHP, JavaScript, HTML, and CSS',
      'Integrated database queries and backend logic to retrieve, process, and display analytics data from multiple data sources.',
      'Assisted in implementing AI-powered insights and recommendation features to support business decision-making and performance analysis.',
      'Collaborated with the development team to gather requirements, troubleshoot issues, validate data accuracy, and deliver system improvements.',
    ],
    period: 'Internship Experience',
    role: 'Software Developer Intern',
  },
]

export const projects: Project[] = [
  {
    category: 'Website',
    contributions: [
      'Member authentication with role-aware access.',
      'Project management with task assignment and Kanban task movement.',
      'Manager approval, change logs, file uploads, and a role-aware dashboard.',
    ],
    description:
      'Management Tool is a full-stack project management application built for a developer assessment. It uses a Next.js frontend, a NestJS backend, Prisma, and PostgreSQL through Supabase.',
    githubUrl: 'https://github.com/sherwin-anthony/Management-Tool-Task',
    imageUrl: managementToolScreenshot,
    listLabel: 'Main Features',
    liveUrl: 'https://frontend-murex-nine-78.vercel.app/',
    stack: ['Next.js', 'NestJS', 'Axios', 'Prisma', 'Swagger', 'PostgreSQL', 'Vercel'],
    title: 'Management Tool',
    type: 'ai',
  },
  {
    category: 'Website',
    contributions: [
      'KPI Dashboard & Analytics: monitor sales, expenses, inventory performance, and branch health through interactive dashboards.',
      'AI-Powered Insights: generate automated business summaries and actionable recommendations based on branch performance and operational data.',
      'Performance Monitoring & Reporting: compare monthly trends, identify underperforming branches, and visualize business data for informed decision-making.',
    ],
    description:
      'The platform provides visual reports, key business metrics, inventory monitoring, and AI-generated recommendations to support better operational and financial decisions across multiple franchise locations.',
    githubUrl: 'https://github.com/sherwin-anthony/Franchise-Analytics-',
    imageUrl: franchiseAnalyticsScreenshot,
    listLabel: 'Main Features',
    liveUrl: 'https://frontend-murex-nine-78.vercel.app/',
    stack: ['PHP', 'CSS', 'HTML', 'JavaScript', 'PostgreSQL','Vercel'],
    title: 'Franchise Analytics System',
    type: 'analytics',
  },
]
