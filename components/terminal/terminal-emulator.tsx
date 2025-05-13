"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

interface TerminalEmulatorProps {
  connectionId?: string
}

export function TerminalEmulator({ connectionId }: TerminalEmulatorProps) {
  const [output, setOutput] = useState<string[]>([])
  const [input, setInput] = useState("")
  const [prompt, setPrompt] = useState("$ ")
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const outputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (connectionId) {
      connectToServer(connectionId)
    } else {
      setOutput(["SSH Connection Manager Terminal", "Type 'help' to see available commands", ""])
    }
  }, [connectionId])

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [output])

  const connectToServer = async (id: string) => {
    setIsConnecting(true)
    setOutput((prev) => [...prev, `Connecting to server (ID: ${id})...`])

    // Simulate connection
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setOutput((prev) => [
      ...prev,
      "Establishing SSH connection...",
      "Authenticating...",
      "Connection established",
      "Welcome to Ubuntu 22.04.2 LTS",
      "Last login: Tue May 13 2025 from 203.0.113.42",
      "",
    ])

    setPrompt("server@production:~$ ")
    setIsConnected(true)
    setIsConnecting(false)
  }

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const fullCommand = `${prompt}${input}`
    setOutput((prev) => [...prev, fullCommand])

    // Process command
    processCommand(input)

    setInput("")
  }

  const processCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase()

    if (isConnected) {
      // Connected mode - simulate a real server
      switch (command) {
        case "ls":
          setOutput((prev) => [...prev, "Documents  Downloads  Pictures  Videos  app.js  package.json", ""])
          break
        case "pwd":
          setOutput((prev) => [...prev, "/home/server", ""])
          break
        case "whoami":
          setOutput((prev) => [...prev, "server", ""])
          break
        case "date":
          setOutput((prev) => [...prev, new Date().toString(), ""])
          break
        case "exit":
          setOutput((prev) => [...prev, "Connection closed", "", "Type 'help' to see available commands", ""])
          setPrompt("$ ")
          setIsConnected(false)
          break
        default:
          if (command.startsWith("cd ")) {
            setOutput((prev) => [...prev, ""])
          } else if (command.startsWith("echo ")) {
            const message = command.substring(5)
            setOutput((prev) => [...prev, message, ""])
          } else {
            setOutput((prev) => [...prev, `Command not found: ${command}`, ""])
          }
      }
    } else {
      // Local mode - handle app commands
      switch (command) {
        case "help":
          setOutput((prev) => [
            ...prev,
            "Available commands:",
            "  help     - Show this help message",
            "  clear    - Clear the terminal",
            "  connect  - Connect to a server",
            "  list     - List available connections",
            "  version  - Show application version",
            "",
          ])
          break
        case "clear":
          setOutput([])
          break
        case "connect":
          setOutput((prev) => [...prev, "Usage: connect <connection-id>", "Example: connect production", ""])
          break
        case "list":
          setOutput((prev) => [
            ...prev,
            "Available connections:",
            "  1. Production Server (ID: 1)",
            "  2. Development Server (ID: 2)",
            "  3. Database Server (ID: 3)",
            "  4. Staging Environment (ID: 4)",
            "",
          ])
          break
        case "version":
          setOutput((prev) => [...prev, "SSH Connection Manager v1.0.0", ""])
          break
        default:
          if (command.startsWith("connect ")) {
            const id = command.substring(8)
            setOutput((prev) => [...prev, `Connecting to server with ID: ${id}...`])
            connectToServer(id)
          } else {
            setOutput((prev) => [...prev, `Command not found: ${command}`, ""])
          }
      }
    }
  }

  return (
    <div className="flex flex-col h-full w-full bg-black text-green-400 font-mono p-4">
      <div ref={outputRef} className="flex-1 overflow-auto whitespace-pre-wrap">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>

      <form onSubmit={handleCommand} className="mt-2 flex items-center gap-2">
        <div className="flex-1 flex items-center">
          <span>{prompt}</span>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none text-green-400 focus-visible:ring-0 focus-visible:ring-offset-0 pl-1"
            disabled={isConnecting}
            autoFocus
          />
        </div>
        <Button
          type="submit"
          size="icon"
          variant="ghost"
          className="text-green-400 hover:bg-green-400/10"
          disabled={isConnecting}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}
