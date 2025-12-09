"use client"

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { ApiCard } from "@/components/api-card"
import { CodeBlock } from "@/components/code-block"
import { ArrowRight, Wallet, Send, CreditCard, Shield, Users, Zap, Globe, Code2, Lock, Gauge } from "lucide-react"

export default function HomePage() {
  const t = useTranslations("home")
  const tCommon = useTranslations("common")
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-28 flex flex-col items-center">
            <div className="flex flex-col items-center text-center gap-6 sm:gap-8 max-w-4xl w-full">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <Zap className="h-4 w-4" />
                <span>{t("hero.badge")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance tracking-tight leading-tight">
                {t("hero.title")}{" "}
                <span className="text-primary">{t("hero.titleHighlight")}</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground text-balance max-w-2xl leading-relaxed">
                {t("hero.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/docs">
                    {t("hero.getStarted")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="/api-reference">{t("hero.viewDocumentation")}</Link>
                </Button>
              </div>

              <div className="w-full mt-10 sm:mt-12">
                <CodeBlock
                  code={`curl -X POST https://api.ricash.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{"client_id": "YOUR_CLIENT_ID", "client_secret": "YOUR_SECRET"}'`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full border-b border-border/40 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                  99.99%
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {t("stats.uptime")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                  10k+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {t("stats.transactionsPerSec")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {t("stats.countries")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                  5k+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {t("stats.developers")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APIs Section */}
      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-4 sm:mb-6">
                {t("apis.title")}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {t("apis.description")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          <ApiCard
            title="Wallet API"
            description="Create and manage digital wallets for your users with real-time balance updates."
            icon={Wallet}
            status="live"
          />
          <ApiCard
            title="Transfer API"
            description="Send money instantly between wallets, bank accounts, and mobile money."
            icon={Send}
            status="live"
          />
          <ApiCard
            title="Payment API"
            description="Accept payments from multiple sources including cards and mobile money."
            icon={CreditCard}
            status="live"
          />
          <ApiCard
            title="KYC API"
            description="Verify user identities with automated document verification and validation."
            icon={Shield}
            status="live"
          />
          <ApiCard
            title="Agent API"
            description="Manage your agent network and commission structures programmatically."
            icon={Users}
            status="beta"
          />
          <ApiCard
            title="Webhooks"
            description="Receive real-time notifications for all transaction events and updates."
            icon={Zap}
            status="live"
          />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ricash */}
      <section className="w-full border-b border-border/40 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-4 sm:mb-6">
                {t("whyChoose.title")}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
              <div className="flex flex-col items-center text-center gap-4 sm:gap-5">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  <Gauge className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{t("whyChoose.lightningFast.title")}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
                  {t("whyChoose.lightningFast.description")}
                </p>
              </div>

              <div className="flex flex-col items-center text-center gap-4 sm:gap-5">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  <Lock className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{t("whyChoose.secure.title")}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
                  {t("whyChoose.secure.description")}
                </p>
              </div>

              <div className="flex flex-col items-center text-center gap-4 sm:gap-5 sm:col-span-2 lg:col-span-1">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  <Globe className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{t("whyChoose.coverage.title")}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
                  {t("whyChoose.coverage.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-4 sm:mb-6">
                {t("howItWorks.title")}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {t("howItWorks.description")}
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="flex gap-4 sm:gap-5">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-base sm:text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                      {t("howItWorks.step1.title")}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t("howItWorks.step1.description")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-5">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-base sm:text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t("howItWorks.step2.title")}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t("howItWorks.step2.description")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-5">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-base sm:text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                      {t("howItWorks.step3.title")}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t("howItWorks.step3.description")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-5">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-base sm:text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t("howItWorks.step4.title")}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t("howItWorks.step4.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-4 sm:mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-base sm:text-lg text-primary-foreground/90 mb-8 sm:mb-10 leading-relaxed">
                {t("cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                  <Link href="/docs">
                    {tCommon("startBuilding")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/support">{tCommon("contactSales")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Brand Column */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-2 font-bold text-lg mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                    <Code2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span>{tCommon("ricash")}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {t("footer.tagline")}
                </p>
              </div>

              {/* Product Column */}
              <div>
                <h3 className="font-semibold text-sm mb-4 text-foreground">{t("footer.product")}</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/api-reference"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    >
                      {tCommon("apiReference")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    >
                      {tCommon("documentation")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guides"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    >
                      {tCommon("guides")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    >
                      {tCommon("pricing")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Developers Column */}
              <div>
                <h3 className="font-semibold text-sm mb-4 text-foreground">{t("footer.developers")}</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/dashboard"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    >
                      {tCommon("dashboard")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    >
                      {tCommon("support")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/changelog"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    >
                      {tCommon("changelog")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/sdks"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    >
                      {tCommon("sdks")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="font-semibold text-sm mb-4 text-foreground">{t("footer.company")}</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    >
                      {tCommon("about")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    >
                      {tCommon("blog")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    >
                      {tCommon("careers")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    >
                      {tCommon("contact")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-border mt-12 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground text-center sm:text-left">
                  &copy; 2025 {tCommon("ricash")}. {tCommon("allRightsReserved")}.
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <Link href="#" className="hover:text-foreground transition-colors">
                    {tCommon("privacy")}
                  </Link>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    {tCommon("terms")}
                  </Link>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    {tCommon("cookies")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
