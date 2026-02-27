import { NextResponse } from "next/server"
import experienceData from "@/data/experience.json"

export async function GET() {
  return NextResponse.json(experienceData)
}
