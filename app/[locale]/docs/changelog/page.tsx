import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"

export default function ChangelogPage() {
  return (
    <DocsLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Changelog</h1>
        <p className="text-lg text-muted-foreground">
          {"Recent changes and updates to the Ricash API."}
        </p>

        <div className="space-y-8 mt-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold my-0">Version 2.1.0</h2>
              <Badge>2025-01-15</Badge>
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Added</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>{"Agent API (Beta) - Manage agent networks and commissions"}</li>
              <li>{"Enhanced KYC verification with passport support"}</li>
              <li>{"Webhook signature verification improvements"}</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">Changed</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>{"Improved error messages for better debugging"}</li>
              <li>{"Updated rate limits for Pro tier"}</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold my-0">Version 2.0.0</h2>
              <Badge>2024-12-01</Badge>
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Added</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>{"Multi-currency support (XOF, NGN, GHS, USD)"}</li>
              <li>{"Payment API with mobile money integration"}</li>
              <li>{"KYC verification API"}</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">Changed</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>{"Breaking: Updated authentication flow"}</li>
              <li>{"Improved webhook delivery reliability"}</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold my-0">Version 1.5.0</h2>
              <Badge>2024-10-15</Badge>
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Added</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>{"Transfer API with mobile money support"}</li>
              <li>{"Wallet transaction history endpoint"}</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}

