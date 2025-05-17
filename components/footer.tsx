import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Bible Verse Section */}
      <div className="py-8 border-b border-white/20">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <p className="text-xl italic text-gray-200">
            "...I am come that they might have life, and that they might have it more abundantly" ...John 10:10
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Breaking New Grounds</h3>
            <p className="text-gray-200">
              Ministry & Business Network established to create kingdom relationships and partnerships.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Membership</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/membership" className="text-gray-300 hover:text-white">
                  Partner Membership
                </Link>
              </li>
              <li>
                <Link href="/membership#benefits" className="text-gray-300 hover:text-white">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/membership#faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/membership/signup" className="text-gray-300 hover:text-white">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-300 mr-2 mt-0.5" />
                <a href="mailto:info@bngnetwork.org" className="text-gray-300 hover:text-white">
                  info@bngnetwork.org
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-300 mr-2 mt-0.5" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-300 mr-2 mt-0.5" />
                <a href="https://www.bngnetwork.org" className="text-gray-300 hover:text-white">
                  www.bngnetwork.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Breaking New Grounds Network. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-300 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
