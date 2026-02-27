import { cn } from "@/lib/utils"

export function TechBadge({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-block rounded border border-border bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground",
        className
      )}
    >
      {name}
    </span>
  )
}
