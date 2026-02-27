import { cn } from "@/lib/utils"
import { ScrollReveal } from "./scroll-reveal"

export function SectionHeader({
  label,
  title,
  description,
  className,
}: {
  label?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <ScrollReveal className={cn("mb-12", className)}>
      {label && (
        <span className="mb-3 block font-mono text-sm text-primary">
          {label}
        </span>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">
          {description}
        </p>
      )}
    </ScrollReveal>
  )
}
