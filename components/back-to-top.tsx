"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={cn(
        "fixed bottom-8 right-8 z-40 rounded-full shadow-lg shadow-[#2C8387]/30",
        "bg-[#2C8387] hover:bg-[#2C8387]/90 active:bg-[#2C8387]/80 text-white",
        "h-12 w-12",
        "animate-in fade-in slide-in-from-bottom-4 duration-300",
        "border-2 border-white/20"
      )}
      aria-label="Retour en haut"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}

