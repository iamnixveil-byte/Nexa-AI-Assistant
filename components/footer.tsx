export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-medium">© {new Date().getFullYear()} NexaAI</div>
        <div className="text-muted-foreground text-sm">Built for developers • AI-powered code review</div>
      </div>
    </footer>
  )
}
