"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function RegisterForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate registration - in a real app, this would call an API
    try {
      // Mock successful registration
      await new Promise((resolve) => setTimeout(resolve, 1500))
      router.push("/dashboard")
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
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
        <Label htmlFor="name">Full name</Label>
        <div className="mt-1">
          <Input id="name" name="name" type="text" autoComplete="name" required className="block w-full" />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email address</Label>
        <div className="mt-1">
          <Input id="email" name="email" type="email" autoComplete="email" required className="block w-full" />
        </div>
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <div className="mt-1">
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="block w-full"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="confirm-password">Confirm password</Label>
        <div className="mt-1">
          <Input
            id="confirm-password"
            name="confirm-password"
            type="password"
            autoComplete="new-password"
            required
            className="block w-full"
          />
        </div>
      </div>

      <div>
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </div>
    </form>
  )
}
