import { ArrowUpRight } from "lucide-react"

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "About", href: "#about" },
      { name: "Academics", href: "#academics" },
      { name: "Campus", href: "#campus" },
      { name: "Activities", href: "#activities" },
    ],
  },
]

function Footer() {
  return (
    <footer className="bg-[#102d24] px-6 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-[#163b2f]">
                🎓
              </div>

              <div>
                <p className="text-xl font-bold">TIS</p>
                <p className="text-[9px] tracking-[0.15em] text-white/50">
                  TULAS INTERNATIONAL SCHOOL
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm leading-7 text-white/50">
              Creating an environment where students can learn with curiosity,
              grow with confidence and discover their potential.
            </p>
          </div>

          {/* Explore Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
                {group.title}
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="w-fit text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Connect */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Connect
            </p>

            <div className="mt-5">
              <p className="text-white/70">
                Ready to discover more?
              </p>

              <a
                href="#contact"
                className="group mt-4 inline-flex items-center gap-2 font-semibold"
              >
                Enquire with TIS

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/35 sm:flex-row">
          <p>
            © 2026 Tulas International School. All rights reserved.
          </p>

          <p>
            Designed for a better learning experience.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

