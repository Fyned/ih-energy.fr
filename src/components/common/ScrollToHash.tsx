import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Scroll to top when navigating to a new page without hash
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    // Small delay to ensure the page has rendered
    const timeoutId = setTimeout(() => {
      const element = document.querySelector(hash)
      if (element) {
        const headerOffset = 100 // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [pathname, hash])

  return null
}
