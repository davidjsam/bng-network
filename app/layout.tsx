import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { AwsStyleBackground } from "@/components/aws-style-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Breaking New Grounds Network",
  description: "Ministry & Business Network established to create kingdom relationships and partnerships.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AwsStyleBackground />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
