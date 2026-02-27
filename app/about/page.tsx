import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageTransition } from "@/components/layout/page-transition"
import { ScrollReveal } from "@/components/common/scroll-reveal"
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/common/scroll-reveal"

export const metadata: Metadata = {
  title: "About",
  description: "Engineering philosophy, background, and technical approach.",
}

const competencies = [
  {
    label: "System Design",
    description:
      "Decomposing complex requirements into composable, maintainable architectures that scale with the problem.",
  },
  {
    label: "Performance Engineering",
    description:
      "Profiling, benchmarking, and optimizing at every layer from database queries to render cycles.",
  },
  {
    label: "Cross-Domain Fluency",
    description:
      "Moving fluidly between web, systems, mobile, and AI domains with deep understanding of each.",
  },
  {
    label: "Technical Communication",
    description:
      "Translating complex technical decisions into clear documentation and actionable architecture diagrams.",
  },
]

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-6 py-24">
        <ScrollReveal>
          <span className="mb-6 block font-mono text-sm text-primary">
            // About
          </span>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Engineer first.
            <br />
            Everything else second.
          </h1>
        </ScrollReveal>

        {/* Background */}
        <ScrollReveal>
          <div className="mt-12 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              I build software that handles real-world complexity. Not prototypes,
              not demos -- production systems that serve users, process data, and
              run reliably. My work spans from browser-rendered interfaces to
              kernel-adjacent systems code, and I approach each domain with the
              same engineering rigor.
            </p>
            <p>
              The name Mosscript reflects how I think about code: organic growth
              rooted in solid fundamentals. Like moss on stone, good software
              adapts to its environment while maintaining structural integrity.
              Every project starts with understanding the constraints, not the
              tools.
            </p>
            <p>
              I gravitate toward hard problems. The kind where you need to
              understand the memory model to debug a race condition, or where a
              naive algorithm turns a 10-second query into a 10-minute one. These
              are the problems that separate engineers from developers, and
              they're the problems I find most rewarding.
            </p>
          </div>
        </ScrollReveal>

        {/* Core Competencies */}
        <ScrollReveal>
          <div className="mt-16">
            <span className="mb-6 block font-mono text-xs text-primary">
              // Core Competencies
            </span>
            <StaggerContainer className="grid gap-4 sm:grid-cols-2">
              {competencies.map((comp) => (
                <StaggerItem key={comp.label}>
                  <div className="rounded-lg border border-border bg-card p-5">
                    <h3 className="mb-2 text-sm font-semibold text-foreground">
                      {comp.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {comp.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              See My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
            >
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  )
}
