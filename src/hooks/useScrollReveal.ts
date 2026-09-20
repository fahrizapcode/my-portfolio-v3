import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Attaches an IntersectionObserver to all [data-reveal] elements
 * inside the document. When an element enters the viewport it gets
 * [data-revealed], triggering the CSS transition defined in index.css.
 */
export function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    let observer: IntersectionObserver | null = null

    const revealElements = () => {
      const elements = document.querySelectorAll('[data-reveal]')
      if (!elements.length) return

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.setAttribute('data-revealed', '')
              observer?.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' },
      )

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        // If element is in viewport or above fold, reveal immediately so content is never blank
        if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
          el.setAttribute('data-revealed', '')
        } else {
          observer?.observe(el)
        }
      })
    }

    const timer = setTimeout(revealElements, 30)

    const handlePopState = () => {
      setTimeout(revealElements, 50)
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      clearTimeout(timer)
      if (observer) observer.disconnect()
      window.removeEventListener('popstate', handlePopState)
    }
  }, [pathname])
}
