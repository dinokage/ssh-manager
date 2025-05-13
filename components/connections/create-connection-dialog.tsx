"use client"

import { type ReactNode, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"

interface CreateConnectionDialogProps {
  children: ReactNode
}

export function CreateConnectionDialog({ children }: CreateConnectionDialogProps) {
  const [open, setOpen] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

  const handleCreate = async () => {
    setIsCreating(true)
    // Simulate connection creation
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsCreating(false)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Connection</DialogTitle>
          <DialogDescription>Configure a new SSH connection to your server.</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="basic" className="mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="mt-4 space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="connection-name">Connection Name</Label>
                <Input id="connection-name" placeholder="e.g., Production Server" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="host">Host</Label>
                <Input id="host" placeholder="e.g., 192.168.1.100 or example.com" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="port">Port</Label>
                  <Input id="port" type="number" defaultValue="22" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="e.g., admin" />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="tags">Tags (Optional)</Label>
                <Input id="tags" placeholder="e.g., production, web, database" />
                <p className="text-xs text-muted-foreground">
                  Separate tags with commas to help organize your connections.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="authentication" className="mt-4 space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Authentication Method</Label>
                <Select defaultValue="key">
                  <SelectTrigger>
                    <SelectValue placeholder="Select authentication method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="key">SSH Key (Recommended)</SelectItem>
                    <SelectItem value="password">Password</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="ssh-key">SSH Key</Label>
                <Select>
                  <SelectTrigger id="ssh-key">
                    <SelectValue placeholder="Select SSH key" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="key1">Production Key</SelectItem>
                    <SelectItem value="key2">Development Key</SelectItem>
                    <SelectItem value="key3">Personal Server</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="passphrase">Key Passphrase (If applicable)</Label>
                <Input id="passphrase" type="password" placeholder="Enter passphrase if key is encrypted" />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="remember-passphrase" />
                <Label htmlFor="remember-passphrase" className="text-sm">
                  Remember passphrase for this session
                </Label>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-4 space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="connection-timeout">Connection Timeout (seconds)</Label>
                <Input id="connection-timeout" type="number" defaultValue="30" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="keep-alive">Keep Alive Interval (seconds)</Label>
                <Input id="keep-alive" type="number" defaultValue="60" />
                <p className="text-xs text-muted-foreground">
                  Sends a keep-alive signal to prevent the connection from timing out.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="agent-forwarding" />
                <Label htmlFor="agent-forwarding" className="text-sm">
                  Enable SSH agent forwarding
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="compression" />
                <Label htmlFor="compression" className="text-sm">
                  Enable compression
                </Label>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleCreate} disabled={isCreating}>
            {isCreating ? "Creating..." : "Create Connection"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
