import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { CodeTabs } from "@/components/code-tabs"
import { ApiPlayground } from "@/components/api-playground"
import { Link } from "@/i18n/routing"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CreatePaymentPage() {
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
                  <h1 className="text-3xl font-bold my-0">Create Payment</h1>
                </div>

                <code className="text-base">/v1/payments</code>

                <p className="text-lg text-muted-foreground mt-4">
                  {"Create a payment request for card or mobile money. The customer will receive a payment prompt."}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Request</h2>

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
                        <td className="py-2 px-4">{"Amount in the smallest currency unit"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">currency</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"3-letter ISO currency code"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">payment_method</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"'mobile_money', 'card', or 'bank_transfer'"}</td>
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
                        <td className="py-2 px-4">{"URL to receive webhook notifications"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">metadata</td>
                        <td className="py-2 px-4">object</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"Custom key-value pairs"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">Example Request</h3>

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
                      code: `const response = await fetch('https://api.ricash.com/v1/payments', {
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

const payment = await response.json();
console.log(payment);`,
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

                <ApiPlayground
                  endpoint="/v1/payments"
                  method="POST"
                  fields={[
                    { name: "amount", label: "Amount", type: "number", required: true, placeholder: "5000" },
                    { name: "currency", label: "Currency", type: "text", required: true, placeholder: "XOF" },
                    { name: "payment_method", label: "Payment Method", type: "text", required: true, placeholder: "mobile_money" },
                    { name: "customer_phone", label: "Customer Phone", type: "text", required: true, placeholder: "+2250701234567" },
                    { name: "description", label: "Description", type: "text", placeholder: "Payment for order #12345" },
                    { name: "callback_url", label: "Callback URL", type: "text", placeholder: "https://your-app.com/webhooks/payment" },
                    { name: "metadata", label: "Metadata (JSON)", type: "textarea", placeholder: '{"order_id": "order_12345"}' },
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

