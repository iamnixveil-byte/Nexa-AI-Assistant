import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { code, language, mode } = await request.json()

    if (!code || !language) {
      return NextResponse.json({ error: "Missing code or language" }, { status: 400 })
    }

    // Mock AI review response - replace with real API call
    const mockReview = generateMockReview(code, language)

    return NextResponse.json(mockReview)
  } catch (error) {
    console.error("[/api/review]", error)
    return NextResponse.json({ error: "Failed to process review" }, { status: 500 })
  }
}

function generateMockReview(code: string, language: string) {
  const codeLines = code.split("\n")
  const issues = []
  const suggestions: string[] = []

  // Simple heuristic checks
  if (code.includes("var ")) {
    issues.push({
      type: "Style",
      severity: "low",
      message: "Consider using `const` or `let` instead of `var` for better scoping.",
      line: codeLines.findIndex((l) => l.includes("var ")),
    })
    suggestions.push("Use `const` or `let` instead of `var` for better variable scoping and to avoid hoisting issues.")
  }

  if (code.includes("console.log") && language === "javascript") {
    issues.push({
      type: "Debug",
      severity: "low",
      message: "Remove console.log statements before production.",
      line: codeLines.findIndex((l) => l.includes("console.log")),
    })
  }

  if (code.includes("==")) {
    issues.push({
      type: "Bug Risk",
      severity: "medium",
      message: "Avoid using `==` for comparison. Use `===` instead.",
      line: codeLines.findIndex((l) => l.includes("==")),
    })
    suggestions.push("Replace loose equality (`==`) with strict equality (`===`) to avoid type coercion bugs.")
  }

  if (code.length < 50) {
    suggestions.push("Code is very short. Consider testing with more complex code to get detailed insights.")
  }

  // Generate improved code by replacing detected patterns
  let improvedCode = code
  improvedCode = improvedCode.replace(/\bvar\b/g, "const")
  improvedCode = improvedCode.replace(/==/g, "===")
  improvedCode = improvedCode.replace(/console\.log$$(.*?)$$;?/g, "// Removed: console.log($1)")

  return {
    issues: issues.length > 0 ? issues : [{ type: "Info", severity: "low", message: "Code looks good!" }],
    suggestions:
      suggestions.length > 0
        ? suggestions.join(" ")
        : "Your code is well-written! Consider adding more complex patterns for detailed suggestions.",
    improved_code: improvedCode,
  }
}
