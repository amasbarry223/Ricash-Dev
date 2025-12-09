"use client"

import { Navbar } from "@/components/navbar"
import { PricingCard } from "@/components/pricing-card"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"

export default function PricingPage() {
  const t = useTranslations("pricing")
  const tCommon = useTranslations("common")
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />

      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-4 sm:mb-6">
                {t("title")}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {t("description")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
              <PricingCard
            name="Starter"
            price="$0"
            description="Perfect for testing and small projects"
            features={[
              { text: "50,000 API calls/month", included: true },
              { text: "Sandbox environment", included: true },
              { text: "Email support", included: true },
              { text: "Basic analytics", included: true },
              { text: "Webhook support", included: true },
              { text: "Priority support", included: false },
              { text: "Custom integration", included: false },
              { text: "SLA guarantee", included: false },
            ]}
            buttonText="Start Free"
              />

              <PricingCard
            name="Professional"
            price="$99"
            description="For growing businesses and production apps"
            features={[
              { text: "500,000 API calls/month", included: true },
              { text: "Production environment", included: true },
              { text: "Priority email support", included: true },
              { text: "Advanced analytics", included: true },
              { text: "Webhook support", included: true },
              { text: "99.9% SLA guarantee", included: true },
              { text: "Dedicated account manager", included: false },
              { text: "Custom contracts", included: false },
            ]}
            highlighted={true}
              />

              <PricingCard
            name="Enterprise"
            price="Custom"
            description="For large-scale operations and custom needs"
            features={[
              { text: "Unlimited API calls", included: true },
              { text: "Production environment", included: true },
              { text: "24/7 phone & email support", included: true },
              { text: "Custom analytics dashboard", included: true },
              { text: "Webhook support", included: true },
              { text: "99.99% SLA guarantee", included: true },
              { text: "Dedicated account manager", included: true },
              { text: "Custom contracts & invoicing", included: true },
            ]}
            buttonText="Contact Sales"
              />
            </div>

            {/* Add-ons */}
            <div className="max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">
                {t("addons.title")}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">Additional API Calls</h3>
                        <p className="text-sm text-muted-foreground mt-1">{"When you exceed your plan's limit"}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">$0.10</div>
                        <div className="text-xs text-muted-foreground">per 1,000 calls</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">Premium Support</h3>
                        <p className="text-sm text-muted-foreground mt-1">{"24/7 priority support with SLA"}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">$299</div>
                        <div className="text-xs text-muted-foreground">/month</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">White-label Solution</h3>
                        <p className="text-sm text-muted-foreground mt-1">{"Custom branding and domain"}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">$999</div>
                        <div className="text-xs text-muted-foreground">/month</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">Custom Integration</h3>
                        <p className="text-sm text-muted-foreground mt-1">{"Dedicated integration support"}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">Custom</div>
                        <div className="text-xs text-muted-foreground">Contact us</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">
                {t("faq.title")}
              </h2>
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t("faq.exceedLimit.question")}</h3>
              <p className="text-muted-foreground">
                    {t("faq.exceedLimit.answer")}
              </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">{t("faq.changePlan.question")}</h3>
              <p className="text-muted-foreground">
                    {t("faq.changePlan.answer")}
              </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">{t("faq.freeTrial.question")}</h3>
              <p className="text-muted-foreground">
                    {t("faq.freeTrial.answer")}
              </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">{t("faq.paymentMethods.question")}</h3>
              <p className="text-muted-foreground">
                    {t("faq.paymentMethods.answer")}
              </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">{t("faq.refundPolicy.question")}</h3>
                  <p className="text-muted-foreground">
                    {t("faq.refundPolicy.answer")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
