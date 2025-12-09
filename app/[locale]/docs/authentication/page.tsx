import { DocsLayout } from "@/components/docs-layout"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, InfoIcon } from "lucide-react"

export default function AuthenticationPage() {
  return (
    <DocsLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Authentication</h1>
        <p className="text-lg text-muted-foreground">
          {
            "Ricash API uses OAuth 2.0 Bearer tokens for authentication. All API requests must include a valid access token."
          }
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Authentication Flow</h2>
        <p>{"The authentication process involves two steps:"}</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>{"Obtain an access token using your client credentials"}</li>
          <li>{"Include the token in the Authorization header of subsequent requests"}</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Getting an Access Token</h2>
        <p>{"Use your Client ID and Client Secret to request an access token:"}</p>

        <CodeTabs
          examples={[
            {
              language: "Request",
              code: `POST /v1/auth/token
Host: api.ricash.com
Content-Type: application/json

{
  "client_id": "your_client_id",
  "client_secret": "your_client_secret"
}`,
            },
          ]}
        />

        <p className="mt-4">{"Successful response:"}</p>

        <CodeTabs
          examples={[
            {
              language: "Response",
              code: `{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "wallet:read wallet:write transfer:write payment:read"
}`,
            },
          ]}
        />

        <Alert className="my-6">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            {
              "Tokens expire after 1 hour (3600 seconds). Implement token refresh logic in your application to maintain uninterrupted access."
            }
          </AlertDescription>
        </Alert>

        <h2 className="text-2xl font-bold mt-8 mb-4">Using the Access Token</h2>
        <p>{"Include the access token in the Authorization header of all API requests:"}</p>

        <CodeTabs
          examples={[
            {
              language: "cURL",
              code: `curl -X GET https://api.ricash.com/v1/wallets/wallet_123 \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
            },
            {
              language: "Node.js",
              code: `const response = await fetch('https://api.ricash.com/v1/wallets/wallet_123', {
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  },
});`,
            },
          ]}
        />

        <h2 className="text-2xl font-bold mt-8 mb-4">Security Best Practices</h2>

        <Alert className="my-6" variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {
              "Never expose your Client Secret in client-side code or public repositories. Always keep it secure on your server."
            }
          </AlertDescription>
        </Alert>

        <ul className="list-disc pl-6 space-y-2">
          <li>{"Store credentials securely using environment variables"}</li>
          <li>{"Never commit API keys to version control"}</li>
          <li>{"Use HTTPS for all API requests"}</li>
          <li>{"Implement token refresh before expiration"}</li>
          <li>{"Rotate credentials regularly"}</li>
          <li>{"Use separate credentials for development and production"}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Error Responses</h2>
        <p>{"If authentication fails, you'll receive one of the following error responses:"}</p>

        <CodeTabs
          examples={[
            {
              language: "Invalid Credentials",
              code: `{
  "error": "invalid_client",
  "error_description": "Invalid client credentials",
  "status": 401
}`,
            },
            {
              language: "Expired Token",
              code: `{
  "error": "invalid_token",
  "error_description": "The access token has expired",
  "status": 401
}`,
            },
            {
              language: "Missing Token",
              code: `{
  "error": "unauthorized",
  "error_description": "Missing or invalid Authorization header",
  "status": 401
}`,
            },
          ]}
        />
      </div>
    </DocsLayout>
  )
}
