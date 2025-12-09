import { Navbar } from "@/components/navbar"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"
import { Link } from "@/i18n/routing"

export default function WebhooksGuidePage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold mb-4">Setting Up Webhooks</h1>
                <p className="text-lg text-muted-foreground">
                  {"Receive real-time notifications for transaction events without polling."}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Why Use Webhooks?</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"Real-time notifications - no polling needed"}</li>
                  <li>{"Reduced API calls and rate limit usage"}</li>
                  <li>{"Better user experience with instant updates"}</li>
                  <li>{"More efficient resource usage"}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Step 1: Create a Webhook Endpoint</h2>
                <p>{"Create an HTTP endpoint in your application to receive webhooks:"}</p>

                <CodeTabs
                  examples={[
                    {
                      language: "Node.js (Express)",
                      code: `const express = require('express');
const app = express();

app.post('/webhooks/ricash', express.json(), (req, res) => {
  const { event, data } = req.body;
  
  // Verify webhook signature
  if (!verifySignature(req.body, req.headers['x-ricash-signature'])) {
    return res.status(401).send('Invalid signature');
  }
  
  // Handle the event
  switch (event) {
    case 'payment.completed':
      handlePaymentCompleted(data);
      break;
    case 'payment.failed':
      handlePaymentFailed(data);
      break;
  }
  
  res.status(200).send('OK');
});`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Step 2: Verify Webhook Signatures</h2>
                <p>{"Always verify webhook signatures to ensure authenticity:"}</p>

                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `const crypto = require('crypto');

function verifySignature(payload, signature, secret) {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
  
  return hash === signature.replace('sha256=', '');
}`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Step 3: Configure Webhooks</h2>
                <p>{"Configure webhooks in your dashboard or via API:"}</p>

                <CodeTabs
                  examples={[
                    {
                      language: "API",
                      code: `const webhook = await fetch('https://api.ricash.com/v1/webhooks', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url: 'https://your-app.com/webhooks/ricash',
    events: ['payment.completed', 'payment.failed', 'transfer.completed'],
  }),
});`,
                    },
                  ]}
                />

                <Alert className="my-6">
                  <InfoIcon className="h-4 w-4" />
                  <AlertDescription>
                    {"Your webhook endpoint must be publicly accessible. Use ngrok or similar tools for local development."}
                  </AlertDescription>
                </Alert>

                <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"Always verify webhook signatures"}</li>
                  <li>{"Respond quickly (within 5 seconds)"}</li>
                  <li>{"Implement idempotency to handle duplicate events"}</li>
                  <li>{"Log all webhook events for debugging"}</li>
                  <li>{"Use HTTPS for webhook endpoints"}</li>
                </ul>

                <p className="mt-6">
                  {"For more details, see the "}
                  <Link href="/docs/webhooks" className="text-primary hover:underline">Webhooks documentation</Link>
                  {"."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

