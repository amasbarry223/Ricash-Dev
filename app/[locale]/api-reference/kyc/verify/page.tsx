import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { CodeTabs } from "@/components/code-tabs"
import { ApiPlayground } from "@/components/api-playground"
import { Link } from "@/i18n/routing"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function KYCVerifyPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" size="sm" asChild className="mb-6 sm:mb-8">
                <Link href="/api-reference">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to API Reference
                </Link>
              </Button>

              <div className="prose prose-slate dark:prose-invert max-w-none">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-primary text-primary-foreground">POST</Badge>
                  <h1 className="text-3xl font-bold my-0">Verify KYC</h1>
                </div>

                <code className="text-base">/v1/kyc/verify</code>

                <p className="text-lg text-muted-foreground mt-4">
                  {"Submit identity documents for verification. Supports national ID, passport, and driver's license."}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Request</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Body Parameters</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-4">Parameter</th>
                        <th className="text-left py-2 px-4">Type</th>
                        <th className="text-left py-2 px-4">Required</th>
                        <th className="text-left py-2 px-4">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">user_id</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"Unique identifier for the user"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">document_type</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"'national_id', 'passport', or 'drivers_license'"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">document_number</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"Document identification number"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">front_image_url</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"URL to the front image of the document"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">back_image_url</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">{"URL to the back image of the document (if applicable)"}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 font-mono">selfie_url</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">{"URL to a selfie photo of the user"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">Example Request</h3>

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
    "back_image_url": "https://example.com/back.jpg",
    "selfie_url": "https://example.com/selfie.jpg"
  }'`,
                    },
                    {
                      language: "Node.js",
                      code: `const response = await fetch('https://api.ricash.com/v1/kyc/verify', {
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
    back_image_url: 'https://example.com/back.jpg',
    selfie_url: 'https://example.com/selfie.jpg',
  }),
});

const verification = await response.json();
console.log(verification);`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Response</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Success Response (201 Created)</h3>

                <CodeTabs
                  examples={[
                    {
                      language: "JSON",
                      code: `{
  "id": "verification_xyz789",
  "user_id": "user_12345",
  "status": "pending",
  "document_type": "national_id",
  "document_number": "123456789",
  "created_at": "2025-01-15T10:30:00Z",
  "updated_at": "2025-01-15T10:30:00Z"
}`,
                    },
                  ]}
                />

                <ApiPlayground
                  endpoint="/v1/kyc/verify"
                  method="POST"
                  fields={[
                    { name: "user_id", label: "User ID", type: "text", required: true, placeholder: "user_12345" },
                    { name: "document_type", label: "Document Type", type: "text", required: true, placeholder: "national_id" },
                    { name: "document_number", label: "Document Number", type: "text", required: true, placeholder: "123456789" },
                    { name: "front_image_url", label: "Front Image URL", type: "text", required: true, placeholder: "https://example.com/front.jpg" },
                    { name: "back_image_url", label: "Back Image URL", type: "text", placeholder: "https://example.com/back.jpg" },
                    { name: "selfie_url", label: "Selfie URL", type: "text", required: true, placeholder: "https://example.com/selfie.jpg" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

