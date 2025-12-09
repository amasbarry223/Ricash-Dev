import { Navbar } from "@/components/navbar"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function ErrorHandlingPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold mb-4">Handling Errors Gracefully</h1>
                <p className="text-lg text-muted-foreground">
                  {"Error handling patterns and retry strategies for robust API integrations."}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Error Response Structure</h2>
                <p>{"All errors follow a consistent format:"}</p>

                <CodeTabs
                  examples={[
                    {
                      language: "Error Response",
                      code: `{
  "error": "error_code",
  "error_description": "Human-readable error message",
  "field": "field_name",
  "status": 400
}`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Error Handling Pattern</h2>

                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `async function makePayment(amount, phone) {
  try {
    const response = await fetch('https://api.ricash.com/v1/payments', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, customer_phone: phone }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error_description);
    }

    return await response.json();
  } catch (error) {
    // Handle network errors
    if (error.name === 'TypeError') {
      throw new Error('Network error. Please check your connection.');
    }
    throw error;
  }
}`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Retry Strategy</h2>
                <p>{"Implement exponential backoff for retries:"}</p>

                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `async function retryWithBackoff(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      
      // Exponential backoff: 1s, 2s, 4s
      const delay = Math.pow(2, i) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Error Categories</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Client Errors (4xx):</strong> {"Don't retry, fix the request"}</li>
                  <li><strong>Server Errors (5xx):</strong> {"Retry with backoff"}</li>
                  <li><strong>Rate Limit (429):</strong> {"Retry after the specified delay"}</li>
                  <li><strong>Network Errors:</strong> {"Retry with exponential backoff"}</li>
                </ul>

                <Alert className="my-6">
                  <InfoIcon className="h-4 w-4" />
                  <AlertDescription>
                    {"Always provide user-friendly error messages. Never expose internal error details to end users."}
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

