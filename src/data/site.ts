export const site = {
  name: 'Fahriza',
  role: 'Informatics student & full-stack developer',
  city: 'Bandung, Indonesia',
  email: 'hello@fahriza.dev',
  github: 'https://github.com/fahriza',
  githubHandle: 'fahriza',
  linkedin: 'https://linkedin.com/in/fahriza',
  availability: 'Open to freelance & collaboration',
}

export const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
] as const

export const skills = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
  Backend: ['Node.js', 'Express', 'FastAPI'],
  Database: ['MySQL', 'PostgreSQL'],
  Web3: ['Solidity', 'Ethereum', 'Ethers.js', 'IPFS'],
  Tools: ['Git', 'GitHub', 'Figma', 'Docker'],
}

export const experience = [
  {
    period: '2024 — Present',
    org: 'Dimensi Web — Learning Arena',
    role: 'Head of Learning Division',
    detail:
      'Led the learning division responsible for planning and delivering web development learning sessions covering HTML, CSS, JavaScript, Tailwind CSS, and React.',
  },
  {
    period: '2023 — Present',
    org: 'Independent product work',
    role: 'Full-stack development',
    detail:
      'Built project-based web products across frontend, APIs, and databases — including collaborative tools, content platforms, and admin systems.',
  },
  {
    period: '2024 — Present',
    org: 'Research & Web3',
    role: 'Applied blockchain development',
    detail:
      'Explored decentralized workflows, smart contracts, and IPFS as part of research-oriented product experiments such as Xplover.',
  },
  {
    period: 'Ongoing',
    org: 'Team collaboration',
    role: 'Product & engineering',
    detail:
      'Worked with peers on shared codebases, role-based features, and shipping usable interfaces rather than isolated demos.',
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
    name: 'if-collab',
    description: 'Collaborative boards, tasks, and team workflows for Informatics students.',
    stack: 'Next.js · TypeScript',
    updated: 'Updated 2 weeks ago',
  },
  {
    name: 'xplover',
    description: 'DeSci knowledge workflows with Ethereum incentives and IPFS storage.',
    stack: 'React · Solidity',
    updated: 'Updated last month',
  },
  {
    name: 'yuk-mari',
    description: 'Public site plus admin CMS with Express and PostgreSQL.',
    stack: 'React · Node.js',
    updated: 'Updated 3 months ago',
  },
]
