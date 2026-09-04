'use client'

import React, { useState } from 'react'
import { certificationsData } from '@/lib/data'
import { Container, Section } from '@/components/layout'
import { SectionHeading, FadeUp } from '@/components/shared'
import { CertificateModal, ModalCertificate } from './CertificateModal'
import { BrandLogo } from './BrandLogo'
import { Certification } from '@/types'
import { FileText } from 'lucide-react'

export function Certifications() {
  const [selected, setSelected] = useState<ModalCertificate | null>(null)

  // Split into 2 rows for opposite continuous horizontal motion
  const half = Math.ceil(certificationsData.length / 2)
  const row1 = certificationsData.slice(0, half)
  const row2 = certificationsData.slice(half)

  const renderCard = (cert: Certification, keySuffix: string | number) => (
    <div
      key={`${cert.id}-${keySuffix}`}
      role="button"
      tabIndex={0}
      onClick={() =>
        setSelected({
          title: cert.title,
          issuer: cert.issuer,
          issueDate: cert.issueDate,
          certificateUrl: cert.certificateUrl,
          credentialUrl: cert.credentialUrl,
        })
      }
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setSelected({
            title: cert.title,
            issuer: cert.issuer,
            issueDate: cert.issueDate,
            certificateUrl: cert.certificateUrl,
            credentialUrl: cert.credentialUrl,
          })
        }
      }}
      className="w-[300px] sm:w-[340px] md:w-[360px] min-h-[170px] flex-shrink-0 flex flex-col justify-between text-left rounded-xl border border-[#27272a] bg-[#18181b] p-5 hover:border-[#52525b] hover:bg-[#1f1f26] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 ease-out cursor-pointer group focus:outline-none focus-visible:ring-1 focus-visible:ring-white select-none"
    >
      <div>
        {/* Organization Brand Logo & Prominent Issuer Name */}
        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-11 h-11 rounded-lg bg-black/50 border border-[#27272a] flex items-center justify-center p-2 flex-shrink-0 group-hover:border-[#3f3f46] transition-colors">
            <BrandLogo issuerLogo={cert.issuerLogo} issuer={cert.issuer} className="w-full h-full object-contain" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm sm:text-base font-semibold font-display text-text-primary truncate">
              {cert.issuer}
            </p>
            <p className="text-xs font-mono text-text-muted">
              {cert.issueDate}
            </p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xs sm:text-sm font-medium text-text-secondary leading-snug line-clamp-2 mb-2 group-hover:text-text-primary transition-colors">
          {cert.title}
        </h3>
      </div>

      {/* Footer with Unified White/Black View Certificate Button */}
      <div className="flex items-center justify-end pt-3 border-t border-[#27272a]/80 mt-1">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-black bg-white group-hover:bg-neutral-200 border border-white transition-all duration-200">
          <FileText className="w-3.5 h-3.5 text-black" />
          <span>View Certificate</span>
        </span>
      </div>
    </div>
  )

  return (
    <Section id="certifications" className="overflow-hidden">
      <Container size="lg">
        <FadeUp>
          <SectionHeading
            subtitle="Certifications"
            title="Professional Credentials"
          />
        </FadeUp>
      </Container>

      {/* Full-width interactive double-row marquee container */}
      <div className="relative w-full overflow-hidden py-4 marquee-container">
        {/* Left & Right gradient edge fades */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#09090b] via-[#09090b]/80 to-transparent z-10"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-5">
          {/* Row 1: Continuous Left -> Right */}
          <div className="w-full overflow-hidden flex">
            <div className="animate-marquee-right flex gap-4 pr-4">
              {row1.map((c, i) => renderCard(c, `r1-a-${i}`))}
              {row1.map((c, i) => renderCard(c, `r1-b-${i}`))}
            </div>
          </div>

          {/* Row 2: Continuous Right -> Left */}
          <div className="w-full overflow-hidden flex">
            <div className="animate-marquee-left flex gap-4 pr-4">
              {row2.map((c, i) => renderCard(c, `r2-a-${i}`))}
              {row2.map((c, i) => renderCard(c, `r2-b-${i}`))}
            </div>
          </div>
        </div>
      </div>

      <CertificateModal cert={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
