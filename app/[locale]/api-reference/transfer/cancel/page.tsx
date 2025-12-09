import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { CodeTabs } from "@/components/code-tabs"
import { ApiPlayground } from "@/components/api-playground"
import { Link } from "@/i18n/routing"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CancelTransferPage() {
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
                  <h1 className="text-3xl font-bold my-0">Cancel Transfer</h1>
                </div>

                <code className="text-base">/v1/transfers/:transfer_id/cancel</code>

                <p className="text-lg text-muted-foreground mt-4">
                  {"Cancel a pending transfer before it is processed. Only transfers with 'pending' status can be cancelled."}
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
                        <td className="py-2 px-4 font-mono">transfer_id</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"Unique identifier of the transfer to cancel"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">Example Request</h3>

                <CodeTabs
                  examples={[
                    {
                      language: "cURL",
                      code: `curl -X POST https://api.ricash.com/v1/transfers/transfer_xyz789/cancel \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json"`,
                    },
                    {
                      language: "Node.js",
                      code: `const response = await fetch('https://api.ricash.com/v1/transfers/transfer_xyz789/cancel', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json',
  },
});

const result = await response.json();
console.log(result);`,
                    },
                    {
                      language: "Python",
                      code: `import requests

response = requests.post(
    'https://api.ricash.com/v1/transfers/transfer_xyz789/cancel',
    headers={
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        'Content-Type': 'application/json'
    }
)

result = response.json()
print(result)`,
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
  "id": "transfer_xyz789",
  "status": "cancelled",
  "amount": 10000,
  "currency": "XOF",
  "cancelled_at": "2025-01-15T10:40:00Z",
  "updated_at": "2025-01-15T10:40:00Z"
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
  "error": "cannot_cancel",
  "error_description": "Transfer cannot be cancelled. Only pending transfers can be cancelled.",
  "status": 400
}`,
                    },
                    {
                      language: "404 Not Found",
                      code: `{
  "error": "transfer_not_found",
  "error_description": "Transfer with the specified ID does not exist",
  "status": 404
}`,
                    },
                  ]}
                />

                <ApiPlayground
                  endpoint="/v1/transfers/:transfer_id/cancel"
                  method="POST"
                  fields={[
                    { name: "transfer_id", label: "Transfer ID", type: "text", required: true, placeholder: "transfer_xyz789" },
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

