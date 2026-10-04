import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { activities } from "../data/activities"

function Activities() {
  return (
    <section
      id="activities"
      className="overflow-hidden bg-[#ebe7dc] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#c9824b]">
              Life at TIS
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[#163b2f] sm:text-5xl lg:text-6xl">
              Learning doesn't stop
              <span className="block text-[#c9824b]">
                when class ends.
              </span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-gray-600">
            Students discover new interests, develop meaningful skills and
            build relationships through experiences beyond the classroom.
          </p>
        </motion.div>

        {/* Activities */}
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {activities.map((activity, index) => (
            <motion.article
              key={activity.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative min-h-[280px] overflow-hidden rounded-[2rem] bg-[#163b2f] p-7 text-white sm:p-9"
            >
              {/* Decorative circle */}
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10 transition-transform duration-500 group-hover:scale-125" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60">
                    {activity.category}
                  </span>

                  <span className="text-sm font-bold text-white/30">
                    {activity.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">
                    {activity.title}
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-white/60">
                    {activity.description}
                  </p>

                  <div className="mt-7 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#163b2f] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-medium text-[#163b2f] sm:text-xl">
            Every experience is an opportunity to discover something new.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Activities