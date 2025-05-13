import { Server, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function RecentConnections() {
  const connections = [
    {
      id: "1",
      name: "Production Server",
      host: "192.168.1.100",
      lastConnected: "2 hours ago",
      status: "online",
    },
    {
      id: "2",
      name: "Development Server",
      host: "192.168.1.101",
      lastConnected: "1 day ago",
      status: "online",
    },
    {
      id: "3",
      name: "Database Server",
      host: "192.168.1.102",
      lastConnected: "3 days ago",
      status: "offline",
    },
    {
      id: "4",
      name: "Staging Environment",
      host: "192.168.1.103",
      lastConnected: "1 week ago",
      status: "online",
    },
  ]

  return (
    <div className="space-y-4">
      {connections.map((connection) => (
        <div
          key={connection.id}
          className="flex items-center justify-between p-3 rounded-md border bg-card/60 hover:bg-card/80 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-md ${connection.status === "online" ? "bg-emerald-500/10" : "bg-muted"}`}>
              <Server
                className={`h-5 w-5 ${connection.status === "online" ? "text-emerald-500" : "text-muted-foreground"}`}
              />
            </div>
            <div>
              <div className="font-medium">{connection.name}</div>
              <div className="text-sm text-muted-foreground">{connection.host}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge
              variant={connection.status === "online" ? "default" : "secondary"}
              className={connection.status === "online" ? "bg-emerald-500" : ""}
            >
              {connection.status}
            </Badge>
            <div className="text-xs text-muted-foreground">{connection.lastConnected}</div>
            <Link href={`/dashboard/terminal?connection=${connection.id}`}>
              <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
