export interface Personal {
  name: string
  title: string
  tagline: string
  shortBio: string
  longBio?: string
  location?: string
  email: string
  profileImage: string
  resume: string
}

export interface NavigationItem {
  id: string
  label: string
  href: string
  order: number
  visible: boolean
}

export interface Social {
  platform:
    | 'GitHub'
    | 'LinkedIn'
    | 'Email'
    | 'LeetCode'
    | 'Instagram'
    | 'X'
    | 'Medium'
    | 'Dev'
  url: string
  icon: string
  enabled: boolean
}

export interface Metric {
  label: string
  value: string
  description?: string
}

export interface Technology {
  name: string
  category: 'Language' | 'Framework' | 'Library' | 'Database' | 'Cloud' | 'Tool'
  icon?: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  year: number
  organization?: string
  url?: string
  certificateUrl?: string
  icon?: string
  featured: boolean
}

export interface HackathonAchievement extends Achievement {
  competition: string
  selectionScale?: string
  problemStatement?: string
  built?: string
  technologies?: string[]
  outcome?: string
}

export interface Research {
  id: string
  title: string
  problem: string
  motivation: string
  researchGap: string
  solution: string
  methodology: string
  results: string
  futureWork: string
  metrics: Metric[]
  stack: string[]
  image: string
  github?: string
  paper?: string
  featured: boolean
}

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  role: string
  metric: Metric
  stack: Technology[]
  github: string
  demo?: string
  caseStudy?: string
  image: string
  featured: boolean
  status: 'Completed' | 'In Progress' | 'Archived'
}

export interface EngineeringCategory {
  title: string
  items: Technology[]
}

export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string
  description: string
  highlights: string[]
  technologies: Technology[]
  location?: string
  companyLogo?: string
  certificateUrl?: string
  grade?: string
}

export interface SubExperience {
  id: string
  organization: string
  role: string
  duration: string
  description: string
  tags: string[]
  certificateUrl: string
}

export interface Contact {
  email: string
  linkedin: string
  github: string
  resume: string
}

export interface SEO {
  title: string
  description: string
  keywords: string[]
  openGraphImage: string
  canonicalUrl: string
}

export interface SchoolDetail {
  standard: '10th Standard' | '12th Standard' | string
  year: string
  score?: string
  specialization?: string
  details?: string[]
}

export interface Education {
  id: string
  type?: 'school' | 'college'
  degree: string
  institution: string
  duration: string
  location?: string
  cgpa?: string
  coursework: string[]
  achievements: string[]
  schoolDetails?: SchoolDetail[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
  issuerLogo?: string
  issueDate: string
  credentialUrl?: string
  certificateImage?: string
  certificateUrl?: string
  featured: boolean
}

export interface Stat {
  id: string
  label: string
  value: number
  suffix?: string
  prefix?: string
  featured?: boolean
}

export interface Role {
  text: string
}

export interface AboutContent {
  introduction: string
  mindset: string
  philosophy: string
  enjoyBuilding: string
  problemSolving: string
}

export interface BuilderStatement {
  line1: string
  line2: string
}
