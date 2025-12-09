import { DocsLayout } from "@/components/docs-layout"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AgentsPage() {
  return (
    <DocsLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold my-0">Agent API</h1>
          <Badge variant="outline">BETA</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          {"Manage agent networks and commissions. Agents can process transactions and earn commissions on each transaction."}
        </p>

        <Alert className="my-6">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            {"The Agent API is currently in beta. Some features may change before the final release."}
          </AlertDescription>
        </Alert>

        <h2 className="text-2xl font-bold mt-8 mb-4">Register an Agent</h2>
        <p>{"Register a new agent in your network:"}</p>

        <CodeTabs
          examples={[
            {
              language: "cURL",
              code: `curl -X POST https://api.ricash.com/v1/agents \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "phone": "+2250701234567",
    "email": "john@example.com",
    "location": "Abidjan, Côte d'\''Ivoire",
    "commission_rate": 2.5
  }'`,
            },
            {
              language: "Node.js",
              code: `const agent = await fetch('https://api.ricash.com/v1/agents', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    phone: '+2250701234567',
    email: 'john@example.com',
    location: 'Abidjan, Côte d\'Ivoire',
    commission_rate: 2.5,
  }),
});

const data = await agent.json();`,
            },
          ]}
        />

        <h2 className="text-2xl font-bold mt-8 mb-4">List Agents</h2>
        <p>{"List all agents with filtering options:"}</p>

        <CodeTabs
          examples={[
            {
              language: "cURL",
              code: `curl -X GET "https://api.ricash.com/v1/agents?status=active&page=1&limit=20" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
            },
          ]}
        />

        <h2 className="text-2xl font-bold mt-8 mb-4">Get Commission History</h2>
        <p>{"Get commission history for an agent:"}</p>

        <CodeTabs
          examples={[
            {
              language: "cURL",
              code: `curl -X GET "https://api.ricash.com/v1/agents/agent_abc123/commissions?from_date=2025-01-01&to_date=2025-01-31" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
            },
          ]}
        />

        <h3 className="text-xl font-bold mt-6 mb-3">Commission Calculation</h3>
        <p>{"Commissions are calculated as a percentage of each transaction amount:"}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{"Default commission rate: 2.5%"}</li>
          <li>{"Commission rate can be customized per agent"}</li>
          <li>{"Commissions are paid out monthly"}</li>
        </ul>
      </div>
    </DocsLayout>
  )
}

