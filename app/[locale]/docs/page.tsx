import { DocsLayout } from "@/components/docs-layout"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quick Start Guide",
  description: "Get started with Ricash API in under 5 minutes. Learn authentication, make your first API call, and understand responses.",
}

export default function DocsPage() {
  return (
    <DocsLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 id="quick-start-guide" className="text-4xl font-bold mb-4">Quick Start Guide</h1>
        <p className="text-lg text-muted-foreground">
          {
            "Get started with Ricash API in under 5 minutes. This guide will walk you through authentication, making your first API call, and understanding the response."
          }
        </p>

        <Alert className="my-6">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            {"This guide uses the sandbox environment. You'll need to "}
            <Link href="/dashboard" className="text-primary hover:underline">
              create an account
            </Link>
            {" to get your API credentials."}
          </AlertDescription>
        </Alert>

        <h2 id="step-1-get-api-credentials" className="text-2xl font-bold mt-8 mb-4">Step 1: Get Your API Credentials</h2>
        <p>
          {"After creating your account, navigate to the "}
          <Link href="/dashboard" className="text-primary hover:underline">
            Dashboard
          </Link>
          {" to generate your API keys. You'll receive:"}
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Client ID:</strong> {" Your application identifier"}
          </li>
          <li>
            <strong>Client Secret:</strong> {" Your private authentication key (keep this secure!)"}
          </li>
        </ul>

        <h2 id="step-2-authenticate" className="text-2xl font-bold mt-8 mb-4">Step 2: Authenticate</h2>
        <p>{"All API requests require authentication. First, obtain an access token using your credentials:"}</p>

        <CodeTabs
          examples={[
            {
              language: "cURL",
              code: `curl -X POST https://api.ricash.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "client_id": "YOUR_CLIENT_ID",
    "client_secret": "YOUR_CLIENT_SECRET"
  }'`,
            },
            {
              language: "Node.js",
              code: `const response = await fetch('https://api.ricash.com/v1/auth/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET',
  }),
});

const data = await response.json();
console.log(data.access_token);`,
            },
            {
              language: "Python",
              code: `import requests

response = requests.post(
    'https://api.ricash.com/v1/auth/token',
    json={
        'client_id': 'YOUR_CLIENT_ID',
        'client_secret': 'YOUR_CLIENT_SECRET'
    }
)

data = response.json()
print(data['access_token'])`,
            },
            {
              language: "PHP",
              code: `<?php
$ch = curl_init('https://api.ricash.com/v1/auth/token');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'client_id' => 'YOUR_CLIENT_ID',
    'client_secret' => 'YOUR_CLIENT_SECRET'
]));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$data = json_decode($response, true);
echo $data['access_token'];`,
            },
          ]}
        />

        <p className="mt-4">The response will include your access token:</p>

        <CodeTabs
          examples={[
            {
              language: "Response",
              code: `{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600
}`,
            },
          ]}
        />

        <Alert className="my-6">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            {"Access tokens expire after 1 hour. Store the token securely and refresh it before expiration."}
          </AlertDescription>
        </Alert>

        <h2 id="step-3-first-api-call" className="text-2xl font-bold mt-8 mb-4">Step 3: Make Your First API Call</h2>
        <p>{"Now that you have an access token, let's create a wallet for a user:"}</p>

        <CodeTabs
          examples={[
            {
              language: "cURL",
              code: `curl -X POST https://api.ricash.com/v1/wallets \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "user_12345",
    "currency": "XOF",
    "type": "personal"
  }'`,
            },
            {
              language: "Node.js",
              code: `const response = await fetch('https://api.ricash.com/v1/wallets', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_id: 'user_12345',
    currency: 'XOF',
    type: 'personal',
  }),
});

const wallet = await response.json();
console.log(wallet);`,
            },
            {
              language: "Python",
              code: `response = requests.post(
    'https://api.ricash.com/v1/wallets',
    headers={
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        'Content-Type': 'application/json'
    },
    json={
        'user_id': 'user_12345',
        'currency': 'XOF',
        'type': 'personal'
    }
)

wallet = response.json()
print(wallet)`,
            },
          ]}
        />

        <p className="mt-4">Success! You'll receive a response with the wallet details:</p>

        <CodeTabs
          examples={[
            {
              language: "Response",
              code: `{
  "id": "wallet_7a8b9c0d",
  "user_id": "user_12345",
  "currency": "XOF",
  "type": "personal",
  "balance": 0,
  "status": "active",
  "created_at": "2025-01-15T10:30:00Z"
}`,
            },
          ]}
        />

        <h2 id="next-steps" className="text-2xl font-bold mt-8 mb-4">Next Steps</h2>
        <p>{"Now that you've made your first API call, explore more capabilities:"}</p>

        <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
          <Button variant="outline" asChild className="justify-start h-auto p-4 bg-transparent">
            <Link href="/docs/transfer">
              <div className="text-left">
                <div className="font-semibold mb-1">Transfer Money</div>
                <div className="text-sm text-muted-foreground">{"Learn how to send money between wallets"}</div>
              </div>
            </Link>
          </Button>

          <Button variant="outline" asChild className="justify-start h-auto p-4 bg-transparent">
            <Link href="/docs/payment">
              <div className="text-left">
                <div className="font-semibold mb-1">Accept Payments</div>
                <div className="text-sm text-muted-foreground">{"Integrate payment collection"}</div>
              </div>
            </Link>
          </Button>

          <Button variant="outline" asChild className="justify-start h-auto p-4 bg-transparent">
            <Link href="/docs/webhooks">
              <div className="text-left">
                <div className="font-semibold mb-1">Setup Webhooks</div>
                <div className="text-sm text-muted-foreground">{"Receive real-time notifications"}</div>
              </div>
            </Link>
          </Button>

          <Button variant="outline" asChild className="justify-start h-auto p-4 bg-transparent">
            <Link href="/docs/sdks">
              <div className="text-left">
                <div className="font-semibold mb-1">Use SDKs</div>
                <div className="text-sm text-muted-foreground">{"Integrate faster with our libraries"}</div>
              </div>
            </Link>
          </Button>
        </div>

        <h2 id="need-help" className="text-2xl font-bold mt-8 mb-4">Need Help?</h2>
        <p>
          {"If you encounter any issues or have questions, check out our "}
          <Link href="/support" className="text-primary hover:underline">
            Support page
          </Link>
          {" or explore the full "}
          <Link href="/api-reference" className="text-primary hover:underline">
            API Reference
          </Link>
          {"."}
        </p>
      </div>
    </DocsLayout>
  )
}
