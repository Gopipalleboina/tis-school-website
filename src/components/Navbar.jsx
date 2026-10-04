import { useState } from "react"
import { Menu, X } from "lucide-react"
import { navigationLinks } from "../data/navigation"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/90 px-6 py-4 shadow-lg backdrop-blur-md">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#163b2f] text-xl">
            🎓
          </div>

          <div>
            <h1 className="text-lg font-bold leading-none text-[#163b2f]">
              TIS
            </h1>
            <p className="text-[10px] font-medium tracking-wider text-gray-500">
              TULAS INTERNATIONAL SCHOOL
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-[#163b2f]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-[#163b2f] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#285c4b] hover:shadow-lg"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full p-2 text-[#163b2f] md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mx-4 mt-2 rounded-2xl bg-white p-5 shadow-xl md:hidden">
          <div className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-[#163b2f] px-5 py-3 text-center font-semibold text-white"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar