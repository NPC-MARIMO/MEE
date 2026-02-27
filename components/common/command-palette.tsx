"use client"

import { useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { NAV_LINKS } from "@/lib/constants"

const projectLinks = [
  { label: "NexusAPI", href: "/projects/nexus-api" },
  { label: "Ferrite", href: "/projects/ferrite" },
  { label: "SynthMind", href: "/projects/synthmind" },
  { label: "Vaultix", href: "/projects/vaultix" },
  { label: "Prism Desktop", href: "/projects/prism-desktop" },
]

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const router = useRouter()

  const navigate = useCallback(
    (href: string) => {
      onOpenChange(false)
      router.push(href)
    },
    [router, onOpenChange]
  )

  // Keyboard shortcuts for page navigation (1-7)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (open) return
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return

      const key = parseInt(e.key)
      if (key >= 1 && key <= NAV_LINKS.length) {
        e.preventDefault()
        router.push(NAV_LINKS[key - 1].href)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, router])

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Navigate to..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {NAV_LINKS.map((link) => (
            <CommandItem
              key={link.href}
              onSelect={() => navigate(link.href)}
              className="cursor-pointer"
            >
              <span>{link.label}</span>
              {link.shortcut && (
                <span className="ml-auto font-mono text-xs text-muted-foreground">
                  {link.shortcut}
                </span>
              )}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Projects">
          {projectLinks.map((link) => (
            <CommandItem
              key={link.href}
              onSelect={() => navigate(link.href)}
              className="cursor-pointer"
            >
              {link.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
