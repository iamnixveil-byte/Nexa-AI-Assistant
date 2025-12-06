"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CodeReviewPanel from "@/components/code-review-panel"

export default function App() {
  const [route, setRoute] = useState<"home" | "code-review">("home")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onNavigate={setRoute} route={route} />
      {route === "home" ? (
        <>
          <Hero onNavigate={setRoute} />
          <About />
          <Testimonials />
          <Contact />
        </>
      ) : (
        <div className="py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">AI Code Review Assistant</h1>
            <p className="text-muted-foreground mb-8">
              Paste code, choose a language, and run the AI review to get issues, suggestions and an improved version
              with a side-by-side diff.
            </p>
            <CodeReviewPanel />
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}
