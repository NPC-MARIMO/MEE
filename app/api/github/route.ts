import { NextResponse } from "next/server"
import { fetchGitHubActivity } from "@/lib/github"

export async function GET() {
  const data = await fetchGitHubActivity()
  return NextResponse.json(data)
}
