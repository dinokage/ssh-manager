"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AppearanceSettings() {
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
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize the look and feel of the application.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Theme</Label>
            <Tabs defaultValue="dark" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="light">Light</TabsTrigger>
                <TabsTrigger value="dark">Dark</TabsTrigger>
                <TabsTrigger value="system">System</TabsTrigger>
              </TabsList>
              <TabsContent value="light" className="mt-4">
                <div className="rounded-md border p-4 flex items-center justify-center h-32 bg-white text-black">
                  Light Theme Preview
                </div>
              </TabsContent>
              <TabsContent value="dark" className="mt-4">
                <div className="rounded-md border p-4 flex items-center justify-center h-32 bg-black text-white">
                  Dark Theme Preview
                </div>
              </TabsContent>
              <TabsContent value="system" className="mt-4">
                <div className="rounded-md border p-4 flex items-center justify-center h-32 bg-gradient-to-r from-white to-black text-gray-500">
                  System Theme Preview
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-2">
            <Label>Accent Color</Label>
            <RadioGroup defaultValue="purple" className="grid grid-cols-5 gap-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="purple" id="purple" className="sr-only" />
                <Label
                  htmlFor="purple"
                  className="h-8 w-8 rounded-full bg-purple-600 cursor-pointer ring-offset-background transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=checked]:ring-2"
                />
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="emerald" id="emerald" className="sr-only" />
                <Label
                  htmlFor="emerald"
                  className="h-8 w-8 rounded-full bg-emerald-600 cursor-pointer ring-offset-background transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=checked]:ring-2"
                />
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="blue" id="blue" className="sr-only" />
                <Label
                  htmlFor="blue"
                  className="h-8 w-8 rounded-full bg-blue-600 cursor-pointer ring-offset-background transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=checked]:ring-2"
                />
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="amber" id="amber" className="sr-only" />
                <Label
                  htmlFor="amber"
                  className="h-8 w-8 rounded-full bg-amber-600 cursor-pointer ring-offset-background transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=checked]:ring-2"
                />
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="rose" id="rose" className="sr-only" />
                <Label
                  htmlFor="rose"
                  className="h-8 w-8 rounded-full bg-rose-600 cursor-pointer ring-offset-background transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=checked]:ring-2"
                />
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label>Interface Options</Label>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="animations" className="text-sm">
                  Enable animations
                </Label>
                <Switch id="animations" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="compact-mode" className="text-sm">
                  Compact mode
                </Label>
                <Switch id="compact-mode" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sound-effects" className="text-sm">
                  Sound effects
                </Label>
                <Switch id="sound-effects" />
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
