"use client"

import { motion } from "framer-motion"
import { Star, GitFork, ArrowUpRight } from "lucide-react"
import type { GitHubRepo } from "@/lib/types"

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-400",
  Rust: "bg-orange-400",
  Python: "bg-yellow-400",
  Kotlin: "bg-purple-400",
  JavaScript: "bg-yellow-300",
  Shell: "bg-green-400",
  Go: "bg-cyan-400",
  Unknown: "bg-muted-foreground",
}

export function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
    >
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-mono text-sm font-medium text-foreground transition-colors group-hover:text-primary">
          {repo.name}
        </h3>
        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {repo.description}
      </p>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <div
            className={`h-2.5 w-2.5 rounded-full ${languageColors[repo.language] || languageColors.Unknown}`}
          />
          <span className="text-xs text-muted-foreground">{repo.language}</span>
        </div>

        {repo.stars > 0 && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3" />
            {repo.stars}
          </div>
        )}

        {repo.forks > 0 && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <GitFork className="h-3 w-3" />
            {repo.forks}
          </div>
        )}
      </div>
    </motion.a>
  )
}

export function GitHubStats({
  stats,
}: {
  stats: { label: string; value: number }[]
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-border bg-card p-4 text-center"
        >
          <div className="text-2xl font-bold text-foreground">{stat.value}</div>
          <div className="mt-1 font-mono text-xs text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
