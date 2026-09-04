'use client'

import React, { useState } from 'react'
import { achievementsData } from '@/lib/data'
import { Container, Section } from '@/components/layout'
import { SectionHeading, Badge, FadeUp } from '@/components/shared'
import { CertificateModal, ModalCertificate } from '@/components/certifications/CertificateModal'
import { ExternalLink, FileText } from 'lucide-react'

export function Achievements() {
  const [selectedCert, setSelectedCert] = useState<ModalCertificate | null>(null)
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
                  <p className="text-xs sm:text-sm text-text-muted uppercase tracking-wider font-mono mb-2 flex flex-wrap items-center gap-2">
                    <span>{featured.organization}</span>
                    <span className="text-text-disabled">·</span>
                    <span>{featured.competition}</span>
                  </p>
                  <h3 className="text-lg md:text-xl font-medium font-display text-text-primary leading-snug">
                    {featured.title}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 flex-shrink-0">
                  {featured.url && (
                    <a
                      href={featured.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 border border-white transition-all group"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-black group-hover:scale-110 transition-transform" />
                      <span>View Repo</span>
                    </a>
                  )}
                  {featured.certificateUrl && (
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCert({
                          title: featured.title,
                          issuer: featured.organization ?? 'Meta & PyTorch',
                          issueDate: String(featured.year),
                          certificateUrl: featured.certificateUrl,
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 border border-white transition-all group"
                    >
                      <FileText className="w-3.5 h-3.5 text-black group-hover:scale-110 transition-transform" />
                      <span>View Certificate</span>
                    </button>
                  )}
                </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {others.map((item) => (
              <FadeUp key={item.id}>
                <div className="h-full flex flex-col justify-between rounded-xl border border-[#27272a] bg-[#18181b] p-6 hover:border-[#52525b] hover:bg-[#1f1f26] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 ease-out">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2 text-xs text-text-muted uppercase tracking-wider font-mono">
                      <span>{item.organization}</span>
                      <span className="text-text-disabled">{item.year}</span>
                    </div>
                    <h4 className="text-base font-semibold text-text-primary mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.built && (
                      <div className="mb-4 text-xs text-text-secondary bg-[#27272a]/50 p-3 rounded-lg border border-[#27272a]">
                        <span className="font-medium text-text-primary block mb-0.5">Built:</span>
                        {item.built}
                      </div>
                    )}
                  </div>

                  <div>
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2 py-0.5 rounded bg-[#27272a] text-text-muted font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-end gap-2.5 pt-3 border-t border-[#27272a]">
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 border border-white transition-all group"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-black group-hover:scale-110 transition-transform" />
                          <span>View Repo</span>
                        </a>
                      )}

                      {item.certificateUrl && (
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedCert({
                              title: item.title,
                              issuer: item.organization,
                              issueDate: String(item.year),
                              certificateUrl: item.certificateUrl,
                            })
                          }
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 border border-white transition-all group"
                        >
                          <FileText className="w-3.5 h-3.5 text-black group-hover:scale-110 transition-transform" />
                          <span>View Certificate</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        )}

        <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      </Container>
    </Section>
  )
}
