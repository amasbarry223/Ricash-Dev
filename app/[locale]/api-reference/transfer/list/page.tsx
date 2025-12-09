import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { CodeTabs } from "@/components/code-tabs"
import { ApiPlayground } from "@/components/api-playground"
import { Link } from "@/i18n/routing"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ListTransfersPage() {
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
                  <h1 className="text-3xl font-bold my-0">List Transfers</h1>
                </div>

                <code className="text-base">/v1/transfers</code>

                <p className="text-lg text-muted-foreground mt-4">
                  {"List all transfers with filtering and pagination options."}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Request</h2>

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
                        <td className="py-2 px-4 font-mono">sender_wallet_id</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"Filter by sender wallet ID"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">status</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"Filter by status: 'pending', 'processing', 'completed', 'failed', 'cancelled'"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">currency</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"Filter by currency code"}</td>
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
                      code: `curl -X GET "https://api.ricash.com/v1/transfers?sender_wallet_id=wallet_abc123&status=completed&page=1&limit=20" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
                    },
                    {
                      language: "Node.js",
                      code: `const response = await fetch('https://api.ricash.com/v1/transfers?sender_wallet_id=wallet_abc123&status=completed&page=1&limit=20', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  },
});

const transfers = await response.json();
console.log(transfers);`,
                    },
                    {
                      language: "Python",
                      code: `import requests

response = requests.get(
    'https://api.ricash.com/v1/transfers',
    headers={
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    },
    params={
        'sender_wallet_id': 'wallet_abc123',
        'status': 'completed',
        'page': 1,
        'limit': 20
    }
)

transfers = response.json()
print(transfers)`,
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
      "id": "transfer_xyz789",
      "status": "completed",
      "amount": 10000,
      "currency": "XOF",
      "sender_wallet_id": "wallet_abc123",
      "receiver_phone": "+2250701234567",
      "fee": 50,
      "total_amount": 10050,
      "created_at": "2025-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 1,
    "total_pages": 1
  }
}`,
                    },
                  ]}
                />

                <ApiPlayground
                  endpoint="/v1/transfers"
                  method="GET"
                  fields={[
                    { name: "sender_wallet_id", label: "Sender Wallet ID", type: "text", placeholder: "wallet_abc123" },
                    { name: "status", label: "Status", type: "text", placeholder: "completed" },
                    { name: "currency", label: "Currency", type: "text", placeholder: "XOF" },
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

