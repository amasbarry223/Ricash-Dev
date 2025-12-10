"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsBreadcrumbs } from "@/components/docs-breadcrumbs"
import { DocsTableOfContents } from "@/components/docs-table-of-contents"
import { DocsNavigation } from "@/components/docs-navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DocsSearch } from "@/components/docs-search"

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex w-full max-w-7xl mx-auto">
        <DocsSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main id="main-content" className="flex-1 flex flex-col">
          <div className="border-b border-border bg-background sticky top-16 z-40 w-full lg:z-30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="py-4 flex items-center gap-4">
                {/* Mobile menu button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open sidebar</span>
                </Button>

                {/* Search */}
                <DocsSearch />
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-16 sm:py-20 lg:py-24">
              <div className="flex gap-8">
                <div className="flex-1 max-w-4xl min-w-0">
                  <DocsBreadcrumbs />
                  <article>
                    {children}
                  </article>
                  <DocsNavigation />
                </div>
                <DocsTableOfContents className="w-64 shrink-0 hidden xl:block" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
