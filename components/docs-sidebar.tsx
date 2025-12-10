"use client"

import { Link, usePathname } from "@/i18n/routing"
import { ChevronDown, ChevronRight, X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface DocSection {
  title: string
  items: {
    title: string
    href: string
  }[]
}

const docSections: DocSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Quick Start", href: "/docs" },
      { title: "Authentication", href: "/docs/authentication" },
      { title: "Environments", href: "/docs/environments" },
    ],
  },
  {
    title: "Core APIs",
    items: [
      { title: "Wallet API", href: "/docs/wallet" },
      { title: "Transfer API", href: "/docs/transfer" },
      { title: "Payment API", href: "/docs/payment" },
      { title: "KYC API", href: "/docs/kyc" },
      { title: "Agent API", href: "/docs/agents" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { title: "Webhooks", href: "/docs/webhooks" },
      { title: "Error Codes", href: "/docs/errors" },
      { title: "Rate Limits", href: "/docs/rate-limits" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "SDKs & Libraries", href: "/docs/sdks" },
      { title: "Changelog", href: "/docs/changelog" },
    ],
  },
]

interface DocsSidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export function DocsSidebar({ isOpen, onClose }: DocsSidebarProps = {}) {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "Getting Started",
    "Core APIs",
    "Advanced",
    "Resources",
  ])

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => (prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]))
  }

  // Extract path without locale for comparison
  const pathWithoutLocale = pathname?.replace(/^\/[a-z]{2}/, '') || ''
  
  const isActive = (href: string) => {
    if (href === "/docs") {
      return pathWithoutLocale === "/docs" || pathWithoutLocale === "/docs/"
    }
    return pathWithoutLocale === href || pathWithoutLocale?.startsWith(href + "/")
  }

  // Close sidebar when clicking a link on mobile
  const handleLinkClick = () => {
    if (window.innerWidth < 1024 && onClose) {
      onClose()
    }
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-16 left-0 z-30 h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-border bg-[#376571]/5 dark:bg-[#376571]/10 lg:bg-[#376571]/5 dark:lg:bg-[#376571]/10 p-6 overflow-y-auto transition-transform duration-300 shadow-lg lg:shadow-none",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Mobile close button */}
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <h2 className="text-sm font-semibold">Navigation</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>

        <div className="space-y-6">
          {docSections.map((section) => (
            <div key={section.title}>
              <button
                onClick={() => toggleSection(section.title)}
                className="flex w-full items-center justify-between text-sm font-semibold mb-2 hover:text-primary transition-colors"
              >
                <span>{section.title}</span>
                {expandedSections.includes(section.title) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {expandedSections.includes(section.title) && (
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className={cn(
                          "block text-sm text-muted-foreground hover:text-foreground transition-colors py-1 px-2 rounded",
                          isActive(item.href) && "bg-[#2C8387]/10 text-[#2C8387] dark:text-[#2C8387] font-medium",
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </aside>
    </>
  )
}
