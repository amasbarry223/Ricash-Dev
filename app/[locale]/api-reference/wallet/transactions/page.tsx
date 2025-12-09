import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { CodeTabs } from "@/components/code-tabs"
import { ApiPlayground } from "@/components/api-playground"
import { Link } from "@/i18n/routing"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WalletTransactionsPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" size="sm" asChild className="mb-6 sm:mb-8">
                <Link href="/api-reference">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to API Reference
                </Link>
              </Button>

              <div className="prose prose-slate dark:prose-invert max-w-none">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-accent text-accent-foreground">GET</Badge>
                  <h1 className="text-3xl font-bold my-0">Get Wallet Transactions</h1>
                </div>

                <code className="text-base">/v1/wallets/:wallet_id/transactions</code>

                <p className="text-lg text-muted-foreground mt-4">
                  {"Get transaction history for a specific wallet. Supports filtering by date range, type, and status."}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Request</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Headers</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-4">Header</th>
                        <th className="text-left py-2 px-4">Value</th>
                        <th className="text-left py-2 px-4">Required</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">Authorization</td>
                        <td className="py-2 px-4">Bearer YOUR_ACCESS_TOKEN</td>
                        <td className="py-2 px-4">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">Path Parameters</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-4">Parameter</th>
                        <th className="text-left py-2 px-4">Type</th>
                        <th className="text-left py-2 px-4">Required</th>
                        <th className="text-left py-2 px-4">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">wallet_id</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"Unique identifier of the wallet"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">Query Parameters</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-4">Parameter</th>
                        <th className="text-left py-2 px-4">Type</th>
                        <th className="text-left py-2 px-4">Required</th>
                        <th className="text-left py-2 px-4">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">type</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"Filter by type: 'credit', 'debit', 'transfer'"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">status</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"Filter by status: 'completed', 'pending', 'failed'"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">from_date</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"Start date (ISO 8601 format)"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">to_date</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"End date (ISO 8601 format)"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">page</td>
                        <td className="py-2 px-4">integer</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"Page number for pagination (default: 1)"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">limit</td>
                        <td className="py-2 px-4">integer</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"Number of results per page (default: 20, max: 100)"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">Example Request</h3>

                <CodeTabs
                  examples={[
                    {
                      language: "cURL",
                      code: `curl -X GET "https://api.ricash.com/v1/wallets/wallet_7a8b9c0d/transactions?type=credit&status=completed&page=1&limit=20" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
                    },
                    {
                      language: "Node.js",
                      code: `const response = await fetch('https://api.ricash.com/v1/wallets/wallet_7a8b9c0d/transactions?type=credit&status=completed&page=1&limit=20', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  },
});

const transactions = await response.json();
console.log(transactions);`,
                    },
                    {
                      language: "Python",
                      code: `import requests

response = requests.get(
    'https://api.ricash.com/v1/wallets/wallet_7a8b9c0d/transactions',
    headers={
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    },
    params={
        'type': 'credit',
        'status': 'completed',
        'page': 1,
        'limit': 20
    }
)

transactions = response.json()
print(transactions)`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Response</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Success Response (200 OK)</h3>

                <CodeTabs
                  examples={[
                    {
                      language: "JSON",
                      code: `{
  "data": [
    {
      "id": "txn_abc123",
      "wallet_id": "wallet_7a8b9c0d",
      "type": "credit",
      "amount": 10000,
      "currency": "XOF",
      "status": "completed",
      "description": "Payment received",
      "reference": "ref_xyz789",
      "created_at": "2025-01-20T10:30:00Z"
    },
    {
      "id": "txn_def456",
      "wallet_id": "wallet_7a8b9c0d",
      "type": "debit",
      "amount": 5000,
      "currency": "XOF",
      "status": "completed",
      "description": "Transfer sent",
      "reference": "ref_uvw012",
      "created_at": "2025-01-19T14:22:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 2,
    "total_pages": 1
  }
}`,
                    },
                  ]}
                />

                <ApiPlayground
                  endpoint="/v1/wallets/:wallet_id/transactions"
                  method="GET"
                  fields={[
                    { name: "wallet_id", label: "Wallet ID", type: "text", required: true, placeholder: "wallet_7a8b9c0d" },
                    { name: "type", label: "Type", type: "text", placeholder: "credit" },
                    { name: "status", label: "Status", type: "text", placeholder: "completed" },
                    { name: "from_date", label: "From Date", type: "text", placeholder: "2025-01-01" },
                    { name: "to_date", label: "To Date", type: "text", placeholder: "2025-01-31" },
                    { name: "page", label: "Page", type: "number", placeholder: "1" },
                    { name: "limit", label: "Limit", type: "number", placeholder: "20" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

