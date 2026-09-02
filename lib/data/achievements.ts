import { HackathonAchievement } from '@/types'

export const achievementsData: HackathonAchievement[] = [
  {
    id: 'meta-pytorch-hackathon',
    title: 'Meta PyTorch OpenEnv Hackathon Finalist',
    description:
      'Recognized by Meta and PyTorch out of 31,000+ global teams for building OpenEnv-compliant agentic reinforcement learning environments.',
    year: 2025,
    organization: 'Meta & Scaler',
    url: 'https://github.com/Kaviyathamizhan',
    icon: 'Trophy',
    featured: true,
    competition: 'Meta PyTorch OpenEnv Hackathon',
    selectionScale: 'Top 800 out of 31,000+ international teams',
    problemStatement:
      'Autonomous RL agents often fail in production due to unmodeled system failures and missing fault injection benchmarking in training environments.',
    built:
      'Pipeline Debug Env — a standardized OpenEnv/Gym environment enabling dynamic fault injection and automated agent resilience testing.',
    technologies: ['PyTorch', 'Python', 'OpenEnv', 'Gymnasium', 'Framer Motion'],
    outcome:
      'Selected among the top 2.5% of international teams for architectural resilience and compliance with PyTorch OpenEnv standards.',
  },
]
