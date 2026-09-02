import React from 'react'
import { engineeringData } from '@/lib/data'
import { Container, Section } from '@/components/layout'
import { SectionHeading, FadeUp, StaggerContainer, StaggerItem } from '@/components/shared'
import { Code2 } from 'lucide-react'

export function EngineeringEvidence() {
  return (
    <Section id="evidence" className="bg-[#050505]">
      <Container size="lg">
        <FadeUp>
          <SectionHeading
            number="05"
            subtitle="Tech Stack"
            title="Engineering Evidence"
            description="Technologies and tools I have practical, production experience with — organized by domain."
          />
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {engineeringData.map((category) => (
            <StaggerItem key={category.title}>
              <div className="rounded-2xl border border-[#262626] bg-[#0d0d0d] p-6 md:p-8 hover:border-primary/40 transition-all group h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center text-primary">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold font-display text-base md:text-lg text-text-primary group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-text-secondary font-mono text-xs md:text-sm hover:border-primary/40 hover:text-text-primary transition-all"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.2}>
          <p className="mt-8 text-center text-xs md:text-sm text-text-muted font-mono">
            Only technologies with hands-on, production or research experience are listed.
          </p>
        </FadeUp>
      </Container>
    </Section>
  )
}
