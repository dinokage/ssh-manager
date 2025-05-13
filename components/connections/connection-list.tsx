"use client"

import { useState } from "react"
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ConnectionList() {
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
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Name</TableHead>
            <TableHead>Host</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Last Connected</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {connections.map((connection) => (
            <TableRow key={connection.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <div
                    className={`p-1 rounded-md ${connection.status === "online" ? "bg-emerald-500/10" : "bg-muted"}`}
                  >
                    <Server
                      className={`h-4 w-4 ${connection.status === "online" ? "text-emerald-500" : "text-muted-foreground"}`}
                    />
                  </div>
                  {connection.name}
                </div>
              </TableCell>
              <TableCell>
                {connection.host}:{connection.port}
              </TableCell>
              <TableCell>{connection.username}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {connection.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>{connection.lastConnected}</TableCell>
              <TableCell>
                <Badge
                  variant={connection.status === "online" ? "default" : "secondary"}
                  className={connection.status === "online" ? "bg-emerald-500" : ""}
                >
                  {connection.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <Link href={`/dashboard/terminal?connection=${connection.id}`}>
                    <Button size="icon" variant="ghost">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
