import { TechBadge } from "@/components/project/tech-badge"
import type { Experience } from "@/lib/types"

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="group relative flex gap-6 py-8">
      {/* Timeline line */}
      <div className="relative flex flex-col items-center">
        <div className="h-2 w-2 rounded-full border-2 border-primary bg-background" />
        <div className="w-px flex-1 bg-border" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <span className="mb-1 block font-mono text-xs text-primary">
          {experience.timeframe}
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {experience.title}
        </h3>
        <p className="mb-1 text-sm text-muted-foreground">
          {experience.company}
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {experience.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}
