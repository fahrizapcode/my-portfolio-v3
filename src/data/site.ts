export const site = {
  name: 'Fahriza Pratama',
  role: 'Informatics student & full-stack developer',
  city: 'Bandung, Indonesia',
  email: 'fahrizapcode@gmail.com',
  github: 'https://github.com/fahrizapcode',
  githubHandle: 'fahrizapcode',
  linkedin: 'https://www.linkedin.com/in/mohammad-fahriza-pratama-9355652a7',
  instagram: 'https://instagram.com/fahrizap33',
  instagramHandle: 'fahrizap33',
  availability: 'Open to freelance & collaboration',
}

export const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#certifications', label: 'Certifications' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
] as const

export const skills = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
  Backend: ['Node.js', 'Express', 'FastAPI'],
  Database: ['MySQL', 'PostgreSQL'],
  Web3: ['Solidity', 'Ethereum', 'Ethers.js', 'IPFS'],
  Tools: ['Git', 'GitHub', 'Figma', 'Docker'],
}

export type ExperienceItem = {
  period: string
  org: string
  role: string
  location?: string
  type?: string
  detail: string
  highlights?: string[]
  skills?: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: 'Jun 2026 — Jul 2026',
    org: 'Blockdev.id',
    role: 'Blockchain Builder Fellow',
    location: 'Bandung, Jawa Barat, Indonesia',
    type: 'Fellowship',
    detail: 'Focused on blockchain development, Ethereum smart contracts, and Web3 ecosystem architecture.',
    skills: ['Blockchain', 'Ethereum', 'Web3'],
  },
  {
    period: 'Feb 2026 — Jun 2026',
    org: 'Coding Camp powered by DBS Foundation',
    role: 'Fullstack Web Developer Cohort',
    location: 'Jakarta Raya, Indonesia · Remote',
    type: 'Full-time',
    detail: 'Intensive fullstack web development cohort program powered by DBS Foundation & Dicoding, building scalable web applications and mastering modern web development practices.',
    skills: ['Fullstack Web Development', 'React', 'Node.js', 'JavaScript'],
  },
  {
    period: 'Nov 2025 — Feb 2026',
    org: 'Self Employed',
    role: 'Freelance Web Developer',
    location: 'Bandung, Jawa Barat, Indonesia · Hybrid',
    type: 'Part-time',
    detail: 'Delivered end-to-end web development solutions for startup and academic clients, covering system design, backend development, and frontend implementation.',
    highlights: [
      'Education Institution Affiliate Feature (Startup Project): Developed an affiliate system end-to-end including admin dashboard, backend APIs, and public-facing frontend. Tech Stack: PHP, Express.js, TypeScript, React.js, Tailwind CSS, PostgreSQL.',
      'Braille Simulation Website (Psychology Dept Client): Built an interactive Braille simulation website for academic competition purposes using Next.js, TypeScript, and Tailwind CSS.',
    ],
    skills: ['PHP', 'Express.js', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    period: 'Des 2025',
    org: 'Badan Semi Otonom Dimensi Web (2025/2026)',
    role: 'Head of Competency Development',
    location: 'Bandung, Jawa Barat, Indonesia · Hybrid',
    type: 'Part-time',
    detail: 'Designed and implemented a web-based scoring and leaderboard system to monitor user progress. Developed structured learning materials for beginner, intermediate, and advanced web development levels, alongside final exam tutoring and targeted mentoring sessions.',
    skills: ['Curriculum Design', 'Scoring & Leaderboard System', 'Web Development', 'Mentoring'],
  },
  {
    period: 'Okt 2022 — Feb 2025',
    org: 'SGD Robotic Competition & Campus Events',
    role: 'Logistics & Event Operations Division',
    location: 'Bandung, Jawa Barat, Indonesia · Hybrid',
    type: 'Part-time',
    detail: 'Experienced in logistics and equipment management across multiple university and school events. Responsible for event operations, equipment readiness, inventory control, and cross-division communication.',
    highlights: [
      'Head of Logistics Division – IT Fair (Jan–Mar 2024)',
      'Head of Logistics Division – Monitor Informatics Orientation Program (Sep–Oct 2024)',
      'Logistics Team Member – SGD Robotic Competition 2024 (Dec 2024–Feb 2025)',
      'Equipment Coordinator – PLC Panel Extracurricular (Electrical Installation Competition) SMKN 4 Bandung (Oct 2022)',
    ],
    skills: ['Logistics Management', 'Event Operations', 'Inventory Control', 'Cross-Division Leadership'],
  },
  {
    period: 'Apr 2022 — Agu 2022',
    org: 'Yello Hotel Paskal Bandung',
    role: 'Engineering Department Intern',
    location: 'Bandung, Jawa Barat, Indonesia · On-site',
    type: 'Internship',
    detail: 'Participated in an on-the-job training program within the hotel’s Engineering Department. Gained hands-on experience in facility maintenance, water distribution systems, chiller repair, and technical operations in a professional hospitality setting.',
    skills: ['Facility Maintenance', 'Water Distribution', 'Chiller Repair', 'Technical Operations'],
  },
]

export const education = [
  {
    school: 'UIN Sunan Gunung Djati Bandung',
    detail: 'Informatics · 2023–Present',
  },
  {
    school: 'SMKN 4 Bandung',
    detail: 'Electrical Installation Engineering · Graduated 2023',
  },
]

export const githubRepos = [
  {
    name: 'xplover',
    description: 'DeSci knowledge workflows with Ethereum incentives and IPFS storage.',
    stack: 'React · Solidity',
    updated: 'Updated last month',
  },
  {
    name: 'if-collab',
    description: 'Collaborative boards, tasks, and team workflows for Informatics students.',
    stack: 'Next.js · TypeScript',
    updated: 'Updated 2 weeks ago',
  },
  {
    name: 'yuk-mari',
    description: 'Public site plus admin CMS with Express and PostgreSQL.',
    stack: 'React · Node.js',
    updated: 'Updated 3 months ago',
  },
]


