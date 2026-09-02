import React from 'react'
import { experienceData } from '@/lib/data'
import { Container, Section } from '@/components/layout'
import { SectionHeading, Badge, FadeUp } from '@/components/shared'
import { formatDate } from '@/lib/utils'

export function Experience() {
  return (
    <Section id="experience">
      <Container size="lg">
        <FadeUp>
          <SectionHeading
            subtitle="Work History"
            title="Professional Experience"
          />
        </FadeUp>

        <div className="flex flex-col gap-6">
          {experienceData.map((exp, idx) => (
            <FadeUp key={exp.id} delay={idx * 0.1}>
              <article className="rounded-xl border border-[#27272a] bg-[#18181b] p-6 md:p-8 hover:border-[#52525b] hover:bg-[#1f1f26] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 ease-out">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold font-display text-text-primary mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
                      <span className="text-text-secondary font-medium">{exp.company}</span>
                      {exp.location && (
                        <>
                          <span>·</span>
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-text-muted flex-shrink-0">
                    {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                  </div>
                </div>

                <p className="text-sm md:text-base text-text-muted leading-relaxed mb-4">
                  {exp.description}
                </p>

                {exp.highlights.length > 0 && (
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-xs md:text-sm text-text-muted flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#27272a]">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech.name} size="sm">
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </article>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  )
}
