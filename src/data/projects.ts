export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  number: string
  name: string
  type: string
  summary: string
  stack: string[]
  links: ProjectLink[]
  accent: 'lavender' | 'mint' | 'night' | 'gold'
  overview: string
  problem: string
  solution: string
  architecture: {
    title: string
    nodes: string[]
  }[]
  challenges: string[]
  outcome: string
  mockups: { id: string; label: string }[]
}

export const projects: Project[] = [
  {
    slug: 'if-collab',
    number: '01',
    name: 'IF-Collab',
    type: 'Full-stack web product',
    summary:
      'A collaborative project management platform for Informatics students, designed around boards, tasks, roles, notifications, and team collaboration.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'dnd-kit'],
    links: [
      { label: 'GitHub', href: 'https://github.com/fahriza/if-collab' },
      { label: 'Live Demo', href: 'https://if-collab.example.com' },
      { label: 'Case Study', href: '/work/if-collab' },
    ],
    accent: 'lavender',
    overview:
      'IF-Collab is a team workspace built for Informatics students who need a shared place to plan coursework and group projects. It organizes work into boards and tasks, with roles and notifications so progress stays visible without relying on scattered chat threads.',
    problem:
      'Student groups often split work across chat apps, spreadsheets, and ad-hoc notes. Ownership is unclear, deadlines slip, and there is no single view of who is doing what. Existing project tools feel heavy for short academic collaborations.',
    solution:
      'I built a board-first product: kanban columns for workflow, task details for context, a dashboard for overview, and role-aware collaboration. The interface is structured for quick daily use — drag tasks, assign owners, and keep discussion next to the work.',
    architecture: [
      {
        title: 'Application flow',
        nodes: ['Next.js UI', 'App state (Redux)', 'API layer', 'Persistence'],
      },
    ],
    challenges: [
      'Keeping drag-and-drop board state consistent with the rest of the UI without racey updates.',
      'Modeling roles so permissions stay readable instead of scattered conditionals.',
      'Designing task detail as a focused panel rather than a cluttered modal.',
    ],
    outcome:
      'A working collaboration surface with boards, task detail, dashboard views, and team-oriented flows. The project is a product case — not a component demo — covering interaction, state, and how students actually move work across a board.',
    mockups: [
      { id: 'kanban', label: 'Kanban board' },
      { id: 'task', label: 'Task detail' },
      { id: 'dashboard', label: 'Dashboard' },
      { id: 'collab', label: 'Collaboration' },
    ],
  },
  {
    slug: 'xplover',
    number: '02',
    name: 'Xplover',
    type: 'Web3 research product',
    summary:
      'A Web3 collaborative knowledge and DeSci platform connecting academic research with public knowledge through decentralized workflows and verifiable incentives.',
    stack: ['React', 'Node.js', 'Solidity', 'Ethereum', 'IPFS'],
    links: [
      { label: 'GitHub', href: 'https://github.com/fahriza/xplover' },
      { label: 'Live Demo', href: 'https://xplover.example.com' },
      { label: 'Case Study', href: '/work/xplover' },
    ],
    accent: 'mint',
    overview:
      'Xplover is a research-oriented product that treats knowledge as a workflow: contributors can publish, review, and surface academic work for a wider public. Blockchain and IPFS are used where verification and durable storage matter, not as decoration.',
    problem:
      'Research is hard to follow outside institutions. Credit, review, and access often sit in closed systems. A public knowledge product needs roles, a clear research flow, and a way to store artifacts without turning the interface into a token landing page.',
    solution:
      'I designed a research interface with a knowledge carousel, role-based workflow, and Web3 actions that stay secondary to reading and contributing. Smart contracts handle on-chain incentives; IPFS holds content; the Node backend coordinates the application workflow.',
    architecture: [
      {
        title: 'Product API',
        nodes: ['React frontend', 'Node.js API', 'Application data'],
      },
      {
        title: 'On-chain',
        nodes: ['React frontend', 'Smart contract', 'Ethereum'],
      },
      {
        title: 'Content',
        nodes: ['React frontend', 'IPFS'],
      },
    ],
    challenges: [
      'Separating wallet interactions from the reading experience so the product still works as software, not a mint page.',
      'Mapping roles (author, reviewer, public reader) onto both off-chain workflow and on-chain incentives.',
      'Using IPFS for artifacts while keeping the UI responsive and understandable.',
    ],
    outcome:
      'A serious research/knowledge product with a public interface, Web3 hooks where they are justified, and a workflow that can be explained as software architecture rather than as a crypto campaign.',
    mockups: [
      { id: 'research', label: 'Research interface' },
      { id: 'carousel', label: 'Knowledge carousel' },
      { id: 'web3', label: 'Web3 interaction' },
      { id: 'workflow', label: 'Research workflow' },
    ],
  },
  {
    slug: 'yuk-mari',
    number: '03',
    name: 'Yuk-Mari',
    type: 'Web platform + admin',
    summary:
      'A digital platform combining a public-facing website with an administrative system for managing content and data.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'ImageKit'],
    links: [
      { label: 'GitHub', href: 'https://github.com/fahriza/yuk-mari' },
      { label: 'Live Demo', href: 'https://yuk-mari.example.com' },
      { label: 'Case Study', href: '/work/yuk-mari' },
    ],
    accent: 'gold',
    overview:
      'Yuk-Mari is a two-sided web platform: a public site for visitors and an admin system for people who manage content and records. The work is about CRUD architecture, media handling, and keeping public pages in sync with editorial data.',
    problem:
      'Public content was awkward to update without touching code. Editors needed a reliable way to create, update, and retire content, including images, while the public site stayed fast and consistent.',
    solution:
      'I built a React public frontend, an Express API, and PostgreSQL as the source of truth. ImageKit handles media. The admin dashboard exposes the same data model as structured forms rather than a generic CMS dump.',
    architecture: [
      {
        title: 'System',
        nodes: ['React (public + admin)', 'Express API', 'PostgreSQL'],
      },
      {
        title: 'Media',
        nodes: ['Admin upload', 'ImageKit', 'Public pages'],
      },
    ],
    challenges: [
      'Sharing one data model between public pages and admin CRUD without duplicating business rules.',
      'Keeping image uploads out of the app server while still attaching media to records cleanly.',
      'Making the admin usable for non-developers without hiding important fields.',
    ],
    outcome:
      'A complete content loop: API-backed CRUD, an admin dashboard, and a public site that reads the same store. Dummy dataset in this portfolio stands in for production records.',
    mockups: [
      { id: 'public', label: 'Public website' },
      { id: 'admin', label: 'Admin dashboard' },
      { id: 'form', label: 'Content form' },
      { id: 'api', label: 'API-oriented list' },
    ],
  },
  {
    slug: 'student-walker',
    number: '04',
    name: 'StudentWalker',
    type: 'Mobile application',
    summary:
      'A mobile application project focused on real-time interaction and location-based experiences.',
    stack: ['React Native', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Socket.IO'],
    links: [
      { label: 'GitHub', href: 'https://github.com/fahriza/student-walker' },
      { label: 'Case Study', href: '/work/student-walker' },
      { label: 'Repository', href: 'https://github.com/fahriza/student-walker' },
    ],
    accent: 'night',
    overview:
      'StudentWalker is a mobile project for campus-scale interaction: people, places, and live updates. The interesting part is the real-time layer — location context plus Socket.IO events — sitting on a conventional Express and MySQL backend.',
    problem:
      'Static campus apps go stale quickly. Students need presence, nearby activity, and live updates without refreshing a feed that was designed as a brochure.',
    solution:
      'I structured a React Native client around map and activity screens, with Express endpoints for persistent data and Socket.IO for live events. Location is treated as a feature input, not a marketing map animation.',
    architecture: [
      {
        title: 'Realtime path',
        nodes: ['React Native', 'Socket.IO', 'Express', 'MySQL'],
      },
    ],
    challenges: [
      'Keeping socket events aligned with REST resources so the UI does not drift from stored state.',
      'Handling location permission and sparse GPS data without breaking the experience.',
      'Designing mobile screens that stay readable with live updates instead of noisy toasts.',
    ],
    outcome:
      'A mobile UI set and a backend shape for real-time, location-aware interaction. This case study presents the product structure and screens; it does not invent usage metrics.',
    mockups: [
      { id: 'map', label: 'Map & nearby' },
      { id: 'feed', label: 'Live activity' },
      { id: 'profile', label: 'Profile' },
      { id: 'chat', label: 'Realtime thread' },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
