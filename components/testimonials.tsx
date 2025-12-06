"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Nick — Senior Developer",
    quote:
      "This AI Code Review Assistant dramatically improved my workflow. Bugs and optimizations are instantly visible.",
  },
  {
    name: "Alex — Fullstack Engineer",
    quote: "The side-by-side diff and suggestions are super helpful. I save hours every week reviewing code.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">What Developers Say</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-bg p-8 rounded-xl"
            >
              <p className="text-lg text-foreground italic mb-4">"{testimonial.quote}"</p>
              <footer className="text-accent font-semibold">— {testimonial.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
