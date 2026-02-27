import { NextResponse } from "next/server"
import projectsData from "@/data/projects.json"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 })
  }

  return NextResponse.json(project)
}
