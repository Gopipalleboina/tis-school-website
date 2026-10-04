import { useEffect, useState } from "react"

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#c9824b] md:block"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  )
}

export default CustomCursor

