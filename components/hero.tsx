"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface HeroProps {
  onNavigate: (route: "code-review") => void
}

export default function Hero({ onNavigate }: HeroProps) {
  const handleSmoothScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Build better code with <span className="neon-glow">AI suggestions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Paste code, get bug detection, security scans, optimizations, and improved code suggestions powered by AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => handleSmoothScroll("#testimonials")} className="btn-neon">
                See Testimonials
              </button>
              <button onClick={() => handleSmoothScroll("#contact")} className="btn-neon-outline">
                Contact Us
              </button>
              <button onClick={() => onNavigate("code-review")} className="btn-neon">
                Launch AI Code Review
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="glass-bg rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
              <Image
                src="/code-review-interface.jpg"
                alt="AI Code Review Interface"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
