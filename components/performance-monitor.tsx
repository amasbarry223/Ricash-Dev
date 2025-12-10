"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === "undefined" || process.env.NODE_ENV === "production") {
      return
    }

    // Monitor Core Web Vitals in development
    if ("PerformanceObserver" in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as any
        console.log("LCP:", lastEntry.renderTime || lastEntry.loadTime)
      })

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          console.log("FID:", entry.processingStart - entry.startTime)
        })
      })

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            console.log("CLS:", clsValue)
          }
        })
      })

      try {
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })
        fidObserver.observe({ entryTypes: ["first-input"] })
        clsObserver.observe({ entryTypes: ["layout-shift"] })
      } catch (e) {
        // Some browsers may not support all entry types
      }

      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  return null
}

