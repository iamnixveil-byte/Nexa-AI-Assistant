"use client"

import { motion } from "framer-motion"

const features = [
  {
    title: "Bug Detection",
    desc: "Find errors and potential bugs in your code automatically.",
  },
  {
    title: "Security Scanning",
    desc: "Scan your code for vulnerabilities and unsafe patterns.",
  },
  {
    title: "Auto-Fix Suggestions",
    desc: "Get AI-powered suggestions to improve your code quality.",
  },
  {
    title: "Performance Optimization",
    desc: "Receive tips to make your code faster and more efficient.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-card/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">About AI Code Review Assistant</h2>
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
          A focused tool built to help developers quickly find issues and improve code quality using intelligent static
          checks combined with AI-powered suggestions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-bg p-6 rounded-xl"
            >
              <h3 className="font-bold text-lg neon-glow mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
