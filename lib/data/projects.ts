import { Project } from '@/types'

export const projectsData: Project[] = [
  {
    id: 'pipeline-debug-env',
    name: 'Pipeline Debug Env — Agentic AI Environment',
    tagline:
      'OpenEnv-compatible RL environment with fault injection and automated reward grading',
    description:
      'Built an OpenEnv-compatible agentic environment with fault injection, reward grading, and action validation for training autonomous AI agents on multi-step pipeline failure diagnosis. Designed reward-grading logic enabling agents to autonomously recover from multi-step pipeline failures with significantly reduced debugging iterations.',
    role: 'Lead AI Engineer',
    metric: {
      label: 'Debugging Speedup',
      value: '3x Faster',
      description: 'Reduction in multi-step failure recovery iterations',
    },
    stack: [
      { name: 'Python', category: 'Language' },
      { name: 'FastAPI', category: 'Framework' },
      { name: 'DuckDB', category: 'Database' },
      { name: 'Docker', category: 'Tool' },
      { name: 'OpenEnv', category: 'Library' },
      { name: 'Pandas', category: 'Library' },
      { name: 'Hugging Face', category: 'Cloud' },
    ],
    github: 'https://github.com/Kaviyathamizhan/pipeline_debug_env',
    demo: 'https://huggingface.co/spaces',
    image: '/images/projects/pipeline.png',
    featured: true,
    status: 'Completed',
  },
  {
    id: 'energy-optimization-platform',
    name: 'AI-Driven Energy Optimization Platform',
    tagline:
      'LightGBM forecasting & SciPy HiGHS linear optimization for cost-efficient energy scheduling',
    description:
      'Engineered 16+ temporal features and built a time-series forecasting platform using LightGBM (achieving RMSE 0.50 and F1 0.786). Coupled the forecasting outputs directly into a SciPy HiGHS linear optimization engine to automate cost-efficient enterprise energy scheduling.',
    role: 'ML Engineer',
    metric: {
      label: 'Model Precision',
      value: '0.50 RMSE',
      description: 'High-precision time-series forecasting (F1: 0.786)',
    },
    stack: [
      { name: 'Python', category: 'Language' },
      { name: 'LightGBM', category: 'Library' },
      { name: 'SciPy HiGHS', category: 'Library' },
      { name: 'Scikit-learn', category: 'Library' },
      { name: 'Pandas', category: 'Library' },
    ],
    github: 'https://github.com/Kaviyathamizhan',
    image: '/images/projects/energy.png',
    featured: true,
    status: 'Completed',
  },
  {
    id: 'bert-brand-monitoring',
    name: 'BERT Brand Monitoring & Emotion API',
    tagline:
      'Fine-tuned Transformer service delivering structured sentiment analytics via RESTful APIs',
    description:
      'Improved brand monitoring accuracy by fine-tuning BERT architectures for multi-class sentiment classification and emotion detection on enterprise social media datasets. Packaged and deployed the model as a high-throughput FastAPI RESTful service delivering structured JSON outputs.',
    role: 'ML Intern',
    metric: {
      label: 'API Latency',
      value: '< 45ms',
      description: 'Structured JSON RESTful inference endpoint speed',
    },
    stack: [
      { name: 'PyTorch', category: 'Library' },
      { name: 'Transformers', category: 'Library' },
      { name: 'BERT', category: 'Library' },
      { name: 'FastAPI', category: 'Framework' },
      { name: 'Docker', category: 'Tool' },
    ],
    github: 'https://github.com/Kaviyathamizhan',
    image: '/images/projects/bert.png',
    featured: false,
    status: 'Completed',
  },
  {
    id: 'bob-onboarding-assistant',
    name: 'BoB Onboarding Assistant — AI Codebase Intelligence',
    tagline:
      'Whole-repository AI onboarding engine with automated architecture mapping and interactive guided tours',
    description:
      'Engineered an AI-powered codebase onboarding assistant that ingests full GitHub repositories via GitPython shallow clones, constructs multi-file dependency contexts, and uses IBM Bob LLM to generate instant architecture overviews, module dependency maps, and step-by-step developer guides. Integrated FastAPI backend with a modern React/Vite interface deployed across Vercel and Render.',
    role: 'Full-Stack AI Engineer',
    metric: {
      label: 'Context Analysis',
      value: '100+ Files',
      description: 'Single-pass full-repo architecture and dependency mapping',
    },
    stack: [
      { name: 'Python', category: 'Language' },
      { name: 'FastAPI', category: 'Framework' },
      { name: 'IBM Bob LLM', category: 'Library' },
      { name: 'GitPython', category: 'Tool' },
      { name: 'React', category: 'Framework' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Pydantic', category: 'Library' },
      { name: 'Tailwind CSS', category: 'Tool' },
    ],
    github: 'https://github.com/Kaviyathamizhan/bob-onboarding-assistant',
    demo: 'https://bobonboard.vercel.app/',
    image: '/images/projects/bob.png',
    featured: true,
    status: 'Completed',
  },
]

export const supportingProjectsData: Project[] = [
  {
    id: 'predictive-maintenance',
    name: 'Predictive Maintenance of Industrial Machinery',
    tagline:
      'Sensor-driven machine failure classification & proactive downtime prevention',
    description:
      'Developed a machine learning classification engine using real-time industrial telemetry (rotational speed, torque, tool wear, temperature) to predict failure types before machine breakdown, enabling proactive maintenance scheduling and minimizing unplanned downtime.',
    role: 'ML Engineer',
    metric: {
      label: 'Detection',
      value: 'Multi-Class',
      description: 'Pre-breakdown classification across tool wear, heat & power failure modes',
    },
    stack: [
      { name: 'Python', category: 'Language' },
      { name: 'Scikit-learn', category: 'Library' },
      { name: 'Pandas', category: 'Library' },
      { name: 'NumPy', category: 'Library' },
      { name: 'Jupyter', category: 'Tool' },
    ],
    github: 'https://github.com/Kaviyathamizhan/Predictive-Maintenance-of-Industrial-Machinery',
    image: '/images/projects/predictive-maintenance.png',
    featured: false,
    status: 'Completed',
  },
  {
    id: 'cardiovascular-risk-engine',
    name: 'Cardiovascular Disease Risk Prediction',
    tagline:
      'High-reliability clinical diagnostic risk model with automated W&B tracking',
    description:
      'Built a cardiovascular disease diagnostic risk model incorporating advanced feature engineering and class balancing techniques, evaluated rigorously via F1-score and AUC-ROC. Implemented automated experiment tracking and model versioning with Weights & Biases, reducing model comparison workflows from hours to minutes.',
    role: 'ML Intern',
    metric: {
      label: 'Workflow Efficiency',
      value: '90% Time Saved',
      description: 'Model evaluation cycles cut from hours to minutes',
    },
    stack: [
      { name: 'Python', category: 'Language' },
      { name: 'Scikit-learn', category: 'Library' },
      { name: 'Weights & Biases', category: 'Tool' },
      { name: 'Pandas', category: 'Library' },
      { name: 'NumPy', category: 'Library' },
    ],
    github: 'https://github.com/Kaviyathamizhan/cardiovascular-predictor',
    image: '/images/projects/cardio.png',
    featured: false,
    status: 'Completed',
  },
  {
    id: 'birthday-website',
    name: 'Birthday Website',
    tagline:
      'Interactive celebration experience with fluid animations & responsive UI',
    description:
      'Engineered an interactive, responsive celebration web application featuring fluid Framer Motion animations, custom audio effects, dynamic component layouts, and modern UI interactions built with React, TypeScript, Vite, and Tailwind CSS.',
    role: 'Frontend Developer',
    metric: {
      label: 'Interface Animation',
      value: '60 FPS',
      description: 'Fluid micro-interactions and responsive component states',
    },
    stack: [
      { name: 'React', category: 'Framework' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Vite', category: 'Tool' },
      { name: 'Tailwind CSS', category: 'Framework' },
      { name: 'Framer Motion', category: 'Library' },
    ],
    github: 'https://github.com/Kaviyathamizhan/Birthday_website',
    image: '/images/projects/birthday.png',
    featured: false,
    status: 'Completed',
  },
  {
    id: 'sesp-neural-pruning',
    name: 'SESP — Structured Energy-Based Selective Pruning',
    tagline:
      'Energy-guided structural neural network compression & acceleration',
    description:
      'Researched and implemented structured energy-based selective pruning (SESP) algorithms for deep neural networks. Evaluated dynamic and semi-static pruning criteria across model architectures, achieving 59.2% FLOPs reduction with <1.2% accuracy loss for edge deployment.',
    role: 'AI Researcher',
    metric: {
      label: 'FLOPs Reduction',
      value: '59.2%',
      description: 'Compute reduction with <1.2% accuracy degradation',
    },
    stack: [
      { name: 'PyTorch', category: 'Library' },
      { name: 'Python', category: 'Language' },
      { name: 'Transformers', category: 'Library' },
      { name: 'NumPy', category: 'Library' },
      { name: 'Jupyter', category: 'Tool' },
    ],
    github: 'https://github.com/Kaviyathamizhan/SESP-Neural-Network-Pruning',
    image: '/images/projects/sesp.png',
    featured: false,
    status: 'Completed',
  },
]

