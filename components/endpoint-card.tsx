import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface EndpointCardProps {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  endpoint: string
  description: string
  status?: "live" | "beta" | "deprecated"
}

const methodColors = {
  GET: "bg-accent text-accent-foreground",
  POST: "bg-primary text-primary-foreground",
  PUT: "bg-chart-4 text-primary-foreground",
  DELETE: "bg-destructive text-destructive-foreground",
  PATCH: "bg-chart-5 text-primary-foreground",
}

export function EndpointCard({ method, endpoint, description, status = "live" }: EndpointCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Badge className={methodColors[method]}>{method}</Badge>
            <code className="text-sm font-mono text-foreground">{endpoint}</code>
          </div>
          {status !== "live" && (
            <Badge variant="outline" className="capitalize">
              {status}
            </Badge>
          )}
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
