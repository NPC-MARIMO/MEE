import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AppShell } from "@/components/layout/app-shell"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Mosscript | Senior Software Engineer",
    template: "%s | Mosscript",
  },
  description:
    "Building complex systems across the full stack. MERN, Rust, AI, Android, Desktop engineering.",
  icons: {
    icon: 'Mosscript.png',
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <AppShell>{children}</AppShell>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
