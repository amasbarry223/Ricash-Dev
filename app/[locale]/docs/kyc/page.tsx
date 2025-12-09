import { DocsLayout } from "@/components/docs-layout"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function KYCPage() {
  return (
    <DocsLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">KYC API</h1>
        <p className="text-lg text-muted-foreground">
          {"Verify customer identities with automated document checks. Supports national ID, passport, and driver's license."}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Submit Verification</h2>
        <p>{"Submit identity documents for verification:"}</p>

        <CodeTabs
          examples={[
            {
              language: "cURL",
              code: `curl -X POST https://api.ricash.com/v1/kyc/verify \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "user_12345",
    "document_type": "national_id",
    "document_number": "123456789",
    "front_image_url": "https://example.com/front.jpg",
    "selfie_url": "https://example.com/selfie.jpg"
  }'`,
            },
            {
              language: "Node.js",
              code: `const verification = await fetch('https://api.ricash.com/v1/kyc/verify', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_id: 'user_12345',
    document_type: 'national_id',
    document_number: '123456789',
    front_image_url: 'https://example.com/front.jpg',
    selfie_url: 'https://example.com/selfie.jpg',
  }),
});

const data = await verification.json();`,
            },
          ]}
        />

        <h3 className="text-xl font-bold mt-6 mb-3">Supported Document Types</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><code>national_id</code> - {"National identity card"}</li>
          <li><code>passport</code> - {"International passport"}</li>
          <li><code>drivers_license</code> - {"Driver's license"}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Check Verification Status</h2>
        <p>{"Check the status of a verification:"}</p>

        <CodeTabs
          examples={[
            {
              language: "cURL",
              code: `curl -X GET https://api.ricash.com/v1/kyc/verification_xyz789 \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
            },
            {
              language: "Node.js",
              code: `const verification = await fetch('https://api.ricash.com/v1/kyc/verification_xyz789', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  },
});

const data = await verification.json();`,
            },
          ]}
        />

        <h3 className="text-xl font-bold mt-6 mb-3">Verification Statuses</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><code>pending</code> - {"Verification is being processed"}</li>
          <li><code>approved</code> - {"Verification was successful"}</li>
          <li><code>rejected</code> - {"Verification was rejected"}</li>
          <li><code>expired</code> - {"Verification has expired"}</li>
        </ul>

        <Alert className="my-6">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            {"Verifications are typically processed within 1-2 business days. Use webhooks to receive status updates automatically."}
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}

