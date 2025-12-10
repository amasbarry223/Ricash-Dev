"use client"

import { Link } from "@/i18n/routing"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { usePathname } from "@/i18n/routing"
import { cn } from "@/lib/utils"

interface DocPage {
  href: string
  title: string
}

// Structure complète de la documentation
const docPages: DocPage[] = [
  { href: "/docs", title: "Quick Start" },
  { href: "/docs/authentication", title: "Authentication" },
  { href: "/docs/environments", title: "Environments" },
  { href: "/docs/wallet", title: "Wallet API" },
  { href: "/docs/transfer", title: "Transfer API" },
  { href: "/docs/payment", title: "Payment API" },
  { href: "/docs/kyc", title: "KYC API" },
  { href: "/docs/agents", title: "Agent API" },
  { href: "/docs/webhooks", title: "Webhooks" },
  { href: "/docs/errors", title: "Error Codes" },
  { href: "/docs/rate-limits", title: "Rate Limits" },
  { href: "/docs/sdks", title: "SDKs & Libraries" },
  { href: "/docs/changelog", title: "Changelog" },
]

export function DocsNavigation() {
  const pathname = usePathname()
  
  // Extract path without locale
  const pathWithoutLocale = pathname?.replace(/^\/[a-z]{2}/, '') || ''
  
  const currentIndex = docPages.findIndex(
    (page) => page.href === pathWithoutLocale
  )

  const prevPage = currentIndex > 0 ? docPages[currentIndex - 1] : null
  const nextPage =
    currentIndex < docPages.length - 1 ? docPages[currentIndex + 1] : null

  // Only show on documentation pages
  if (currentIndex === -1) return null

  return (
    <div className="mt-16 pt-8 border-t border-border">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {prevPage ? (
          <Link
            href={prevPage.href}
            className={cn(
              "group flex items-center gap-2 p-4 rounded-lg border border-border",
              "hover:bg-accent hover:border-[#2C8387] transition-all",
              "flex-1 sm:max-w-[48%]"
            )}
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-[#2C8387] transition-colors" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground mb-1">Précédent</div>
              <div className="font-medium text-sm truncate">{prevPage.title}</div>
            </div>
          </Link>
        ) : (
          <div className="flex-1 sm:max-w-[48%]" />
        )}

        {nextPage ? (
          <Link
            href={nextPage.href}
            className={cn(
              "group flex items-center gap-2 p-4 rounded-lg border border-border",
              "hover:bg-accent hover:border-[#2C8387] transition-all",
              "flex-1 sm:max-w-[48%]",
              "sm:flex-row-reverse"
            )}
          >
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-[#2C8387] transition-colors" />
            <div className="flex-1 min-w-0 text-right sm:text-left">
              <div className="text-xs text-muted-foreground mb-1">Suivant</div>
              <div className="font-medium text-sm truncate">{nextPage.title}</div>
            </div>
          </Link>
        ) : (
          <div className="flex-1 sm:max-w-[48%]" />
        )}
      </div>
    </div>
  )
}

