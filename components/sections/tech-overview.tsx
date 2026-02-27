"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/common/section-header"
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/common/scroll-reveal"
import { TECH_DOMAINS } from "@/lib/constants"
import { Code, Cpu, Brain, Smartphone, Monitor } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  fullstack: <Code className="h-5 w-5" />,
  systems: <Cpu className="h-5 w-5" />,
  ai: <Brain className="h-5 w-5" />,
  mobile: <Smartphone className="h-5 w-5" />,
  desktop: <Monitor className="h-5 w-5" />,
}

export function TechOverview() {
  return (
    <section className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="// Domains"
          title="Engineering Across the Stack"
          description="Not confined to a single ecosystem. Building wherever the problem leads."
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {TECH_DOMAINS.map((domain) => (
            <StaggerItem key={domain.category}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={`/projects?category=${domain.category}`}
                  className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <div className="mb-3 text-muted-foreground transition-colors group-hover:text-primary">
                    {iconMap[domain.category]}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {domain.label}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {domain.description}
                  </p>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
