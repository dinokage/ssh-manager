"use client"

import { useState, useEffect } from "react"

export function TerminalDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [visible, setVisible] = useState("")

  const demoSteps = [
    { text: "$ ssh-manager connect production-server", delay: 100 },
    { text: "Connecting to production-server (192.168.1.100)...", delay: 1000 },
    { text: "Connection established. Welcome to Ubuntu 22.04.2 LTS", delay: 1500 },
    { text: "Last login: Tue May 13 2025 from 203.0.113.42", delay: 500 },
    { text: "production@server:~$ ", delay: 800, cursor: true },
    { text: "production@server:~$ ls -la", delay: 1200 },
    {
      text: "total 32\ndrwxr-xr-x 4 ubuntu ubuntu 4096 May 12 14:23 .\ndrwxr-xr-x 3 root   root   4096 May 10 09:15 ..\n-rw------- 1 ubuntu ubuntu  268 May 12 14:23 .bash_history\n-rw-r--r-- 1 ubuntu ubuntu  220 May 10 09:15 .bash_logout\n-rw-r--r-- 1 ubuntu ubuntu 3771 May 10 09:15 .bashrc\ndrwx------ 2 ubuntu ubuntu 4096 May 10 09:16 .cache\n-rw-r--r-- 1 ubuntu ubuntu  807 May 10 09:15 .profile\ndrwxr-xr-x 2 ubuntu ubuntu 4096 May 12 14:22 app\n-rwxr-xr-x 1 ubuntu ubuntu  543 May 12 14:22 deploy.sh",
      delay: 1500,
    },
    { text: "production@server:~$ ", delay: 800, cursor: true },
  ]

  useEffect(() => {
    if (currentStep < demoSteps.length) {
      const timer = setTimeout(() => {
        setVisible((prev) => prev + demoSteps[currentStep].text + "\n")
        setCurrentStep((prev) => prev + 1)
      }, demoSteps[currentStep].delay)

      return () => clearTimeout(timer)
    }

    // Reset the demo after completion
    if (currentStep === demoSteps.length) {
      const resetTimer = setTimeout(() => {
        setCurrentStep(0)
        setVisible("")
      }, 5000)

      return () => clearTimeout(resetTimer)
    }
  }, [currentStep])

  return (
    <div className="bg-black rounded-lg p-4 font-mono text-sm text-green-400 overflow-hidden h-[400px] overflow-y-auto">
      <pre className="whitespace-pre-wrap">
        {visible}
        {demoSteps[currentStep - 1]?.cursor && (
          <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-0.5"></span>
        )}
      </pre>
    </div>
  )
}
