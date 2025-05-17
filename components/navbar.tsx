"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4",
      )}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">BNG</span>
            <span className="text-xl font-medium">Network</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className={cn(
                "text-base font-medium hover:text-primary transition-colors",
                pathname === "/about" ? "text-primary" : "text-gray-700",
              )}
            >
              About
            </Link>
            <div className="relative group">
              <button className="flex items-center text-base font-medium text-gray-700 hover:text-primary transition-colors">
                Programs <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/programs"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                >
                  Overview
                </Link>
                <Link
                  href="/programs#relationships"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                >
                  Relationships
                </Link>
                <Link
                  href="/programs#instruction"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                >
                  Instruction
                </Link>
                <Link
                  href="/programs#settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                >
                  Settings
                </Link>
              </div>
            </div>
            <Link
              href="/events"
              className={cn(
                "text-base font-medium hover:text-primary transition-colors",
                pathname === "/events" ? "text-primary" : "text-gray-700",
              )}
            >
              Events
            </Link>
            <Link
              href="/testimonials"
              className={cn(
                "text-base font-medium hover:text-primary transition-colors",
                pathname === "/testimonials" ? "text-primary" : "text-gray-700",
              )}
            >
              Success Stories
            </Link>
            <Link
              href="/membership"
              className={cn(
                "text-base font-medium hover:text-primary transition-colors",
                pathname === "/membership" ? "text-primary" : "text-gray-700",
              )}
            >
              Membership
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-base font-medium hover:text-primary transition-colors",
                pathname === "/contact" ? "text-primary" : "text-gray-700",
              )}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:flex font-medium" asChild>
              <Link href="/membership">Become a Partner</Link>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-6 mt-8">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === "/" ? "text-primary" : "text-gray-700",
                    )}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === "/about" ? "text-primary" : "text-gray-700",
                    )}
                  >
                    About
                  </Link>
                  <Link
                    href="/programs"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === "/programs" ? "text-primary" : "text-gray-700",
                    )}
                  >
                    Programs
                  </Link>
                  <Link
                    href="/events"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === "/events" ? "text-primary" : "text-gray-700",
                    )}
                  >
                    Events
                  </Link>
                  <Link
                    href="/testimonials"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === "/testimonials" ? "text-primary" : "text-gray-700",
                    )}
                  >
                    Success Stories
                  </Link>
                  <Link
                    href="/membership"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === "/membership" ? "text-primary" : "text-gray-700",
                    )}
                  >
                    Membership
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === "/contact" ? "text-primary" : "text-gray-700",
                    )}
                  >
                    Contact
                  </Link>
                  <Button className="mt-4 w-full" asChild>
                    <Link href="/membership" onClick={() => setIsOpen(false)}>
                      Become a Partner
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
