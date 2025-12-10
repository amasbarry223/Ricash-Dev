"use client"

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export function SkipToContent() {
  const t = useTranslations("common")

  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#2C8387] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2C8387] focus:ring-offset-2 transition-all"
    >
      {t("skipToContent") || "Aller au contenu principal"}
    </Link>
  )
}

