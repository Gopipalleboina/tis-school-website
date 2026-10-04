import { motion } from "framer-motion"
import { ArrowUpRight, BookOpen, Heart, Sparkles } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Learning with purpose",
    text: "Students are encouraged to think independently, ask questions and connect learning with the world around them.",
  },
  {
    icon: Heart,
    title: "Character & confidence",
    text: "We nurture responsible, confident individuals through experiences that develop both character and capability.",
  },
  {
    icon: Sparkles,
    title: "Beyond the classroom",
    text: "Academics, sports, creativity and everyday experiences come together to create a well-rounded education.",
  },
]

function About() {
  return (
    <section
      id="about"
      className="bg-[#f5f3ed] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section intro */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#c9824b]">
              Why TIS
            </p>

            <h2 className="max-w-xl text-4xl font-bold leading-tight text-[#163b2f] sm:text-5xl">
              Education that helps
              <span className="text-[#c9824b]"> every student </span>
              discover their potential.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Tulas International School brings together a supportive
              learning environment, diverse experiences and opportunities
              that encourage students to grow with curiosity and confidence.
            </p>

            <a
              href="#academics"
              className="group mt-6 inline-flex items-center gap-2 font-semibold text-[#163b2f]"
            >
              Explore our approach
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="group rounded-3xl border border-[#163b2f]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e4eee2] text-[#163b2f] transition-colors duration-300 group-hover:bg-[#163b2f] group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#163b2f]">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {feature.text}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About