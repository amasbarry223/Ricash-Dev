import { Navbar } from "@/components/navbar"
import { CodeTabs } from "@/components/code-tabs"
import { Link } from "@/i18n/routing"

export default function WalletSystemPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold mb-4">Building a Wallet System</h1>
                <p className="text-lg text-muted-foreground">
                  {"Complete guide to implementing a wallet-based payment system with Ricash API."}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Architecture Overview</h2>
                <p>{"A wallet system typically includes:"}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"Wallet creation and management"}</li>
                  <li>{"Balance tracking"}</li>
                  <li>{"Transaction history"}</li>
                  <li>{"Deposits and withdrawals"}</li>
                  <li>{"Transfers between wallets"}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Step 1: Create Wallets</h2>
                <p>{"Create a wallet for each user:"}</p>

                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `async function createUserWallet(userId, currency = 'XOF') {
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

                <h2 className="text-2xl font-bold mt-8 mb-4">Step 2: Check Balance</h2>
                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `async function getWalletBalance(walletId) {
  const response = await fetch(
    \`https://api.ricash.com/v1/wallets/\${walletId}\`,
    {
      headers: {
        'Authorization': \`Bearer \${accessToken}\`,
      },
    }
  );
  
  const wallet = await response.json();
  return wallet.balance;
}`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Step 3: Process Transactions</h2>
                <p>{"Handle deposits, withdrawals, and transfers:"}</p>

                <h3 className="text-xl font-semibold mt-4 mb-2">Deposit (via Payment)</h3>
                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `async function depositToWallet(walletId, amount) {
  // Create a payment that credits the wallet
  const payment = await createPayment({
    amount: amount,
    currency: 'XOF',
    wallet_id: walletId,
    payment_method: 'mobile_money',
  });
  
  return payment;
}`,
                    },
                  ]}
                />

                <h3 className="text-xl font-semibold mt-4 mb-2">Transfer</h3>
                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `async function transferBetweenWallets(fromWalletId, toPhone, amount) {
  const response = await fetch('https://api.ricash.com/v1/transfers', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${accessToken}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: amount,
      currency: 'XOF',
      sender_wallet_id: fromWalletId,
      receiver_phone: toPhone,
    }),
  });
  
  return await response.json();
}`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Step 4: Transaction History</h2>
                <CodeTabs
                  examples={[
                    {
                      language: "Node.js",
                      code: `async function getTransactionHistory(walletId, page = 1) {
  const response = await fetch(
    \`https://api.ricash.com/v1/wallets/\${walletId}/transactions?page=\${page}&limit=20\`,
    {
      headers: {
        'Authorization': \`Bearer \${accessToken}\`,
      },
    }
  );
  
  return await response.json();
}`,
                    },
                  ]}
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{"Use webhooks to update balances in real-time"}</li>
                  <li>{"Cache wallet balances with appropriate TTL"}</li>
                  <li>{"Implement proper error handling"}</li>
                  <li>{"Log all wallet operations for auditing"}</li>
                  <li>{"Handle concurrent transactions properly"}</li>
                </ul>

                <p className="mt-6">
                  {"For more details, see the "}
                  <Link href="/docs/wallet" className="text-primary hover:underline">Wallet API documentation</Link>
                  {"."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

