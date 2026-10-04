import { motion } from "framer-motion"
import {stats} from '../data/Stats.js'

function Stats() {
  return (
    <section className="bg-[#163b2f] px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/15 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`px-5 py-4 text-center ${
              index === 2 ? "border-t md:border-t-0" : ""
            }`}
          >
            <p className="text-3xl font-bold sm:text-4xl">
              {stat.value}
            </p>

            <p className="mt-2 text-sm text-white/60">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats