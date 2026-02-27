import type { Metadata } from "next"
import { PageTransition } from "@/components/layout/page-transition"
import { SectionHeader } from "@/components/common/section-header"
import { SkillCategoryCard } from "@/components/skill/skill-category"
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/scroll-reveal"
import skillsData from "@/data/skills.json"
import type { SkillCategory } from "@/lib/types"

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills across frontend, backend, systems, AI, mobile, and DevOps.",
}

export default function SkillsPage() {
  const categories = skillsData as SkillCategory[]
  const totalSkills = categories.reduce((sum, c) => sum + c.skills.length, 0)

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          label="// Skills"
          title="Technical Arsenal"
          description="Tools and technologies used to ship production systems, not badge collections."
        />

        {/* Summary strip */}
        <ScrollReveal className="mb-10">
          <div className="flex flex-wrap items-center gap-6 rounded-lg border border-border bg-card/50 px-6 py-4">
            <div>
              <span className="font-mono text-2xl font-bold text-primary">
                {categories.length}
              </span>
              <span className="ml-2 text-sm text-muted-foreground">
                domains
              </span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <span className="font-mono text-2xl font-bold text-foreground">
                {totalSkills}
              </span>
              <span className="ml-2 text-sm text-muted-foreground">
                technologies
              </span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-sm text-muted-foreground">
              From low-level systems to high-level interfaces
            </div>
          </div>
        </ScrollReveal>

        {/* Category cards */}
        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {categories.map((group) => (
            <StaggerItem key={group.category}>
              <SkillCategoryCard
                category={group.category}
                icon={group.icon}
                skills={group.skills.map(s => s.name)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </PageTransition>
  )
}
