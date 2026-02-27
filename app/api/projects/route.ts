import { NextRequest, NextResponse } from "next/server"
import projectsData from "@/data/projects.json"

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const category = searchParams.get("category")

  let projects = projectsData

  if (category && category !== "all") {
    projects = projects.filter((p) => p.category === category)
  }

  return NextResponse.json(projects)
}
