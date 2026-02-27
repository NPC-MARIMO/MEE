"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { TechBadge } from "./tech-badge"
import type { Project } from "@/lib/types"

const categoryLabels: Record<string, string> = {
  fullstack: "Full Stack",
  systems: "Systems",
  ai: "AI / ML",
  mobile: "Mobile",
  desktop: "Desktop",
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-xs text-primary">
          {categoryLabels[project.category] || project.category}
        </span>
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={`${project.title} on GitHub`}
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={`${project.title} live demo`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <Link href={`/projects/${project.slug}`} className="mb-2">
        <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
      </Link>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 5).map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
        {project.techStack.length > 5 && (
          <span className="px-2 py-0.5 font-mono text-xs text-muted-foreground">
            +{project.techStack.length - 5}
          </span>
        )}
      </div>
    </motion.div>
  )
}
