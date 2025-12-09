import { DocsLayout } from "@/components/docs-layout"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function WalletPage() {
  return (
    <DocsLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Wallet API</h1>
        <p className="text-lg text-muted-foreground">
          {"Manage digital wallets and balances for your users. Create wallets, check balances, and track transactions."}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Create a Wallet</h2>
        <p>{"Create a new wallet for a user with specified currency and type:"}</p>

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
              code: `const wallet = await fetch('https://api.ricash.com/v1/wallets', {
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

const data = await wallet.json();`,
            },
            {
              language: "Python",
              code: `import requests

response = requests.post(
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

wallet = response.json()`,
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
                <td className="py-2 px-4 font-mono">user_id</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">Yes</td>
                <td className="py-2 px-4">{"Unique identifier for the user"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">currency</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">Yes</td>
                <td className="py-2 px-4">{"3-letter ISO currency code (XOF, NGN, GHS, etc.)"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">type</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">Yes</td>
                <td className="py-2 px-4">{"Wallet type: 'personal' or 'business'"}</td>
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
  "id": "wallet_7a8b9c0d",
  "user_id": "user_12345",
  "currency": "XOF",
  "type": "personal",
  "balance": 0,
  "status": "active",
  "created_at": "2025-01-15T10:30:00Z",
  "updated_at": "2025-01-15T10:30:00Z"
}`,
            },
          ]}
        />

        <h2 className="text-2xl font-bold mt-8 mb-4">Get Wallet Details</h2>
        <p>{"Retrieve wallet details including current balance and status:"}</p>

        <CodeTabs
          examples={[
            {
              language: "cURL",
              code: `curl -X GET https://api.ricash.com/v1/wallets/wallet_7a8b9c0d \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
            },
            {
              language: "Node.js",
              code: `const wallet = await fetch('https://api.ricash.com/v1/wallets/wallet_7a8b9c0d', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  },
});

const data = await wallet.json();`,
            },
            {
              language: "Python",
              code: `import requests

response = requests.get(
    'https://api.ricash.com/v1/wallets/wallet_7a8b9c0d',
    headers={
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    }
)

wallet = response.json()`,
            },
          ]}
        />

        <h2 className="text-2xl font-bold mt-8 mb-4">List Wallets</h2>
        <p>{"List all wallets with optional filtering by user or status:"}</p>

        <CodeTabs
          examples={[
            {
              language: "cURL",
              code: `curl -X GET "https://api.ricash.com/v1/wallets?user_id=user_12345&status=active" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
            },
            {
              language: "Node.js",
              code: `const wallets = await fetch('https://api.ricash.com/v1/wallets?user_id=user_12345&status=active', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  },
});

const data = await wallets.json();`,
            },
            {
              language: "Python",
              code: `import requests

response = requests.get(
    'https://api.ricash.com/v1/wallets',
    headers={
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    },
    params={
        'user_id': 'user_12345',
        'status': 'active'
    }
)

wallets = response.json()`,
            },
          ]}
        />

        <h3 className="text-xl font-bold mt-6 mb-3">Query Parameters</h3>
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
                <td className="py-2 px-4 font-mono">user_id</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">No</td>
                <td className="py-2 px-4">{"Filter by user ID"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">status</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">No</td>
                <td className="py-2 px-4">{"Filter by status: 'active', 'suspended', or 'closed'"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">page</td>
                <td className="py-2 px-4">integer</td>
                <td className="py-2 px-4">No</td>
                <td className="py-2 px-4">{"Page number for pagination (default: 1)"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 font-mono">limit</td>
                <td className="py-2 px-4">integer</td>
                <td className="py-2 px-4">No</td>
                <td className="py-2 px-4">{"Number of results per page (default: 20, max: 100)"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Get Wallet Transactions</h2>
        <p>{"Get transaction history for a specific wallet:"}</p>

        <CodeTabs
          examples={[
            {
              language: "cURL",
              code: `curl -X GET "https://api.ricash.com/v1/wallets/wallet_7a8b9c0d/transactions?page=1&limit=20" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
            },
            {
              language: "Node.js",
              code: `const transactions = await fetch('https://api.ricash.com/v1/wallets/wallet_7a8b9c0d/transactions?page=1&limit=20', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  },
});

const data = await transactions.json();`,
            },
            {
              language: "Python",
              code: `import requests

response = requests.get(
    'https://api.ricash.com/v1/wallets/wallet_7a8b9c0d/transactions',
    headers={
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    },
    params={
        'page': 1,
        'limit': 20
    }
)

transactions = response.json()`,
            },
          ]}
        />

        <Alert className="my-6">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            {
              "Wallet balances are updated in real-time. All transactions are recorded and can be retrieved through the transactions endpoint."
            }
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}

