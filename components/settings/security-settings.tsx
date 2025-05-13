"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function SecuritySettings() {
  const [isSaving, setIsSaving] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate saving
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSaving(false)
  }

  const handleChangePassword = async () => {
    setIsChangingPassword(true)
    // Simulate password change
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsChangingPassword(false)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Update your password to keep your account secure.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            className="bg-purple-600 hover:bg-purple-700"
            onClick={handleChangePassword}
            disabled={isChangingPassword}
          >
            {isChangingPassword ? "Updating..." : "Update Password"}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>Add an extra layer of security to your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Two-factor authentication</Label>
              <p className="text-sm text-muted-foreground">
                Protect your account with an additional verification step.
              </p>
            </div>
            <Switch />
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Not enabled</AlertTitle>
            <AlertDescription>
              Two-factor authentication is not enabled yet. Enable it to add an extra layer of security.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Session Management</CardTitle>
          <CardDescription>Manage your active sessions and devices.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Current Session</p>
                <p className="text-sm text-muted-foreground">Chrome on Windows • 192.168.1.5</p>
                <p className="text-xs text-muted-foreground mt-1">Started 2 hours ago</p>
              </div>
              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                Active
              </Badge>
            </div>
          </div>

          <div className="rounded-md border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Mobile App</p>
                <p className="text-sm text-muted-foreground">iPhone 13 • 203.0.113.42</p>
                <p className="text-xs text-muted-foreground mt-1">Last active 3 days ago</p>
              </div>
              <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                Revoke
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" className="text-red-500 hover:text-red-600">
            Logout of All Sessions
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
