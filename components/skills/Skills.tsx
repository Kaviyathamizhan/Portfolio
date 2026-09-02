import React from 'react'
import { engineeringData } from '@/lib/data'
import { Container, Section } from '@/components/layout'
import { SectionHeading, FadeUp, StaggerContainer, StaggerItem, TechLogo } from '@/components/shared'

export function Skills() {
  return (
    <Section id="skills">
      <Container size="lg">
        <FadeUp>
          <SectionHeading
            subtitle="Skills"
            title="Technical Expertise"
          />
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {engineeringData.map((category) => (
            <StaggerItem key={category.title}>
              <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-6 hover:border-[#52525b] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out h-full">
                <h3 className="font-semibold font-display text-base text-text-primary mb-4 pb-3 border-b border-[#27272a]">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((tech) => (
                    <TechLogo key={tech.name} name={tech.name} />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.15}>
          <p className="mt-8 text-center text-xs font-mono text-text-muted">
            Only technologies with hands-on, production or research experience are listed.
          </p>
        </FadeUp>
      </Container>
    </Section>
  )
}
