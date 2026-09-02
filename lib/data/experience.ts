import { Experience } from '@/types'

export const experienceData: Experience[] = [
  {
    id: 'sure-trust-ml-intern',
    company: 'Sure Trust',
    role: 'Machine Learning Engineering Intern',
    startDate: '2025-09-01',
    endDate: '2026-03-31',
    location: 'Remote',
    description:
      'Engineered and deployed production-ready ML services spanning NLP sentiment analysis, clinical diagnostic models, and time-series energy optimization pipelines.',
    highlights: [
      'Improved brand monitoring accuracy by fine-tuning BERT for multi-class sentiment classification and emotion detection on social media datasets, delivering structured JSON output via RESTful APIs.',
      'Built a cardiovascular disease risk prediction model with feature engineering and class balancing; evaluated with F1-score and AUC-ROC for reliable diagnostic performance.',
      'Implemented experiment tracking and model versioning with Weights & Biases, reducing model comparison time from hours to minutes.',
      'Built an AI-driven energy optimization platform using LightGBM forecasting (RMSE 0.50, F1 0.786), engineering 16+ temporal features and implementing a SciPy HiGHS optimization engine for cost-efficient energy scheduling.',
    ],
    technologies: [
      { name: 'PyTorch & BERT', category: 'Library' },
      { name: 'FastAPI RESTful APIs', category: 'Framework' },
      { name: 'LightGBM Forecasting', category: 'Library' },
      { name: 'SciPy HiGHS Optimization', category: 'Library' },
      { name: 'Weights & Biases', category: 'Tool' },
      { name: 'Scikit-learn', category: 'Library' },
    ],
  },
  {
    id: 'ramco-cements-data-intern',
    company: 'Ramco Cements Ltd.',
    role: 'Data Analyst Intern',
    startDate: '2025-09-01',
    endDate: '2025-11-30',
    location: 'Chennai, TN',
    description:
      'Accelerated enterprise logistics decision-making through data engineering and supply chain analytics.',
    highlights: [
      'Accelerated logistics decision-making by preprocessing enterprise datasets and building Tableau dashboards surfacing supply chain insights to cross-functional teams.',
      'Performed automated exploratory data analysis (EDA) and data cleansing on multi-table industrial databases.',
      'Collaborated directly with supply chain stakeholders to translate operational bottlenecks into measurable KPIs.',
    ],
    technologies: [
      { name: 'SQL & Database Preprocessing', category: 'Database' },
      { name: 'Tableau Supply Chain Analytics', category: 'Tool' },
      { name: 'Python Data Engineering', category: 'Language' },
      { name: 'Pandas & EDA', category: 'Library' },
    ],
  },
]
