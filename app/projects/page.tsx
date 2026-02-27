import type { Metadata } from "next"
import { Suspense } from "react"
import { PageTransition } from "@/components/layout/page-transition"
import { SectionHeader } from "@/components/common/section-header"
import { ProjectsList } from "@/components/project/projects-list"
import projectsData from "@/data/projects.json"
import type { Project } from "@/lib/types"

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects spanning full-stack, systems, AI, mobile, and desktop engineering.",
}

export default function ProjectsPage() {
  const projects = projectsData as Project[]

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          label="// Projects"
          title="All Projects"    
          description="Each project represents a real engineering challenge. Click through for the full case study."
        />

        <Suspense fallback={null}>
          <ProjectsList projects={projects} />
        </Suspense>
      </div>
    </PageTransition>
  )
}
