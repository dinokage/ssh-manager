"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function TerminalSettings() {
  const [fontSize, setFontSize] = useState(14)
  const [theme, setTheme] = useState("dark")
  const [cursorStyle, setCursorStyle] = useState("block")
  const [cursorBlink, setCursorBlink] = useState(true)
  const [scrollback, setScrollback] = useState(1000)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Font Size: {fontSize}px</Label>
        <Slider value={[fontSize]} min={10} max={24} step={1} onValueChange={(value) => setFontSize(value[0])} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="theme">Theme</Label>
        <Select value={theme} onValueChange={setTheme}>
          <SelectTrigger id="theme">
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="matrix">Matrix</SelectItem>
            <SelectItem value="monokai">Monokai</SelectItem>
            <SelectItem value="solarized">Solarized</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="cursor-style">Cursor Style</Label>
        <Select value={cursorStyle} onValueChange={setCursorStyle}>
          <SelectTrigger id="cursor-style">
            <SelectValue placeholder="Select cursor style" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="block">Block</SelectItem>
            <SelectItem value="underline">Underline</SelectItem>
            <SelectItem value="bar">Bar</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="cursor-blink">Cursor Blink</Label>
        <Switch id="cursor-blink" checked={cursorBlink} onCheckedChange={setCursorBlink} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="scrollback">Scrollback Buffer (lines)</Label>
        <Input
          id="scrollback"
          type="number"
          value={scrollback}
          onChange={(e) => setScrollback(Number.parseInt(e.target.value))}
          min={100}
          max={10000}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="font-family">Font Family</Label>
        <Select defaultValue="jetbrains-mono">
          <SelectTrigger id="font-family">
            <SelectValue placeholder="Select font family" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jetbrains-mono">JetBrains Mono</SelectItem>
            <SelectItem value="fira-code">Fira Code</SelectItem>
            <SelectItem value="source-code-pro">Source Code Pro</SelectItem>
            <SelectItem value="ubuntu-mono">Ubuntu Mono</SelectItem>
            <SelectItem value="monospace">Monospace</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="pt-4 flex justify-end gap-2">
        <Button variant="outline">Reset to Defaults</Button>
        <Button className="bg-purple-600 hover:bg-purple-700">Save Settings</Button>
      </div>
    </div>
  )
}
