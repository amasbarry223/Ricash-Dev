"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = winHeightPx > 0 ? (scrollPx / winHeightPx) * 100 : 0
      setScrollProgress(scrolled)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress)
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updateScrollProgress()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1.5 bg-[#2C8387] z-50 transition-all duration-150 shadow-sm shadow-[#2C8387]/50"
      style={{ width: `${scrollProgress}%` }}
      role="progressbar"
      aria-valuenow={scrollProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progression de lecture"
    />
  )
}

