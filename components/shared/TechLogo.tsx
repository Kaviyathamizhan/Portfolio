import React from 'react'
import {
  siPython,
  siTypescript,
  siJavascript,
  siFastapi,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siPytorch,
  siScikitlearn,
  siHuggingface,
  siPandas,
  siDuckdb,
  siPostgresql,
  siDocker,
  siVercel,
  siGithub,
} from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, SimpleIcon> = {
  Python: siPython,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  FastAPI: siFastapi,
  'Next.js': siNextdotjs,
  React: siReact,
  'Tailwind CSS': siTailwindcss,
  PyTorch: siPytorch,
  'Scikit-learn': siScikitlearn,
  'Hugging Face': siHuggingface,
  Transformers: siHuggingface,
  'Pandas & NumPy': siPandas,
  DuckDB: siDuckdb,
  PostgreSQL: siPostgresql,
  'SQL & SQLAlchemy': siPostgresql,
  Docker: siDocker,
  Vercel: siVercel,
  'Git & GitHub Workflows': siGithub,
}

interface TechLogoProps {
  name: string
  size?: number
  className?: string
  showLabel?: boolean
}

export function TechLogo({ name, size = 18, className, showLabel = true }: TechLogoProps) {
  const icon = ICON_MAP[name]
  const color = icon ? `#${icon.hex}` : undefined

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-default bg-surface-elevated text-text-secondary text-xs font-medium transition-all duration-200 hover:shadow-sm group/skill',
        className
      )}
      style={color ? { ['--skill-color' as string]: color } : undefined}
    >
      {icon ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className="flex-shrink-0 transition-colors duration-200 group-hover/skill:text-[var(--skill-color)]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <span className="w-[18px] h-[18px] rounded bg-surface-secondary flex items-center justify-center text-[10px] font-mono text-text-muted">
          {name.slice(0, 1)}
        </span>
      )}
      {showLabel ? <span>{name}</span> : null}
    </span>
  )
}
