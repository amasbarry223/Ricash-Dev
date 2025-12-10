"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface CopyButtonProps {
  text: string
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export function CopyButton({ text, className, size = "icon", variant = "ghost" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      toast.success("Copié !", {
        description: "Le contenu a été copié dans le presse-papiers.",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast.error("Erreur", {
        description: "Impossible de copier le contenu.",
      })
    }
  }

  return (
    <Button
      size={size}
      variant={variant}
      onClick={copyToClipboard}
      className={cn("transition-all", className)}
      aria-label="Copier"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 mr-2" />
          {size !== "icon" && "Copié"}
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 mr-2" />
          {size !== "icon" && "Copier"}
        </>
      )}
    </Button>
  )
}

