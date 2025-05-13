import { Key, Server, Terminal, Clock } from "lucide-react"

export function ActivityTimeline() {
  const activities = [
    {
      id: "1",
      type: "connection",
      description: "Connected to Production Server",
      time: "2 hours ago",
      icon: Terminal,
    },
    {
      id: "2",
      type: "key",
      description: "Generated new SSH key",
      time: "1 day ago",
      icon: Key,
    },
    {
      id: "3",
      type: "connection",
      description: "Added new connection: Database Server",
      time: "3 days ago",
      icon: Server,
    },
    {
      id: "4",
      type: "session",
      description: "Session timeout: Development Server",
      time: "1 week ago",
      icon: Clock,
    },
  ]

  return (
    <div className="relative space-y-4 before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-border">
      {activities.map((activity) => (
        <div key={activity.id} className="flex gap-4 relative">
          <div
            className={`z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${getActivityColor(activity.type)}`}
          >
            <activity.icon className={`h-4 w-4 ${getActivityIconColor(activity.type)}`} />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium">{activity.description}</p>
            <span className="text-xs text-muted-foreground">{activity.time}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function getActivityColor(type: string) {
  switch (type) {
    case "connection":
      return "bg-purple-500/10 border-purple-500/20"
    case "key":
      return "bg-emerald-500/10 border-emerald-500/20"
    case "session":
      return "bg-amber-500/10 border-amber-500/20"
    default:
      return "bg-muted border-border"
  }
}

function getActivityIconColor(type: string) {
  switch (type) {
    case "connection":
      return "text-purple-500"
    case "key":
      return "text-emerald-500"
    case "session":
      return "text-amber-500"
    default:
      return "text-muted-foreground"
  }
}
