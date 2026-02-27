import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react"
import { PageTransition } from "@/components/layout/page-transition"
import { CaseStudyContent } from "@/components/project/case-study-content"
import projectsData from "@/data/projects.json"
import type { Project } from "@/lib/types"

const categoryLabels: Record<string, string> = {
  fullstack: "Full Stack",
  systems: "Systems",
  ai: "AI / ML",
  mobile: "Mobile",
  desktop: "Desktop",
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)
  if (!project) return { title: "Not Found" }
  return {
    title: project.title,
    description: project.shortDescription,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug) as
    | Project
    | undefined

  if (!project) notFound()

  return (
    <PageTransition>
      <article className="mx-auto max-w-3xl px-6 py-24">
        {/* Back link */}
        <Link
          href="/projects"
          className="group mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          All Projects
        </Link>

        {/* Header */}
        <div className="mb-2">
          <span className="font-mono text-xs text-primary">
            {categoryLabels[project.category] || project.category}
          </span>
        </div>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        {/* Links */}
        <div className="mt-6 flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50"
            >
              <Github className="h-4 w-4" />
              Source Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ArrowUpRight className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>

        {/* Case Study Body */}
        <div className="mt-12">
          <CaseStudyContent project={project} />
        </div>
      </article>
    </PageTransition>
  )
}
