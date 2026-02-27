"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/project/project-card"
import { SectionHeader } from "@/components/common/section-header"
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/common/scroll-reveal"
import type { Project } from "@/lib/types"

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="// Featured Work"
          title="Selected Projects"
          description="A curated selection of projects spanning full-stack applications, systems programming, and AI."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            View all projects
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
