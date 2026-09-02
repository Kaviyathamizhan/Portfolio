import React from 'react'
import { Container, Section } from '@/components/layout'
import { SectionHeading, FadeUp } from '@/components/shared'
import { GraduationCap, Briefcase, Trophy, FlaskConical, Rocket, CheckCircle2 } from 'lucide-react'

interface JourneyStep {
  id: string
  year: string
  title: string
  subtitle: string
  category: 'Education' | 'Experience' | 'Hackathon' | 'Research' | 'Production'
  description: string
  highlights: string[]
  icon: React.ReactNode
}

const journeySteps: JourneyStep[] = [
  {
    id: 'foundation',
    year: '2022 — 2026',
    title: 'Core AI/ML Engineering & Academic Foundation',
    subtitle: 'SRM Institute of Science & Technology',
    category: 'Education',
    description: 'Maintained 9.15 / 10 CGPA while mastering deep learning mathematics, reinforcement learning, model quantization, and software engineering discipline.',
    highlights: [
      'Completed DeepLearning.AI Machine Learning & Neural Networks Specialization',
      'Engineered core algorithms in PyTorch, Scikit-Learn, and Python from scratch',
    ],
    icon: <GraduationCap className="w-5 h-5 text-accent" />,
  },
  {
    id: 'internship',
    year: 'Sept 2025 — Mar 2026',
    title: 'ML Engineering Intern',
    subtitle: 'Sure Trust',
    category: 'Experience',
    description: 'Designed and deployed machine learning pipelines, time-series forecasting, and model optimization workflows for real industry data.',
    highlights: [
      'Engineered end-to-end ML training & evaluation pipelines with 94.2% accuracy',
      'Optimized model inference latency for edge deployment environments',
    ],
    icon: <Briefcase className="w-5 h-5 text-primary" />,
  },
  {
    id: 'hackathon',
    year: 'Oct 2025',
    title: 'Top 800 Finalist out of 31,000+ Teams',
    subtitle: 'Meta PyTorch OpenEnv Hackathon',
    category: 'Hackathon',
    description: 'Recognized by Meta and PyTorch for building Pipeline Debug Env — an OpenEnv-compatible RL environment featuring automated fault injection.',
    highlights: [
      'Ranked among top 2.5% of international teams',
      'Built custom OpenEnv-compliant Gym interface for autonomous RL agent testing',
    ],
    icon: <Trophy className="w-5 h-5 text-amber-400" />,
  },
  {
    id: 'research',
    year: 'Nov 2025 — Present',
    title: 'AEDSP & CrisisGrid RL Research Breakthroughs',
    subtitle: 'Independent AI/ML Research',
    category: 'Research',
    description: 'Pioneered energy-driven structured pruning (AEDSP) achieving 59% model compression and trained GRPO disaster response command agents.',
    highlights: [
      'Achieved 59.2% FLOPs reduction with <1.2% accuracy loss on vision transformers',
      'Stabilized Qwen2-1.5B token generation using Group Relative Policy Optimization (GRPO)',
    ],
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: 'production',
    year: '2026 — Present',
    title: 'Production Systems & Agentic Architectures',
    subtitle: 'Flagship Projects Deployment',
    category: 'Production',
    description: 'Architecting production-ready ML infrastructure, Next.js web interfaces, FastAPI backends, and containerized deployment pipelines.',
    highlights: [
      'Shipped 4 flagship production-grade AI applications with verified benchmarks',
      'Configured continuous deployment pipelines on Vercel with strict security headers',
    ],
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
  },
]

export function JourneyTimeline() {
  return (
    <Section id="journey" className="bg-[#050505] relative">
      <Container size="lg">
        <FadeUp>
          <SectionHeading
            number="04"
            subtitle="Career Progression"
            title="Engineering Journey"
            description="How I progressed from foundational ML mathematics to industry internships, hackathons, research breakthroughs, and production AI systems."
          />
        </FadeUp>

        <div className="relative border-l border-[#262626] ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {journeySteps.map((step, idx) => (
            <FadeUp key={step.id} delay={idx * 0.1}>
              <div className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] md:-left-[47px] top-0.5 w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-center group-hover:border-primary/50 group-hover:bg-[#1a1a1a] transition-all shadow-md">
                  {step.icon}
                </div>

                {/* Content card */}
                <div className="rounded-2xl border border-[#262626] bg-[#0d0d0d] p-6 md:p-8 hover:border-[#333333] hover:bg-[#141414] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-xs font-semibold text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                          {step.category}
                        </span>
                        <span className="text-xs font-mono text-text-muted">{step.subtitle}</span>
                      </div>
                      <h3 className="text-xl font-bold font-display text-text-primary group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-text-muted px-3 py-1 rounded-lg bg-[#141414] border border-[#262626] whitespace-nowrap self-start">
                      {step.year}
                    </span>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-text-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  )
}
