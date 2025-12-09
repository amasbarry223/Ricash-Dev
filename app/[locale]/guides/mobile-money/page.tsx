import { Navbar } from "@/components/navbar"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function MobileMoneyPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold mb-4">Mobile Money Integration</h1>
                <p className="text-lg text-muted-foreground">
                  {"Connect to mobile money providers across Africa with Ricash API."}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Supported Providers</h2>
                <p>{"Ricash supports major mobile money providers:"}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"Orange Money (Côte d'Ivoire, Senegal, Mali)"}</li>
                  <li>{"MTN Mobile Money (Ghana, Uganda, Rwanda)"}</li>
                  <li>{"Moov Money (Côte d'Ivoire, Togo, Benin)"}</li>
                  <li>{"Airtel Money (Multiple countries)"}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Creating a Mobile Money Payment</h2>
                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `const payment = await fetch('https://api.ricash.com/v1/payments', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${accessToken}\`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    amount: 5000,
    currency: 'XOF',
    payment_method: 'mobile_money',
    customer_phone: '+2250701234567',
    description: 'Payment for services',
  }),
});

const paymentData = await payment.json();`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Payment Flow</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>{"Create a payment request via API"}</li>
                  <li>{"Customer receives payment prompt on their phone"}</li>
                  <li>{"Customer confirms payment"}</li>
                  <li>{"Payment status updates to 'completed'"}</li>
                  <li>{"Webhook notification sent to your server"}</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4">Phone Number Format</h2>
                <p>{"Always use E.164 format for phone numbers:"}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><code>+2250701234567</code> - {"Correct format"}</li>
                  <li><code>0701234567</code> - {"Incorrect (missing country code)"}</li>
                  <li><code>002250701234567</code> - {"Incorrect (wrong prefix)"}</li>
                </ul>

                <Alert className="my-6">
                  <InfoIcon className="h-4 w-4" />
                  <AlertDescription>
                    {"Mobile money payments are processed in real-time. Most payments complete within 30 seconds."}
                  </AlertDescription>
                </Alert>

                <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"Always validate phone numbers before creating payments"}</li>
                  <li>{"Use webhooks to track payment status"}</li>
                  <li>{"Handle payment failures gracefully"}</li>
                  <li>{"Provide clear instructions to customers"}</li>
                  <li>{"Test with different providers in sandbox"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

