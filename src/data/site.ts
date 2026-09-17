export const site = {
  name: 'Fahriza Pratama',
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

export const certifications = [
  {
    id: 'cert-1',
    title: 'Full-Stack Frontend Engineering Certification',
    issuer: 'Web Dev Alliance',
    date: 'Nov 2023',
    credentialUrl: 'https://example.com/credentials/fsfe-998821',
    image: '/cert-frontend.jpg',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 'cert-2',
    title: 'Modern Web3 & Blockchain Smart Contract Developer',
    issuer: 'Blockchain Academy',
    date: 'Oct 2023',
    credentialUrl: 'https://example.com/credentials/web3-102938',
    image: '/cert-web3.jpg',
    aspectRatio: 'aspect-[16/9]',
  },
  {
    id: 'cert-3',
    title: 'Advanced React & Next.js Architecture',
    issuer: 'Frontend Masters Institute',
    date: 'Oct 2024',
    credentialUrl: 'https://example.com/credentials/react-4810',
    image: '/cert-react.jpg',
    aspectRatio: 'aspect-square',
  },
  {
    id: 'cert-4',
    title: 'Backend API Engineering & Microservices',
    issuer: 'Global Tech Academy',
    date: 'Oct 2023',
    credentialUrl: 'https://example.com/credentials/bms-987654',
    image: '/cert-backend.jpg',
    aspectRatio: 'aspect-[3/2]',
  },
  {
    id: 'cert-5',
    title: 'Cloud Infrastructure & DevOps Specialist',
    issuer: 'Cloud & DevOps Summit',
    date: 'Oct 2023',
    credentialUrl: 'https://example.com/credentials/devops-876543',
    image: '/cert-cloud.jpg',
    aspectRatio: 'aspect-[4/3]',
  },
]

