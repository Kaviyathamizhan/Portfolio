'use client'

import React, { useState } from 'react'
import { certificationsData } from '@/lib/data'
import { Container, Section } from '@/components/layout'
import { SectionHeading, FadeUp, StaggerContainer, StaggerItem } from '@/components/shared'
import { CertificateModal } from './CertificateModal'
import { Certification } from '@/types'
import { ExternalLink } from 'lucide-react'

export function Certifications() {
  const [selected, setSelected] = useState<Certification | null>(null)

  return (
    <Section id="certifications">
      <Container size="lg">
        <FadeUp>
          <SectionHeading
            subtitle="Certifications"
            title="Professional Credentials"
          />
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificationsData.map((cert) => (
            <StaggerItem key={cert.id}>
              <button
                type="button"
                onClick={() => setSelected(cert)}
                className="w-full text-left rounded-xl border border-[#27272a] bg-[#18181b] p-5 hover:border-[#52525b] hover:bg-[#1f1f26] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-[#52525b]"
              >
                <h3 className="text-sm font-medium text-text-primary mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-text-muted mb-3">{cert.issuer}</p>
                <div className="flex items-center justify-between text-xs text-text-disabled">
                  <span>{cert.issueDate}</span>
                  <span className="flex items-center gap-1 text-text-muted">
                    <ExternalLink className="w-3 h-3" />
                    View
                  </span>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <CertificateModal cert={selected} onClose={() => setSelected(null)} />
      </Container>
    </Section>
  )
}
