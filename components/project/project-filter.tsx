"use client"

import { cn } from "@/lib/utils"

const categories = [
  { value: "all", label: "All" },
  { value: "fullstack", label: "Full Stack" },
  { value: "systems", label: "Systems" },
  { value: "ai", label: "AI / ML" },
]

export function ProjectFilter({
  active,
  onChange,
}: {
  active: string
  onChange: (category: string) => void
}) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={cn(
            "rounded-md px-3 py-1.5 font-mono text-xs transition-colors",
            active === cat.value
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
