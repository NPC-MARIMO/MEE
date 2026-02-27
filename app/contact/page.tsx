import type { Metadata } from "next"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { PageTransition } from "@/components/layout/page-transition"
import { ScrollReveal } from "@/components/common/scroll-reveal"
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/common/scroll-reveal"
import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for projects, consulting, or collaboration.",
}

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
}

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-6 py-24">
        <ScrollReveal>
          <span className="mb-6 block font-mono text-sm text-primary">
            // Contact
          </span>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {"Let's build something."}
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Available for select projects, consulting engagements, and technical
            collaborations. Prefer async communication.
          </p>
        </ScrollReveal>

        {/* Contact links */}
        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-3">
          {SOCIAL_LINKS.map((link) => (
            <StaggerItem key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex flex-col items-start rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 text-muted-foreground transition-colors group-hover:text-primary">
                  {iconMap[link.icon]}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {link.label}
                </span>
                <span className="mt-1 flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                  {link.href.startsWith("mailto")
                    ? link.href.replace("mailto:", "")
                    : link.href
                        .replace("https://", "")
                        .replace("github.com/", "")
                        .replace("linkedin.com/in/", "")}
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Direct email CTA */}
        <ScrollReveal>
          <div className="mt-16 rounded-lg border border-border bg-card p-8">
            <span className="mb-3 block font-mono text-xs text-primary">
              // Preferred
            </span>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Send an email
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              For project inquiries, technical consulting, or collaboration
              proposals, email is the fastest way to reach me. I respond to all
              serious inquiries within 48 hours.
            </p>
            <a
              href="mailto:hello@mosscript.dev"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              hello@mosscript.dev
            </a>
          </div>
        </ScrollReveal>

        {/* Status */}
        <ScrollReveal>
          <div className="mt-12 flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span className="font-mono text-xs text-muted-foreground">
              {SITE_CONFIG.name} / Currently accepting new projects
            </span>
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  )
}
