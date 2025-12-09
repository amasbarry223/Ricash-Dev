import { Navbar } from "@/components/navbar"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon, CheckCircle2 } from "lucide-react"
import { Link } from "@/i18n/routing"

export default function QuickPaymentPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold mb-4">Integrate Payments in 5 Minutes</h1>
                <p className="text-lg text-muted-foreground">
                  {"Quick guide to accepting your first payment with Ricash API."}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Step 1: Get Your API Keys</h2>
                <p>{"First, you'll need to get your API credentials from the "}
                  <Link href="/dashboard" className="text-primary hover:underline">Dashboard</Link>
                  {". You'll receive:"}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"Client ID"}</li>
                  <li>{"Client Secret"}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Step 2: Authenticate</h2>
                <p>{"Get an access token using your credentials:"}</p>

                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `const response = await fetch('https://sandbox-api.ricash.com/v1/auth/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET',
  }),
});

const { access_token } = await response.json();`,
                    },
                    {
                      language: "Python",
                      code: `import requests

response = requests.post(
    'https://sandbox-api.ricash.com/v1/auth/token',
    json={
        'client_id': 'YOUR_CLIENT_ID',
        'client_secret': 'YOUR_CLIENT_SECRET'
    }
)

access_token = response.json()['access_token']`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Step 3: Create a Payment</h2>
                <p>{"Now create a payment request:"}</p>

                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `const payment = await fetch('https://sandbox-api.ricash.com/v1/payments', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${access_token}\`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    amount: 5000,
    currency: 'XOF',
    payment_method: 'mobile_money',
    customer_phone: '+2250701234567',
    description: 'Payment for order #12345',
  }),
});

const paymentData = await payment.json();
console.log('Payment ID:', paymentData.id);`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Step 4: Check Payment Status</h2>
                <p>{"Poll the payment status or use webhooks:"}</p>

                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `const status = await fetch(
  \`https://sandbox-api.ricash.com/v1/payments/\${paymentData.id}\`,
  {
    headers: {
      'Authorization': \`Bearer \${access_token}\`,
    },
  }
);

const paymentStatus = await status.json();
console.log('Status:', paymentStatus.status);`,
                    },
                  ]}
                />

                <Alert className="my-6">
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertDescription>
                    {"That's it! You've successfully integrated payments. For production, switch to the production base URL and use production API keys."}
                  </AlertDescription>
                </Alert>

                <h2 className="text-2xl font-bold mt-8 mb-4">Next Steps</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"Set up webhooks for real-time payment notifications"}</li>
                  <li>{"Implement proper error handling"}</li>
                  <li>{"Add payment confirmation UI"}</li>
                  <li>{"Test thoroughly in sandbox before going live"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

