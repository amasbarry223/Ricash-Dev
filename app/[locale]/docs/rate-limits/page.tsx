import { DocsLayout } from "@/components/docs-layout"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function RateLimitsPage() {
  return (
    <DocsLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Rate Limits</h1>
        <p className="text-lg text-muted-foreground">
          {"Ricash API implements rate limiting to ensure fair usage and system stability."}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Rate Limit Tiers</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4">Tier</th>
                <th className="text-left py-2 px-4">Requests per Minute</th>
                <th className="text-left py-2 px-4">Requests per Hour</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">Free</td>
                <td className="py-2 px-4">60</td>
                <td className="py-2 px-4">1,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">Basic</td>
                <td className="py-2 px-4">120</td>
                <td className="py-2 px-4">5,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">Pro</td>
                <td className="py-2 px-4">300</td>
                <td className="py-2 px-4">20,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">Enterprise</td>
                <td className="py-2 px-4">Custom</td>
                <td className="py-2 px-4">Custom</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Rate Limit Headers</h2>
        <p>{"Every API response includes rate limit information:"}</p>

        <CodeTabs
          examples={[
            {
              language: "Response Headers",
              code: `X-RateLimit-Limit: 120
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642684800`,
            },
          ]}
        />

        <h2 className="text-2xl font-bold mt-8 mb-4">Rate Limit Exceeded</h2>
        <p>{"When rate limit is exceeded, you'll receive a 429 status code:"}</p>

        <CodeTabs
          examples={[
            {
              language: "Error Response",
              code: `{
  "error": "rate_limit_exceeded",
  "error_description": "Rate limit exceeded. Please retry after 60 seconds.",
  "retry_after": 60,
  "status": 429
}`,
            },
          ]}
        />

        <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>{"Monitor rate limit headers in responses"}</li>
          <li>{"Implement exponential backoff for retries"}</li>
          <li>{"Cache responses when possible"}</li>
          <li>{"Use webhooks instead of polling when possible"}</li>
          <li>{"Contact support for higher rate limits if needed"}</li>
        </ul>

        <Alert className="my-6">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            {"Rate limits are applied per API key. Each key has its own rate limit quota."}
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}

