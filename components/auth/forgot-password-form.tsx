"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess(false)

    // Simulate password reset request - in a real app, this would call an API
    try {
      // Mock successful request
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSuccess(true)
    } catch (err) {
      setError("Failed to send reset link. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <Alert className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
        <CheckCircle2 className="h-4 w-4" />
        <AlertDescription>
          If an account exists with that email, we've sent a password reset link. Please check your inbox.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div>
        <Label htmlFor="email">Email address</Label>
        <div className="mt-1">
          <Input id="email" name="email" type="email" autoComplete="email" required className="block w-full" />
        </div>
      </div>

      <div>
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send reset link"}
        </Button>
      </div>
    </form>
  )
}
