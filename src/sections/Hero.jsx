import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f3ed] pt-28">
      
      {/* Decorative Circle */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#d9e6d8]" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="mb-6 inline-block rounded-full border border-[#163b2f]/20 bg-white px-4 py-2 text-sm font-medium text-[#163b2f]">
            A place to learn, grow & discover
          </span>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-[#163b2f] sm:text-6xl lg:text-7xl">
            Shaping
            <span className="block text-[#c9824b]">curious minds</span>
            for a brighter future.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            At Tulas International School, education goes beyond classrooms.
            We create an environment where students learn with curiosity,
            confidence and purpose.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-[#163b2f] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#285c4b] hover:shadow-xl"
            >
              Explore TIS
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#about"
              className="flex items-center gap-2 rounded-full border border-[#163b2f]/20 bg-white px-6 py-3.5 font-semibold text-[#163b2f] transition-all duration-300 hover:border-[#163b2f] hover:shadow-lg"
            >
              <Play size={17} />
              Discover our story
            </a>
          </div>

          {/* Small information */}
          <div className="mt-10 flex items-center gap-8 border-t border-gray-300 pt-6">
            <div>
              <p className="text-2xl font-bold text-[#163b2f]">22+</p>
              <p className="text-xs text-gray-500">Acres of campus</p>
            </div>

            <div className="h-10 w-px bg-gray-300" />

            <div>
              <p className="text-2xl font-bold text-[#163b2f]">16+</p>
              <p className="text-xs text-gray-500">Sports disciplines</p>
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-[#163b2f] shadow-2xl">
            
            {/* Image placeholder area */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/80">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-4xl">
                  🏫
                </div>

                <p className="text-sm tracking-widest">
                  TULAS INTERNATIONAL SCHOOL
                </p>
              </div>
            </div>

            {/* Bottom overlay */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c9824b]">
                Learning beyond boundaries
              </p>

              <p className="mt-1 text-lg font-bold text-[#163b2f]">
                Where every student gets room to grow.
              </p>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-5 top-16 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-8"
          >
            <p className="text-xs text-gray-500">Education</p>
            <p className="font-bold text-[#163b2f]">With purpose</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero