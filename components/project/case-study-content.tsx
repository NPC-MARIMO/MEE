"use client"

import { motion } from "framer-motion"
import { TechBadge } from "./tech-badge"
import { ScrollReveal } from "@/components/common/scroll-reveal"
import type { Project } from "@/lib/types"

function CaseSection({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: React.ReactNode
}) {
  return (
    <ScrollReveal className="py-10">
      <span className="mb-2 block font-mono text-xs text-primary">{label}</span>
      <h3 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      {children}
    </ScrollReveal>
  )
}

export function CaseStudyContent({ project }: { project: Project }) {
  const { fullCaseStudy: cs } = project

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="divide-y divide-border"
    >
      <CaseSection label="01" title="Problem Statement">
        <p className="leading-relaxed text-muted-foreground">{cs.problem}</p>
      </CaseSection>

      <CaseSection label="02" title="Architecture">
        <p className="leading-relaxed text-muted-foreground">
          {cs.architecture}
        </p>
      </CaseSection>

      <CaseSection label="03" title="Tech Stack">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </CaseSection>

      <CaseSection label="04" title="Challenges Solved">
        <ul className="space-y-3">
          {cs.challengesSolved.map((challenge, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-0.5 flex-shrink-0 font-mono text-xs text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              {challenge}
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection label="05" title="Lessons Learned">
        <ul className="space-y-3">
          {cs.lessonsLearned.map((lesson, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-0.5 flex-shrink-0 font-mono text-xs text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              {lesson}
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection label="06" title="Performance">
        <p className="leading-relaxed text-muted-foreground">
          {cs.performance}
        </p>
      </CaseSection>
    </motion.div>
  )
}
