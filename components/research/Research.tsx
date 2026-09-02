import React from 'react'
import { researchData } from '@/lib/data'
import { Container, Section } from '@/components/layout'
import { SectionHeading, Badge, FadeUp } from '@/components/shared'
import { ExternalLink, GitBranchPlus } from 'lucide-react'

export function Research() {
  return (
    <Section id="research">
      <Container size="lg">
        <FadeUp>
          <SectionHeading
            subtitle="Research"
            title="AI Research & Methodologies"
          />
        </FadeUp>

        <div className="flex flex-col gap-8">
          {researchData.map((item, idx) => (
            <FadeUp key={item.id} delay={idx * 0.08}>
              <article className="rounded-xl border border-[#27272a] bg-[#18181b] p-6 md:p-8 hover:border-[#52525b] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-out">
                {/* Research Title */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold font-display text-text-primary leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
                      >
                        <GitBranchPlus className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {item.paper && (
                      <a
                        href={item.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Paper PDF
                      </a>
                    )}
                  </div>
                </div>

                {/* Key Verified Metrics Callout Strip */}
                {item.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-6 mb-6 p-4 rounded-lg bg-[#09090b] border border-[#27272a]">
                    {item.metrics.map((m) => (
                      <div key={m.label} className="space-y-0.5">
                        <p className="text-2xl md:text-3xl font-bold font-display text-text-primary tracking-tight">
                          {m.value}
                        </p>
                        <p className="text-xs font-mono text-text-muted">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Structured Information Grid with Clear Hierarchy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {[
                    { label: 'PROBLEM', content: item.problem },
                    { label: 'RESEARCH GAP', content: item.researchGap },
                    { label: 'SOLUTION / APPROACH', content: item.solution },
                    { label: 'KEY RESULTS & IMPACT', content: item.results },
                    { label: 'FUTURE DIRECTIONS', content: item.futureWork },
                  ].filter(({ content }) => content).map(({ label, content }) => (
                    <div key={label} className="space-y-1.5">
                      <h4 className="text-xs font-bold text-text-primary font-mono uppercase tracking-wider">
                        {label}
                      </h4>
                      <p className="text-sm md:text-base text-text-muted leading-relaxed">{content}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-[#27272a]">
                  {item.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" size="sm">{tech}</Badge>
                  ))}
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  )
}
