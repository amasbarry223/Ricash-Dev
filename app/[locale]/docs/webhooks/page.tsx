import { DocsLayout } from "@/components/docs-layout"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function WebhooksPage() {
  return (
    <DocsLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Webhooks</h1>
        <p className="text-lg text-muted-foreground">
          {"Receive real-time notifications for transaction events. Webhooks allow your application to react immediately to payment status changes."}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Setting Up Webhooks</h2>
        <p>{"Configure webhooks in your dashboard or via API:"}</p>

        <CodeTabs
          examples={[
            {
              language: "Dashboard",
              code: `1. Navigate to Settings > Webhooks
2. Click "Add Webhook"
3. Enter your webhook URL
4. Select events to subscribe to
5. Save configuration`,
            },
            {
              language: "API",
              code: `POST /v1/webhooks
{
  "url": "https://your-app.com/webhooks/ricash",
  "events": ["payment.completed", "payment.failed", "transfer.completed"]
}`,
            },
          ]}
        />

        <h2 className="text-2xl font-bold mt-8 mb-4">Webhook Events</h2>
        <p>{"Available webhook events:"}</p>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4">Event</th>
                <th className="text-left py-2 px-4">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">payment.completed</td>
                <td className="py-2 px-4">{"Payment was successfully completed"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">payment.failed</td>
                <td className="py-2 px-4">{"Payment failed"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">transfer.completed</td>
                <td className="py-2 px-4">{"Transfer was successfully completed"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">transfer.failed</td>
                <td className="py-2 px-4">{"Transfer failed"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">kyc.approved</td>
                <td className="py-2 px-4">{"KYC verification was approved"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">kyc.rejected</td>
                <td className="py-2 px-4">{"KYC verification was rejected"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Webhook Payload</h2>
        <p>{"Webhook payloads are sent as JSON:"}</p>

        <CodeTabs
          examples={[
            {
              language: "Example",
              code: `{
  "event": "payment.completed",
  "data": {
    "id": "payment_abc123",
    "status": "completed",
    "amount": 5000,
    "currency": "XOF",
    "customer_phone": "+2250701234567"
  },
  "timestamp": "2025-01-15T10:35:00Z",
  "signature": "sha256=..."
}`,
            },
          ]}
        />

        <h2 className="text-2xl font-bold mt-8 mb-4">Security</h2>
        <p>{"Verify webhook signatures to ensure authenticity:"}</p>

        <CodeTabs
          examples={[
            {
              language: "Node.js",
              code: `const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
  
  return hash === signature.replace('sha256=', '');
}`,
            },
          ]}
        />

        <Alert className="my-6">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            {"Always verify webhook signatures in production. Never process webhooks without signature verification."}
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}

