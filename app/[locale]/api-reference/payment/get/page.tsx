import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { CodeTabs } from "@/components/code-tabs"
import { ApiPlayground } from "@/components/api-playground"
import { Link } from "@/i18n/routing"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GetPaymentPage() {
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
                  <h1 className="text-3xl font-bold my-0">Get Payment</h1>
                </div>

                <code className="text-base">/v1/payments/:payment_id</code>

                <p className="text-lg text-muted-foreground mt-4">
                  {"Get payment status and details including current status, amount, fees, and timestamps."}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Request</h2>

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
                        <td className="py-2 px-4 font-mono">payment_id</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"Unique identifier of the payment"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">Example Request</h3>

                <CodeTabs
                  examples={[
                    {
                      language: "cURL",
                      code: `curl -X GET https://api.ricash.com/v1/payments/payment_abc123 \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
                    },
                    {
                      language: "Node.js",
                      code: `const response = await fetch('https://api.ricash.com/v1/payments/payment_abc123', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  },
});

const payment = await response.json();
console.log(payment);`,
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
  "id": "payment_abc123",
  "status": "completed",
  "amount": 5000,
  "currency": "XOF",
  "payment_method": "mobile_money",
  "customer_phone": "+2250701234567",
  "description": "Payment for order #12345",
  "fee": 100,
  "total_amount": 5100,
  "completed_at": "2025-01-15T10:35:00Z",
  "created_at": "2025-01-15T10:30:00Z",
  "updated_at": "2025-01-15T10:35:00Z"
}`,
                    },
                  ]}
                />

                <h3 className="text-xl font-semibold mt-6 mb-3">Payment Statuses</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><code>pending</code> - {"Payment has been created and is awaiting customer action"}</li>
                  <li><code>processing</code> - {"Payment is being processed"}</li>
                  <li><code>completed</code> - {"Payment was successful"}</li>
                  <li><code>failed</code> - {"Payment failed"}</li>
                  <li><code>cancelled</code> - {"Payment was cancelled"}</li>
                  <li><code>refunded</code> - {"Payment was refunded"}</li>
                </ul>

                <ApiPlayground
                  endpoint="/v1/payments/:payment_id"
                  method="GET"
                  fields={[
                    { name: "payment_id", label: "Payment ID", type: "text", required: true, placeholder: "payment_abc123" },
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

