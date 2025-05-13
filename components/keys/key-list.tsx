"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Key, MoreHorizontal, Copy, Download, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { KeyDetailsDialog } from "@/components/keys/key-details-dialog"

export function KeyList() {
  const [keys, setKeys] = useState([
    {
      id: "1",
      name: "Production Key",
      type: "RSA",
      fingerprint: "SHA256:uNgDHAzBMuFQBb/1FvHgQYoGjGsGMU6Bx7y8gTWbN2M",
      created: "2023-05-10",
      lastUsed: "2 hours ago",
    },
    {
      id: "2",
      name: "Development Key",
      type: "ED25519",
      fingerprint: "SHA256:7KCxRnTGMH9MgQgm7TJ9Ey1kI5QeUF2XGbOpjMpYT4c",
      created: "2023-04-15",
      lastUsed: "1 day ago",
    },
    {
      id: "3",
      name: "Personal Server",
      type: "RSA",
      fingerprint: "SHA256:pLEN2Jkx8YSZRcFQojYJPpnHsLY9vCMQJITOxuYGR3M",
      created: "2023-03-22",
      lastUsed: "1 week ago",
    },
    {
      id: "4",
      name: "GitHub",
      type: "ED25519",
      fingerprint: "SHA256:9KzBnTGMH9MgQgm7TJ9Ey1kI5QeUF2XGbOpjMpYT4c",
      created: "2023-02-10",
      lastUsed: "2 weeks ago",
    },
  ])

  const handleDeleteKey = (id: string) => {
    setKeys(keys.filter((key) => key.id !== id))
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {keys.map((key) => (
        <Card
          key={key.id}
          className="border-border/40 bg-card/60 transition-all duration-200 hover:shadow-md hover:shadow-purple-500/10 hover:border-purple-500/30"
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-purple-500/10">
                  <Key className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-medium">{key.name}</h3>
                  <p className="text-sm text-muted-foreground">{key.fingerprint}</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Copy className="mr-2 h-4 w-4" /> Copy Public Key
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Download className="mr-2 h-4 w-4" /> Export Key
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleDeleteKey(key.id)} className="text-red-500 focus:text-red-500">
                    <Trash2 className="mr-2 h-4 w-4" /> Delete Key
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <Badge variant="outline">{key.type}</Badge>
              <KeyDetailsDialog keyData={key}>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </KeyDetailsDialog>
            </div>

            <div className="mt-4 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Created:</span>
                <span>{key.created}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Last used:</span>
                <span>{key.lastUsed}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
