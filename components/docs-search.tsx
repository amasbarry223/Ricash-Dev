"use client"

import { useState, useEffect, useMemo } from "react"
import { Search, X, FileText, Code, Book } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link, usePathname } from "@/i18n/routing"
import { useTranslations } from "next-intl"

interface SearchResult {
  title: string
  href: string
  description?: string
  category: "docs" | "api" | "guide"
}

const searchContent: SearchResult[] = [
  // Documentation
  { title: "Quick Start", href: "/docs", description: "Get started with Ricash API", category: "docs" },
  { title: "Authentication", href: "/docs/authentication", description: "API authentication guide", category: "docs" },
  { title: "Environments", href: "/docs/environments", description: "Production and sandbox environments", category: "docs" },
  { title: "Wallet API", href: "/docs/wallet", description: "Manage digital wallets", category: "docs" },
  { title: "Transfer API", href: "/docs/transfer", description: "Send money between wallets", category: "docs" },
  { title: "Payment API", href: "/docs/payment", description: "Accept payments", category: "docs" },
  { title: "KYC API", href: "/docs/kyc", description: "User verification", category: "docs" },
  { title: "Agent API", href: "/docs/agents", description: "Agent network management", category: "docs" },
  { title: "Webhooks", href: "/docs/webhooks", description: "Real-time notifications", category: "docs" },
  { title: "Error Codes", href: "/docs/errors", description: "API error reference", category: "docs" },
  { title: "Rate Limits", href: "/docs/rate-limits", description: "API rate limiting", category: "docs" },
  { title: "SDKs & Libraries", href: "/docs/sdks", description: "Official SDKs", category: "docs" },
  { title: "Changelog", href: "/docs/changelog", description: "API updates and changes", category: "docs" },
  
  // API Reference
  { title: "Create Wallet", href: "/api-reference/wallet/create", description: "POST /v1/wallets", category: "api" },
  { title: "Get Wallet", href: "/api-reference/wallet/get", description: "GET /v1/wallets/:id", category: "api" },
  { title: "List Wallets", href: "/api-reference/wallet/list", description: "GET /v1/wallets", category: "api" },
  { title: "Wallet Transactions", href: "/api-reference/wallet/transactions", description: "GET /v1/wallets/:id/transactions", category: "api" },
  { title: "Create Transfer", href: "/api-reference/transfer/create", description: "POST /v1/transfers", category: "api" },
  { title: "Get Transfer", href: "/api-reference/transfer/get", description: "GET /v1/transfers/:id", category: "api" },
  { title: "List Transfers", href: "/api-reference/transfer/list", description: "GET /v1/transfers", category: "api" },
  { title: "Cancel Transfer", href: "/api-reference/transfer/cancel", description: "POST /v1/transfers/:id/cancel", category: "api" },
  { title: "Create Payment", href: "/api-reference/payment/create", description: "POST /v1/payments", category: "api" },
  { title: "Get Payment", href: "/api-reference/payment/get", description: "GET /v1/payments/:id", category: "api" },
  { title: "Refund Payment", href: "/api-reference/payment/refund", description: "POST /v1/payments/:id/refund", category: "api" },
  { title: "Verify KYC", href: "/api-reference/kyc/verify", description: "POST /v1/kyc/verify", category: "api" },
  { title: "KYC Status", href: "/api-reference/kyc/status", description: "GET /v1/kyc/:id", category: "api" },
  { title: "Create Agent", href: "/api-reference/agent/create", description: "POST /v1/agents", category: "api" },
  { title: "List Agents", href: "/api-reference/agent/list", description: "GET /v1/agents", category: "api" },
  { title: "Agent Commissions", href: "/api-reference/agent/commissions", description: "GET /v1/agents/:id/commissions", category: "api" },
  
  // Guides
  { title: "Quick Payment Integration", href: "/guides/quick-payment", description: "5 minute payment setup", category: "guide" },
  { title: "Webhooks Setup", href: "/guides/webhooks", description: "Configure webhooks", category: "guide" },
  { title: "Sandbox Testing", href: "/guides/sandbox-testing", description: "Test in sandbox", category: "guide" },
  { title: "Security Best Practices", href: "/guides/security", description: "Secure your integration", category: "guide" },
  { title: "Error Handling", href: "/guides/error-handling", description: "Handle API errors", category: "guide" },
  { title: "Wallet System", href: "/guides/wallet-system", description: "Build wallet features", category: "guide" },
  { title: "Mobile Money", href: "/guides/mobile-money", description: "Mobile money integration", category: "guide" },
  { title: "KYC Flow", href: "/guides/kyc-flow", description: "Implement KYC verification", category: "guide" },
  { title: "Multi-Currency", href: "/guides/multi-currency", description: "Multi-currency support", category: "guide" },
]

const categoryIcons = {
  docs: FileText,
  api: Code,
  guide: Book,
}

const categoryLabels = {
  docs: "Documentation",
  api: "API Reference",
  guide: "Guides",
}

export function DocsSearch() {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const pathname = usePathname()
  const t = useTranslations("common")

  // Simple search implementation (can be replaced with Fuse.js later)
  const results = useMemo(() => {
    if (!query.trim()) return []
    
    const lowerQuery = query.toLowerCase()
    return searchContent
      .filter((item) => 
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description?.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 8)
  }, [query])

  // Keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
        setQuery("")
      }
      if (e.key === "ArrowDown" && isOpen && results.length > 0) {
        e.preventDefault()
        setFocusedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
      }
      if (e.key === "ArrowUp" && isOpen && results.length > 0) {
        e.preventDefault()
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : -1))
      }
      if (e.key === "Enter" && isOpen && focusedIndex >= 0 && results[focusedIndex]) {
        e.preventDefault()
        window.location.href = results[focusedIndex].href
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, results, focusedIndex])

  // Close on route change
  useEffect(() => {
    setIsOpen(false)
    setQuery("")
  }, [pathname])

  return (
    <div className="relative max-w-md flex-1">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search documentation... (⌘K)"
          className="pl-10 pr-10"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
            setFocusedIndex(-1)
          }}
          onFocus={() => setIsOpen(true)}
          onClick={() => setIsOpen(true)}
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
            onClick={() => {
              setQuery("")
              setIsOpen(false)
            }}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Search Results */}
      {isOpen && query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 max-h-[400px] overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((result, index) => {
                const Icon = categoryIcons[result.category]
                const isActive = pathname === result.href || pathname?.startsWith(result.href + "/")
                
                return (
                  <Link
                    key={result.href}
                    href={result.href}
                    onClick={() => {
                      setIsOpen(false)
                      setQuery("")
                    }}
                    className={cn(
                      "flex items-start gap-3 p-3 rounded-md transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      focusedIndex === index && "bg-accent text-accent-foreground",
                      isActive && "bg-primary/10 text-primary"
                    )}
                  >
                    <Icon className="h-5 w-5 mt-0.5 shrink-0 text-muted-foreground" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{result.title}</span>
                        <span className="text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted">
                          {categoryLabels[result.category]}
                        </span>
                      </div>
                      {result.description && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                          {result.description}
                        </p>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              <p className="text-sm">Aucun résultat trouvé</p>
              <p className="text-xs mt-1">Essayez avec d'autres mots-clés</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

