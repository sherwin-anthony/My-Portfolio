import type { SVGProps } from 'react'

const icons = {
  arrowRight: {
    paths: ['M5 12h14', 'm13 6 6 6-6 6'],
  },
  download: {
    paths: ['M12 3v12', 'm7 10 5 5 5-5', 'M5 21h14'],
  },
  mail: {
    paths: ['M4 6h16v12H4z', 'm4 7 8 5 8-5'],
  },
  github: {
    fill: true,
    paths: [
      'M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.3 1.8 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.2 5 18.2 5.3 18.2 5.3c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.2v3.5c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z',
    ],
  },
  linkedin: {
    fill: true,
    paths: [
      'M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V9.5h3V19ZM6.5 8.2A1.7 1.7 0 1 1 6.5 4.8a1.7 1.7 0 0 1 0 3.4ZM19 19h-3v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V19h-3V9.5h2.9v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.6V19Z',
    ],
  },
  external: {
    paths: ['M14 4h6v6', 'M10 14 20 4', 'M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5'],
  },
  menu: {
    paths: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  },
  close: {
    paths: ['m6 6 12 12', 'M18 6 6 18'],
  },
  sun: {
    paths: ['M12 4V2', 'M12 22v-2', 'm4.95-14.95 1.42-1.42', 'M5.64 18.36l1.41-1.41', 'M20 12h2', 'M2 12h2', 'm16.36 6.36-1.41-1.41', 'M5.64 5.64l1.41 1.41', 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z'],
  },
  moon: {
    paths: ['M21 12.8A8.5 8.5 0 1 1 11.2 3 6.6 6.6 0 0 0 21 12.8Z'],
  },
  code: {
    paths: ['m8 9-4 3 4 3', 'm16 9 4 3-4 3', 'm14 5-4 14'],
  },
  server: {
    paths: ['M4 5h16v6H4z', 'M4 13h16v6H4z', 'M7 8h.01', 'M7 16h.01'],
  },
  database: {
    paths: ['M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3Z', 'M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6', 'M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6'],
  },
  api: {
    paths: ['M8 8h8v8H8z', 'M4 12h4', 'M16 12h4', 'M12 4v4', 'M12 16v4'],
  },
  tools: {
    paths: ['M14.7 6.3a4 4 0 0 0-5 5L4 17v3h3l5.7-5.7a4 4 0 0 0 5-5l-2.4 2.4-2.8-2.8 2.2-2.6Z'],
  },
  briefcase: {
    paths: ['M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1', 'M4 7h16v12H4z', 'M4 12h16'],
  },
  check: {
    paths: ['m5 12 4 4L19 6'],
  },
  user: {
    paths: ['M20 21a8 8 0 1 0-16 0', 'M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z'],
  },
  layers: {
    paths: ['m12 3 9 5-9 5-9-5 9-5Z', 'm3 12 9 5 9-5', 'm3 16 9 5 9-5'],
  },
} as const

export type IconName = keyof typeof icons

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
}

export function Icon({ name, className, ...props }: IconProps) {
  const icon = icons[name]
  const isFilled = 'fill' in icon && icon.fill

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill={isFilled ? 'currentColor' : 'none'}
      focusable="false"
      stroke={isFilled ? undefined : 'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={isFilled ? undefined : 1.8}
      viewBox="0 0 24 24"
      {...props}
    >
      {icon.paths.map((path) => (
        <path d={path} key={path} />
      ))}
    </svg>
  )
}
