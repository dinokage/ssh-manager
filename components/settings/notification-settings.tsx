"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export function NotificationSettings() {
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate saving
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSaving(false)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Choose what notifications you want to receive.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Security Alerts</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="login-alerts" className="text-sm">
                  Login attempts
                </Label>
                <Switch id="login-alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password-changes" className="text-sm">
                  Password changes
                </Label>
                <Switch id="password-changes" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="new-devices" className="text-sm">
                  New device logins
                </Label>
                <Switch id="new-devices" defaultChecked />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connection Notifications</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="connection-success" className="text-sm">
                  Successful connections
                </Label>
                <Switch id="connection-success" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="connection-failure" className="text-sm">
                  Failed connections
                </Label>
                <Switch id="connection-failure" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="connection-timeout" className="text-sm">
                  Connection timeouts
                </Label>
                <Switch id="connection-timeout" defaultChecked />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">System Notifications</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="updates-available" className="text-sm">
                  Updates available
                </Label>
                <Switch id="updates-available" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="maintenance" className="text-sm">
                  Scheduled maintenance
                </Label>
                <Switch id="maintenance" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="tips" className="text-sm">
                  Tips and suggestions
                </Label>
                <Switch id="tips" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Notification Delivery</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="text-sm">
                  Email notifications
                </Label>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="browser-notifications" className="text-sm">
                  Browser notifications
                </Label>
                <Switch id="browser-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="desktop-notifications" className="text-sm">
                  Desktop notifications
                </Label>
                <Switch id="desktop-notifications" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleSave} disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
