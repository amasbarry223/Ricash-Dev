"use client"

import { useEffect } from "react"
import { usePathname } from "@/i18n/routing"

export function ViewTransitions() {
  const pathname = usePathname()

  useEffect(() => {
    // Enable view transitions API if supported
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      // Smooth page transitions
      const handleNavigation = () => {
        if (document.startViewTransition) {
          document.startViewTransition(() => {
            // Navigation handled by Next.js
          })
        }
      }

      // Listen for route changes
      const observer = new MutationObserver(() => {
        handleNavigation()
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      })

      return () => observer.disconnect()
    }
  }, [pathname])

  return null
}

