import { useEffect, useRef, useState } from 'react'

/**
 * Adds an 'is-visible' class once the element scrolls into view.
 * Pair with the .reveal CSS class in index.css.
 */
export default function useReveal(threshold = 0.2) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
