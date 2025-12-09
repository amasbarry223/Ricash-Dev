import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { EndpointCard } from "@/components/endpoint-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wallet, Send, CreditCard, Shield, Users, Globe } from "lucide-react"

export default function ApiReferencePage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">API Reference</h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {
                  "Complete reference for all Ricash API endpoints. Click on any endpoint to see detailed documentation, parameters, and try it out."
                }
              </p>
            </div>

        {/* Wallet API */}
        <div className="mb-12 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Wallet className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Wallet API</h2>
              <p className="text-muted-foreground text-sm">{"Manage digital wallets and balances"}</p>
            </div>
          </div>

          <div className="space-y-4">
            <Link href="/api-reference/wallet/create">
              <EndpointCard
                method="POST"
                endpoint="/v1/wallets"
                description="Create a new wallet for a user with specified currency and type"
                status="live"
              />
            </Link>

            <Link href="/api-reference/wallet/get">
              <EndpointCard
                method="GET"
                endpoint="/v1/wallets/:wallet_id"
                description="Retrieve wallet details including current balance and status"
                status="live"
              />
            </Link>

            <Link href="/api-reference/wallet/list">
              <EndpointCard
                method="GET"
                endpoint="/v1/wallets"
                description="List all wallets with optional filtering by user or status"
                status="live"
              />
            </Link>

            <Link href="/api-reference/wallet/transactions">
              <EndpointCard
                method="GET"
                endpoint="/v1/wallets/:wallet_id/transactions"
                description="Get transaction history for a specific wallet"
                status="live"
              />
            </Link>
          </div>
        </div>

        {/* Transfer API */}
        <div className="mb-12 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Send className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Transfer API</h2>
              <p className="text-muted-foreground text-sm">{"Send money between wallets and accounts"}</p>
            </div>
          </div>

          <div className="space-y-4">
            <Link href="/api-reference/transfer/create">
              <EndpointCard
                method="POST"
                endpoint="/v1/transfers"
                description="Initiate a money transfer between wallets or to mobile money"
                status="live"
              />
            </Link>

            <Link href="/api-reference/transfer/get">
              <EndpointCard
                method="GET"
                endpoint="/v1/transfers/:transfer_id"
                description="Get transfer status and details"
                status="live"
              />
            </Link>

            <Link href="/api-reference/transfer/list">
              <EndpointCard
                method="GET"
                endpoint="/v1/transfers"
                description="List all transfers with filtering and pagination"
                status="live"
              />
            </Link>

            <Link href="/api-reference/transfer/cancel">
              <EndpointCard
                method="POST"
                endpoint="/v1/transfers/:transfer_id/cancel"
                description="Cancel a pending transfer before processing"
                status="live"
              />
            </Link>
          </div>
        </div>

        {/* Payment API */}
        <div className="mb-12 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Payment API</h2>
              <p className="text-muted-foreground text-sm">{"Accept payments from multiple sources"}</p>
            </div>
          </div>

          <div className="space-y-4">
            <Link href="/api-reference/payment/create">
              <EndpointCard
                method="POST"
                endpoint="/v1/payments"
                description="Create a payment request for card or mobile money"
                status="live"
              />
            </Link>

            <Link href="/api-reference/payment/get">
              <EndpointCard
                method="GET"
                endpoint="/v1/payments/:payment_id"
                description="Get payment status and details"
                status="live"
              />
            </Link>

            <Link href="/api-reference/payment/refund">
              <EndpointCard
                method="POST"
                endpoint="/v1/payments/:payment_id/refund"
                description="Issue a full or partial refund for a completed payment"
                status="live"
              />
            </Link>
          </div>
        </div>

        {/* KYC API */}
        <div className="mb-12 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">KYC API</h2>
              <p className="text-muted-foreground text-sm">{"Verify customer identities"}</p>
            </div>
          </div>

          <div className="space-y-4">
            <Link href="/api-reference/kyc/verify">
              <EndpointCard
                method="POST"
                endpoint="/v1/kyc/verify"
                description="Submit identity documents for verification"
                status="live"
              />
            </Link>

            <Link href="/api-reference/kyc/status">
              <EndpointCard
                method="GET"
                endpoint="/v1/kyc/:verification_id"
                description="Check verification status for a user"
                status="live"
              />
            </Link>
          </div>
        </div>

        {/* Agent API */}
        <div className="mb-12 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Agent API</h2>
              <p className="text-muted-foreground text-sm">{"Manage agent networks and commissions"}</p>
            </div>
          </div>

          <div className="space-y-4">
            <Link href="/api-reference/agent/create">
              <EndpointCard
                method="POST"
                endpoint="/v1/agents"
                description="Register a new agent in your network"
                status="beta"
              />
            </Link>

            <Link href="/api-reference/agent/list">
              <EndpointCard
                method="GET"
                endpoint="/v1/agents"
                description="List all agents with filtering options"
                status="beta"
              />
            </Link>

            <Link href="/api-reference/agent/commissions">
              <EndpointCard
                method="GET"
                endpoint="/v1/agents/:agent_id/commissions"
                description="Get commission history for an agent"
                status="beta"
              />
            </Link>
          </div>
        </div>

        {/* Base URLs */}
        <div className="mb-12 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Base URLs</h2>
              <p className="text-muted-foreground text-sm">{"Use these base URLs for your API requests"}</p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <Badge className="bg-accent text-accent-foreground">Production</Badge>
                    <code className="text-sm font-mono text-foreground">https://api.ricash.com</code>
                  </div>
                </div>
                <CardDescription className="mt-2">{"Production environment for live API requests"}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <Badge className="bg-chart-4 text-primary-foreground">Sandbox</Badge>
                    <code className="text-sm font-mono text-foreground">https://sandbox-api.ricash.com</code>
                  </div>
                </div>
                <CardDescription className="mt-2">{"Sandbox environment for testing and development"}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
          </div>
        </div>
      </section>
    </div>
  )
}
