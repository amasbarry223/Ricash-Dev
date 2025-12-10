"use client"

import { useEffect, useState } from "react"
import { Link } from "@/i18n/routing"
import { cn } from "@/lib/utils"

interface Heading {
  id: string
  text: string
  level: number
}

interface DocsTableOfContentsProps {
  className?: string
}

export function DocsTableOfContents({ className }: DocsTableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Extract headings from the page
    const headingElements = Array.from(
      document.querySelectorAll("h1, h2, h3")
    ).filter((el) => {
      // Only include headings that are in the main content area
      const mainContent = document.querySelector("#main-content, main, .prose")
      return mainContent?.contains(el)
    })

    const extractedHeadings: Heading[] = headingElements.map((el, index) => {
      const id = el.id || `heading-${index}`
      if (!el.id) {
        el.id = id
      }
      return {
        id,
        text: el.textContent || "",
        level: parseInt(el.tagName.charAt(1)),
      }
    })

    setHeadings(extractedHeadings)

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0,
      }
    )

    headingElements.forEach((el) => observer.observe(el))

    return () => {
      headingElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  if (headings.length === 0) return null

  return (
    <nav
      className={cn(
        "hidden xl:block sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto",
        className
      )}
      aria-label="Table des matières"
    >
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground mb-4">
          Sur cette page
        </h3>
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                  // Update URL without scrolling
                  window.history.pushState(null, "", `#${heading.id}`)
                }}
                className={cn(
                  "block text-sm py-1.5 px-2 rounded-md transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  heading.level === 1 && "font-semibold",
                  heading.level === 2 && "pl-4",
                  heading.level === 3 && "pl-6 text-xs",
                  activeId === heading.id &&
                    "bg-[#2C8387]/10 text-[#2C8387] dark:text-[#2C8387] font-medium"
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

