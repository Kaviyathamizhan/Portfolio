'use client'

import React, { useState } from 'react'
import { experienceData, additionalExperienceData } from '@/lib/data'
import { Container, Section } from '@/components/layout'
import { SectionHeading, Badge, FadeUp } from '@/components/shared'
import { formatDate } from '@/lib/utils'
import { CertificateModal, ModalCertificate } from '@/components/certifications/CertificateModal'
import { FileText } from 'lucide-react'

export function Experience() {
  const [selectedCert, setSelectedCert] = useState<ModalCertificate | null>(null)

  return (
    <Section id="experience">
      <Container size="lg">
        <FadeUp>
          <SectionHeading
            subtitle="Work History"
            title="Professional Experience"
          />
        </FadeUp>

        {/* Primary Experience Timeline */}
        <div className="flex flex-col gap-6">
          {experienceData.map((exp, idx) => (
            <FadeUp key={exp.id} delay={idx * 0.1}>
              <article className="rounded-xl border border-[#27272a] bg-[#18181b] p-6 md:p-8 hover:border-[#52525b] hover:bg-[#1f1f26] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 ease-out">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold font-display text-text-primary mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-text-muted">
                      <span className="text-text-secondary font-medium">{exp.company}</span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-2">
                          <span className="text-text-disabled">·</span>
                          <span>{exp.location}</span>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-text-muted flex-shrink-0 pt-1">
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
                        <span className="text-white mt-1 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Footer with Technologies & Bottom-Right View Certificate Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#27272a]">
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech.name} size="sm">
                        {tech.name}
                      </Badge>
                    ))}
                  </div>

                  {exp.certificateUrl && (
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCert({
                          title: exp.role,
                          issuer: exp.company,
                          issueDate: `${formatDate(exp.startDate)} — ${formatDate(exp.endDate)}`,
                          certificateUrl: exp.certificateUrl,
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 border border-white transition-all duration-200 self-end sm:self-auto flex-shrink-0 group"
                    >
                      <FileText className="w-3.5 h-3.5 text-black group-hover:scale-110 transition-transform" />
                      <span>View Certificate</span>
                    </button>
                  )}
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        {/* Additional Industry Exposure Subsection */}
        {additionalExperienceData && additionalExperienceData.length > 0 && (
          <div className="mt-14 pt-8 border-t border-[#27272a]/60">
            <FadeUp>
              <div className="mb-6 md:mb-8 flex flex-col items-start text-left">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-text-muted mb-2 font-mono block">
                  Applied Training & Virtual Internships
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-text-primary leading-[1.1]">
                  Additional Industry Exposure
                </h3>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalExperienceData.map((sub, idx) => (
                <FadeUp key={sub.id} delay={idx * 0.05}>
                  <div className="h-full flex flex-col justify-between rounded-xl border border-[#27272a] bg-[#18181b] p-5 hover:border-[#52525b] hover:bg-[#1f1f26] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 ease-out">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-text-muted font-medium line-clamp-1 mb-2 inline-block">
                        {sub.organization}
                      </span>
                      <h4 className="text-sm md:text-base font-semibold text-text-primary mb-1 leading-snug">
                        {sub.role}
                      </h4>
                      <p className="text-xs text-text-muted font-mono mb-3">
                        {sub.duration}
                      </p>
                      <p className="text-xs text-text-secondary leading-relaxed mb-4">
                        {sub.description}
                      </p>
                    </div>

                    <div>
                      {sub.tags && sub.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {sub.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-2 py-0.5 rounded bg-[#27272a] text-text-muted font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="pt-3 border-t border-[#27272a] flex justify-end">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedCert({
                              title: sub.role,
                              issuer: sub.organization,
                              issueDate: sub.duration,
                              certificateUrl: sub.certificateUrl,
                            })
                          }
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 border border-white transition-all duration-200 group"
                        >
                          <FileText className="w-3.5 h-3.5 text-black group-hover:scale-110 transition-transform" />
                          <span>View Certificate</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        )}

        <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      </Container>
    </Section>
  )
}
