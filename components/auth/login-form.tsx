"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate login - in a real app, this would call an API
    try {
      // Mock successful login
      await new Promise((resolve) => setTimeout(resolve, 1500))
      router.push("/dashboard")
    } catch (err) {
      setError("Invalid email or password. Please try again.")
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
        <Label htmlFor="email">Email address</Label>
        <div className="mt-1">
          <Input id="email" name="email" type="email" autoComplete="email" required className="block w-full" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <div className="text-sm">
            <Link href="/forgot-password" className="font-medium text-purple-500 hover:text-purple-400">
              Forgot your password?
            </Link>
          </div>
        </div>
        <div className="mt-1">
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full"
          />
        </div>
      </div>

      <div className="flex items-center">
        <Checkbox id="remember-me" />
        <Label htmlFor="remember-me" className="ml-2 text-sm">
          Remember me
        </Label>
      </div>

      <div>
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>
      </div>
    </form>
  )
}
