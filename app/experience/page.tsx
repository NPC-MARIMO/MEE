import type { Metadata } from "next"
import { PageTransition } from "@/components/layout/page-transition"
import { SectionHeader } from "@/components/common/section-header"
import { ExperienceCard } from "@/components/experience/experience-card"
import { ScrollReveal } from "@/components/common/scroll-reveal"
import experienceData from "@/data/experience.json"
import type { Experience } from "@/lib/types"

export const metadata: Metadata = {
  title: "Experience",
  description: "Engineering experience and career trajectory.",
}

export default function ExperiencePage() {
  const experiences = experienceData as Experience[]

  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-6 py-24">
        <SectionHeader
          label="// Experience"
          title="Engineering Trajectory"
          description="A path defined by increasingly complex systems and deeper technical mastery."
        />

        <div>
          {experiences.map((exp) => (
            <ScrollReveal key={exp.title}>
              <ExperienceCard experience={exp} />
            </ScrollReveal>
          ))}
        </div>

        {/* Engineering Philosophy */}
        <ScrollReveal>
          <div className="mt-16 rounded-lg border border-border bg-card p-8">
            <span className="mb-3 block font-mono text-xs text-primary">
              // Philosophy
            </span>
            <h3 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
              Engineering Principles
            </h3>
            <ul className="space-y-3">
              {[
                "Correctness over cleverness. Readable code survives longer than smart code.",
                "Performance is a feature, not an afterthought. Measure, then optimize.",
                "The best abstraction is the one you don't need. Start concrete, generalize when forced.",
                "Every dependency is a liability. Minimize surface area.",
                "Ship it. Iterate. The perfect architecture is the one that ships.",
              ].map((principle, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-0.5 flex-shrink-0 font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  )
}
