import { Navbar } from "@/components/navbar"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function SandboxTestingPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold mb-4">Testing with Sandbox</h1>
                <p className="text-lg text-muted-foreground">
                  {"Best practices for testing your integration in the sandbox environment."}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Sandbox vs Production</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-4">Feature</th>
                        <th className="text-left py-2 px-4">Sandbox</th>
                        <th className="text-left py-2 px-4">Production</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border">
                        <td className="py-2 px-4">Base URL</td>
                        <td className="py-2 px-4 font-mono">sandbox-api.ricash.com</td>
                        <td className="py-2 px-4 font-mono">api.ricash.com</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4">Transactions</td>
                        <td className="py-2 px-4">{"Simulated, no real money"}</td>
                        <td className="py-2 px-4">{"Real transactions"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4">API Keys</td>
                        <td className="py-2 px-4">{"Separate sandbox keys"}</td>
                        <td className="py-2 px-4">{"Production keys"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Test Scenarios</h2>
                <p>{"Test these scenarios before going live:"}</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Successful Payment</h3>
                <CodeTabs
                  examples={[
                    {
                      language: "Test Data",
                      code: `{
  "amount": 5000,
  "currency": "XOF",
  "payment_method": "mobile_money",
  "customer_phone": "+2250701234567"
}`,
                    },
                  ]}
                />

                <h3 className="text-xl font-semibold mt-6 mb-3">Failed Payment</h3>
                <p>{"Use specific test phone numbers to simulate failures:"}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><code>+2250000000001</code> - {"Simulates insufficient funds"}</li>
                  <li><code>+2250000000002</code> - {"Simulates network error"}</li>
                  <li><code>+2250000000003</code> - {"Simulates user cancellation"}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Testing Checklist</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"Test successful payment flow"}</li>
                  <li>{"Test failed payment scenarios"}</li>
                  <li>{"Test webhook delivery"}</li>
                  <li>{"Test error handling"}</li>
                  <li>{"Test rate limiting"}</li>
                  <li>{"Test with different currencies"}</li>
                  <li>{"Test refund flow"}</li>
                </ul>

                <Alert className="my-6">
                  <InfoIcon className="h-4 w-4" />
                  <AlertDescription>
                    {"Never use production API keys in sandbox environment. Always use separate keys for each environment."}
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

