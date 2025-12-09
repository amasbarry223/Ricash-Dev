import { Navbar } from "@/components/navbar"
import { CodeTabs } from "@/components/code-tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function KYCFlowPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold mb-4">KYC Verification Flow</h1>
                <p className="text-lg text-muted-foreground">
                  {"Implement user verification with automated document checks."}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Verification Steps</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>{"User uploads identity document"}</li>
                  <li>{"User takes a selfie photo"}</li>
                  <li>{"Submit verification request via API"}</li>
                  <li>{"System processes verification (1-2 business days)"}</li>
                  <li>{"Receive webhook notification with result"}</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4">Step 1: Upload Documents</h2>
                <p>{"First, upload document images to your storage and get URLs:"}</p>

                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `// Upload document images (example using a file upload service)
const frontImageUrl = await uploadImage(documentFront);
const backImageUrl = await uploadImage(documentBack);
const selfieUrl = await uploadImage(selfie);`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Step 2: Submit Verification</h2>
                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `const verification = await fetch('https://api.ricash.com/v1/kyc/verify', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${accessToken}\`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_id: 'user_12345',
    document_type: 'national_id',
    document_number: '123456789',
    front_image_url: frontImageUrl,
    back_image_url: backImageUrl,
    selfie_url: selfieUrl,
  }),
});

const verificationData = await verification.json();
console.log('Verification ID:', verificationData.id);`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Step 3: Check Status</h2>
                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `async function checkVerificationStatus(verificationId) {
  const response = await fetch(
    \`https://api.ricash.com/v1/kyc/\${verificationId}\`,
    {
      headers: {
        'Authorization': \`Bearer \${accessToken}\`,
      },
    }
  );
  
  const verification = await response.json();
  return verification.status; // 'pending', 'approved', 'rejected'
}`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Step 4: Handle Webhooks</h2>
                <p>{"Set up webhooks to receive status updates automatically:"}</p>

                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `app.post('/webhooks/ricash', (req, res) => {
  const { event, data } = req.body;
  
  if (event === 'kyc.approved') {
    // Update user status in your database
    updateUserVerificationStatus(data.user_id, 'approved');
  } else if (event === 'kyc.rejected') {
    // Notify user and request new documents
    notifyUserVerificationRejected(data.user_id);
  }
  
  res.status(200).send('OK');
});`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Supported Documents</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>National ID:</strong> {"Most common, requires front and back"}</li>
                  <li><strong>Passport:</strong> {"International passport, front page only"}</li>
                  <li><strong>Driver's License:</strong> {"Front and back required"}</li>
                </ul>

                <Alert className="my-6">
                  <InfoIcon className="h-4 w-4" />
                  <AlertDescription>
                    {"Verification typically takes 1-2 business days. Use webhooks to avoid polling for status updates."}
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

