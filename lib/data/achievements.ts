import { HackathonAchievement } from '@/types'

export const achievementsData: HackathonAchievement[] = [
  {
    id: 'meta-pytorch-hackathon',
    title: 'Meta PyTorch OpenEnv Hackathon — Round 1 Qualified & Finalist',
    description:
      'Recognized by Meta and PyTorch out of 31,000+ global teams for building OpenEnv-compliant agentic reinforcement learning environments.',
    year: 2026,
    organization: 'Meta & Scaler',
    url: 'https://github.com/Kaviyathamizhan',
    certificateUrl: '/certificates/FinalistCard Meta Hackathon.pdf',
    icon: 'Trophy',
    featured: true,
    competition: 'Meta PyTorch OpenEnv Hackathon',
    selectionScale: 'Top 800 Finalist out of 31,000+ international teams',
    problemStatement:
      'Autonomous RL agents often fail in production due to unmodeled system failures and missing fault injection benchmarking in training environments.',
    built:
      'Pipeline Debug Env — a standardized OpenEnv/Gym environment enabling dynamic fault injection and automated agent resilience testing.',
    technologies: ['PyTorch', 'Python', 'OpenEnv', 'Gymnasium'],
    outcome:
      'Selected among the top 2.5% of international teams for architectural resilience and compliance with PyTorch OpenEnv standards.',
  },
  {
    id: 'ibm-bob-hackathon',
    title: 'IBM Bob Generative AI Hackathon',
    description:
      'Engineered an intelligent enterprise onboarding assistant leveraging IBM Granite foundation models, Streamlit, and conversational retrieval.',
    year: 2026,
    organization: 'IBM & Lablab.ai',
    url: 'https://github.com/Kaviyathamizhan',
    certificateUrl: '/certificates/IBM Bob Hackathon-certificate.pdf',
    icon: 'Sparkles',
    featured: false,
    competition: 'IBM Bob Hackathon',
    selectionScale: 'Global Generative AI Hackathon Submission',
    problemStatement:
      'New hires face fragmented documentation, slow response times, and high onboarding friction across distributed teams.',
    built:
      'Bob Onboarding Assistant — an enterprise conversational agent powered by IBM Granite for automated knowledge base querying and guided onboarding.',
    technologies: ['IBM Granite', 'Generative AI', 'Python', 'Streamlit', 'RAG'],
    outcome:
      'Successfully deployed end-to-end AI assistant and earned official IBM Bob Hackathon completion credentials.',
  },
  {
    id: 'college-project-expo-robot',
    title: 'College Project Expo — 4-in-1 Autonomous Robot',
    description:
      'Engineered a multi-functional autonomous IoT robotic vehicle combining obstacle avoidance, environmental telemetry, surveillance, and automated navigation.',
    year: 2025,
    organization: 'Department Technical Symposium & Project Expo',
    url: 'https://github.com/Kaviyathamizhan',
    icon: 'Award',
    featured: false,
    competition: 'Annual Engineering Project Expo',
    selectionScale: 'Departmental & Inter-College Innovation Showcase',
    problemStatement:
      'Traditional inspection and monitoring rovers are single-purpose, expensive, and inflexible in diverse physical terrain conditions.',
    built:
      '4-in-1 Multi-Functional Robot — an integrated hardware-software platform featuring ultrasonic sensing, motor driver controls, and wireless telemetry.',
    technologies: ['IoT & Embedded C', 'ESP32 / Arduino', 'Hardware Interfacing', 'Robotics'],
    outcome:
      'Awarded top project recognition for practical hardware-software integration and multi-purpose automated capability.',
  },
]

