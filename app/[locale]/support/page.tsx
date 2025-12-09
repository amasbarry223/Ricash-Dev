"use client"

import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Book, FileText, MessageCircle, Mail, Phone, Search } from "lucide-react"
import { Link } from "@/i18n/routing"

export default function SupportPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />

      <section className="w-full border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-4 sm:mb-6">
                {"How can we help you?"}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
                {"Get support from our team of experts or explore our comprehensive documentation."}
              </p>

              <div className="max-w-2xl mx-auto relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for help articles, API docs, guides..."
                  className="pl-12 h-12 text-base"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Documentation</CardTitle>
              <CardDescription>
                {"Comprehensive guides and API references to help you integrate quickly"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/docs">Browse Documentation</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>API Reference</CardTitle>
              <CardDescription>{"Detailed endpoint documentation with interactive examples"}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/api-reference">View API Reference</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Guides & Tutorials</CardTitle>
              <CardDescription>{"Step-by-step tutorials for common integration scenarios"}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/guides">Explore Guides</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

            {/* Contact Options */}
            <div className="max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">
                Contact Our Team
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Email Support</CardTitle>
                    <CardDescription>{"We'll respond within 24 hours"}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{"For general inquiries and technical support"}</p>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <a href="mailto:support@ricash.com">support@ricash.com</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Phone Support</CardTitle>
                    <CardDescription>{"Monday - Friday, 9 AM - 6 PM WAT"}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{"For urgent issues and enterprise customers"}</p>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <a href="tel:+225XXXXXXXX">+225 XX XX XX XX XX</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                {"Fill out the form below and our team will get back to you as soon as possible"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your issue or question in detail..."
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

            {/* Status */}
            <div className="max-w-3xl mx-auto mt-8 sm:mt-12">
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">System Status</h3>
                  <p className="text-sm text-muted-foreground">{"All systems operational"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-medium text-accent">Online</span>
                </div>
              </div>
            </CardContent>
          </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
