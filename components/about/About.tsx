import React from 'react'
import { aboutData } from '@/lib/data'
import { Container, Section } from '@/components/layout'
import { SectionHeading, FadeUp, StaggerContainer, StaggerItem } from '@/components/shared'

const blocks = [
  { key: 'mindset', title: 'Professional Mindset', content: aboutData.mindset },
  { key: 'philosophy', title: 'Engineering Philosophy', content: aboutData.philosophy },
  { key: 'enjoyBuilding', title: 'What I Enjoy Building', content: aboutData.enjoyBuilding },
  { key: 'problemSolving', title: 'Problem-Solving Approach', content: aboutData.problemSolving },
] as const

export function About() {
  return (
    <Section id="about">
      <Container size="lg">
        <FadeUp>
          <SectionHeading
            subtitle="About"
            title="Engineering With Purpose"
          />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <FadeUp delay={0.1}>
            <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-6 md:p-8 h-full">
              <h3 className="text-[17px] font-medium font-display text-text-primary mb-4">Introduction</h3>
              <p className="text-[14.5px] text-text-muted leading-relaxed">{aboutData.introduction}</p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blocks.map(({ key, title, content }) => (
              <StaggerItem key={key}>
                <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-5 h-full hover:border-[#3f3f46] transition-colors">
                  <h4 className="text-[17px] font-medium font-display text-text-primary mb-2">
                    {title}
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed">{content}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  )
}
