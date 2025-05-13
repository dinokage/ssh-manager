"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Server, MoreHorizontal, ExternalLink, Edit, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function ConnectionGrid() {
  const [connections, setConnections] = useState([
    {
      id: "1",
      name: "Production Server",
      host: "192.168.1.100",
      port: 22,
      username: "admin",
      status: "online",
      tags: ["production", "web"],
      lastConnected: "2 hours ago",
    },
    {
      id: "2",
      name: "Development Server",
      host: "192.168.1.101",
      port: 22,
      username: "developer",
      status: "online",
      tags: ["development", "testing"],
      lastConnected: "1 day ago",
    },
    {
      id: "3",
      name: "Database Server",
      host: "192.168.1.102",
      port: 22,
      username: "dbadmin",
      status: "offline",
      tags: ["database", "production"],
      lastConnected: "3 days ago",
    },
    {
      id: "4",
      name: "Staging Environment",
      host: "192.168.1.103",
      port: 22,
      username: "deployer",
      status: "online",
      tags: ["staging", "testing"],
      lastConnected: "1 week ago",
    },
    {
      id: "5",
      name: "Backup Server",
      host: "192.168.1.104",
      port: 22,
      username: "backup",
      status: "online",
      tags: ["backup", "utility"],
      lastConnected: "2 weeks ago",
    },
    {
      id: "6",
      name: "Monitoring Server",
      host: "192.168.1.105",
      port: 22,
      username: "monitor",
      status: "offline",
      tags: ["monitoring", "utility"],
      lastConnected: "1 month ago",
    },
  ])

  const handleDeleteConnection = (id: string) => {
    setConnections(connections.filter((connection) => connection.id !== id))
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {connections.map((connection) => (
        <Card
          key={connection.id}
          className="border-border/40 bg-card/60 transition-all duration-200 hover:shadow-md hover:shadow-purple-500/10 hover:border-purple-500/30"
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-md ${connection.status === "online" ? "bg-emerald-500/10" : "bg-muted"}`}>
                  <Server
                    className={`h-5 w-5 ${connection.status === "online" ? "text-emerald-500" : "text-muted-foreground"}`}
                  />
                </div>
                <div>
                  <h3 className="font-medium">{connection.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {connection.host}:{connection.port}
                  </p>
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
                  <DropdownMenuItem asChild>
                    <Link href={`/dashboard/terminal?connection=${connection.id}`} className="flex items-center">
                      <ExternalLink className="mr-2 h-4 w-4" /> Connect
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" /> Edit
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => handleDeleteConnection(connection.id)}
                    className="text-red-500 focus:text-red-500"
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {connection.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                <span>Last connected: {connection.lastConnected}</span>
              </div>
              <Badge
                variant={connection.status === "online" ? "default" : "secondary"}
                className={connection.status === "online" ? "bg-emerald-500" : ""}
              >
                {connection.status}
              </Badge>
            </div>

            <div className="mt-4 pt-4 border-t flex justify-between">
              <span className="text-xs text-muted-foreground">
                {connection.username}@{connection.host}
              </span>
              <Link href={`/dashboard/terminal?connection=${connection.id}`}>
                <Button size="sm" variant="outline" className="gap-1">
                  <ExternalLink className="h-3 w-3" /> Connect
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
