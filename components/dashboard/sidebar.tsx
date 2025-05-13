"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Terminal, Home, Key, Server, Settings, ChevronLeft, ChevronRight, LogOut } from "lucide-react"

export function DashboardSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/dashboard/keys", label: "SSH Keys", icon: Key },
    { href: "/dashboard/connections", label: "Connections", icon: Server },
    { href: "/dashboard/terminal", label: "Terminal", icon: Terminal },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ]

  return (
    <div
      className={cn("bg-card border-r flex flex-col h-full transition-all duration-300", collapsed ? "w-16" : "w-64")}
    >
      <div className="flex items-center h-16 px-4 border-b">
        {!collapsed && (
          <Link href="/dashboard" className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-purple-500" />
            <span className="font-bold text-lg">SSHManager</span>
          </Link>
        )}
        {collapsed && (
          <Link href="/dashboard" className="mx-auto">
            <Terminal className="h-6 w-6 text-purple-500" />
          </Link>
        )}
      </div>

      <div className="flex-1 py-4 overflow-y-auto">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                pathname === item.href
                  ? "bg-purple-600/10 text-purple-500"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                collapsed && "justify-center",
              )}
            >
              <item.icon className="h-5 w-5" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t">
        {!collapsed ? (
          <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => setCollapsed(true)}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Collapse
          </Button>
        ) : (
          <Button variant="outline" size="icon" className="w-full" onClick={() => setCollapsed(false)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="p-4 border-t">
        <Link href="/login">
          {!collapsed ? (
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign out
            </Button>
          ) : (
            <Button variant="ghost" size="icon" className="w-full text-muted-foreground hover:text-foreground">
              <LogOut className="h-4 w-4" />
            </Button>
          )}
        </Link>
      </div>
    </div>
  )
}
