import Link from "next/link"
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants"
import { Github, Linkedin, Mail } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
  mail: <Mail className="h-4 w-4" />,
}

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
          <span className="font-mono text-xs text-muted-foreground">
            {SITE_CONFIG.name} / All systems operational
          </span>
        </div>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={link.label}
            >
              {iconMap[link.icon]}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
