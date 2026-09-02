import React from 'react'
import { projectsData, supportingProjectsData } from '@/lib/data'
import { Container, Section } from '@/components/layout'
import { SectionHeading, FadeUp, StaggerContainer, StaggerItem } from '@/components/shared'
import { ProjectFlipCard } from './ProjectFlipCard'

export function Projects() {
  const all = [
    ...projectsData.filter((p) => p.featured),
    ...projectsData.filter((p) => !p.featured),
  ]

  return (
    <Section id="projects" className="bg-[#050505]">
      <Container size="lg">
        <FadeUp>
          <SectionHeading
            number="05"
            subtitle="Projects"
            title="Flagship Engineering Projects"
            description="Production-grade AI systems with verified metrics. Click any card to flip and inspect full achievements, metrics, and code."
          />
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {all.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectFlipCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Supporting Projects Subsection */}
        <div className="mt-14 md:mt-16 pt-10 border-t border-[#1f1f23]">
          <FadeUp>
            <div className="mb-6 md:mb-8">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-text-muted mb-2 block font-mono">
                Supporting Projects
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-text-primary">
                More Engineering Work
              </h3>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {supportingProjectsData.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectFlipCard project={project} size="sm" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  )
}
