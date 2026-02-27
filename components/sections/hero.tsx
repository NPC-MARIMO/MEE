"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <span className="mb-6 inline-block font-mono text-sm text-primary">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl"
          >
            Building complex
            <br />
            systems across
            <br />
            <span className="text-primary">the full stack.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            MERN, Rust, AI, Android, Desktop. Architecting software that
            prioritizes performance, correctness, and engineering discipline.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              About Me
            </Link>
          </motion.div>

          {/* Status line */}
          <motion.div
            variants={item}
            className="mt-16 flex items-center gap-3"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span className="font-mono text-xs text-muted-foreground">
              Available for select projects and consulting
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />
    </section>
  )
}
