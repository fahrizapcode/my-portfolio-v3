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
  screenshots?: string[]
}

export const projects: Project[] = [
  {
    slug: 'xplover',
    number: '01',
    name: 'Xplover Research Protocol',
    type: 'Web3 DeSci Fullstack Product',
    summary:
      'A full-stack Web3 protocol that bridges scientific research and public knowledge dissemination through collaborative research, decentralized peer review, and blockchain-based contribution incentives.',
    stack: [
      'Next.js 14',
      'React 18',
      'TypeScript',
      'Node.js & Express',
      'Prisma ORM',
      'PostgreSQL',
      'Solidity 0.8.20',
      'Hardhat',
      'Ethers.js v6',
      'Arbitrum Sepolia',
      'JWT Auth',
      'Cyberpunk Glassmorphism UI',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/fahriza/xplover' },
      { label: 'Live Demo', href: 'https://xplover.example.com' },
      { label: 'Case Study', href: '/work/xplover' },
    ],
    accent: 'mint',
    overview:
      'Xplover Research Protocol (XCR) is a Web3 platform designed as a collaborative infrastructure for transforming scientific research into technology knowledge that is easier for the public to understand. The platform connects Researchers, Content Creators, Peer Reviewers, Visual Designers, and Administrators in a unified workflow, from research collection and structuring to educational content creation, quality control through peer review, and publication. Blockchain serves as an infrastructure layer for recording contributions, distributing incentives, and providing verifiable on-chain contribution records.',
    problem:
      'Technology such as AI, Web3, cybersecurity, and quantum computing is evolving rapidly, while the ability to critically understand scientific and technological information remains a challenge. Relevant information is often scattered across different sources, varies in credibility, and is presented in academic language that can be difficult for the general public to understand. At the same time, technology content on social media is easier to consume but does not always go through sufficient curation and quality control. This creates a gap between knowledge produced through research and technology insights that can be understood and applied by the public, particularly young people.',
    solution:
      'Xplover provides a collaborative workflow that connects research with public knowledge within a single platform. Researchers collect and structure information from credible sources into research briefs covering the problem, research approach, findings, key insights, relevance, limitations, and discussion points. Content Creators then translate the research into educational content such as carousels using accessible language, storytelling, and relevant content angles. Peer Reviewers perform quality control across eight dimensions: accuracy, relevance, clarity, hook, value, flow, CTA, and consistency. Content that reaches the required consensus proceeds to the Visual Designer for visual production and publication. Web3 is used as an infrastructure layer to record contributions on-chain and provide incentives through an ERC-20 token and contribution attestations.',
    architecture: [
      {
        title: 'Product API',
        nodes: ['React / Next.js', 'Express API', 'Prisma & PostgreSQL'],
      },
      {
        title: 'On-chain & Web3 Layer',
        nodes: ['Ethers.js v6', 'Smart Contract (Solidity 0.8.20)', 'Arbitrum Sepolia Testnet'],
      },
      {
        title: 'Content & Workflow',
        nodes: ['Research Briefs', 'Content Creation', 'Peer Review Consensus (8 Dimensions)', 'Visual & Publish'],
      },
    ],
    challenges: [
      'Integrating multi-role workflows (Researcher, Creator, Reviewer, Designer, Admin) with granular state transition permissions.',
      'Designing an 8-dimensional peer review consensus scoring system requiring minimum reviewer quotas.',
      'Connecting off-chain PostgreSQL workflow data with on-chain ERC-20 token rewards and contribution attestations on Arbitrum Sepolia.',
    ],
    outcome:
      'Built an end-to-end Web3/DeSci full-stack prototype implementing a research-to-content workflow. The platform includes multi-role workflows for Researchers, Content Creators, Peer Reviewers, Visual Designers, and Administrators; structured research management; content transformation workflows; peer-review consensus based on eight evaluation dimensions with a minimum of five reviewers; and blockchain-based token incentives and contribution attestations on Arbitrum Sepolia. The prototype demonstrates how research, collaborative quality control, knowledge dissemination, and verifiable contributor incentives can be integrated into a single platform.',
    mockups: [
      { id: 'research', label: 'Research interface' },
      { id: 'carousel', label: 'Knowledge carousel' },
      { id: 'web3', label: 'Web3 interaction' },
      { id: 'workflow', label: 'Research workflow' },
    ],
    screenshots: [
      '/projects/xplover-research-protocol/screenshots/Screenshot 2026-09-17 211755.png',
      '/projects/xplover-research-protocol/screenshots/Screenshot 2026-09-17 211814.png',
      '/projects/xplover-research-protocol/screenshots/Screenshot 2026-09-17 211833.png',
      '/projects/xplover-research-protocol/screenshots/Screenshot 2026-09-17 211841.png',
      '/projects/xplover-research-protocol/screenshots/Screenshot 2026-09-17 211851.png',
      '/projects/xplover-research-protocol/screenshots/Screenshot 2026-09-17 211912.png',
    ],
  },
  {
    slug: 'bandung-verse',
    number: '02',
    name: 'BandungVerse',
    type: 'UI/UX Design',
    summary:
      "A responsive UI/UX design for a digital platform that helps users discover Bandung's destinations, culinary spots, technology, culture, and local stories through an interactive and visually engaging experience.",
    stack: [
      'Figma',
      'UI/UX Design',
      'Responsive Design',
      'Design System',
      'Wireframing',
      'Prototyping',
      'Information Architecture',
      'User Flow',
    ],
    links: [
      { label: 'Case Study', href: '/work/bandung-verse' },
    ],
    accent: 'gold',
    overview:
      'BandungVerse is a digital exploration platform designed to help users discover different aspects of Bandung, including tourism, culinary experiences, technology, culture, and local heritage. The interface was designed with a strong focus on visual storytelling, intuitive exploration, and responsive experiences across desktop and mobile devices. The design combines image-driven content, interactive maps, category navigation, and detailed destination pages to make discovering Bandung more engaging and accessible.',
    problem:
      "Information about Bandung's destinations, culinary spots, culture, and local attractions is often scattered across different platforms, making it difficult for users to discover and explore them through a single, cohesive experience. Many tourism interfaces also rely heavily on lists and conventional layouts, which can make exploration feel less engaging. BandungVerse addresses this by creating a visual-first experience that organizes different aspects of Bandung into clear categories while allowing users to explore places through maps, imagery, and detailed information.",
    solution:
      "Designed a visual-first exploration experience that organizes Bandung's destinations and local knowledge into several categories, including tourism, culinary, technology, and culture. The interface uses image-based cards, category navigation, interactive map views, search and filtering, and detailed destination pages to support different exploration behaviors. The design was created responsively for both desktop and mobile, with layouts and component arrangements adapted to each screen size while maintaining a consistent visual identity and user experience.",
    architecture: [
      {
        title: 'Design Process',
        nodes: ['Information Architecture', 'Wireframing', 'UI Design System', 'Responsive Layouts'],
      },
      {
        title: 'Core Discovery Flow',
        nodes: ['Category Navigation', 'Interactive Map', 'Spot Detail Page', 'Local Stories'],
      },
    ],
    challenges: [
      'Structuring diverse content categories (destinations, culinary, technology, culture) into a single cohesive discovery workflow.',
      'Designing responsive UI components that scale seamlessly from desktop map views to mobile card layouts.',
      'Establishing a visual design system that balances image-heavy media cards with readable typography.',
    ],
    outcome:
      "Designed a complete responsive UI/UX system for BandungVerse covering the main exploration flow, map-based discovery, culinary and destination discovery, and detailed information pages. The design includes both desktop and mobile layouts, with reusable components and a consistent visual system across different content categories. The resulting interface provides a structured and visually engaging way for users to discover Bandung's places, culture, culinary experiences, and local stories.",
    mockups: [],
    screenshots: [
      '/projects/bandung-verse/screenshots/Screenshot 2026-09-17 215018.png',
      '/projects/bandung-verse/screenshots/Screenshot 2026-09-17 215035.png',
      '/projects/bandung-verse/screenshots/Screenshot 2026-09-17 215048.png',
      '/projects/bandung-verse/screenshots/Screenshot 2026-09-17 215111.png',
      '/projects/bandung-verse/screenshots/Screenshot 2026-09-17 215123.png',
      '/projects/bandung-verse/screenshots/Screenshot 2026-09-17 215146.png',
      '/projects/bandung-verse/screenshots/Screenshot 2026-09-17 215207.png',
    ],
  },
  {
    slug: 'if-collab',
    number: '03',
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
    slug: 'yuk-mari',
    number: '04',
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
    number: '05',
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
