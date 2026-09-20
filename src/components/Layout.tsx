import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout() {
  const { pathname, hash } = useLocation()

  // Always scroll to top when changing route (unless navigating to an anchor hash)
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    // Scroll window to top immediately on page change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  // Re-run reveal observer whenever the route changes
  useScrollReveal()

  return (
    <div className="min-h-svh overflow-x-hidden" key={pathname}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
