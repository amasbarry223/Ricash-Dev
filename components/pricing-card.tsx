import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: PricingFeature[]
  highlighted?: boolean
  buttonText?: string
}

export function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
  buttonText = "Get Started",
}: PricingCardProps) {
  return (
    <Card className={highlighted ? "border-primary shadow-lg scale-105" : ""}>
      <CardHeader>
        {highlighted && (
          <div className="inline-flex w-fit px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-2">
            Most Popular
          </div>
        )}
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-muted-foreground ml-1">/month</span>}
        </div>
      </CardHeader>
      <CardContent>
        <Button className="w-full mb-6" variant={highlighted ? "default" : "outline"} asChild>
          <Link href="/dashboard">{buttonText}</Link>
        </Button>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check
                className={`h-5 w-5 shrink-0 mt-0.5 ${feature.included ? "text-accent" : "text-muted-foreground"}`}
              />
              <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
