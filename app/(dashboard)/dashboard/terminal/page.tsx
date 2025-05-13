"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { TerminalIcon, Plus, X, Maximize2, Minimize2, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TerminalEmulator } from "@/components/terminal/terminal-emulator"
import { TerminalSettings } from "@/components/terminal/terminal-settings"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function TerminalPage() {
  const searchParams = useSearchParams()
  const connectionId = searchParams.get("connection")

  const [tabs, setTabs] = useState<Array<{ id: string; name: string; connectionId?: string }>>([])
  const [activeTab, setActiveTab] = useState<string>("")
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    // Create initial tab
    if (tabs.length === 0) {
      const initialTabId = "tab-" + Date.now()
      const initialTabs = [
        {
          id: initialTabId,
          name: connectionId ? "Connection" : "Terminal",
          connectionId: connectionId || undefined,
        },
      ]
      setTabs(initialTabs)
      setActiveTab(initialTabId)
    }
  }, [connectionId, tabs.length])

  const addTab = () => {
    const newTabId = "tab-" + Date.now()
    setTabs([...tabs, { id: newTabId, name: "Terminal" }])
    setActiveTab(newTabId)
  }

  const closeTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation() // Prevent triggering the tab selection
    if (tabs.length === 1) return

    const newTabs = tabs.filter((tab) => tab.id !== tabId)
    setTabs(newTabs)

    if (activeTab === tabId) {
      setActiveTab(newTabs[0].id)
    }
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className={`${isFullscreen ? "fixed inset-0 z-50 bg-background p-0" : "-mx-6 -mt-6"}`}>
      <div className="flex items-center justify-between bg-card border-b p-2">
        <div className="flex items-center">
          <TerminalIcon className="h-5 w-5 text-purple-500 mr-2" />
          <h1 className="text-lg font-bold">Terminal</h1>
        </div>

        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Terminal Settings</SheetTitle>
                <SheetDescription>Customize your terminal experience</SheetDescription>
              </SheetHeader>
              <div className="mt-6">
                <TerminalSettings />
              </div>
            </SheetContent>
          </Sheet>

          <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div className="flex items-center bg-card border-b">
        <div className="flex items-center flex-1">
          {tabs.map((tab) => (
            <div key={tab.id} className="flex items-center">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center h-10 px-4 border-r ${activeTab === tab.id ? "bg-background" : ""}`}
              >
                {tab.name}
                {tabs.length > 1 && (
                  <button className="ml-2 h-4 w-4 rounded-full" onClick={(e) => closeTab(tab.id, e)}>
                    <X className="h-3 w-3" />
                  </button>
                )}
              </button>
            </div>
          ))}
          <Button variant="ghost" size="icon" className="h-10 w-10" onClick={addTab}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="h-[calc(100vh-8rem)] overflow-hidden">
        {tabs.map((tab) => (
          <div key={tab.id} className={`h-full ${activeTab === tab.id ? "block" : "hidden"}`}>
            <TerminalEmulator connectionId={tab.connectionId} />
          </div>
        ))}
      </div>
    </div>
  )
}
