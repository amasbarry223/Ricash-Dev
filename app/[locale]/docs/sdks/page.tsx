import { DocsLayout } from "@/components/docs-layout"
import { CodeTabs } from "@/components/code-tabs"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "@/i18n/routing"

export default function SDKsPage() {
  return (
    <DocsLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">SDKs & Libraries</h1>
        <p className="text-lg text-muted-foreground">
          {"Official and community-maintained SDKs to help you integrate Ricash API quickly."}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Official SDKs</h2>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          <Card>
            <CardHeader>
              <CardTitle>Node.js</CardTitle>
              <CardDescription>{"Official Node.js SDK for Ricash API"}</CardDescription>
            </CardHeader>
            <div className="px-6 pb-6">
              <CodeTabs
                examples={[
                  {
                    language: "Installation",
                    code: `npm install @ricash/api`,
                  },
                  {
                    language: "Usage",
                    code: `import { Ricash } from '@ricash/api';

const ricash = new Ricash({
  apiKey: 'YOUR_API_KEY',
  environment: 'sandbox'
});

const wallet = await ricash.wallets.create({
  user_id: 'user_12345',
  currency: 'XOF',
  type: 'personal'
});`,
                  },
                ]}
              />
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Python</CardTitle>
              <CardDescription>{"Official Python SDK for Ricash API"}</CardDescription>
            </CardHeader>
            <div className="px-6 pb-6">
              <CodeTabs
                examples={[
                  {
                    language: "Installation",
                    code: `pip install ricash-api`,
                  },
                  {
                    language: "Usage",
                    code: `from ricash import Ricash

ricash = Ricash(
    api_key='YOUR_API_KEY',
    environment='sandbox'
)

wallet = ricash.wallets.create(
    user_id='user_12345',
    currency='XOF',
    type='personal'
)`,
                  },
                ]}
              />
            </div>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Community Libraries</h2>
        <p>{"Community-maintained libraries for other languages:"}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="#" className="text-primary hover:underline">PHP SDK</Link> - {"Community maintained"}</li>
          <li><Link href="#" className="text-primary hover:underline">Ruby SDK</Link> - {"Community maintained"}</li>
          <li><Link href="#" className="text-primary hover:underline">Go SDK</Link> - {"Community maintained"}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">REST API</h2>
        <p>{"You can also use the REST API directly with any HTTP client:"}</p>
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
          ]}
        />
      </div>
    </DocsLayout>
  )
}

