"use client"

interface NavbarProps {
  route: "home" | "code-review"
  onNavigate: (route: "home" | "code-review") => void
}

export default function Navbar({ onNavigate, route }: NavbarProps) {
  const handleSmoothScroll = (id: string) => {
    onNavigate("home")
    setTimeout(() => {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <header className="sticky top-0 z-50 px-4 py-3">
      <nav className="max-w-7xl mx-auto glass-bg rounded-2xl px-6 py-4 flex items-center justify-between gap-8">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center font-bold text-accent">
            N
          </div>
          <div className="font-bold text-lg">NexaAI</div>
        </button>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          <li>
            <button
              onClick={() => onNavigate("home")}
              className={`text-sm transition-colors ${route === "home" ? "text-accent" : "hover:text-accent"}`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate("code-review")}
              className={`text-sm transition-colors ${route === "code-review" ? "text-accent" : "hover:text-accent"}`}
            >
              AI Code Review
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSmoothScroll("#about")}
              className="text-sm hover:text-accent transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSmoothScroll("#testimonials")}
              className="text-sm hover:text-accent transition-colors"
            >
              Testimonials
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSmoothScroll("#contact")}
              className="text-sm hover:text-accent transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
