"use client"

import { motion } from "framer-motion"
import {
  LayoutDashboard,
  Server,
  Cpu,
  Brain,
  Smartphone,
  Container,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  layout: LayoutDashboard,
  server: Server,
  cpu: Cpu,
  brain: Brain,
  smartphone: Smartphone,
  container: Container,
}

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}

export function SkillCategoryCard({
  category,
  icon,
  skills,
}: {
  category: string
  icon: string
  skills: string[]
}) {
  const Icon = iconMap[icon] || Cpu

  return (
    <div className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30">
      {/* Accent line at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-primary/0 transition-all duration-300 group-hover:bg-primary/50" />

      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <h3 className="font-mono text-sm font-medium text-foreground">
            {category}
          </h3>
          <span className="font-mono text-xs text-muted-foreground">
            {skills.length} {skills.length === 1 ? "skill" : "skills"}
          </span>
        </div>
      </div>

      {/* Skill chips */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="flex flex-wrap gap-2"
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={chipVariants}
            className="inline-flex cursor-default items-center rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
