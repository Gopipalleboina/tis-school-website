import { motion } from "framer-motion"
import { ArrowUpRight, MapPin } from "lucide-react"

function Campus() {
  return (
    <section
      id="campus"
      className="overflow-hidden bg-[#163b2f] px-6 py-24 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e3a06f]">
            Campus experience
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            A campus designed
            <span className="block text-[#e3a06f]">
              for discovery.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Every space at TIS is designed to give students opportunities
            to learn, explore, collaborate and experience life beyond the
            traditional classroom.
          </p>
        </motion.div>

        {/* Main visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mt-14 overflow-hidden rounded-[2rem] bg-[#285c4b]"
        >
          <div className="grid min-h-[520px] lg:grid-cols-[1.4fr_0.6fr]">

            {/* Large visual */}
            <div className="relative min-h-[350px] overflow-hidden bg-gradient-to-br from-[#285c4b] via-[#1c4a3b] to-[#102d24]">
              
              {/* Decorative shapes */}
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
              <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full border border-white/10" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 text-5xl">
                    🏫
                  </div>

                  <p className="mt-5 text-sm uppercase tracking-[0.25em] text-white/60">
                    Tulas International School
                  </p>

                  <p className="mt-2 text-2xl font-semibold">
                    Learn. Explore. Grow.
                  </p>
                </div>
              </div>

              {/* Location badge */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-[#163b2f]">
                <MapPin size={16} />
                Dehradun
              </div>
            </div>

            {/* Side information */}
            <div className="flex flex-col justify-between bg-[#f5f3ed] p-8 text-[#163b2f] sm:p-10">
              
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#c9824b]">
                  Space to grow
                </p>

                <h3 className="mt-4 text-3xl font-bold leading-tight">
                  More than a campus.
                  <br />
                  A community.
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  From learning spaces to sports and everyday student life,
                  the campus creates room for curiosity, connection and
                  meaningful experiences.
                </p>
              </div>

              <a
                href="#activities"
                className="group mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-[#163b2f] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#285c4b]"
              >
                Explore campus life

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom highlights */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            "Purpose-built learning spaces",
            "Sports & outdoor experiences",
            "A connected student community",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-sm text-white/75">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Campus