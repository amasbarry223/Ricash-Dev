import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { CodeTabs } from "@/components/code-tabs"
import { ApiPlayground } from "@/components/api-playground"
import { Link } from "@/i18n/routing"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CreateAgentPage() {
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
                  <Badge variant="outline" className="ml-2">BETA</Badge>
                  <h1 className="text-3xl font-bold my-0">Create Agent</h1>
                </div>

                <code className="text-base">/v1/agents</code>

                <p className="text-lg text-muted-foreground mt-4">
                  {"Register a new agent in your network. Agents can process transactions and earn commissions."}
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
                        <td className="py-2 px-4 font-mono">name</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"Full name of the agent"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">phone</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"Phone number in E.164 format"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">email</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"Email address"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">location</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"Agent location/address"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">commission_rate</td>
                        <td className="py-2 px-4">number</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"Commission rate as percentage (default: 2.5%)"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">Example Request</h3>

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
                      code: `const response = await fetch('https://api.ricash.com/v1/agents', {
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

const agent = await response.json();
console.log(agent);`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Response</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Success Response (201 Created)</h3>

                <CodeTabs
                  examples={[
                    {
                      language: "JSON",
                      code: `{
  "id": "agent_abc123",
  "name": "John Doe",
  "phone": "+2250701234567",
  "email": "john@example.com",
  "location": "Abidjan, Côte d'Ivoire",
  "commission_rate": 2.5,
  "status": "active",
  "created_at": "2025-01-15T10:30:00Z",
  "updated_at": "2025-01-15T10:30:00Z"
}`,
                    },
                  ]}
                />

                <ApiPlayground
                  endpoint="/v1/agents"
                  method="POST"
                  fields={[
                    { name: "name", label: "Name", type: "text", required: true, placeholder: "John Doe" },
                    { name: "phone", label: "Phone", type: "text", required: true, placeholder: "+2250701234567" },
                    { name: "email", label: "Email", type: "email", required: true, placeholder: "john@example.com" },
                    { name: "location", label: "Location", type: "text", required: true, placeholder: "Abidjan, Côte d'Ivoire" },
                    { name: "commission_rate", label: "Commission Rate (%)", type: "number", placeholder: "2.5" },
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

