import { Link } from "@/i18n/routing"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Home, Search, FileText, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto py-16 sm:py-20 lg:py-24">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-[#29485A] dark:text-white/10 mb-4">404</h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#29485A] dark:text-white mb-4">
                Page introuvable
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {"Désolé, la page que vous recherchez n'existe pas ou a été déplacée."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Retour à l'accueil
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs">
                  <FileText className="mr-2 h-4 w-4" />
                  Documentation
                </Link>
              </Button>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold mb-4 text-[#29485A] dark:text-white">
                Pages populaires
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-left">
                <Link
                  href="/docs"
                  className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-accent hover:border-[#2C8387] transition-all"
                >
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Quick Start Guide</span>
                </Link>
                <Link
                  href="/api-reference"
                  className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-accent hover:border-[#2C8387] transition-all"
                >
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">API Reference</span>
                </Link>
                <Link
                  href="/guides"
                  className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-accent hover:border-[#2C8387] transition-all"
                >
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Guides & Tutorials</span>
                </Link>
                <Link
                  href="/support"
                  className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-accent hover:border-[#2C8387] transition-all"
                >
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Support</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

