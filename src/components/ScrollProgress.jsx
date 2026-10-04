import useScrollProgress from "../hooks/useScrollProgress"

function ScrollProgress() {
  const scrollProgress = useScrollProgress()

  return (
    <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-transparent">
      <div
        className="h-full bg-[#c9824b] transition-[width] duration-100"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollProgress

