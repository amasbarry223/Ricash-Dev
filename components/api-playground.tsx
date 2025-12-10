"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeTabs } from "@/components/code-tabs"
import { Play, Loader2 } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface PlaygroundField {
  name: string
  label: string
  type: "text" | "number" | "textarea"
  required?: boolean
  placeholder?: string
}

interface ApiPlaygroundProps {
  endpoint: string
  method: string
  fields: PlaygroundField[]
}

export function ApiPlayground({ endpoint, method, fields }: ApiPlaygroundProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [response, setResponse] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setResponse(
        JSON.stringify(
          {
            success: true,
            message: "This is a sandbox environment. No real API call was made.",
            data: formData,
          },
          null,
          2,
        ),
      )
      setLoading(false)
    }, 1000)
  }

  return (
    <Card className="my-6">
      <CardHeader>
        <CardTitle>Try it out</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <Label htmlFor={field.name}>
                {field.label}
                {field.required && <span className="text-destructive ml-1">*</span>}
              </Label>
              {field.type === "textarea" ? (
                <Textarea
                  id={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.name] || ""}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="mt-2"
                />
              ) : (
                <Input
                  id={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.name] || ""}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="mt-2"
                />
              )}
            </div>
          ))}

          <Button type="submit" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Envoyer la requête
              </>
            )}
          </Button>
        </form>

        {response && (
          <div className="mt-6">
            <Label>Response</Label>
            <CodeTabs
              examples={[
                {
                  language: "JSON",
                  code: response,
                },
              ]}
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
