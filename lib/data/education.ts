import { Education } from '@/types'

export const educationData: Education[] = [
  {
    id: 'schooling-combined',
    type: 'school',
    degree: 'SSLC & HSC',
    institution: 'The Vidya Mandir Senior Secondary School (CBSE)',
    duration: '2020 – 2022',
    location: 'Ariyalur, Tamil Nadu, India',
    coursework: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Biology',
    ],
    achievements: [
      'Completed 10th & 12th Standard at the same institution',
      'Strong academic foundation in Mathematics & Physics',
    ],
    schoolDetails: [
      {
        standard: '10th Standard',
        year: '2020',
        score: '88.2%',
        specialization: 'General Science & Mathematics',
      },
      {
        standard: '12th Standard',
        year: '2022',
        score: '77.2%',
        specialization: 'Physics, Chemistry, Mathematics & Biology',
      },
    ],
  },
  {
    id: 'btech-cse-ai',
    type: 'college',
    degree: 'B.Tech in Computer Science & Engineering with Specialization in AI (Associated with IBM)',
    institution: 'Bharath Institute of Higher Education and Research (BIHER)',
    duration: '2022 – 2026',
    location: 'Chennai, Tamil Nadu, India',
    cgpa: '9.16 / 10',
    coursework: [
      'Machine Learning',
      'Deep Learning',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Computer Networks',
      'Reinforcement Learning',
    ],
    achievements: [
      'Academic Excellence — 9.15 CGPA',
      'IBM-affiliated AI specialization track',
    ],
  },
]
