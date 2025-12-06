"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import DiffViewer from "./diff-viewer"
import ReviewResultPanel from "./review-result-panel"

const MonacoEditor = dynamic(() => import("./monaco-editor"), { ssr: false })

interface ReviewResult {
  issues: Array<{ type: string; severity: string; message: string; line?: number }>
  suggestions: string
  improved_code: string
}

export default function CodeReviewPanel() {
  const [code, setCode] = useState(`// Paste your JavaScript or Python code here
console.log("Hello world");`)
  const [language, setLanguage] = useState("javascript")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ReviewResult | null>(null)
  const [showDiff, setShowDiff] = useState(true)

  async function runReview() {
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language, mode: "quick" }),
      })

      if (!res.ok) throw new Error("Review failed")
      const data = await res.json()
      setResult(data)
    } catch (err) {
      console.error(err)
      alert("Review failed. Make sure the API is reachable.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid lg:grid-cols-[1fr_360px] gap-6">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-3 py-2 rounded-lg bg-input border border-border text-foreground"
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>

          <div className="flex gap-2 flex-wrap">
            <button onClick={runReview} disabled={loading} className="btn-neon disabled:opacity-50">
              {loading ? "Reviewing..." : "Run Review"}
            </button>
            <button
              onClick={() => {
                setCode("")
                setResult(null)
              }}
              className="btn-neon-outline"
            >
              Clear
            </button>
            {result?.improved_code && (
              <button onClick={() => setCode(result.improved_code)} className="btn-neon-outline">
                Accept Improved
              </button>
            )}
          </div>
        </div>

        <div className="glass-bg rounded-lg overflow-hidden">
          <MonacoEditor value={code} language={language} onChange={setCode} />
        </div>

        {result && showDiff && (
          <div className="glass-bg rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground font-medium">Side-by-side diff</div>
              <button onClick={() => setShowDiff(false)} className="btn-neon-outline text-sm">
                Hide Diff
              </button>
            </div>
            <DiffViewer original={code} improved={result.improved_code || ""} />
          </div>
        )}
      </div>

      <div className="glass-bg rounded-lg p-4 h-fit sticky top-24">
        <ReviewResultPanel result={result} />
      </div>
    </div>
  )
}
