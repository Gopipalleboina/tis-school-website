import { motion } from "framer-motion"
import {
  ArrowRight,
  BookOpen,
  Brain,
  Globe2,
  Lightbulb,
} from "lucide-react"

const academicFeatures = [
  {
    number: "01",
    icon: BookOpen,
    title: "Strong foundations",
    text: "A learning environment that builds clear concepts, curiosity and confidence.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Critical thinking",
    text: "Students are encouraged to question, analyse and develop independent perspectives.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Learning by doing",
    text: "Experiences beyond textbooks help students connect ideas with real-world situations.",
  },
  {
    number: "04",
    icon: Globe2,
    title: "Future ready",
    text: "Students develop the skills and mindset needed to approach an evolving world.",
  },
]

function Academics() {
  return (
    <section
      id="academics"
      className="bg-[#f5f3ed] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-2 lg:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#c9824b]">
              Academics
            </p>

            <h2 className="max-w-2xl text-4xl font-bold leading-tight text-[#163b2f] sm:text-5xl lg:text-6xl">
              Curious minds need
              <span className="block text-[#c9824b]">
                room to think.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            Our approach combines academic foundations with opportunities
            for students to explore ideas, solve problems and develop the
            confidence to learn independently.
          </p>
        </motion.div>

        {/* Academic cards */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {academicFeatures.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.article
                key={feature.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl border border-[#163b2f]/10 bg-white p-7 sm:p-9"
              >
                {/* Number */}
                <span className="absolute right-7 top-6 text-sm font-bold text-[#163b2f]/20">
                  {feature.number}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e4eee2] text-[#163b2f] transition-all duration-300 group-hover:bg-[#163b2f] group-hover:text-white">
                  <Icon size={21} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#163b2f]">
                  {feature.title}
                </h3>

                <p className="mt-3 max-w-lg leading-7 text-gray-600">
                  {feature.text}
                </p>

                <div className="mt-8 h-px w-full bg-gray-100" />

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#163b2f]">
                  Discover more
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5 flex flex-col justify-between gap-5 rounded-3xl bg-[#dfe9dc] p-7 sm:flex-row sm:items-center sm:p-9"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#c9824b]">
              Education with intention
            </p>

            <p className="mt-2 text-xl font-bold text-[#163b2f] sm:text-2xl">
              Building knowledge, confidence and curiosity together.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#163b2f] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#285c4b] hover:shadow-lg"
          >
            Talk to TIS
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Academics