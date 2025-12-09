"use client"

import { Link, usePathname } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Code2, Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations("common")

  const navLinks = [
    { href: "/docs", label: t("documentation") },
    { href: "/api-reference", label: t("apiReference") },
    { href: "/guides", label: t("guides") },
    { href: "/pricing", label: t("pricing") },
    { href: "/support", label: t("support") },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname?.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Code2 className="h-5 w-5 text-primary-foreground" />
          </div>
            <span className="text-foreground">{t("ricash")}</span>
            <span className="text-muted-foreground font-normal text-sm hidden sm:inline">{t("developers")}</span>
        </Link>

        {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
          <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive(link.href)
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                {link.label}
          </Link>
            ))}
        </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
          <ThemeToggle />
            <div className="h-6 w-px bg-border mx-2" />
          <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">{t("signIn")}</Link>
          </Button>
          <Button size="sm" asChild>
              <Link href="/dashboard">{t("dashboard")}</Link>
          </Button>
        </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              className="p-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
          </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
            <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive(link.href)
                      ? "text-foreground bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {link.label}
            </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-border/40 space-y-2">
                <Button variant="outline" size="sm" asChild className="w-full justify-start">
                  <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    {t("signIn")}
            </Link>
                </Button>
                <Button size="sm" asChild className="w-full justify-start">
                  <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    {t("dashboard")}
            </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
      </div>
    </nav>
  )
}
