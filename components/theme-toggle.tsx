"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        size="icon"
        variant="ghost"
        className="h-11 w-11 min-h-[44px] min-w-[44px]"
        aria-label="Changer le thème"
      >
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-11 w-11 min-h-[44px] min-w-[44px]"
      aria-label={theme === "dark" ? "Passer au mode clair" : "Passer au mode sombre"}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  )
}
