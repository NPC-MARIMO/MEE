import type { Metadata } from "next"
import { PageTransition } from "@/components/layout/page-transition"
import { SectionHeader } from "@/components/common/section-header"
import {
  RepoCard,
  GitHubStats,
} from "@/components/sections/github-activity"
import {
  StaggerContainer,
  StaggerItem,
  ScrollReveal,
} from "@/components/common/scroll-reveal"
import { fetchGitHubActivity } from "@/lib/github"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: "GitHub",
  description: "Open source contributions and GitHub activity.",
}

export default async function GitHubPage() {
  const data = await fetchGitHubActivity()

  const stats = [
    { label: "Repositories", value: data.user.publicRepos },
    { label: "Followers", value: data.user.followers },
    { label: "Following", value: data.user.following },
  ]

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          label="// GitHub"
          title="Open Source & Activity"
          description="Building in public. Contributions, repositories, and ongoing work."
        />

        {/* Stats */}
        <ScrollReveal>
          <div className="mb-12">
            <GitHubStats stats={stats} />
          </div>
        </ScrollReveal>

        {/* Profile info */}
        <ScrollReveal>
          <div className="mb-12 flex items-center gap-4 rounded-lg border border-border bg-card p-5">
            <div>
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                @{data.user.login}
              </a>
              <p className="mt-1 text-sm text-muted-foreground">
                {data.user.bio}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Repositories */}
        <ScrollReveal>
          <span className="mb-6 block font-mono text-xs text-primary">
            // Recent Repositories
          </span>
        </ScrollReveal>

        <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.repos.map((repo) => (
            <StaggerItem key={repo.name}>
              <RepoCard repo={repo} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View on GitHub link */}
        <ScrollReveal>
          <div className="mt-8 text-center">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              View full profile on GitHub
              <span className="text-xs">{"-->"}</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  )
}
