export type ProjectCategory = "fullstack" | "systems" | "ai" | "mobile" | "desktop"

export interface ProjectCaseStudy {
  problem: string
  architecture: string
  challengesSolved: string[]
  lessonsLearned: string[]
  performance: string
}

export interface Project {
  title: string
  slug: string
  shortDescription: string
  fullCaseStudy: ProjectCaseStudy
  techStack: string[]
  category: ProjectCategory
  githubUrl: string
  demoUrl: string
  featured: boolean
  createdAt: string
}

export interface Skill {
  name: string
  category: string
  proficiency: number
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export interface Experience {
  title: string
  company: string
  description: string
  timeframe: string
  technologies: string[]
}

export interface NavLink {
  label: string
  href: string
  shortcut?: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface GitHubRepo {
  name: string
  description: string
  language: string
  stars: number
  forks: number
  url: string
  updatedAt: string
}

export interface GitHubActivity {
  user: {
    login: string
    avatar: string
    bio: string
    publicRepos: number
    followers: number
    following: number
  }
  repos: GitHubRepo[]
}
