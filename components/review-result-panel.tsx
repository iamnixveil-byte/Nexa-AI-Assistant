"use client"

interface ReviewResult {
  issues: Array<{ type: string; severity: string; message: string; line?: number }>
  suggestions: string
  improved_code: string
}

interface ReviewResultPanelProps {
  result: ReviewResult | null
}

export default function ReviewResultPanel({ result }: ReviewResultPanelProps) {
  if (!result) {
    return (
      <div className="flex items-center justify-center text-center text-muted-foreground">
        <div className="text-sm">
          No review yet. Click <strong>Run Review</strong> to get started.
        </div>
      </div>
    )
  }

  const { issues = [], suggestions = "", improved_code = "" } = result

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-bold text-accent text-sm mb-2">Issues</h3>
        {issues.length === 0 ? (
          <div className="text-xs text-muted-foreground">No issues detected.</div>
        ) : (
          <ul className="space-y-2">
            {issues.map((issue, i) => (
              <li key={i} className="text-xs border-l-2 border-accent/50 pl-2 py-1">
                <div className="font-semibold text-foreground flex gap-2 items-center">
                  <span className="text-accent">{issue.type}</span>
                  <span className="text-muted-foreground text-xs">({issue.severity})</span>
                </div>
                <div className="text-muted-foreground mt-1">{issue.message}</div>
                {issue.line !== undefined && <div className="text-xs text-muted-foreground">line: {issue.line}</div>}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h3 className="font-bold text-accent text-sm mb-2">Suggestions</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{suggestions || "—"}</p>
      </div>

      <div>
        <h3 className="font-bold text-accent text-sm mb-2">Improved Code</h3>
        <pre className="text-xs font-mono text-accent/80 bg-black/20 p-2 rounded overflow-auto max-h-32 whitespace-pre-wrap break-words">
          {improved_code || "// No improved code yet."}
        </pre>
      </div>
    </div>
  )
}
