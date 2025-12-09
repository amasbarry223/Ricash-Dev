import { DocsLayout } from "@/components/docs-layout"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export default function ErrorsPage() {
  return (
    <DocsLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Error Codes</h1>
        <p className="text-lg text-muted-foreground">
          {"Understanding error responses and how to handle them in your application."}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Error Response Format</h2>
        <p>{"All errors follow a consistent format:"}</p>

        <CodeTabs
          examples={[
            {
              language: "Error Response",
              code: `{
  "error": "error_code",
  "error_description": "Human-readable error message",
  "field": "field_name",
  "status": 400
}`,
            },
          ]}
        />

        <h2 className="text-2xl font-bold mt-8 mb-4">HTTP Status Codes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4">Status Code</th>
                <th className="text-left py-2 px-4">Meaning</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">400</td>
                <td className="py-2 px-4">{"Bad Request - Invalid parameters"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">401</td>
                <td className="py-2 px-4">{"Unauthorized - Invalid or expired token"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">403</td>
                <td className="py-2 px-4">{"Forbidden - Insufficient permissions"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">404</td>
                <td className="py-2 px-4">{"Not Found - Resource doesn't exist"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">409</td>
                <td className="py-2 px-4">{"Conflict - Resource already exists"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">429</td>
                <td className="py-2 px-4">{"Too Many Requests - Rate limit exceeded"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">500</td>
                <td className="py-2 px-4">{"Internal Server Error - Server error"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Common Error Codes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4">Error Code</th>
                <th className="text-left py-2 px-4">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">invalid_request</td>
                <td className="py-2 px-4">{"Request parameters are invalid"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">unauthorized</td>
                <td className="py-2 px-4">{"Authentication failed"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">insufficient_balance</td>
                <td className="py-2 px-4">{"Wallet has insufficient balance"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">wallet_not_found</td>
                <td className="py-2 px-4">{"Wallet does not exist"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">rate_limit_exceeded</td>
                <td className="py-2 px-4">{"Too many requests, please retry later"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Error Handling Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>{"Always check the HTTP status code"}</li>
          <li>{"Read the error_description for user-friendly messages"}</li>
          <li>{"Check the field property for validation errors"}</li>
          <li>{"Implement retry logic for 5xx errors"}</li>
          <li>{"Respect rate limits (429 errors)"}</li>
        </ul>

        <Alert className="my-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {"Never expose internal error details to end users. Always provide user-friendly error messages."}
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}

