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
import { Upload } from "lucide-react"

interface CreateKeyDialogProps {
  children: ReactNode
}

export function CreateKeyDialog({ children }: CreateKeyDialogProps) {
  const [open, setOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate key generation
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsGenerating(false)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New SSH Key</DialogTitle>
          <DialogDescription>Generate a new SSH key or import an existing one.</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="generate" className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="generate">Generate Key</TabsTrigger>
            <TabsTrigger value="import">Import Key</TabsTrigger>
          </TabsList>

          <TabsContent value="generate" className="mt-4 space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="key-name">Key Name</Label>
                <Input id="key-name" placeholder="e.g., Production Server Key" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="key-type">Key Type</Label>
                <Select defaultValue="ed25519">
                  <SelectTrigger id="key-type">
                    <SelectValue placeholder="Select key type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ed25519">ED25519 (Recommended)</SelectItem>
                    <SelectItem value="rsa">RSA (4096 bit)</SelectItem>
                    <SelectItem value="ecdsa">ECDSA</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="passphrase">Passphrase (Optional)</Label>
                <Input id="passphrase" type="password" placeholder="Secure passphrase" />
                <p className="text-xs text-muted-foreground">
                  A passphrase adds an extra layer of security to your SSH key.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="import" className="mt-4 space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="import-key-name">Key Name</Label>
                <Input id="import-key-name" placeholder="e.g., Imported Server Key" />
              </div>

              <div className="grid gap-2">
                <Label>Private Key</Label>
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center gap-2">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Drag and drop your private key file here, or click to browse
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Browse Files
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your private key will never leave your device. All operations are performed locally.
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="import-passphrase">Passphrase (If applicable)</Label>
                <Input id="import-passphrase" type="password" placeholder="Enter passphrase if key is encrypted" />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleGenerate} disabled={isGenerating}>
            {isGenerating ? "Generating..." : "Create Key"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
