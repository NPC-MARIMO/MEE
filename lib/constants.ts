import type { NavLink, SocialLink } from "./types"

export const SITE_CONFIG = {
  name: "Mosscript",
  title: "Mosscript | Senior Software Engineer",
  description:
    "Building complex systems across the full stack. MERN, Rust, AI, Android, Desktop.",
  url: "https://mosscript.xyz",
  github: "https://github.com/NPC-MARIMO",
  githubUsername: "NPC-MARIMO",
} as const

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", shortcut: "1" },
  { label: "About", href: "/about", shortcut: "2" },
  { label: "Projects", href: "/projects", shortcut: "3" },
  { label: "Skills", href: "/skills", shortcut: "4" },
  { label: "Experience", href: "/experience", shortcut: "5" },
  { label: "GitHub", href: "/github", shortcut: "6" },
  { label: "Contact", href: "/contact", shortcut: "7" },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/NPC-MARIMO",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mosscript",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:pandeyshiva09082006@gmail.com",
    icon: "mail",
  },
]

export const TECH_DOMAINS = [
  {
    label: "Full Stack",
    description: "MERN, Next.js, TypeScript",
    category: "fullstack" as const,
  },
  {
    label: "Systems",
    description: "Rust, Low-level",
    category: "systems" as const,
  },
  {
    label: "AI / ML",
    description: "Python, Transformers, LLMs",
    category: "ai" as const,
  },
] as const

export const ANIMATION_CONFIG = {
  duration: 0.5,
  stagger: 0.08,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
  spring: { type: "spring" as const, stiffness: 100, damping: 20 },
} as const
