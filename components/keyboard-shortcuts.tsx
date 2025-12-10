"use client"

import { Fragment, useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Kbd } from "@/components/ui/kbd"
import { Command, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Shortcut {
  keys: string[]
  description: string
  category: string
}

const shortcuts: Shortcut[] = [
  {
    keys: ["⌘", "K"],
    description: "Ouvrir la recherche",
    category: "Navigation",
  },
  {
    keys: ["Esc"],
    description: "Fermer la recherche / Modales",
    category: "Navigation",
  },
  {
    keys: ["/"],
    description: "Focus sur la recherche",
    category: "Navigation",
  },
  {
    keys: ["⌘", "B"],
    description: "Basculer la sidebar",
    category: "Navigation",
  },
  {
    keys: ["⌘", "/"],
    description: "Afficher les raccourcis clavier",
    category: "Aide",
  },
]

export function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + / to open shortcuts
      if ((e.metaKey || e.ctrlKey) && e.key === "/") {
        e.preventDefault()
        setIsOpen(true)
      }
      // Escape to close
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  const groupedShortcuts = shortcuts.reduce((acc, shortcut) => {
    if (!acc[shortcut.category]) {
      acc[shortcut.category] = []
    }
    acc[shortcut.category].push(shortcut)
    return acc
  }, {} as Record<string, Shortcut[]>)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Command className="h-5 w-5" />
            Raccourcis clavier
          </DialogTitle>
          <DialogDescription>
            {"Raccourcis disponibles pour naviguer plus rapidement dans la documentation"}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          {Object.entries(groupedShortcuts).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                {category}
              </h3>
              <div className="space-y-2">
                {items.map((shortcut, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-border/40 last:border-0"
                  >
                    <span className="text-sm">{shortcut.description}</span>
                    <div className="flex items-center gap-1">
                      {shortcut.keys.map((key, keyIndex) => (
                        <Fragment key={keyIndex}>
                          <Kbd>{key}</Kbd>
                          {keyIndex < shortcut.keys.length - 1 && (
                            <span className="text-muted-foreground mx-1">+</span>
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-border">
          <Button variant="outline" onClick={() => setIsOpen(false)} className="w-full">
            <X className="h-4 w-4 mr-2" />
            Fermer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

