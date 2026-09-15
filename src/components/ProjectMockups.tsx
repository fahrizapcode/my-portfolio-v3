function WindowChrome({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-black/8 px-3 py-2">
      <span className="flex gap-1">
        <span className="size-1.5 rounded-full bg-[#d9b4b0]" />
        <span className="size-1.5 rounded-full bg-[#d9d0a8]" />
        <span className="size-1.5 rounded-full bg-[#b8d0b8]" />
      </span>
      <p className="truncate font-mono text-[10px] text-muted">{title}</p>
    </div>
  )
}

function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-white/70 px-2 py-0.5 text-[9px] tracking-wide text-ink/80">
      {children}
    </span>
  )
}

export function KanbanMockup() {
  const cols = [
    { name: 'Backlog', cards: ['Auth flow', 'Role matrix'] },
    { name: 'In progress', cards: ['Board DnD', 'Mentions'] },
    { name: 'Review', cards: ['Notif feed'] },
    { name: 'Done', cards: ['Dashboard'] },
  ]

  return (
    <div className="h-full overflow-hidden rounded-[18px] bg-[#efeaf8] text-left shadow-sm">
      <WindowChrome title="if-collab / boards / informatics-lab" />
      <div className="grid h-[calc(100%-36px)] grid-cols-4 gap-2 p-3">
        {cols.map((col) => (
          <div key={col.name} className="flex flex-col gap-2">
            <p className="text-[10px] tracking-wide text-ink/70">{col.name}</p>
            {col.cards.map((card) => (
              <div
                key={card}
                className="rounded-xl bg-white p-2 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
              >
                <p className="text-[11px] text-ink">{card}</p>
                <div className="mt-2 h-1 w-10 rounded-full bg-lavender/70" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function TaskMockup() {
  return (
    <div className="h-full overflow-hidden rounded-[18px] bg-paper text-left">
      <WindowChrome title="if-collab / task / board-dnd" />
      <div className="grid h-[calc(100%-36px)] grid-cols-[1fr_0.8fr] gap-3 p-3">
        <div className="rounded-2xl border border-line bg-white p-3">
          <p className="text-[10px] tracking-wide text-muted">IFC-142</p>
          <p className="mt-1 text-sm text-ink">Keep column order after drag</p>
          <p className="mt-2 text-[11px] leading-relaxed text-muted">
            Persist dnd-kit order, then hydrate Redux so reloads match the board.
          </p>
          <div className="mt-3 flex gap-1">
            <Pill>frontend</Pill>
            <Pill>state</Pill>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="rounded-2xl bg-lavender/40 p-3">
            <p className="text-[10px] text-muted">Assignee</p>
            <p className="text-sm">Riza · FE</p>
          </div>
          <div className="flex-1 rounded-2xl bg-[#f3eee4] p-3">
            <p className="text-[10px] text-muted">Activity</p>
            <p className="mt-2 text-[11px]">Moved to Review</p>
            <p className="mt-1 text-[11px] text-muted">Comment from Nia</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DashboardMockup() {
  return (
    <div className="h-full overflow-hidden rounded-[18px] bg-[#eef6f2] text-left">
      <WindowChrome title="if-collab / overview" />
      <div className="grid h-[calc(100%-36px)] grid-cols-3 gap-2 p-3">
        {['Open tasks', 'This week', 'Team'].map((label, i) => (
          <div key={label} className="rounded-2xl bg-white p-3">
            <p className="text-[10px] text-muted">{label}</p>
            <p className="mt-2 font-serif text-2xl">
              {['18', '6', '4'][i]}
            </p>
          </div>
        ))}
        <div className="col-span-3 rounded-2xl bg-white p-3">
          <div className="flex h-16 items-end gap-1">
            {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-mint/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function CollabMockup() {
  return (
    <div className="h-full overflow-hidden rounded-[18px] bg-white text-left">
      <WindowChrome title="if-collab / team" />
      <div className="space-y-2 p-3">
        {['Nia commented on Auth flow', 'Andi joined Informatics Lab', 'Board reminder · 16:00'].map(
          (line) => (
            <div key={line} className="flex items-center gap-2 rounded-xl bg-cream p-2">
              <span className="size-6 rounded-full bg-plum" />
              <p className="text-[11px]">{line}</p>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export function ResearchMockup() {
  return (
    <div className="h-full overflow-hidden rounded-[18px] bg-[#e8f3ef] text-left">
      <WindowChrome title="xplover / papers / open-review" />
      <div className="grid h-[calc(100%-36px)] grid-cols-[0.9fr_1.2fr] gap-3 p-3">
        <div className="rounded-2xl bg-white p-3">
          <p className="text-[10px] tracking-wide text-muted">Collection</p>
          {['Soil sensors', 'Campus air', 'Open lab notes'].map((item) => (
            <p key={item} className="mt-2 rounded-lg bg-cream px-2 py-1.5 text-[11px]">
              {item}
            </p>
          ))}
        </div>
        <div className="rounded-2xl bg-night p-3 text-cream">
          <p className="text-[10px] text-cream/60">Active paper</p>
          <p className="mt-2 font-serif text-lg leading-snug">
            Verifiable lab notes for public science
          </p>
          <p className="mt-3 text-[11px] text-cream/70">
            Reviewer role · IPFS draft attached
          </p>
        </div>
      </div>
    </div>
  )
}

export function CarouselMockup() {
  return (
    <div className="flex h-full items-center gap-2 overflow-hidden rounded-[18px] bg-[#f6f1e4] p-3">
      {['Knowledge graph', 'Public abstract', 'Citation trail'].map((title, i) => (
        <div
          key={title}
          className={`min-w-[42%] rounded-2xl p-3 ${i === 1 ? 'bg-mint' : 'bg-white'}`}
        >
          <p className="text-[10px] text-muted">0{i + 1}</p>
          <p className="mt-2 text-sm">{title}</p>
        </div>
      ))}
    </div>
  )
}

export function Web3Mockup() {
  return (
    <div className="h-full overflow-hidden rounded-[18px] bg-night text-left text-cream">
      <WindowChrome title="xplover / wallet" />
      <div className="space-y-3 p-4">
        <p className="font-mono text-[11px] text-mint">await contract.attest(cid)</p>
        <div className="rounded-2xl border border-white/10 p-3">
          <p className="text-[10px] text-cream/50">Network</p>
          <p className="text-sm">Ethereum · Sepolia (demo)</p>
        </div>
        <div className="rounded-2xl bg-white/8 p-3">
          <p className="text-[10px] text-cream/50">Incentive</p>
          <p className="text-sm">Role-based attestation, not a token sale UI</p>
        </div>
      </div>
    </div>
  )
}

export function WorkflowMockup() {
  return (
    <div className="h-full rounded-[18px] bg-white p-4 text-left">
      <p className="text-[10px] tracking-wide text-muted">Research workflow</p>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px]">
        {['Draft', 'Review', 'Attest', 'Publish'].map((step, i) => (
          <span key={step} className="contents">
            <span className="rounded-full bg-cream px-3 py-1">{step}</span>
            {i < 3 ? <span className="text-muted">→</span> : null}
          </span>
        ))}
      </div>
    </div>
  )
}

export function PublicSiteMockup() {
  return (
    <div className="h-full overflow-hidden rounded-[18px] bg-[#f7f3ea] text-left">
      <WindowChrome title="yuk-mari / home" />
      <div className="p-3">
        <div className="h-16 rounded-2xl bg-gold/80" />
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-xl bg-white p-2">
              <div className="h-10 rounded-lg bg-cream" />
              <p className="mt-2 text-[10px]">Story {n}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function AdminMockup() {
  return (
    <div className="h-full overflow-hidden rounded-[18px] bg-white text-left">
      <WindowChrome title="yuk-mari / admin" />
      <div className="grid h-[calc(100%-36px)] grid-cols-[0.4fr_1fr]">
        <div className="space-y-2 bg-cream p-3 text-[11px]">
          <p>Content</p>
          <p className="text-muted">Media</p>
          <p className="text-muted">Users</p>
        </div>
        <div className="p-3">
          <div className="rounded-xl border border-line p-2 text-[11px]">
            <div className="flex justify-between">
              <span>Landing hero</span>
              <span className="text-muted">Published</span>
            </div>
          </div>
          <div className="mt-2 rounded-xl border border-line p-2 text-[11px]">
            <div className="flex justify-between">
              <span>Event recap</span>
              <span className="text-muted">Draft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FormMockup() {
  return (
    <div className="h-full rounded-[18px] bg-[#f3eee6] p-4 text-left">
      <p className="text-[10px] text-muted">New record</p>
      <div className="mt-3 h-8 rounded-lg bg-white" />
      <div className="mt-2 h-16 rounded-lg bg-white" />
      <div className="mt-3 h-8 w-24 rounded-full bg-ink" />
    </div>
  )
}

export function ApiListMockup() {
  return (
    <div className="h-full rounded-[18px] bg-night p-4 font-mono text-[11px] text-mint">
      <p>GET /api/content</p>
      <p className="mt-2 text-cream/70">200 · 12 records · PostgreSQL</p>
      <p className="mt-3 text-cream/50">PATCH /api/content/:id</p>
    </div>
  )
}

import type { ReactNode } from 'react'

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto h-full max-w-[180px] overflow-hidden rounded-[28px] border-[6px] border-night bg-white">
      <div className="h-4 bg-night/90" />
      {children}
    </div>
  )
}

export function MapMockup() {
  return (
    <PhoneFrame>
      <div className="relative h-[calc(100%-16px)] bg-[#dce8e2]">
        <div className="absolute inset-6 rounded-full border border-ink/15" />
        <div className="absolute top-1/3 left-1/2 size-3 -translate-x-1/2 rounded-full bg-gold" />
        <p className="absolute bottom-3 left-3 right-3 rounded-xl bg-white p-2 text-[10px]">
          Nearby · 4 spots
        </p>
      </div>
    </PhoneFrame>
  )
}

export function FeedMockup() {
  return (
    <PhoneFrame>
      <div className="space-y-2 p-3">
        <p className="text-[11px] tracking-wide">Live</p>
        {['Someone checked in', 'Lab is open', 'Walk starting'].map((row) => (
          <div key={row} className="rounded-xl bg-cream p-2 text-[10px]">
            {row}
          </div>
        ))}
      </div>
    </PhoneFrame>
  )
}

export function ProfileMockup() {
  return (
    <PhoneFrame>
      <div className="p-4 text-center">
        <div className="mx-auto size-12 rounded-full bg-lavender" />
        <p className="mt-2 text-sm">Fahriza</p>
        <p className="text-[10px] text-muted">Campus walker</p>
      </div>
    </PhoneFrame>
  )
}

export function ChatMockup() {
  return (
    <PhoneFrame>
      <div className="flex h-[calc(100%-16px)] flex-col justify-end gap-2 p-3">
        <div className="self-start rounded-2xl bg-cream px-2 py-1 text-[10px]">Are you near the hall?</div>
        <div className="self-end rounded-2xl bg-mint px-2 py-1 text-[10px]">On the way · live</div>
      </div>
    </PhoneFrame>
  )
}

const mockupMap = {
  kanban: KanbanMockup,
  task: TaskMockup,
  dashboard: DashboardMockup,
  collab: CollabMockup,
  research: ResearchMockup,
  carousel: CarouselMockup,
  web3: Web3Mockup,
  workflow: WorkflowMockup,
  public: PublicSiteMockup,
  admin: AdminMockup,
  form: FormMockup,
  api: ApiListMockup,
  map: MapMockup,
  feed: FeedMockup,
  profile: ProfileMockup,
  chat: ChatMockup,
}

export function ProjectMockup({
  id,
  className = '',
}: {
  id: string
  className?: string
}) {
  const View = mockupMap[id as keyof typeof mockupMap]
  if (!View) return null
  return (
    <div className={`h-full min-h-[180px] ${className}`}>
      <View />
    </div>
  )
}

export function featuredMockupId(slug: string) {
  if (slug === 'if-collab') return 'kanban'
  if (slug === 'xplover') return 'research'
  if (slug === 'yuk-mari') return 'public'
  return 'map'
}
