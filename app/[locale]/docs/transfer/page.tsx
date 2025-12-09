import { DocsLayout } from "@/components/docs-layout"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function TransferPage() {
  return (
    <DocsLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Transfer API</h1>
        <p className="text-lg text-muted-foreground">
          {"Send money instantly between wallets, bank accounts, and mobile money numbers across Africa."}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Initiate a Transfer</h2>
        <p>{"Create a new transfer between two parties:"}</p>

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
              code: `const transfer = await fetch('https://api.ricash.com/v1/transfers', {
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

const data = await transfer.json();`,
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

transfer = response.json()`,
            },
          ]}
        />

        <h3 className="text-xl font-bold mt-6 mb-3">Parameters</h3>
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

        <h3 className="text-xl font-bold mt-6 mb-3">Response</h3>

        <CodeTabs
          examples={[
            {
              language: "Success Response",
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

        <Alert className="my-6">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            {
              "Transfers are processed asynchronously. Use webhooks or poll the transfer status endpoint to track completion."
            }
          </AlertDescription>
        </Alert>

        <h2 className="text-2xl font-bold mt-8 mb-4">Transfer Status</h2>
        <p>{"Check the status of a transfer:"}</p>

        <CodeTabs
          examples={[
            {
              language: "cURL",
              code: `curl -X GET https://api.ricash.com/v1/transfers/transfer_xyz789 \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
            },
          ]}
        />

        <p className="mt-4">{"Possible transfer statuses:"}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>pending</code> - {"Transfer has been created and is being processed"}
          </li>
          <li>
            <code>processing</code> - {"Transfer is being executed"}
          </li>
          <li>
            <code>completed</code> - {"Transfer was successful"}
          </li>
          <li>
            <code>failed</code> - {"Transfer failed (see error details)"}
          </li>
          <li>
            <code>cancelled</code> - {"Transfer was cancelled"}
          </li>
        </ul>
      </div>
    </DocsLayout>
  )
}
