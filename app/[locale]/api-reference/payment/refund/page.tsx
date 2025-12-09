import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { CodeTabs } from "@/components/code-tabs"
import { ApiPlayground } from "@/components/api-playground"
import { Link } from "@/i18n/routing"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RefundPaymentPage() {
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
                  <h1 className="text-3xl font-bold my-0">Refund Payment</h1>
                </div>

                <code className="text-base">/v1/payments/:payment_id/refund</code>

                <p className="text-lg text-muted-foreground mt-4">
                  {"Issue a full or partial refund for a completed payment. Refunds are processed asynchronously."}
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

                <h3 className="text-xl font-semibold mt-6 mb-3">Example Request</h3>

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
                      code: `const response = await fetch('https://api.ricash.com/v1/payments/payment_abc123/refund', {
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

const refund = await response.json();
console.log(refund);`,
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
  "id": "refund_xyz789",
  "payment_id": "payment_abc123",
  "amount": 5000,
  "currency": "XOF",
  "status": "processing",
  "reason": "Customer requested refund",
  "created_at": "2025-01-15T11:00:00Z"
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
  "error": "cannot_refund",
  "error_description": "Refunds can only be issued for completed payments",
  "status": 400
}`,
                    },
                    {
                      language: "400 Bad Request",
                      code: `{
  "error": "invalid_amount",
  "error_description": "Refund amount exceeds payment amount",
  "status": 400
}`,
                    },
                  ]}
                />

                <ApiPlayground
                  endpoint="/v1/payments/:payment_id/refund"
                  method="POST"
                  fields={[
                    { name: "payment_id", label: "Payment ID", type: "text", required: true, placeholder: "payment_abc123" },
                    { name: "amount", label: "Amount", type: "number", placeholder: "5000" },
                    { name: "reason", label: "Reason", type: "text", placeholder: "Customer requested refund" },
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

