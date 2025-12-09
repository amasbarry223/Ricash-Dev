import { Navbar } from "@/components/navbar"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function MultiCurrencyPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold mb-4">Multi-Currency Support</h1>
                <p className="text-lg text-muted-foreground">
                  {"Handle multiple currencies in your application with Ricash API."}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Supported Currencies</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-4">Currency</th>
                        <th className="text-left py-2 px-4">Code</th>
                        <th className="text-left py-2 px-4">Countries</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border">
                        <td className="py-2 px-4">West African CFA Franc</td>
                        <td className="py-2 px-4 font-mono">XOF</td>
                        <td className="py-2 px-4">{"Côte d'Ivoire, Senegal, Mali, etc."}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4">Nigerian Naira</td>
                        <td className="py-2 px-4 font-mono">NGN</td>
                        <td className="py-2 px-4">Nigeria</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4">Ghanaian Cedi</td>
                        <td className="py-2 px-4 font-mono">GHS</td>
                        <td className="py-2 px-4">Ghana</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4">US Dollar</td>
                        <td className="py-2 px-4 font-mono">USD</td>
                        <td className="py-2 px-4">All countries</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Creating Multi-Currency Wallets</h2>
                <p>{"Users can have multiple wallets, one per currency:"}</p>

                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `// Create wallets for different currencies
const xofWallet = await createWallet(userId, 'XOF');
const ngnWallet = await createWallet(userId, 'NGN');
const usdWallet = await createWallet(userId, 'USD');

async function createWallet(userId, currency) {
  const response = await fetch('https://api.ricash.com/v1/wallets', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${accessToken}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: userId,
      currency: currency,
      type: 'personal',
    }),
  });
  
  return await response.json();
}`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Currency Conversion</h2>
                <p>{"Ricash handles currency conversion automatically for transfers:"}</p>

                <Alert className="my-6">
                  <InfoIcon className="h-4 w-4" />
                  <AlertDescription>
                    {"When transferring between different currencies, Ricash automatically converts at current exchange rates. Conversion fees apply."}
                  </AlertDescription>
                </Alert>

                <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"Store currency preferences per user"}</li>
                  <li>{"Display amounts in user's preferred currency"}</li>
                  <li>{"Handle currency conversion fees transparently"}</li>
                  <li>{"Cache exchange rates appropriately"}</li>
                  <li>{"Show currency codes clearly in UI"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

