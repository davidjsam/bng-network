import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t py-12 mt-auto">
      <div className="container grid gap-8 md:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Breaking New Grounds</h3>
          <p className="text-sm text-slate-300">
            Ministry & Business Network established to create kingdom relationships and partnerships.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/programs" className="hover:underline">
              Programs
            </Link>
            <Link href="/events" className="hover:underline">
              Events
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="h-4 w-4" />
            <a href="mailto:info@bngnetwork.org" className="hover:underline">
              info@bngnetwork.org
            </a>
          </div>
          <div className="text-sm">
            <a href="https://www.bngnetwork.org" className="hover:underline">
              www.bngnetwork.org
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-indigo-800 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Breaking New Grounds Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
