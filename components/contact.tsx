"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setEmail("")
    setMessage("")
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-card/40">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            required
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent min-h-32 resize-none"
          />

          <div className="flex items-center gap-4 pt-2">
            <button type="submit" className="btn-neon">
              Send Message
            </button>
            {sent && <div className="text-accent font-semibold">Sent ✓</div>}
          </div>
        </form>
      </div>
    </section>
  )
}
