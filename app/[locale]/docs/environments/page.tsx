import { DocsLayout } from "@/components/docs-layout"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function EnvironmentsPage() {
  return (
    <DocsLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Environments</h1>
        <p className="text-lg text-muted-foreground">
          {"Ricash API provides two environments: Production and Sandbox. Use Sandbox for testing and development."}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Base URLs</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Production</h3>
            <code className="text-base bg-secondary/50 px-3 py-2 rounded block">https://api.ricash.com</code>
            <p className="text-sm text-muted-foreground mt-2">
              {"Use this environment for live transactions. All transactions are real and will process actual payments."}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Sandbox</h3>
            <code className="text-base bg-secondary/50 px-3 py-2 rounded block">https://sandbox-api.ricash.com</code>
            <p className="text-sm text-muted-foreground mt-2">
              {"Use this environment for testing and development. No real transactions are processed."}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">API Keys</h2>
        <p>{"Each environment requires separate API keys:"}</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>{"Production keys are generated in your production dashboard"}</li>
          <li>{"Sandbox keys are generated in your sandbox dashboard"}</li>
          <li>{"Never use production keys in sandbox environment or vice versa"}</li>
        </ul>

        <Alert className="my-6">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            {"Always test your integration thoroughly in the sandbox environment before switching to production."}
          </AlertDescription>
        </Alert>

        <h2 className="text-2xl font-bold mt-8 mb-4">Switching Environments</h2>
        <p>{"To switch between environments, simply change the base URL in your API requests:"}</p>

        <CodeTabs
          examples={[
            {
              language: "Production",
              code: `const response = await fetch('https://api.ricash.com/v1/wallets', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_PRODUCTION_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_id: 'user_12345',
    currency: 'XOF',
    type: 'personal',
  }),
});`,
            },
            {
              language: "Sandbox",
              code: `const response = await fetch('https://sandbox-api.ricash.com/v1/wallets', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_SANDBOX_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_id: 'user_12345',
    currency: 'XOF',
    type: 'personal',
  }),
});`,
            },
          ]}
        />
      </div>
    </DocsLayout>
  )
}

