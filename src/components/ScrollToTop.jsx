import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      id="scrollToTop"
      className={`btn btn-primary rounded-circle shadow ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      ↑
    </button>
  )
}
