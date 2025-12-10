import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface ApiCardProps {
  title: string
  description: string
  icon: LucideIcon
  status?: "live" | "beta" | "deprecated"
}

export function ApiCard({ title, description, icon: Icon, status = "live" }: ApiCardProps) {
  const statusColors = {
    live: "bg-accent text-accent-foreground",
    beta: "bg-primary/20 text-primary",
    deprecated: "bg-destructive/20 text-destructive",
  }

  return (
    <Card className="hover:shadow-lg transition-shadow bg-[#376571]/5 dark:bg-[#376571]/10">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#AE8455]/10">
            <Icon className="h-6 w-6 text-[#AE8455]" />
          </div>
          <Badge variant="secondary" className={statusColors[status]}>
            {status.toUpperCase()}
          </Badge>
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
