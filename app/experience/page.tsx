import { ExperienceSection } from "@/components/experience/experience-section"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Experience",
    description: "Internships, hackathons, and projects that shaped my journey.",
} 

import hackathon from "@/data/hackathon.json"

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <ExperienceSection />
    </main>
  )
}
