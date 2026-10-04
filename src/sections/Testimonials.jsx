import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { testimonials } from "../data/testimonials"

function Testimonials() {
  return (
    <section className="bg-[#f5f3ed] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9824b]">
            The TIS experience
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight text-[#163b2f] sm:text-5xl">
            An environment where
            <span className="text-[#c9824b]"> growth feels natural.</span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.role}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="flex min-h-[300px] flex-col justify-between rounded-3xl border border-[#163b2f]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4eee2] text-[#163b2f]">
                  <Quote size={20} />
                </div>

                <p className="mt-7 text-lg font-medium leading-8 text-[#163b2f]">
                  “{testimonial.quote}”
                </p>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-5">
                <p className="font-semibold text-[#163b2f]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials