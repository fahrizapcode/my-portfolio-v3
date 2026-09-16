import React from 'react'

export interface TechItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
  offset?: string
}

export function ReactIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}

export function NextjsIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" className={className} fill="none">
      <circle cx="90" cy="90" r="90" fill="#161513" />
      <path
        d="M149.508 157.52L69.142 54H54v72.27h14.4V73.837l66.587 86.602a89.62 89.62 0 0014.521-2.919zM114 54h14.4v72H114V54z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export function TypeScriptIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <rect width="128" height="128" rx="20" fill="#3178C6" />
      <path
        d="M72.072 108.318c3.273 2.046 7.636 3.409 12.545 3.409 10.909 0 17.182-5.454 17.182-14.727 0-9.273-5.727-13.364-15.000-17.454l-3.818-1.637c-6.273-2.727-9.273-5.727-9.273-10.364 0-5.181 4.364-8.727 11.182-8.727 4.364 0 7.909 1.091 10.364 2.454l2.454-9.818c-3.000-1.364-7.364-2.182-12.000-2.182-10.636 0-17.182 6.000-17.182 14.727 0 7.909 4.909 12.273 13.636 16.091l3.818 1.636c7.091 3.000 10.364 6.273 10.364 11.455 0 5.727-4.909 9.273-12.000 9.273-5.182 0-9.818-1.637-12.818-3.409l-2.727 10.091zM36.364 68.455H49.364V112H61.091V68.455H74.091V58.909H36.364v9.546z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export function JavaScriptIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <rect width="128" height="128" rx="20" fill="#F7DF1E" />
      <path
        d="M67.314 107.575c3.344 2.091 7.801 3.483 12.809 3.483 11.139 0 17.543-5.57 17.543-15.037 0-9.467-5.848-13.645-15.316-17.822l-3.898-1.671c-6.405-2.785-9.467-5.848-9.467-10.582 0-5.291 4.456-8.911 11.417-8.911 4.456 0 8.076 1.114 10.582 2.506l2.506-10.024c-3.063-1.393-7.519-2.228-12.253-2.228-10.86 0-17.543 6.126-17.543 15.037 0 8.075 5.013 12.531 13.924 16.429l3.898 1.671c7.24 3.063 10.582 6.405 10.582 11.696 0 5.848-5.012 9.467-12.253 9.467-5.291 0-10.024-1.671-13.087-3.483l-2.784 10.301zM28.455 107.854c3.483 1.95 8.354 3.203 12.809 3.203 8.354 0 13.924-4.177 13.924-13.924V57.652H43.353v38.986c0 4.177-1.95 6.405-5.848 6.405-2.506 0-5.291-.835-7.101-1.95l-1.949 6.761z"
        fill="#000000"
      />
    </svg>
  )
}

export function NodejsIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <path d="M64 12l48 27.7v55.4L64 123.3 16 95.1V39.7L64 12z" fill="#339933" />
      <path d="M64 24.3L27.6 45.3v42L64 108.3l36.4-21v-42L64 24.3z" fill="#FFFFFF" fillOpacity="0.2" />
      <path d="M64 48a16 16 0 1 0 0 32 16 16 0 0 0 0-32z" fill="#FFFFFF" />
    </svg>
  )
}

export function ExpressIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <rect width="128" height="128" rx="20" fill="#161513" />
      <text
        x="50%"
        y="58%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="sans-serif"
        fontWeight="600"
        fontSize="44"
        letterSpacing="-1"
      >
        ex
      </text>
    </svg>
  )
}

export function MysqlIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <rect width="128" height="128" rx="20" fill="#00618A" />
      <path d="M28 82c0-14 12-24 26-24s26 10 26 24M70 82c0-14 12-24 26-24" stroke="#F29111" strokeWidth="8" strokeLinecap="round" />
      <circle cx="54" cy="58" r="5" fill="#FFFFFF" />
      <circle cx="96" cy="58" r="5" fill="#FFFFFF" />
    </svg>
  )
}

export function SolidityIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <path d="M64 16L32 68l32 16 32-16L64 16z" fill="#363636" />
      <path d="M32 68l32 44 32-44-32 16-32-16z" fill="#818181" />
      <path d="M64 16l32 52-32 16V16z" fill="#525252" />
    </svg>
  )
}

export function EthereumIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <path d="M64 12v43.5L100.5 72 64 12z" fill="#8A92B2" />
      <path d="M64 12L27.5 72 64 55.5V12z" fill="#62688F" />
      <path d="M64 80.5v35.5L100.6 72 64 80.5z" fill="#8A92B2" />
      <path d="M64 116V80.5L27.5 72 64 116z" fill="#62688F" />
      <path d="M64 74.5l36.5-19L64 39v35.5z" fill="#454A75" />
      <path d="M27.5 55.5L64 74.5V39L27.5 55.5z" fill="#3B3F64" />
    </svg>
  )
}

export function IpfsIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <path d="M64 14l43.3 25v50L64 114 20.7 89V39L64 14z" fill="#65C2CB" />
      <path d="M64 14v48.6L20.7 39 64 14z" fill="#409B9B" />
      <path d="M64 62.6l43.3-23.6L64 14v48.6z" fill="#52B3BD" />
      <path d="M64 62.6V114l43.3-25V39L64 62.6z" fill="#307A80" />
    </svg>
  )
}

export function FigmaIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <path d="M44 110c6.6 0 12-5.4 12-12V86H44c-6.6 0-12 5.4-12 12s5.4 12 12 12z" fill="#0ACF83" />
      <path d="M32 62c0-6.6 5.4-12 12-12h12v24H44c-6.6 0-12-5.4-12-12z" fill="#A259FF" />
      <path d="M32 38c0-6.6 5.4-12 12-12h12v24H44c-6.6 0-12-5.4-12-12z" fill="#F24E1E" />
      <path d="M56 26h12c6.6 0 12 5.4 12 12s-5.4 12-12 12H56V26z" fill="#FF7262" />
      <path d="M80 62c0 6.6-5.4 12-12 12a12 12 0 1 1 12-12z" fill="#1ABCFE" />
    </svg>
  )
}

export function GitIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <path
        d="M120.3 56.6L71.4 7.7c-3.6-3.6-9.4-3.6-13 0l-13 13 16.4 16.4c3.8-1.3 8.2-.4 11.2 2.6 3 3 3.9 7.4 2.6 11.2l15.8 15.8c3.8-1.3 8.2-.4 11.2 2.6 4.3 4.3 4.3 11.3 0 15.6-4.3 4.3-11.3 4.3-15.6 0-3.3-3.3-4.1-8.1-2.5-12.1L70.1 58.4v27.2c1.3.8 2.4 1.9 3.1 3.3 2.5 4.3 1 9.8-3.3 12.3-4.3 2.5-9.8 1-12.3-3.3-2.5-4.3-1-9.8 3.3-12.3 1.6-.9 3.4-1.3 5.2-1.2V56.7c-1.8.1-3.6-.3-5.2-1.2-3.3-1.9-5.1-5.6-4.6-9.3L40.1 29.8 7.7 62.2c-3.6 3.6-3.6 9.4 0 13l48.9 48.9c3.6 3.6 9.4 3.6 13 0l50.7-50.7c3.6-3.6 3.6-9.4 0-16.8z"
        fill="#F05032"
      />
      <circle cx="70.5" cy="42.5" r="5" fill="#FFFFFF" />
      <circle cx="95.5" cy="67.5" r="5" fill="#FFFFFF" />
      <circle cx="70.5" cy="92.5" r="5" fill="#FFFFFF" />
    </svg>
  )
}

export function GithubBrandIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#181717">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

export function TailwindIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#06B6D4"
      />
    </svg>
  )
}

export function ViteIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <path
        d="M123.5 18L68.7 119.3c-2.1 3.9-7.7 3.9-9.8 0L4.1 18c-2.4-4.5 1.7-9.7 6.6-8.4l52.6 13.7c.9.2 1.8.2 2.7 0L116.9 9.6c4.9-1.3 9 3.9 6.6 8.4z"
        fill="#BD34FE"
      />
      <path
        d="M84.7 10L42.2 84.4l-12.7-48L84.7 10z"
        fill="#FFC400"
      />
    </svg>
  )
}

