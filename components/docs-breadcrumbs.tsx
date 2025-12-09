"use client"

import React from "react"
import { usePathname } from "@/i18n/routing"
import { Link } from "@/i18n/routing"
import { Home } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const pathLabels: Record<string, string> = {
  docs: "Documentation",
  "docs/authentication": "Authentication",
  "docs/environments": "Environments",
  "docs/wallet": "Wallet API",
  "docs/transfer": "Transfer API",
  "docs/payment": "Payment API",
  "docs/kyc": "KYC API",
  "docs/agents": "Agent API",
  "docs/webhooks": "Webhooks",
  "docs/errors": "Error Codes",
  "docs/rate-limits": "Rate Limits",
  "docs/sdks": "SDKs & Libraries",
  "docs/changelog": "Changelog",
}

export function DocsBreadcrumbs() {
  const pathname = usePathname()
  
  // Extract path without locale
  const pathWithoutLocale = pathname?.replace(/^\/[a-z]{2}/, '') || ''
  
  // Skip breadcrumbs on home page
  if (pathWithoutLocale === '/docs' || pathWithoutLocale === '/docs/') {
    return null
  }

  // Build breadcrumb items (skip 'docs' as it's already shown)
  const pathSegments = pathWithoutLocale.split('/').filter(Boolean).slice(1) // Skip 'docs'
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const fullPath = '/docs/' + pathSegments.slice(0, index + 1).join('/')
    const pathKey = pathSegments.slice(0, index + 1).join('/')
    const label = pathLabels[`docs/${pathKey}`] || pathLabels[pathKey] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
    const isLast = index === pathSegments.length - 1
    
    return { path: fullPath, label, isLast }
  })

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/docs">Documentation</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbItems.map((item) => (
          <React.Fragment key={item.path}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {item.isLast ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.path}>{item.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

