import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { CodeTabs } from "@/components/code-tabs"
import { ApiPlayground } from "@/components/api-playground"
import { Link } from "@/i18n/routing"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ListWalletsPage() {
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
                  <h1 className="text-3xl font-bold my-0">List Wallets</h1>
                </div>

                <code className="text-base">/v1/wallets</code>

                <p className="text-lg text-muted-foreground mt-4">
                  {"List all wallets with optional filtering by user, status, or currency. Supports pagination."}
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
                        <td className="py-2 px-4 font-mono">user_id</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"Filter by user ID"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">status</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"Filter by status: 'active', 'suspended', 'closed'"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">currency</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"Filter by currency code (XOF, NGN, GHS, etc.)"}</td>
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
                      code: `curl -X GET "https://api.ricash.com/v1/wallets?user_id=user_12345&status=active&page=1&limit=20" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
                    },
                    {
                      language: "Node.js",
                      code: `const response = await fetch('https://api.ricash.com/v1/wallets?user_id=user_12345&status=active&page=1&limit=20', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  },
});

const wallets = await response.json();
console.log(wallets);`,
                    },
                    {
                      language: "Python",
                      code: `import requests

response = requests.get(
    'https://api.ricash.com/v1/wallets',
    headers={
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    },
    params={
        'user_id': 'user_12345',
        'status': 'active',
        'page': 1,
        'limit': 20
    }
)

wallets = response.json()
print(wallets)`,
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
      "id": "wallet_7a8b9c0d",
      "user_id": "user_12345",
      "currency": "XOF",
      "type": "personal",
      "balance": 50000,
      "available_balance": 45000,
      "status": "active",
      "created_at": "2025-01-15T10:30:00Z",
      "updated_at": "2025-01-20T14:22:00Z"
    },
    {
      "id": "wallet_8b9c0d1e",
      "user_id": "user_12345",
      "currency": "NGN",
      "type": "personal",
      "balance": 25000,
      "available_balance": 25000,
      "status": "active",
      "created_at": "2025-01-16T11:00:00Z",
      "updated_at": "2025-01-20T15:00:00Z"
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
                  endpoint="/v1/wallets"
                  method="GET"
                  fields={[
                    { name: "user_id", label: "User ID", type: "text", placeholder: "user_12345" },
                    { name: "status", label: "Status", type: "text", placeholder: "active" },
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

