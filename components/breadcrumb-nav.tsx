"use client"

import { usePathname } from "@/i18n/routing"
import { Link } from "@/i18n/routing"
import { ChevronRight, Home } from "lucide-react"
import { useTranslations } from "next-intl"
import { Fragment } from "react"

export function BreadcrumbNav() {
  const pathname = usePathname()
  const t = useTranslations("common")

  const pathSegments = pathname
    .split("/")
    .filter(Boolean)
    .filter((segment) => segment !== "fr" && segment !== "en")

  const breadcrumbs = [
    { label: t("home"), href: "/", icon: Home },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/")
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
      return { label, href }
    }),
  ]

  if (breadcrumbs.length <= 1) return null

  return (
    <nav aria-label="Fil d'Ariane" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1
          const Icon = crumb.icon

          return (
            <Fragment key={crumb.href}>
              <li className="flex items-center gap-2">
                {Icon && <Icon className="h-4 w-4" />}
                {isLast ? (
                  <span className="font-medium text-foreground" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
              {!isLast && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

