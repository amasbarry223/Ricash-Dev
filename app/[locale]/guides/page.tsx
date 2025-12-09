import { Navbar } from "@/components/navbar"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import { Link } from "@/i18n/routing"

const guides = [
  {
    title: "Integrate Payments in 5 Minutes",
    description: "Quick guide to accepting your first payment with Ricash API",
    duration: "5 min read",
    difficulty: "Beginner",
    href: "/guides/quick-payment",
  },
  {
    title: "Setting Up Webhooks",
    description: "Receive real-time notifications for transaction events",
    duration: "10 min read",
    difficulty: "Intermediate",
    href: "/guides/webhooks",
  },
  {
    title: "Testing with Sandbox",
    description: "Best practices for testing in the sandbox environment",
    duration: "8 min read",
    difficulty: "Beginner",
    href: "/guides/sandbox-testing",
  },
  {
    title: "Securing Your API Calls",
    description: "Implement best security practices for production",
    duration: "12 min read",
    difficulty: "Advanced",
    href: "/guides/security",
  },
  {
    title: "Handling Errors Gracefully",
    description: "Error handling patterns and retry strategies",
    duration: "10 min read",
    difficulty: "Intermediate",
    href: "/guides/error-handling",
  },
  {
    title: "Building a Wallet System",
    description: "Complete guide to implementing a wallet-based payment system",
    duration: "20 min read",
    difficulty: "Advanced",
    href: "/guides/wallet-system",
  },
  {
    title: "Mobile Money Integration",
    description: "Connect to mobile money providers across Africa",
    duration: "15 min read",
    difficulty: "Intermediate",
    href: "/guides/mobile-money",
  },
  {
    title: "KYC Verification Flow",
    description: "Implement user verification with automated document checks",
    duration: "18 min read",
    difficulty: "Advanced",
    href: "/guides/kyc-flow",
  },
  {
    title: "Multi-Currency Support",
    description: "Handle multiple currencies in your application",
    duration: "12 min read",
    difficulty: "Intermediate",
    href: "/guides/multi-currency",
  },
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />

      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-4 sm:mb-6">
                Guides & Tutorials
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {
                  "Step-by-step tutorials to help you build powerful payment solutions with Ricash API. From beginner basics to advanced integrations."
                }
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {guides.map((guide) => (
            <Link key={guide.href} href={guide.href}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant="secondary"
                      className={
                        guide.difficulty === "Beginner"
                          ? "bg-accent text-accent-foreground"
                          : guide.difficulty === "Intermediate"
                            ? "bg-primary/20 text-primary"
                            : "bg-secondary text-secondary-foreground"
                      }
                    >
                      {guide.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{guide.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
