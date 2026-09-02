import { EngineeringCategory } from '@/types'

export const engineeringData: EngineeringCategory[] = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'Python', category: 'Language' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'JavaScript', category: 'Language' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'FastAPI', category: 'Framework' },
      { name: 'Next.js', category: 'Framework' },
      { name: 'React', category: 'Framework' },
      { name: 'Tailwind CSS', category: 'Framework' },
    ],
  },
  {
    title: 'AI / ML',
    items: [
      { name: 'PyTorch', category: 'Library' },
      { name: 'Scikit-learn', category: 'Library' },
      { name: 'LightGBM', category: 'Library' },
      { name: 'Hugging Face', category: 'Library' },
      { name: 'Transformers', category: 'Library' },
    ],
  },
  {
    title: 'Deep Learning',
    items: [
      { name: 'LoRA & QLoRA', category: 'Tool' },
      { name: 'LLM Fine-Tuning', category: 'Tool' },
      { name: 'Reinforcement Learning (GRPO)', category: 'Tool' },
      { name: 'Structured Pruning', category: 'Tool' },
      { name: 'Knowledge Distillation', category: 'Tool' },
      { name: 'RAG Architecture', category: 'Tool' },
    ],
  },
  {
    title: 'Data Science',
    items: [
      { name: 'Pandas & NumPy', category: 'Library' },
      { name: 'Time-Series Forecasting', category: 'Tool' },
      { name: 'Feature Engineering', category: 'Tool' },
      { name: 'Exploratory Data Analysis', category: 'Tool' },
      { name: 'SciPy HiGHS Optimization', category: 'Library' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'DuckDB', category: 'Database' },
      { name: 'SQL & SQLAlchemy', category: 'Database' },
      { name: 'PostgreSQL', category: 'Database' },
    ],
  },
  {
    title: 'Cloud',
    items: [
      { name: 'AWS', category: 'Cloud' },
      { name: 'Microsoft Azure', category: 'Cloud' },
      { name: 'Hugging Face', category: 'Cloud' },
    ],
  },
  {
    title: 'Deployment',
    items: [
      { name: 'Docker', category: 'Tool' },
      { name: 'ONNX Runtime', category: 'Tool' },
      { name: 'Vercel', category: 'Cloud' },
    ],
  },
  {
    title: 'Developer Tools',
    items: [
      { name: 'Git & GitHub Workflows', category: 'Tool' },
      { name: 'Weights & Biases (W&B)', category: 'Tool' },
      { name: 'OpenEnv RL Systems', category: 'Library' },
      { name: 'Visual Studio Code', category: 'Tool' },
    ],
  },
]
