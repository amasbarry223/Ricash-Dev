"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface CodeExample {
  language: string
  code: string
}

interface CodeTabsProps {
  examples: CodeExample[]
}

export function CodeTabs({ examples }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(examples[activeTab].code)
      setCopied(true)
      toast.success("Code copié dans le presse-papier")
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast.error("Erreur lors de la copie")
    }
  }

  return (
    <div className="my-6 rounded-lg border border-[#29485A]/30 dark:border-[#376571]/30 overflow-hidden">
      <div className="flex items-center justify-between bg-[#29485A] dark:bg-[#1a2a30] border-b border-[#29485A]/30 dark:border-[#376571]/30 px-4">
        <div className="flex gap-1">
          {examples.map((example, index) => (
            <button
              key={example.language}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors",
                activeTab === index
                  ? "text-white border-b-2 border-[#2C8387]"
                  : "text-white/70 hover:text-white",
              )}
            >
              {example.language}
            </button>
          ))}
        </div>
        <Button 
          size="icon" 
          variant="ghost" 
          className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10" 
          onClick={copyToClipboard}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <pre className="bg-[#162529] dark:bg-[#1a2a30] p-4 overflow-x-auto">
        <code className="text-sm font-mono text-[#e8e8e8] dark:text-[#f0f0f0]">{examples[activeTab].code}</code>
      </pre>
    </div>
  )
}
