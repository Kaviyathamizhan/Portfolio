import type { SimpleIcon } from 'simple-icons'

type SkillIconEntry = {
  slug: string
  hex: string
}

const SKILL_ICON_MAP: Record<string, SkillIconEntry> = {
  Python: { slug: 'python', hex: '3776AB' },
  JavaScript: { slug: 'javascript', hex: 'F7DF1E' },
  TypeScript: { slug: 'typescript', hex: '3178C6' },
  'Next.js': { slug: 'nextdotjs', hex: '000000' },
  React: { slug: 'react', hex: '61DAFB' },
  FastAPI: { slug: 'fastapi', hex: '009688' },
  PyTorch: { slug: 'pytorch', hex: 'EE4C2C' },
  Docker: { slug: 'docker', hex: '2496ED' },
  PostgreSQL: { slug: 'postgresql', hex: '4169E1' },
  MongoDB: { slug: 'mongodb', hex: '47A248' },
  Redis: { slug: 'redis', hex: 'FF4438' },
  AWS: { slug: 'amazonaws', hex: 'FF9900' },
  GCP: { slug: 'googlecloud', hex: '4285F4' },
  Azure: { slug: 'microsoftazure', hex: '0078D4' },
  Git: { slug: 'git', hex: 'F05032' },
  'Git & GitHub Workflows': { slug: 'github', hex: '181717' },
  GitHub: { slug: 'github', hex: '181717' },
  HuggingFace: { slug: 'huggingface', hex: 'FFD21E' },
  'Hugging Face': { slug: 'huggingface', hex: 'FFD21E' },
  Transformers: { slug: 'huggingface', hex: 'FFD21E' },
  Scikit: { slug: 'scikitlearn', hex: 'F7931E' },
  'Scikit-learn': { slug: 'scikitlearn', hex: 'F7931E' },
  Pandas: { slug: 'pandas', hex: '150458' },
  'Pandas & NumPy': { slug: 'pandas', hex: '150458' },
  NumPy: { slug: 'numpy', hex: '013243' },
  TensorFlow: { slug: 'tensorflow', hex: 'FF6F00' },
  Keras: { slug: 'keras', hex: 'D00000' },
  LightGBM: { slug: 'lightgbm', hex: '6CC24A' },
  DuckDB: { slug: 'duckdb', hex: 'FFF000' },
  SQL: { slug: 'postgresql', hex: '4169E1' },
  'SQL & SQLAlchemy': { slug: 'postgresql', hex: '4169E1' },
  Vercel: { slug: 'vercel', hex: '000000' },
  Tailwind: { slug: 'tailwindcss', hex: '06B6D4' },
  'Tailwind CSS': { slug: 'tailwindcss', hex: '06B6D4' },
  Node: { slug: 'nodedotjs', hex: '339933' },
  'Node.js': { slug: 'nodedotjs', hex: '339933' },
  Kubernetes: { slug: 'kubernetes', hex: '326CE5' },
  Linux: { slug: 'linux', hex: 'FCC624' },
  VSCode: { slug: 'visualstudiocode', hex: '007ACC' },
  'Visual Studio Code': { slug: 'visualstudiocode', hex: '007ACC' },
  Jupyter: { slug: 'jupyter', hex: 'F37626' },
  ONNX: { slug: 'onnx', hex: '005CED' },
  'ONNX Runtime': { slug: 'onnx', hex: '005CED' },
  OpenCV: { slug: 'opencv', hex: '5C3EE8' },
  Flask: { slug: 'flask', hex: '000000' },
  Django: { slug: 'django', hex: '092E20' },
  Firebase: { slug: 'firebase', hex: 'DD2C00' },
  LeetCode: { slug: 'leetcode', hex: 'FFA116' },
}

export function getSkillIconEntry(name: string): SkillIconEntry | null {
  if (SKILL_ICON_MAP[name]) return SKILL_ICON_MAP[name]

  const normalized = name.toLowerCase()
  for (const [key, entry] of Object.entries(SKILL_ICON_MAP)) {
    if (key.toLowerCase() === normalized) return entry
  }

  return null
}

export function getIconPath(icon: SimpleIcon): string {
  return icon.path
}

export function getIconHex(icon: SimpleIcon): string {
  return `#${icon.hex}`
}
