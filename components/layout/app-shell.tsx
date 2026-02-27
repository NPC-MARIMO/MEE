"use client"

import { useState, useEffect, useCallback } from "react"
import { Navbar } from "./navbar"
import { CommandPalette } from "@/components/common/command-palette"
import { FirstVisitLoader } from "@/components/common/loader"

export function AppShell({ children }: { children: React.ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false)

  const openCommand = useCallback(() => setCommandOpen(true), [])

  // Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setCommandOpen((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <FirstVisitLoader />
      <Navbar onOpenCommand={openCommand} />
      <main className="min-h-screen pt-14">{children}</main>
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
    </>
  )
}
