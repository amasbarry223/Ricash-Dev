"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      toast.success("Code copié dans le presse-papier")
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast.error("Erreur lors de la copie")
    }
  }

  return (
    <div className="relative group">
      <pre className="bg-[#162529] dark:bg-[#1a2a30] text-[#e8e8e8] dark:text-[#f0f0f0] p-4 rounded-lg overflow-x-auto font-mono text-sm border border-[#29485A]/30 dark:border-[#376571]/30">
        <code className="text-[#e8e8e8] dark:text-[#f0f0f0]">{code}</code>
      </pre>
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-[#e8e8e8] hover:text-white hover:bg-white/10"
        onClick={copyToClipboard}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  )
}
