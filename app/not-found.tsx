import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6">
      <span className="mb-4 font-mono text-sm text-primary">404</span>
      <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground">
        Page not found
      </h1>
      <p className="mt-3 text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
      >
        Back to Home
      </Link>
    </div>
  )
}
