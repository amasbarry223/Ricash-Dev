"use client"

import React, { Component, ErrorInfo, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, RefreshCw, Home } from "lucide-react"
import { Link } from "@/i18n/routing"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)
    
    // You can log to an error reporting service here
    // Example: logErrorToService(error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Une erreur s'est produite</AlertTitle>
              <AlertDescription className="mt-4 space-y-4">
                <p>
                  {"Désolé, une erreur inattendue s'est produite. Veuillez réessayer."}
                </p>
                {process.env.NODE_ENV === "development" && this.state.error && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm font-medium">
                      Détails de l'erreur (développement)
                    </summary>
                    <pre className="mt-2 text-xs bg-muted p-2 rounded overflow-auto">
                      {this.state.error.toString()}
                      {this.state.error.stack}
                    </pre>
                  </details>
                )}
                <div className="flex gap-2 mt-4">
                  <Button onClick={this.handleReset} variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Réessayer
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/">
                      <Home className="h-4 w-4 mr-2" />
                      Retour à l'accueil
                    </Link>
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

