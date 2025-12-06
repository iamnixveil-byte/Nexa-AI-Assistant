"use client"

import { diffLines } from "diff"

interface DiffViewerProps {
  original: string
  improved: string
}

export default function DiffViewer({ original = "", improved = "" }: DiffViewerProps) {
  const diff = diffLines(original, improved)

  let left = ""
  let right = ""

  diff.forEach((part) => {
    if (part.added) {
      right += part.value
    } else if (part.removed) {
      left += part.value
    } else {
      left += part.value
      right += part.value
    }
  })

  const leftLines = left.split("\n")
  const rightLines = right.split("\n")

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-black/30 rounded-lg p-4 overflow-auto max-h-64">
        <div className="text-xs font-semibold text-accent mb-2">Original</div>
        <pre className="text-xs font-mono text-foreground whitespace-pre-wrap break-words">
          {leftLines.map((ln, i) => (
            <div key={i} className="py-0.5">
              {ln || " "}
            </div>
          ))}
        </pre>
      </div>

      <div className="bg-black/30 rounded-lg p-4 overflow-auto max-h-64">
        <div className="text-xs font-semibold text-accent mb-2">Improved</div>
        <pre className="text-xs font-mono text-accent whitespace-pre-wrap break-words">
          {rightLines.map((ln, i) => (
            <div key={i} className="py-0.5">
              {ln || " "}
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}
