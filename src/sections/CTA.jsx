import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

function CTA() {
  return (
    <section
      id="contact"
      className="bg-[#f5f3ed] px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] bg-[#c9824b] px-7 py-14 text-center text-white sm:px-12 sm:py-20"
        >
          {/* Decorative circles */}
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full border border-white/20" />

          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-white/20" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
              <Sparkles size={22} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              Begin the journey
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Give your child room to discover what they can become.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-white/80 sm:text-lg">
              Discover an environment built around curiosity, confidence,
              meaningful experiences and a love for learning.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-[#163b2f] transition-all duration-300 hover:shadow-xl"
              >
                Enquire about admissions

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#campus"
                className="rounded-full border border-white/40 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Explore TIS
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA