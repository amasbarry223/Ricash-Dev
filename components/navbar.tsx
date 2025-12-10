"use client"

import { Link, usePathname } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const t = useTranslations("common")

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <nav 
      className={cn(
        "sticky top-0 z-50 w-full border-b border-[#29485A]/20 bg-white dark:bg-[#162529] backdrop-blur supports-[backdrop-filter]:bg-white/95 dark:supports-[backdrop-filter]:bg-[#162529]/95 transition-shadow duration-200",
        scrolled && "shadow-md shadow-[#29485A]/10"
      )}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/ricash-logo.png"
              alt="Ricash Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
              quality={90}
              sizes="48px"
            />
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
                    ? "text-white bg-[#2C8387] font-semibold"
                    : "text-[#29485A] dark:text-white/90 hover:text-[#2C8387] dark:hover:text-white hover:bg-[#2C8387]/10 dark:hover:bg-[#2C8387]/20"
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
              className="p-2 rounded-md hover:bg-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
          </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden border-t border-border/40 bg-white dark:bg-[#162529] animate-in slide-in-from-top-2 duration-200"
        >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
            <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive(link.href)
                      ? "text-white bg-[#2C8387]"
                      : "text-[#29485A] dark:text-white/80 hover:text-[#2C8387] dark:hover:text-white hover:bg-[#2C8387]/10 dark:hover:bg-[#2C8387]/50"
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
