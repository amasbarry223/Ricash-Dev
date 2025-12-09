import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { CodeTabs } from "@/components/code-tabs"
import { ApiPlayground } from "@/components/api-playground"
import { Link } from "@/i18n/routing"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CreateTransferPage() {
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
                  <Badge className="bg-primary text-primary-foreground">POST</Badge>
                  <h1 className="text-3xl font-bold my-0">Create Transfer</h1>
                </div>

                <code className="text-base">/v1/transfers</code>

                <p className="text-lg text-muted-foreground mt-4">
                  {"Initiate a money transfer between wallets or to mobile money numbers across Africa."}
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
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">Content-Type</td>
                        <td className="py-2 px-4">application/json</td>
                        <td className="py-2 px-4">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">Body Parameters</h3>
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
                        <td className="py-2 px-4 font-mono">amount</td>
                        <td className="py-2 px-4">integer</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"Amount in the smallest currency unit (e.g., cents)"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">currency</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"3-letter ISO currency code (XOF, NGN, GHS, etc.)"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">sender_wallet_id</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"ID of the sender's wallet"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">receiver_phone</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"Receiver's phone number in E.164 format"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">description</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"Transfer description (max 255 characters)"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">metadata</td>
                        <td className="py-2 px-4">object</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"Custom key-value pairs for your reference"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">Example Request</h3>

                <CodeTabs
                  examples={[
                    {
                      language: "cURL",
                      code: `curl -X POST https://api.ricash.com/v1/transfers \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 10000,
    "currency": "XOF",
    "sender_wallet_id": "wallet_abc123",
    "receiver_phone": "+2250701234567",
    "description": "Payment for services",
    "metadata": {
      "order_id": "order_456"
    }
  }'`,
                    },
                    {
                      language: "Node.js",
                      code: `const response = await fetch('https://api.ricash.com/v1/transfers', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    amount: 10000,
    currency: 'XOF',
    sender_wallet_id: 'wallet_abc123',
    receiver_phone: '+2250701234567',
    description: 'Payment for services',
    metadata: {
      order_id: 'order_456',
    },
  }),
});

const transfer = await response.json();
console.log(transfer);`,
                    },
                    {
                      language: "Python",
                      code: `import requests

response = requests.post(
    'https://api.ricash.com/v1/transfers',
    headers={
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        'Content-Type': 'application/json'
    },
    json={
        'amount': 10000,
        'currency': 'XOF',
        'sender_wallet_id': 'wallet_abc123',
        'receiver_phone': '+2250701234567',
        'description': 'Payment for services',
        'metadata': {
            'order_id': 'order_456'
        }
    }
)

transfer = response.json()
print(transfer)`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Response</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Success Response (201 Created)</h3>

                <CodeTabs
                  examples={[
                    {
                      language: "JSON",
                      code: `{
  "id": "transfer_xyz789",
  "status": "pending",
  "amount": 10000,
  "currency": "XOF",
  "sender_wallet_id": "wallet_abc123",
  "receiver_phone": "+2250701234567",
  "description": "Payment for services",
  "fee": 50,
  "total_amount": 10050,
  "metadata": {
    "order_id": "order_456"
  },
  "created_at": "2025-01-15T10:30:00Z",
  "updated_at": "2025-01-15T10:30:00Z"
}`,
                    },
                  ]}
                />

                <h3 className="text-xl font-semibold mt-6 mb-3">Error Responses</h3>

                <CodeTabs
                  examples={[
                    {
                      language: "400 Bad Request",
                      code: `{
  "error": "invalid_request",
  "error_description": "Insufficient balance in sender wallet",
  "status": 400
}`,
                    },
                    {
                      language: "404 Not Found",
                      code: `{
  "error": "wallet_not_found",
  "error_description": "Sender wallet does not exist",
  "status": 404
}`,
                    },
                  ]}
                />

                <ApiPlayground
                  endpoint="/v1/transfers"
                  method="POST"
                  fields={[
                    { name: "amount", label: "Amount", type: "number", required: true, placeholder: "10000" },
                    { name: "currency", label: "Currency", type: "text", required: true, placeholder: "XOF" },
                    { name: "sender_wallet_id", label: "Sender Wallet ID", type: "text", required: true, placeholder: "wallet_abc123" },
                    { name: "receiver_phone", label: "Receiver Phone", type: "text", required: true, placeholder: "+2250701234567" },
                    { name: "description", label: "Description", type: "text", placeholder: "Payment for services" },
                    { name: "metadata", label: "Metadata (JSON)", type: "textarea", placeholder: '{"order_id": "order_456"}' },
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

