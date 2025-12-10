import type React from "react"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import { BackToTop } from "@/components/back-to-top"
import { ScrollProgress } from "@/components/scroll-progress"
import { ViewTransitions } from "@/components/view-transitions"
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { SkipToContent } from "@/components/skip-to-content"
import { ThemeProvider } from "@/components/theme-provider"
import "../globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Ricash Developer Portal",
    template: "%s | Ricash Developer Portal",
  },
  description: "Build powerful payment solutions with Ricash API. Documentation complète, guides pratiques et référence API pour intégrer les paiements en Afrique.",
  keywords: ["Ricash", "API", "Paiements", "Mobile Money", "Afrique", "Développeur", "Documentation"],
  authors: [{ name: "Ricash" }],
  creator: "Ricash",
  publisher: "Ricash",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://developer.ricash.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    siteName: "Ricash Developer Portal",
    title: "Ricash Developer Portal",
    description: "Build powerful payment solutions with Ricash API",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricash Developer Portal",
    description: "Build powerful payment solutions with Ricash API",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

        return (
          <html lang={locale} suppressHydrationWarning>
            <body className={`font-sans antialiased`}>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                storageKey="ricash-theme"
              >
                <NextIntlClientProvider messages={messages}>
                  <SkipToContent />
                  <ScrollProgress />
                  <ViewTransitions />
                  <KeyboardShortcuts />
                  {process.env.NODE_ENV === "development" && <PerformanceMonitor />}
                  <div className="min-h-screen w-full flex flex-col">
                    {children}
                  </div>
                  <BackToTop />
                  <Toaster />
                  <Analytics />
                </NextIntlClientProvider>
              </ThemeProvider>
            </body>
          </html>
        )
}

