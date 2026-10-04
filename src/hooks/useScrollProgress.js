import { useEffect, useState } from "react"

function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", updateScrollProgress)

    updateScrollProgress()

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
    }
  }, [])

  return scrollProgress
}

export default useScrollProgress

