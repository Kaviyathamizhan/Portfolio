import { Experience, SubExperience } from '@/types'

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
    certificateUrl: '/experience/Sure Trust_Certificate.png',
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
    certificateUrl: '/experience/Internship Certificate Ramco.pdf',
  },
  {
    id: 'nsic-computer-vision-trainee',
    company: 'The National Small Industries Corporation Ltd. (NSIC)',
    role: 'Computer Vision Trainee (MSME RAMP Scheme)',
    startDate: '2025-12-22',
    endDate: '2026-01-09',
    location: 'Technical Services Centre, Chennai',
    description:
      'Completed intensive industrial technical training in Concepts of Computer Vision under the RAMP Scheme of the Ministry of MSME, Government of India.',
    highlights: [
      'Acquired practical mastery of core Computer Vision fundamentals, digital image processing pipelines, spatial filtering, and feature extraction algorithms.',
      'Built and tested deep learning vision workflows for image classification, visual pattern analysis, and automated quality inspection.',
      'Successfully completed comprehensive laboratory evaluations and practical assessments administered by NSIC Technical Services Centre.',
    ],
    technologies: [
      { name: 'Computer Vision', category: 'Library' },
      { name: 'OpenCV & Image Processing', category: 'Library' },
      { name: 'Deep Learning', category: 'Library' },
      { name: 'Python', category: 'Language' },
      { name: 'MSME RAMP Initiative', category: 'Tool' },
    ],
    certificateUrl: '/experience/NSIC.pdf',
  },
]

export const additionalExperienceData: SubExperience[] = [
  {
    id: 'vois-edunet-llm',
    organization: 'Vodafone Idea (VOIS) × AICTE × Edunet',
    role: 'Conversational Data Analysis with LLMs Intern',
    duration: 'Sep 2025 – Oct 2025',
    description:
      'Applied generative AI models, LLM prompt engineering, and conversational analytics to extract insights from structured and unstructured enterprise datasets.',
    tags: ['LLMs', 'Prompt Engineering', 'Generative AI', 'Analytics'],
    certificateUrl: '/other_intern_certificates/AICTE Batch 1-559.pdf',
  },
  {
    id: 'aicte-edunet-aiml',
    organization: 'AICTE × Edunet Foundation',
    role: 'Artificial Intelligence & Machine Learning Intern',
    duration: 'Dec 2025 – Jan 2026 (6 Weeks)',
    description:
      'Engineered supervised and unsupervised machine learning models, performed exploratory data analysis, and benchmarked predictive models.',
    tags: ['Machine Learning', 'Python', 'Scikit-learn', 'EDA'],
    certificateUrl: '/other_intern_certificates/Internship Completion Certificate.pdf',
  },
  {
    id: 'aicte-edunet-frontend',
    organization: 'AICTE × Edunet Foundation',
    role: 'Front End Web Development Intern',
    duration: 'Aug 2025 – Sep 2025 (6 Weeks)',
    description:
      'Designed responsive, accessible web interfaces and components utilizing modern HTML5, CSS3, JavaScript, and responsive UI methodologies.',
    tags: ['Web Development', 'JavaScript', 'HTML5/CSS3', 'UI Design'],
    certificateUrl: '/other_intern_certificates/AICTE B3_PD Certificates-1324.pdf',
  },
  {
    id: 'ibm-skillsbuild-cloud-ai',
    organization: 'IBM SkillsBuild × Edunet × AICTE',
    role: 'Artificial Intelligence & Cloud Computing Intern',
    duration: 'Jul 2025 – Aug 2025 (4 Weeks)',
    description:
      'Trained on cloud infrastructure architectures, deployment patterns on IBM Cloud, and fundamental enterprise AI workflows.',
    tags: ['IBM Cloud', 'AI Solutions', 'Cloud Infrastructure'],
    certificateUrl: '/other_intern_certificates/Intern Completion Certificate.pdf',
  },
  {
    id: 'altair-eduskills-ds',
    organization: 'Altair × EduSkills',
    role: 'Data Science & Engineering Virtual Intern',
    duration: 'Nov 2025 – Jan 2026',
    description:
      'Automated machine learning pipelines, predictive modeling, data transformations, and model evaluation using Altair RapidMiner.',
    tags: ['Altair RapidMiner', 'AutoML', 'Predictive Modeling'],
    certificateUrl: '/other_intern_certificates/Altair Eduskills.pdf',
  },
  {
    id: 'microsoft-elevate-tech',
    organization: 'Microsoft Elevate × AICTE',
    role: 'Emerging Technologies (Azure & Copilot) Intern',
    duration: 'Dec 2025 – Jan 2026 (4 Weeks)',
    description:
      'Trained in cloud fundamentals on Microsoft Azure, intelligent copilot services, and enterprise artificial intelligence development.',
    tags: ['Microsoft Azure', 'Cloud Computing', 'Copilot AI'],
    certificateUrl: '/other_intern_certificates/certificate (1).pdf',
  },
  {
    id: 'jfd-java-fullstack',
    organization: 'Java Full Stack Development Training',
    role: 'Full Stack Java Trainee',
    duration: 'Aug 2025 – Oct 2025',
    description:
      'Hands-on training in object-oriented programming, core Java data structures, relational database connectivity, and backend services.',
    tags: ['Java', 'OOP', 'SQL & RDBMS', 'Backend Development'],
    certificateUrl: '/other_intern_certificates/JFD.pdf',
  },
  {
    id: 'codtech-mern-stack-intern',
    organization: 'CodTech IT Solutions',
    role: 'MERN Stack Web Development Intern',
    duration: 'Mar 2025 – May 2025',
    description:
      'Engineered full-stack web applications utilizing MongoDB, Express.js, React.js, and Node.js, implementing RESTful API architectures, state management, and responsive front-end interfaces.',
    tags: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'Express.js'],
    certificateUrl: '/other_intern_certificates/CT08WC44 (2).pdf',
  },
]
