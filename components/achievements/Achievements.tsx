import React from 'react'
import { achievementsData } from '@/lib/data'
import { Container, Section } from '@/components/layout'
import { SectionHeading, Badge, FadeUp } from '@/components/shared'
import { ExternalLink } from 'lucide-react'

export function Achievements() {
  const featured = achievementsData.find((a) => a.featured)
  const others = achievementsData.filter((a) => !a.featured)

  return (
    <Section id="achievements">
      <Container size="lg">
        <FadeUp>
          <SectionHeading
            subtitle="Achievements"
            title="Honors & Milestones"
          />
        </FadeUp>

        {featured && (
          <FadeUp delay={0.08} className="mb-8">
            <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-6 md:p-8 hover:border-[#52525b] hover:bg-[#1f1f26] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 ease-out">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-sm text-text-muted uppercase tracking-wider mb-2">
                    {featured.competition ?? 'Achievement'}
                  </p>
                  <h3 className="text-lg md:text-xl font-medium font-display text-text-primary leading-snug">
                    {featured.title}
                  </h3>
                </div>
                {featured.url && (
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors flex-shrink-0"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Repository
                  </a>
                )}
              </div>

              {featured.selectionScale && (
                <p className="text-sm text-text-muted mb-5">{featured.selectionScale}</p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {featured.problemStatement && (
                  <div>
                    <h4 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-1.5">Problem</h4>
                    <p className="text-sm text-text-muted leading-relaxed">{featured.problemStatement}</p>
                  </div>
                )}
                {featured.built && (
                  <div>
                    <h4 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-1.5">Built</h4>
                    <p className="text-sm text-text-muted leading-relaxed">{featured.built}</p>
                  </div>
                )}
              </div>

              {featured.outcome && (
                <p className="text-sm text-text-secondary mb-5">
                  {featured.outcome}
                </p>
              )}

              {featured.technologies && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#27272a]">
                  {featured.technologies.map((t) => (
                    <Badge key={t} variant="secondary" size="sm">{t}</Badge>
                  ))}
                </div>
              )}
            </div>
          </FadeUp>
        )}

        {others.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((item) => (
              <FadeUp key={item.id}>
                <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-5 hover:border-[#52525b] hover:bg-[#1f1f26] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 ease-out">
                  <h4 className="text-sm font-medium text-text-primary mb-2">{item.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed mb-3">{item.description}</p>
                  <div className="flex items-center justify-between text-xs text-text-disabled">
                    <span>{item.organization}</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        )}
      </Container>
    </Section>
  )
}
