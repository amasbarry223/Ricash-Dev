import { Navbar } from "@/components/navbar"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold mb-4">Securing Your API Calls</h1>
                <p className="text-lg text-muted-foreground">
                  {"Implement best security practices for production API integrations."}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Protect Your API Keys</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"Never commit API keys to version control"}</li>
                  <li>{"Use environment variables for API keys"}</li>
                  <li>{"Rotate keys regularly"}</li>
                  <li>{"Use different keys for different environments"}</li>
                  <li>{"Never expose keys in client-side code"}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Use HTTPS</h2>
                <p>{"Always use HTTPS for all API requests:"}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"HTTPS encrypts data in transit"}</li>
                  <li>{"Prevents man-in-the-middle attacks"}</li>
                  <li>{"Required for production"}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Verify Webhook Signatures</h2>
                <p>{"Always verify webhook signatures to ensure authenticity:"}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"Never process webhooks without signature verification"}</li>
                  <li>{"Use the webhook secret from your dashboard"}</li>
                  <li>{"Implement proper signature validation"}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Implement Rate Limiting</h2>
                <p>{"Respect rate limits and implement backoff strategies:"}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"Monitor rate limit headers"}</li>
                  <li>{"Implement exponential backoff"}</li>
                  <li>{"Cache responses when possible"}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Validate Input</h2>
                <p>{"Always validate user input before sending to API:"}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"Validate phone numbers"}</li>
                  <li>{"Validate amounts"}</li>
                  <li>{"Sanitize user input"}</li>
                  <li>{"Check for required fields"}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Error Handling</h2>
                <p>{"Implement proper error handling:"}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"Never expose internal error details to users"}</li>
                  <li>{"Log errors securely"}</li>
                  <li>{"Implement retry logic for transient errors"}</li>
                  <li>{"Handle network failures gracefully"}</li>
                </ul>

                <Alert className="my-6">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    {"Security is a shared responsibility. Follow these practices to keep your integration secure."}
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

