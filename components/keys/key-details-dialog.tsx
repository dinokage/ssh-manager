"use client"

import type { ReactNode } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Copy, Download } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface KeyDetailsDialogProps {
  children: ReactNode
  keyData: {
    id: string
    name: string
    type: string
    fingerprint: string
    created: string
    lastUsed: string
  }
}

export function KeyDetailsDialog({ children, keyData }: KeyDetailsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{keyData.name}</DialogTitle>
          <DialogDescription>View and manage your SSH key details.</DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-muted-foreground">Type</div>
            <div>{keyData.type}</div>

            <div className="text-muted-foreground">Fingerprint</div>
            <div className="font-mono text-xs">{keyData.fingerprint}</div>

            <div className="text-muted-foreground">Created</div>
            <div>{keyData.created}</div>

            <div className="text-muted-foreground">Last Used</div>
            <div>{keyData.lastUsed}</div>
          </div>

          <Tabs defaultValue="public">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="public">Public Key</TabsTrigger>
              <TabsTrigger value="private">Private Key</TabsTrigger>
            </TabsList>
            <TabsContent value="public" className="mt-4">
              <div className="relative">
                <pre className="bg-muted p-4 rounded-md font-mono text-xs overflow-auto max-h-[200px]">
                  {`ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6o4hE+qE0RC542PM8s0O8
cxo/MiLLkmCR+yJjQMgpw0C2YzPgJX7DDOOcI3Uy/AP6ElTvRVqX+C3iQjgMUHiwV
eQYfHhK6mNiVFn1yvOCLRvQ/jNxEo4Q9Nx5EXMTbHvlOZ8MlhGBQjZOl1+SDY9Z
9zKR4OxxktvsKJQHj1IsmxfyG91Rjp/jSQcyOYRWBJlyhKqIULtFpRJGpd4UL+X
Xmo5Vyz4SXUi9Vfl/5CRsY/BesA83SI/cZQ6d1a8t/EzE6x4Ivl3iBFQXvYJfNE
Xjj1K9qfHH/McSXnDdPOCTpjYnaY5qL8q3EbxWWwLEb9pzRxjvN9ELleHCLmxxx
user@example.com`}
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6o4hE+qE0RC542PM8s0O8cxo/MiLLkmCR+yJjQMgpw0C2YzPgJX7DDOOcI3Uy/AP6ElTvRVqX+C3iQjgMUHiwVeQYfHhK6mNiVFn1yvOCLRvQ/jNxEo4Q9Nx5EXMTbHvlOZ8MlhGBQjZOl1+SDY9Z9zKR4OxxktvsKJQHj1IsmxfyG91Rjp/jSQcyOYRWBJlyhKqIULtFpRJGpd4UL+XXmo5Vyz4SXUi9Vfl/5CRsY/BesA83SI/cZQ6d1a8t/EzE6x4Ivl3iBFQXvYJfNEXjj1K9qfHH/McSXnDdPOCTpjYnaY5qL8q3EbxWWwLEb9pzRxjvN9ELleHCLmxxx user@example.com",
                    )
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" /> Download Public Key
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="private" className="mt-4">
              <div className="bg-muted p-4 rounded-md">
                <p className="text-center text-muted-foreground">
                  For security reasons, private keys are not displayed. You can download your private key if needed.
                </p>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Private Key
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
