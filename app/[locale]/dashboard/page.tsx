"use client"

import { Navbar } from "@/components/navbar"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  ArrowUpRight,
  Copy,
  CreditCard,
  DollarSign,
  Eye,
  EyeOff,
  Key,
  Plus,
  RefreshCw,
  TrendingUp,
  Users,
} from "lucide-react"
import { useState } from "react"

export default function DashboardPage() {
  const [showKeys, setShowKeys] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />

      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Dashboard</h1>
                <p className="text-base sm:text-lg text-muted-foreground">
                  {"Monitor your API usage and manage credentials"}
                </p>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>

            {/* Stats Overview */}
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-12 max-w-7xl">
              <StatCard title="Total API Calls" value="12,345" change="23.1%" icon={Activity} trend="up" />
              <StatCard title="Successful Transactions" value="9,876" change="12.5%" icon={TrendingUp} trend="up" />
              <StatCard title="Total Volume" value="$45,231" change="8.2%" icon={DollarSign} trend="up" />
              <StatCard title="Active Wallets" value="342" change="4.3%" icon={Users} trend="up" />
            </div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 max-w-7xl">
              <div className="lg:col-span-2 space-y-6">
            {/* API Keys */}
            <Card>
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
                <CardDescription>
                  {"Manage your API credentials for production and sandbox environments"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="sandbox">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="sandbox">Sandbox</TabsTrigger>
                    <TabsTrigger value="production">Production</TabsTrigger>
                  </TabsList>

                  <TabsContent value="sandbox" className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="sandbox-client-id">Client ID</Label>
                      <div className="flex gap-2 mt-2">
                        <Input
                          id="sandbox-client-id"
                          type={showKeys ? "text" : "password"}
                          value="sandbox_cli_12345abcdef"
                          readOnly
                          className="font-mono text-sm"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => copyToClipboard("sandbox_cli_12345abcdef", "sandbox-client-id")}
                        >
                          {copied === "sandbox-client-id" ? (
                            <span className="text-xs">✓</span>
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => setShowKeys(!showKeys)}>
                          {showKeys ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="sandbox-client-secret">Client Secret</Label>
                      <div className="flex gap-2 mt-2">
                        <Input
                          id="sandbox-client-secret"
                          type={showKeys ? "text" : "password"}
                          value="sandbox_sec_abcdef123456789"
                          readOnly
                          className="font-mono text-sm"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => copyToClipboard("sandbox_sec_abcdef123456789", "sandbox-client-secret")}
                        >
                          {copied === "sandbox-client-secret" ? (
                            <span className="text-xs">✓</span>
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Rotate Keys
                      </Button>
                      <Button variant="outline" size="sm">
                        <Key className="mr-2 h-4 w-4" />
                        Generate New Key
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="production" className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="prod-client-id">Client ID</Label>
                      <div className="flex gap-2 mt-2">
                        <Input
                          id="prod-client-id"
                          type={showKeys ? "text" : "password"}
                          value="prod_cli_98765zyxwvu"
                          readOnly
                          className="font-mono text-sm"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => copyToClipboard("prod_cli_98765zyxwvu", "prod-client-id")}
                        >
                          {copied === "prod-client-id" ? (
                            <span className="text-xs">✓</span>
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => setShowKeys(!showKeys)}>
                          {showKeys ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="prod-client-secret">Client Secret</Label>
                      <div className="flex gap-2 mt-2">
                        <Input
                          id="prod-client-secret"
                          type={showKeys ? "text" : "password"}
                          value="prod_sec_zyxwvu987654321"
                          readOnly
                          className="font-mono text-sm"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => copyToClipboard("prod_sec_zyxwvu987654321", "prod-client-secret")}
                        >
                          {copied === "prod-client-secret" ? (
                            <span className="text-xs">✓</span>
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Rotate Keys
                      </Button>
                      <Button variant="outline" size="sm">
                        <Key className="mr-2 h-4 w-4" />
                        Generate New Key
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>{"Latest test transactions in your sandbox environment"}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "txn_001",
                      type: "Transfer",
                      amount: "5,000 XOF",
                      status: "completed",
                      time: "2 minutes ago",
                    },
                    {
                      id: "txn_002",
                      type: "Payment",
                      amount: "12,500 XOF",
                      status: "pending",
                      time: "15 minutes ago",
                    },
                    {
                      id: "txn_003",
                      type: "Wallet Creation",
                      amount: "-",
                      status: "completed",
                      time: "1 hour ago",
                    },
                    { id: "txn_004", type: "Transfer", amount: "8,000 XOF", status: "failed", time: "2 hours ago" },
                  ].map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between py-3 border-b last:border-0">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                          <CreditCard className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="font-medium">{transaction.type}</div>
                          <div className="text-sm text-muted-foreground">{transaction.id}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{transaction.amount}</div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              transaction.status === "completed"
                                ? "default"
                                : transaction.status === "pending"
                                  ? "secondary"
                                  : "destructive"
                            }
                            className={
                              transaction.status === "completed"
                                ? "bg-accent text-accent-foreground"
                                : transaction.status === "pending"
                                  ? ""
                                  : ""
                            }
                          >
                            {transaction.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{transaction.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  View All Transactions
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
              </div>

              <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="/docs">
                    <Activity className="mr-2 h-4 w-4" />
                    View Documentation
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="/api-reference">
                    <Key className="mr-2 h-4 w-4" />
                    API Reference
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Test Webhook
                </Button>
              </CardContent>
            </Card>

            {/* API Usage */}
            <Card>
              <CardHeader>
                <CardTitle>API Usage</CardTitle>
                <CardDescription>{"This month's usage"}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">API Calls</span>
                      <span className="text-sm text-muted-foreground">12,345 / 50,000</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "24.7%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Storage</span>
                      <span className="text-sm text-muted-foreground">2.3 GB / 10 GB</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: "23%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Bandwidth</span>
                      <span className="text-sm text-muted-foreground">145 GB / 500 GB</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-chart-4 rounded-full" style={{ width: "29%" }} />
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  Upgrade Plan
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Webhooks */}
            <Card>
              <CardHeader>
                <CardTitle>Webhooks</CardTitle>
                <CardDescription>{"Configured webhook endpoints"}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{"https://api.myapp.com/webhooks"}</div>
                      <div className="text-xs text-muted-foreground">All events</div>
                    </div>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground ml-2">
                      Active
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Webhook
                </Button>
              </CardContent>
            </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