export function DockerIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#2496ED">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.186.186 0 00.186-.185V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .103.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.185V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186m0 2.714h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.185-.186H8.1a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.955 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.144a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m5.91 2.715h2.118a.186.186 0 00.186-.185v-1.887a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.185m-2.955 0h2.12a.186.186 0 00.184-.185v-1.887a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185m-2.93 0h2.119a.186.186 0 00.185-.185v-1.887a.185.185 0 00-.185-.185H5.144a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185m-2.954 0h2.119a.185.185 0 00.185-.185v-1.887a.186.186 0 00-.185-.185H2.19a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185M.01 12.09c.071 2.378 1.34 4.545 3.376 5.761 1.77.969 3.824 1.345 5.86 1.071 4.595-.623 8.366-4.088 9.387-8.623.771-.05 1.543-.223 2.269-.516.425-.17.653-.61.542-1.048-.1-.383-.43-.655-.824-.68-1.576-.1-3.076.495-4.227 1.517a9.38 9.38 0 00-3.32-.596H.272a.258.258 0 00-.262.257c0 1.036.001 1.86.001 2.858z" />
    </svg>
  )
}

const row1: TechItem[] = [
  { name: 'React', icon: ReactIcon },
  { name: 'Next.js', icon: NextjsIcon },
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'Node.js', icon: NodejsIcon },
  { name: 'Express', icon: ExpressIcon },
  { name: 'Tailwind CSS', icon: TailwindIcon },
  { name: 'Vite', icon: ViteIcon },
]

const row2: TechItem[] = [
  { name: 'MySQL', icon: MysqlIcon },
  { name: 'Solidity', icon: SolidityIcon },
  { name: 'Ethereum', icon: EthereumIcon },
  { name: 'IPFS', icon: IpfsIcon },
  { name: 'Figma', icon: FigmaIcon },
  { name: 'Git', icon: GitIcon },
  { name: 'GitHub', icon: GithubBrandIcon },
  { name: 'Docker', icon: DockerIcon },
]

export function TechMarquee() {
  return (
    <div className="group relative col-span-1 flex flex-col justify-center h-full min-h-[115px] sm:min-h-[180px] overflow-hidden py-1 sm:py-2 select-none sm:col-span-2 md:col-span-4 lg:col-span-2">
      {/* Edge gradient masks for smooth fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-10 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-10 bg-gradient-to-l from-cream to-transparent" />

      <div className="flex flex-col gap-2.5 sm:gap-4 py-0.5 sm:py-1">
        {/* Row 1 */}
        <div className="flex w-max gap-2.5 sm:gap-3.5 animate-marquee-right group-hover:[animation-play-state:paused]">
          {[...row1, ...row1].map((tech, idx) => (
            <div
              key={`r1-${tech.name}-${idx}`}
              className="flex items-center gap-2 sm:gap-2.5 rounded-xl sm:rounded-2xl bg-paper px-3 sm:px-4 py-2 sm:py-3 shadow-xs border border-ink/8 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <tech.icon className="size-4.5 sm:size-6 shrink-0" />
              <span className="whitespace-nowrap text-xs font-medium text-ink/90 sm:text-sm">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-max gap-2.5 sm:gap-3.5 animate-marquee-right-slow group-hover:[animation-play-state:paused]">
          {[...row2, ...row2].map((tech, idx) => (
            <div
              key={`r2-${tech.name}-${idx}`}
              className="flex items-center gap-2 sm:gap-2.5 rounded-xl sm:rounded-2xl bg-paper px-3 sm:px-4 py-2 sm:py-3 shadow-xs border border-ink/8 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <tech.icon className="size-4.5 sm:size-6 shrink-0" />
              <span className="whitespace-nowrap text-xs font-medium text-ink/90 sm:text-sm">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
