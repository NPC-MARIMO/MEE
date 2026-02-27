import { Hero } from "@/components/sections/hero"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { TechOverview } from "@/components/sections/tech-overview"
import projectsData from "@/data/projects.json"
import type { Project } from "@/lib/types"

export default function HomePage() {
  const projects = projectsData as Project[]

  return (
    <>
      <Hero />
      <FeaturedProjects projects={projects} />
      <TechOverview />
    </>
  )
}
