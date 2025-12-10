import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://developer.ricash.com"
  const locales = ["fr", "en"]

  const routes = [
    "",
    "/docs",
    "/docs/wallet",
    "/docs/payment",
    "/docs/transfer",
    "/docs/authentication",
    "/docs/environments",
    "/docs/kyc",
    "/docs/agents",
    "/docs/webhooks",
    "/docs/errors",
    "/docs/rate-limits",
    "/docs/sdks",
    "/docs/changelog",
    "/api-reference",
    "/api-reference/wallet/create",
    "/api-reference/wallet/get",
    "/api-reference/wallet/list",
    "/api-reference/wallet/transactions",
    "/api-reference/transfer/create",
    "/api-reference/transfer/get",
    "/api-reference/transfer/list",
    "/api-reference/transfer/cancel",
    "/api-reference/payment/create",
    "/api-reference/payment/get",
    "/api-reference/payment/refund",
    "/api-reference/kyc/verify",
    "/api-reference/kyc/status",
    "/api-reference/agent/create",
    "/api-reference/agent/list",
    "/api-reference/agent/commissions",
    "/guides",
    "/guides/quick-payment",
    "/guides/webhooks",
    "/guides/sandbox-testing",
    "/guides/security",
    "/guides/error-handling",
    "/guides/wallet-system",
    "/guides/mobile-money",
    "/guides/kyc-flow",
    "/guides/multi-currency",
    "/dashboard",
    "/pricing",
    "/support",
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : route.startsWith("/docs") || route.startsWith("/api-reference") ? 0.8 : 0.6,
      })
    }
  }

  return sitemapEntries
}

