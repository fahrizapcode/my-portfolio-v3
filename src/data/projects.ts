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
  accent: 'lavender' | 'mint' | 'night' | 'gold' | 'navy'
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
      { label: 'GitHub', href: 'https://github.com/fahrizapcode/xplover-research-protocol' },
      { label: 'Live Demo', href: 'https://xplover.example.com' },
      { label: 'Case Study', href: '/work/xplover' },
    ],
    accent: 'navy',
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
      { label: 'Figma', href: 'https://www.figma.com/design/mLSMrfsZnbLyMfvRrTV5ue/Projeg?node-id=0-1&p=f&t=b14xXrTWbSwUUZnV-0' },
      { label: 'Case Study', href: '/work/bandung-verse' },
    ],
    accent: 'lavender',
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
    type: 'Fullstack Project Management Platform',
    summary:
      'A full-stack collaborative project management platform built for students and academic teams, featuring real-time kanban boards, role-based access, task management, notifications, and team invitation workflows.',
    stack: [
      'Next.js 16 (App Router, Turbopack)',
      'React 19',
      'TypeScript',
      'Redux Toolkit',
      'Socket.IO Client',
      'Node.js & Express',
      'Prisma ORM',
      'PostgreSQL',
      'Socket.IO',
      'JWT & Cookie-Based Auth',
      '@dnd-kit',
      'Tailwind CSS v4',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/yazidzky/if-collab-fe' },
      { label: 'Live Demo', href: 'https://if-collab.example.com' },
      { label: 'Case Study', href: '/work/if-collab' },
    ],
    accent: 'gold',
    overview:
      'IF-Collab is a full-stack project management platform designed for student and academic team collaboration. The platform provides a centralized workspace where teams can organize projects as boards, manage tasks through a drag-and-drop Kanban interface, assign roles, invite members, and stay synchronized in real time via Socket.IO. Built with a monorepo structure consisting of a Next.js 16 frontend and a Node.js/Express backend, the application supports multi-role access (Student and Admin), real-time notifications, avatar management, deadline tracking, and activity logging — all within a modern glassmorphism dark-mode UI.',
    problem:
      'Student project teams often lack a structured, dedicated workspace for managing collaborative work. Communication is scattered across chat apps, task tracking is done manually in spreadsheets or sticky notes, and there is no clear mechanism for role delegation, progress visibility, or deadline awareness. Existing tools like Jira or Trello are either too complex for academic contexts or lack features tailored to student workflows such as NIM/NIP-based authentication, academic role structures, and lightweight team onboarding through invitation links.',
    solution:
      'IF-Collab provides a purpose-built collaboration platform that centers around Boards as shared project workspaces. Each board contains Columns and Tasks that can be created, reordered, and assigned to specific members with due dates and priorities. Members join through an invitation system with role-based permissions — Leader, Manager, Member, and Observer — each with different levels of access. Real-time updates via Socket.IO ensure that all members see changes instantly without refreshing. A notification system tracks relevant events such as task assignments, deadline reminders, and membership changes, while an admin panel provides platform-wide user and board management capabilities.',
    architecture: [
      {
        title: 'Frontend',
        nodes: ['Next.js 16', 'Redux Toolkit', 'Socket.IO Client', '@dnd-kit'],
      },
      {
        title: 'Backend',
        nodes: ['Node.js & Express', 'Prisma ORM', 'PostgreSQL', 'Socket.IO', 'JWT Auth'],
      },
    ],
    challenges: [
      'Keeping drag-and-drop board state consistent with the rest of the UI without racey updates.',
      'Modeling roles so permissions stay readable instead of scattered conditionals.',
      'Designing real-time Socket.IO event handling to sync all members without performance degradation.',
    ],
    outcome:
      'Built a production-ready full-stack collaborative platform with real-time Kanban board management, drag-and-drop task reordering, multi-role permission system (Leader, Manager, Member, Observer), team invitation workflows, Socket.IO-powered live updates, in-app notification system with deadline reminders, avatar upload, and a dedicated admin dashboard for platform management. The platform demonstrates end-to-end integration between a Next.js frontend with Redux state management and a RESTful Express API backed by PostgreSQL via Prisma ORM.',
    mockups: [
      { id: 'kanban', label: 'Kanban board' },
      { id: 'task', label: 'Task detail' },
      { id: 'dashboard', label: 'Dashboard' },
      { id: 'collab', label: 'Collaboration' },
    ],
    screenshots: [
      '/projects/if-collab/screenshots/Screenshot 2026-09-18 112853.png',
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
      { label: 'GitHub', href: 'https://github.com/fahrizapcode/yuk-mari' },
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
    name: 'Student Walker',
    type: 'Mobile Web App',
    summary:
      'A mobile-first web application that connects students who need errands done on campus with other students (Stukers) who are willing to help — a peer-to-peer campus errand and delivery platform.',
    stack: [
      'Next.js 15 (App Router)',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Lucide React',
      'Mobile-First Responsive Design',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/yazidzky/stukerApp' },
      { label: 'Case Study', href: '/work/student-walker' },
    ],
    accent: 'lavender',
    overview:
      'Student Walker (Stuker) is a mobile-first web application designed specifically for the campus environment. It connects students who need help with on-campus errands such as buying food from the canteen, picking up items, or delivering documents with fellow students called Stukers who are available and willing to help. The platform supports two distinct user roles: Customer (the student placing the order) and Stuker (the student fulfilling the order). Customers can submit orders with pickup and delivery locations, estimated costs, and delivery fees, while Stukers can browse available orders and accept them through a dedicated dashboard.',
    problem:
      'On-campus life is often hectic. Students may be stuck in a lecture room, too far from the canteen, or unable to leave a class to run a quick errand. While food delivery apps exist, they are not designed for the hyper-local, low-cost context of a university campus. There is no existing peer-to-peer platform where students can request help from fellow students who are nearby and willing to earn some extra income through quick campus errands.',
    solution:
      'Student Walker provides a dual-role platform where any student can register either as a Customer or a Stuker. Customers submit order requests including a description of the errand, estimated item cost, delivery fee, pickup location, and delivery destination. Once submitted, the system searches for available Stukers nearby. Stukers receive available orders on their dashboard and can view full order details before accepting. The platform includes a complete order flow: from placing an order, searching for a Stuker, waiting for acceptance, active delivery, to completion with order history and rating features for both roles.',
    architecture: [
      {
        title: 'Frontend',
        nodes: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS v4'],
      },
    ],
    challenges: [
      'Designing dual-role UX (Customer & Stuker) within a single cohesive mobile-first interface.',
      'Managing complete order state transitions from creation through search, acceptance, active delivery, and completion.',
      'Building a mobile-first layout with fixed bottom navigation optimized for small screens.',
    ],
    outcome:
      'Built a fully functional mobile-first frontend prototype for a campus peer-to-peer errand platform. The app features dual-role UX for Customers and Stukers, a complete order flow (create order, search stuker, waiting, active, complete), a Stuker order management dashboard with order detail modals, order history, user profile pages, NIM-based authentication (login and register), and a notification system. The design prioritizes mobile usability with a fixed bottom navigation and clean card-based layouts optimized for small screens.',
    mockups: [],
    screenshots: [
      '/projects/student-walker/screenshots/Screenshot 2026-09-18 141202.png',
      '/projects/student-walker/screenshots/Screenshot 2026-09-18 141229.png',
      '/projects/student-walker/screenshots/Screenshot 2026-09-18 141239.png',
      '/projects/student-walker/screenshots/Screenshot 2026-09-18 141246.png',
      '/projects/student-walker/screenshots/Screenshot 2026-09-18 141301.png',
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
