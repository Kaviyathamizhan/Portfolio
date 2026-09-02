import { AboutContent } from '@/types'
import { personalData } from './personal'

export const aboutData: AboutContent = {
  introduction: personalData.longBio ?? personalData.shortBio,
  mindset:
    'I approach engineering with curiosity and discipline — treating every problem as a system to understand, decompose, and improve. I value clarity over complexity and measurable impact over buzzwords.',
  philosophy:
    'Build systems that are reliable at scale, interpretable in production, and designed with the end user in mind. Good engineering means making the hard parts invisible.',
  enjoyBuilding:
    'End-to-end AI pipelines, agentic environments, forecasting systems, and backend infrastructure that turns models into real products people can depend on.',
  problemSolving:
    'Start with the constraint, define success metrics early, prototype fast, and iterate with data. I break ambiguous problems into testable hypotheses and ship incrementally.',
}
