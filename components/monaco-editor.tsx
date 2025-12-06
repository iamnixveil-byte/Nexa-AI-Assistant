"use client"

import Editor from "@monaco-editor/react"

interface MonacoEditorProps {
  language: string
  value: string
  onChange: (value: string) => void
}

export default function MonacoEditor({ language, value, onChange }: MonacoEditorProps) {
  return (
    <Editor
      height="420px"
      defaultLanguage={language}
      language={language}
      value={value}
      theme="vs-dark"
      onChange={(v) => onChange(v || "")}
      options={{
        fontSize: 13,
        minimap: { enabled: false },
        automaticLayout: true,
        scrollBeyondLastLine: false,
      }}
    />
  )
}
