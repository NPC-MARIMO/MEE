"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { ProjectCard } from "./project-card"
import { ProjectFilter } from "./project-filter"
import type { Project } from "@/lib/types"

export function ProjectsList({ projects }: { projects: Project[] }) {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"
  const [active, setActive] = useState(initialCategory)

  const filtered = useMemo(() => {
    if (active === "all") return projects
    return projects.filter((p) => p.category === active)
  }, [active, projects])

  return (
    <>
      <ProjectFilter active={active} onChange={setActive} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center font-mono text-sm text-muted-foreground">
          No projects in this category yet.
        </p>
      )}
    </>
  )
}
