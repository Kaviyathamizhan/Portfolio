import React from 'react'
import { educationData } from '@/lib/data'
import { Container, Section } from '@/components/layout'
import { SectionHeading, FadeUp, StaggerContainer, StaggerItem } from '@/components/shared'
import { School, GraduationCap, ArrowDown } from 'lucide-react'

export function Education() {
  return (
    <Section id="education">
      <Container size="lg">
        <FadeUp>
          <SectionHeading
            subtitle="Education"
            title="Academic Foundation"
          />
        </FadeUp>

        <StaggerContainer className="flex flex-col gap-6">
          {educationData.map((edu, idx) => {
            const isSchool = edu.type === 'school'
            const isLast = idx === educationData.length - 1

            return (
              <React.Fragment key={edu.id}>
                <StaggerItem>
                  <FadeUp delay={idx * 0.1}>
                    <article className="rounded-xl border border-[#27272a] bg-[#18181b] p-6 md:p-8 hover:border-[#52525b] hover:bg-[#1f1f26] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 ease-out relative">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[#27272a] border border-[#3f3f46] flex items-center justify-center text-text-secondary flex-shrink-0 mt-0.5">
                            {isSchool ? <School className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                          </div>
                          <div>
                            <h3 className="text-base md:text-lg font-medium font-display text-text-primary mb-1">
                              {edu.degree}
                            </h3>
                            <p className="text-xs md:text-sm text-text-muted">{edu.institution} {edu.location ? `· ${edu.location}` : ''}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="text-xs font-mono text-text-muted">{edu.duration}</span>
                        </div>
                      </div>

                      {/* Combined School Details (10th + 12th in ONE container) */}
                      {isSchool && edu.schoolDetails && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 rounded-lg bg-[#09090b] border border-[#27272a]">
                          {edu.schoolDetails.map((detail) => (
                            <div key={detail.standard} className="space-y-1.5">
                              <div className="flex items-center justify-between border-b border-[#27272a] pb-2 mb-2">
                                <span className="font-display font-medium text-xs md:text-sm text-text-primary">
                                  {detail.standard}
                                </span>
                                <span className="text-xs font-mono text-text-muted">{detail.year}</span>
                              </div>
                              {detail.specialization && (
                                <p className="text-xs text-text-muted font-mono">{detail.specialization}</p>
                              )}
                              {detail.score && (
                                <p className="text-xs text-text-secondary font-medium">{detail.score}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Coursework */}
                      {edu.coursework.length > 0 && (
                        <div className="mb-5">
                          <h4 className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2.5">
                            Coursework & Focus Areas
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {edu.coursework.map((course) => (
                              <span
                                key={course}
                                className="px-2.5 py-1 rounded-lg bg-[#27272a] text-sm text-text-muted"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Key Highlights */}
                      {edu.achievements.length > 0 && (
                        <div className="pt-4 border-t border-[#27272a]">
                          <ul className="space-y-1.5">
                            {edu.achievements.map((item) => (
                              <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                                <span className="text-text-disabled mt-0.5">—</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </article>
                  </FadeUp>
                </StaggerItem>

                {/* Journey Travel Connector between School and College */}
                {!isLast && (
                  <div className="flex items-center justify-center my-2 text-text-disabled">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-[#3f3f46] to-transparent" />
                      <ArrowDown className="w-3.5 h-3.5 text-text-muted animate-bounce" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
