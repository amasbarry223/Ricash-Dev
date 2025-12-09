import { DocsLayout } from "@/components/docs-layout"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function PaymentPage() {
  return (
    <DocsLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Payment API</h1>
        <p className="text-lg text-muted-foreground">
          {"Accept payments from multiple sources including cards, mobile money, and bank transfers across Africa."}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Create a Payment</h2>
        <p>{"Create a payment request for card or mobile money:"}</p>

        <CodeTabs
          examples={[
            {
              language: "cURL",
              code: `curl -X POST https://api.ricash.com/v1/payments \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 5000,
    "currency": "XOF",
    "payment_method": "mobile_money",
    "customer_phone": "+2250701234567",
    "description": "Payment for order #12345",
    "callback_url": "https://your-app.com/webhooks/payment",
    "metadata": {
      "order_id": "order_12345"
    }
  }'`,
            },
            {
              language: "Node.js",
              code: `const payment = await fetch('https://api.ricash.com/v1/payments', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    amount: 5000,
    currency: 'XOF',
    payment_method: 'mobile_money',
    customer_phone: '+2250701234567',
    description: 'Payment for order #12345',
    callback_url: 'https://your-app.com/webhooks/payment',
    metadata: {
      order_id: 'order_12345',
    },
  }),
});

const data = await payment.json();`,
            },
            {
              language: "Python",
              code: `import requests

response = requests.post(
    'https://api.ricash.com/v1/payments',
    headers={
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        'Content-Type': 'application/json'
    },
    json={
        'amount': 5000,
        'currency': 'XOF',
        'payment_method': 'mobile_money',
        'customer_phone': '+2250701234567',
        'description': 'Payment for order #12345',
        'callback_url': 'https://your-app.com/webhooks/payment',
        'metadata': {
            'order_id': 'order_12345'
        }
    }
)

payment = response.json()`,
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
                <td className="py-2 px-4 font-mono">payment_method</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">Yes</td>
                <td className="py-2 px-4">{"Payment method: 'mobile_money', 'card', or 'bank_transfer'"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">customer_phone</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">Yes</td>
                <td className="py-2 px-4">{"Customer phone number in E.164 format"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">description</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">No</td>
                <td className="py-2 px-4">{"Payment description (max 255 characters)"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">callback_url</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">No</td>
                <td className="py-2 px-4">{"URL to receive webhook notifications for payment status changes"}</td>
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
  "id": "payment_abc123",
  "status": "pending",
  "amount": 5000,
  "currency": "XOF",
  "payment_method": "mobile_money",
  "customer_phone": "+2250701234567",
  "description": "Payment for order #12345",
  "fee": 100,
  "total_amount": 5100,
  "callback_url": "https://your-app.com/webhooks/payment",
  "metadata": {
    "order_id": "order_12345"
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
              "For mobile money payments, the customer will receive a payment prompt on their phone. For card payments, you'll receive a payment link to share with the customer."
            }
          </AlertDescription>
        </Alert>

        <h2 className="text-2xl font-bold mt-8 mb-4">Get Payment Status</h2>
        <p>{"Get payment status and details:"}</p>

        <CodeTabs
          examples={[
            {
              language: "cURL",
              code: `curl -X GET https://api.ricash.com/v1/payments/payment_abc123 \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
            },
            {
              language: "Node.js",
              code: `const payment = await fetch('https://api.ricash.com/v1/payments/payment_abc123', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  },
});

const data = await payment.json();`,
            },
            {
              language: "Python",
              code: `import requests

response = requests.get(
    'https://api.ricash.com/v1/payments/payment_abc123',
    headers={
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    }
)

payment = response.json()`,
            },
          ]}
        />

        <p className="mt-4">{"Possible payment statuses:"}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>pending</code> - {"Payment has been created and is awaiting customer action"}
          </li>
          <li>
            <code>processing</code> - {"Payment is being processed"}
          </li>
          <li>
            <code>completed</code> - {"Payment was successful"}
          </li>
          <li>
            <code>failed</code> - {"Payment failed (see error details)"}
          </li>
          <li>
            <code>cancelled</code> - {"Payment was cancelled"}
          </li>
          <li>
            <code>refunded</code> - {"Payment was refunded"}
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Refund a Payment</h2>
        <p>{"Issue a full or partial refund for a completed payment:"}</p>

        <CodeTabs
          examples={[
            {
              language: "cURL",
              code: `curl -X POST https://api.ricash.com/v1/payments/payment_abc123/refund \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 5000,
    "reason": "Customer requested refund"
  }'`,
            },
            {
              language: "Node.js",
              code: `const refund = await fetch('https://api.ricash.com/v1/payments/payment_abc123/refund', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    amount: 5000,
    reason: 'Customer requested refund',
  }),
});

const data = await refund.json();`,
            },
            {
              language: "Python",
              code: `import requests

response = requests.post(
    'https://api.ricash.com/v1/payments/payment_abc123/refund',
    headers={
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        'Content-Type': 'application/json'
    },
    json={
        'amount': 5000,
        'reason': 'Customer requested refund'
    }
)

refund = response.json()`,
            },
          ]}
        />

        <h3 className="text-xl font-bold mt-6 mb-3">Refund Parameters</h3>
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
                <td className="py-2 px-4">No</td>
                <td className="py-2 px-4">{"Refund amount (defaults to full amount if not specified)"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">reason</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">No</td>
                <td className="py-2 px-4">{"Reason for the refund"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Alert className="my-6">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            {
              "Refunds are processed asynchronously. Use webhooks or poll the payment status endpoint to track refund completion. Refunds can only be issued for completed payments."
            }
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}

