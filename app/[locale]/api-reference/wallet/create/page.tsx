import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { CodeTabs } from "@/components/code-tabs"
import { ApiPlayground } from "@/components/api-playground"
import { Link } from "@/i18n/routing"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CreateWalletPage() {
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
            <h1 className="text-3xl font-bold my-0">Create Wallet</h1>
          </div>

          <code className="text-base">/v1/wallets</code>

          <p className="text-lg text-muted-foreground mt-4">
            {"Create a new digital wallet for a user. Each wallet is tied to a specific currency and user ID."}
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
                  <td className="py-2 px-4 font-mono">user_id</td>
                  <td className="py-2 px-4">string</td>
                  <td className="py-2 px-4">Yes</td>
                  <td className="py-2 px-4">{"Unique identifier for the user"}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 px-4 font-mono">currency</td>
                  <td className="py-2 px-4">string</td>
                  <td className="py-2 px-4">Yes</td>
                  <td className="py-2 px-4">{"3-letter ISO currency code (XOF, NGN, GHS, USD)"}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 px-4 font-mono">type</td>
                  <td className="py-2 px-4">string</td>
                  <td className="py-2 px-4">Yes</td>
                  <td className="py-2 px-4">{"Wallet type: 'personal' or 'business'"}</td>
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
                code: `curl -X POST https://api.ricash.com/v1/wallets \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "user_12345",
    "currency": "XOF",
    "type": "personal",
    "metadata": {
      "customer_name": "John Doe",
      "phone": "+2250701234567"
    }
  }'`,
              },
              {
                language: "Node.js",
                code: `const response = await fetch('https://api.ricash.com/v1/wallets', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_id: 'user_12345',
    currency: 'XOF',
    type: 'personal',
    metadata: {
      customer_name: 'John Doe',
      phone: '+2250701234567',
    },
  }),
});

const wallet = await response.json();
console.log(wallet);`,
              },
              {
                language: "Python",
                code: `import requests

response = requests.post(
    'https://api.ricash.com/v1/wallets',
    headers={
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        'Content-Type': 'application/json'
    },
    json={
        'user_id': 'user_12345',
        'currency': 'XOF',
        'type': 'personal',
        'metadata': {
            'customer_name': 'John Doe',
            'phone': '+2250701234567'
        }
    }
)

wallet = response.json()
print(wallet)`,
              },
              {
                language: "PHP",
                code: `<?php
$ch = curl_init('https://api.ricash.com/v1/wallets');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'user_id' => 'user_12345',
    'currency' => 'XOF',
    'type' => 'personal',
    'metadata' => [
        'customer_name' => 'John Doe',
        'phone' => '+2250701234567'
    ]
]));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer YOUR_ACCESS_TOKEN',
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$wallet = json_decode($response, true);`,
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
  "id": "wallet_7a8b9c0d",
  "user_id": "user_12345",
  "currency": "XOF",
  "type": "personal",
  "balance": 0,
  "available_balance": 0,
  "status": "active",
  "metadata": {
    "customer_name": "John Doe",
    "phone": "+2250701234567"
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
  "error_description": "Invalid currency code provided",
  "field": "currency",
  "status": 400
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
              {
                language: "409 Conflict",
                code: `{
  "error": "wallet_exists",
  "error_description": "User already has a wallet with this currency",
  "status": 409
}`,
              },
            ]}
          />

          <ApiPlayground
            endpoint="/v1/wallets"
            method="POST"
            fields={[
              { name: "user_id", label: "User ID", type: "text", required: true, placeholder: "user_12345" },
              { name: "currency", label: "Currency", type: "text", required: true, placeholder: "XOF" },
              {
                name: "type",
                label: "Wallet Type",
                type: "text",
                required: true,
                placeholder: "personal or business",
              },
              {
                name: "metadata",
                label: "Metadata (JSON)",
                type: "textarea",
                placeholder: '{"customer_name": "John Doe"}',
              },
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
