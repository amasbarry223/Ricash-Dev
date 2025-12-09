import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { CodeTabs } from "@/components/code-tabs"
import { ApiPlayground } from "@/components/api-playground"
import { Link } from "@/i18n/routing"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GetWalletPage() {
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
                  <h1 className="text-3xl font-bold my-0">Get Wallet</h1>
                </div>

                <code className="text-base">/v1/wallets/:wallet_id</code>

                <p className="text-lg text-muted-foreground mt-4">
                  {"Retrieve wallet details including current balance, status, and transaction history summary."}
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

                <h3 className="text-xl font-semibold mt-6 mb-3">Example Request</h3>

                <CodeTabs
                  examples={[
                    {
                      language: "cURL",
                      code: `curl -X GET https://api.ricash.com/v1/wallets/wallet_7a8b9c0d \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
                    },
                    {
                      language: "Node.js",
                      code: `const response = await fetch('https://api.ricash.com/v1/wallets/wallet_7a8b9c0d', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  },
});

const wallet = await response.json();
console.log(wallet);`,
                    },
                    {
                      language: "Python",
                      code: `import requests

response = requests.get(
    'https://api.ricash.com/v1/wallets/wallet_7a8b9c0d',
    headers={
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    }
)

wallet = response.json()
print(wallet)`,
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
  "id": "wallet_7a8b9c0d",
  "user_id": "user_12345",
  "currency": "XOF",
  "type": "personal",
  "balance": 50000,
  "available_balance": 45000,
  "pending_balance": 5000,
  "status": "active",
  "metadata": {
    "customer_name": "John Doe",
    "phone": "+2250701234567"
  },
  "created_at": "2025-01-15T10:30:00Z",
  "updated_at": "2025-01-20T14:22:00Z"
}`,
                    },
                  ]}
                />

                <h3 className="text-xl font-semibold mt-6 mb-3">Error Responses</h3>

                <CodeTabs
                  examples={[
                    {
                      language: "404 Not Found",
                      code: `{
  "error": "wallet_not_found",
  "error_description": "Wallet with the specified ID does not exist",
  "status": 404
}`,
                    },
                    {
                      language: "401 Unauthorized",
                      code: `{
  "error": "unauthorized",
  "error_description": "Invalid or expired access token",
  "status": 401
}`,
                    },
                  ]}
                />

                <ApiPlayground
                  endpoint="/v1/wallets/:wallet_id"
                  method="GET"
                  fields={[
                    { name: "wallet_id", label: "Wallet ID", type: "text", required: true, placeholder: "wallet_7a8b9c0d" },
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

