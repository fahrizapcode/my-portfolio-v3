import React from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiSolidity,
  SiEthereum,
  SiEthers,
  SiIpfs,
  SiFigma,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiVite,
  SiDocker,
} from 'react-icons/si'

export interface TechItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
  offset?: string
}

export function ReactIcon({ className = 'size-5' }: { className?: string }) {
  return <SiReact className={`${className} text-[#61DAFB]`} />
}

export function NextjsIcon({ className = 'size-5' }: { className?: string }) {
  return <SiNextdotjs className={`${className} text-ink`} />
}

export function TypeScriptIcon({ className = 'size-5' }: { className?: string }) {
  return <SiTypescript className={`${className} text-[#3178C6]`} />
}

export function JavaScriptIcon({ className = 'size-5' }: { className?: string }) {
  return <SiJavascript className={`${className} text-[#F7DF1E] rounded-[2px] bg-black`} />
}

export function NodejsIcon({ className = 'size-5' }: { className?: string }) {
  return <SiNodedotjs className={`${className} text-[#5FA04E]`} />
}

export function ExpressIcon({ className = 'size-5' }: { className?: string }) {
  return <SiExpress className={`${className} text-ink`} />
}

export function FastAPIIcon({ className = 'size-5' }: { className?: string }) {
  return <SiFastapi className={`${className} text-[#009688]`} />
}

export function MysqlIcon({ className = 'size-5' }: { className?: string }) {
  return <SiMysql className={`${className} text-[#4479A1]`} />
}

export function PostgresIcon({ className = 'size-5' }: { className?: string }) {
  return <SiPostgresql className={`${className} text-[#4169E1]`} />
}

export function SolidityIcon({ className = 'size-5' }: { className?: string }) {
  return <SiSolidity className={`${className} text-[#363636]`} />
}

export function EthereumIcon({ className = 'size-5' }: { className?: string }) {
  return <SiEthereum className={`${className} text-[#3C3C3D]`} />
}

export function EthersIcon({ className = 'size-5' }: { className?: string }) {
  return <SiEthers className={`${className} text-[#254B8C]`} />
}

export function IpfsIcon({ className = 'size-5' }: { className?: string }) {
  return <SiIpfs className={`${className} text-[#65C2CB]`} />
}

export function FigmaIcon({ className = 'size-5' }: { className?: string }) {
  return <SiFigma className={`${className} text-[#F24E1E]`} />
}

export function GitIcon({ className = 'size-5' }: { className?: string }) {
  return <SiGit className={`${className} text-[#F05032]`} />
}

export function GithubBrandIcon({ className = 'size-5' }: { className?: string }) {
  return <SiGithub className={`${className} text-ink`} />
}

export function TailwindIcon({ className = 'size-5' }: { className?: string }) {
  return <SiTailwindcss className={`${className} text-[#06B6D4]`} />
}

export function ViteIcon({ className = 'size-5' }: { className?: string }) {
  return <SiVite className={`${className} text-[#646CFF]`} />
}

export function DockerIcon({ className = 'size-5' }: { className?: string }) {
  return <SiDocker className={`${className} text-[#2496ED]`} />
}

export const techIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'React': ReactIcon,
  'Next.js': NextjsIcon,
  'TypeScript': TypeScriptIcon,
  'JavaScript': JavaScriptIcon,
  'Node.js': NodejsIcon,
  'Express': ExpressIcon,
  'FastAPI': FastAPIIcon,
  'MySQL': MysqlIcon,
  'PostgreSQL': PostgresIcon,
  'Solidity': SolidityIcon,
  'Ethereum': EthereumIcon,
  'Ethers.js': EthersIcon,
  'IPFS': IpfsIcon,
  'Figma': FigmaIcon,
  'Git': GitIcon,
  'GitHub': GithubBrandIcon,
  'Tailwind CSS': TailwindIcon,
  'Vite': ViteIcon,
  'Docker': DockerIcon,
}

const row1: TechItem[] = [
  { name: 'React', icon: ReactIcon },
  { name: 'Next.js', icon: NextjsIcon },
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'Tailwind CSS', icon: TailwindIcon },
  { name: 'Vite', icon: ViteIcon },
]

const row2: TechItem[] = [
  { name: 'Node.js', icon: NodejsIcon },
  { name: 'Express', icon: ExpressIcon },
  { name: 'FastAPI', icon: FastAPIIcon },
  { name: 'MySQL', icon: MysqlIcon },
  { name: 'PostgreSQL', icon: PostgresIcon },
  { name: 'Docker', icon: DockerIcon },
]

const row3: TechItem[] = [
  { name: 'Solidity', icon: SolidityIcon },
  { name: 'Ethereum', icon: EthereumIcon },
  { name: 'Ethers.js', icon: EthersIcon },
  { name: 'IPFS', icon: IpfsIcon },
  { name: 'Figma', icon: FigmaIcon },
  { name: 'Git', icon: GitIcon },
  { name: 'GitHub', icon: GithubBrandIcon },
]

export function TechMarquee() {
  return (
    <div className="group relative col-span-1 flex flex-col justify-center h-full min-h-[160px] sm:min-h-[230px] overflow-hidden py-1 sm:py-3 select-none sm:col-span-2 md:col-span-4 lg:col-span-2" style={{ maxWidth: '100%', contain: 'paint' }}>
      {/* Edge gradient masks for smooth fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 sm:w-10 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 sm:w-10 bg-gradient-to-l from-cream to-transparent" />

      <div className="flex flex-col gap-2 sm:gap-2.5 py-0.5">
        {/* Row 1 — Right */}
        <div className="flex w-max gap-2 sm:gap-3 animate-marquee-right group-hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1].map((tech, idx) => (
            <div
              key={`r1-${tech.name}-${idx}`}
              className="flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-paper px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 shadow-xs border border-ink/8 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <tech.icon className="size-6 shrink-0 sm:size-7" />
              <span className="whitespace-nowrap text-[11px] font-medium text-ink/90 sm:text-xs">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 — Left */}
        <div className="flex w-max gap-2 sm:gap-3 animate-marquee-left group-hover:[animation-play-state:paused]">
          {[...row2, ...row2, ...row2].map((tech, idx) => (
            <div
              key={`r2-${tech.name}-${idx}`}
              className="flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-paper px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 shadow-xs border border-ink/8 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <tech.icon className="size-6 shrink-0 sm:size-7" />
              <span className="whitespace-nowrap text-[11px] font-medium text-ink/90 sm:text-xs">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 3 — Right Slow */}
        <div className="flex w-max gap-2 sm:gap-3 animate-marquee-right-slow group-hover:[animation-play-state:paused]">
          {[...row3, ...row3, ...row3].map((tech, idx) => (
            <div
              key={`r3-${tech.name}-${idx}`}
              className="flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-paper px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 shadow-xs border border-ink/8 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <tech.icon className="size-6 shrink-0 sm:size-7" />
              <span className="whitespace-nowrap text-[11px] font-medium text-ink/90 sm:text-xs">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
