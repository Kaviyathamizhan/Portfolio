import React from 'react'
import Image from 'next/image'
import { Experience as ExperienceType } from '@/types'
import { Badge, TechLogo } from '@/components/shared'
import { formatDate } from '@/lib/utils'
import { MapPin, CheckCircle2, Building2 } from 'lucide-react'

interface TimelineItemProps {
  exp: ExperienceType
  index: number
}

export function TimelineItem({ exp, index }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6 md:gap-10">
      <div className="hidden md:flex flex-col items-center flex-shrink-0">
        <div className="relative z-10 w-12 h-12 rounded-full bg-surface-elevated border-2 border-primary flex items-center justify-center text-primary font-mono font-bold text-sm shadow-md shadow-primary/20">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <div className="flex-1 group rounded-2xl border border-border-default bg-surface-card p-6 md:p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-border-default flex items-center justify-center flex-shrink-0 overflow-hidden">
              {exp.companyLogo ? (
                <Image
                  src={exp.companyLogo}
                  alt={`${exp.company} logo`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              ) : (
                <Building2 className="w-5 h-5 text-text-muted" aria-hidden="true" />
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors mb-1">
                {exp.role}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
                <span className="font-semibold text-text-primary">{exp.company}</span>
                {exp.location && (
                  <>
                    <span className="text-border-subtle">·</span>
                    <span className="flex items-center gap-1 text-text-muted">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      {exp.location}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-surface-elevated border border-border-default font-mono text-xs text-text-muted whitespace-nowrap">
            {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
          </div>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-6">{exp.description}</p>

        <div className="mb-6">
          <h4 className="text-xs font-mono font-semibold text-text-muted uppercase tracking-wider mb-3">
            Key Contributions
          </h4>
          <ul className="flex flex-col gap-3" role="list">
            {exp.highlights.map((highlight, hIdx) => (
              <li key={hIdx} className="flex gap-3 items-start">
                <CheckCircle2
                  className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-text-secondary leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-border-default/60">
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => {
              const hasLogo = ['Python', 'FastAPI', 'PyTorch', 'Docker', 'AWS'].includes(tech.name)
              return hasLogo ? (
                <TechLogo key={tech.name} name={tech.name} size={16} />
              ) : (
                <Badge key={tech.name} variant="secondary" size="sm">
                  {tech.name}
                </Badge>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
