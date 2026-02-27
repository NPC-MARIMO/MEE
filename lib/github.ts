import type { GitHubActivity, GitHubRepo } from "./types"
import { SITE_CONFIG } from "./constants"

export async function fetchGitHubActivity(): Promise<GitHubActivity> {
  const username = SITE_CONFIG.githubUsername

  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`, {
      headers: { Accept: "application/vnd.github.v3+json" },
      next: { revalidate: 3600 },
    }),
    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=12&type=owner`,
      {
        headers: { Accept: "application/vnd.github.v3+json" },
        next: { revalidate: 3600 },
      }
    ),
  ])

  if (!userRes.ok || !reposRes.ok) {
    // Return fallback data if GitHub API fails
    return getFallbackData()
  }

  const user = await userRes.json()
  const repos = await reposRes.json()

  return {
    user: {
      login: user.login,
      avatar: user.avatar_url,
      bio: user.bio || "Building complex systems.",
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
    },
    repos: repos.map(
      (r: Record<string, unknown>): GitHubRepo => ({
        name: r.name as string,
        description: (r.description as string) || "No description",
        language: (r.language as string) || "Unknown",
        stars: (r.stargazers_count as number) || 0,
        forks: (r.forks_count as number) || 0,
        url: r.html_url as string,
        updatedAt: r.updated_at as string,
      })
    ),
  }
}

function getFallbackData(): GitHubActivity {
  return {
    user: {
      login: SITE_CONFIG.githubUsername,
      avatar: "",
      bio: "Building complex systems across the full stack.",
      publicRepos: 24,
      followers: 142,
      following: 38,
    },
    repos: [
      {
        name: "nexus-api",
        description:
          "High-performance REST API gateway with real-time WebSocket support",
        language: "TypeScript",
        stars: 89,
        forks: 12,
        url: "https://github.com/mosscript/nexus-api",
        updatedAt: "2025-12-15T10:00:00Z",
      },
      {
        name: "ferrite",
        description:
          "Memory-safe systems toolkit in Rust for concurrent file processing",
        language: "Rust",
        stars: 156,
        forks: 23,
        url: "https://github.com/mosscript/ferrite",
        updatedAt: "2025-11-20T08:00:00Z",
      },
      {
        name: "synthmind",
        description:
          "AI-powered code review assistant with custom fine-tuned transformer",
        language: "Python",
        stars: 234,
        forks: 41,
        url: "https://github.com/mosscript/synthmind",
        updatedAt: "2025-12-01T14:00:00Z",
      },
      {
        name: "vaultix",
        description:
          "Encrypted vault for Android with biometric authentication",
        language: "Kotlin",
        stars: 67,
        forks: 8,
        url: "https://github.com/mosscript/vaultix",
        updatedAt: "2025-10-05T09:00:00Z",
      },
      {
        name: "prism-desktop",
        description:
          "Cross-platform desktop app for real-time data visualization",
        language: "Rust",
        stars: 112,
        forks: 19,
        url: "https://github.com/mosscript/prism-desktop",
        updatedAt: "2025-09-28T16:00:00Z",
      },
      {
        name: "dotfiles",
        description: "Personal development environment configuration",
        language: "Shell",
        stars: 34,
        forks: 5,
        url: "https://github.com/mosscript/dotfiles",
        updatedAt: "2025-12-10T12:00:00Z",
      },
    ],
  }
}
