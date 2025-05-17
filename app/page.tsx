import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, Calendar, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col space-y-6 max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
                  Grow Your Ministry & Business
                </h1>
                <p className="text-xl text-gray-600">
                  Breaking New Grounds Network helps you create kingdom relationships and partnerships that lead to
                  sustainable growth and greater impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="font-semibold text-base" asChild>
                    <Link href="/membership">Become a Partner</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="font-semibold text-base" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
                  <source src="/Hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-section-alt">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <h3 className="text-4xl font-bold text-primary mb-2">3</h3>
                <p className="text-lg font-medium">Focus Areas</p>
              </div>
              <div className="p-6">
                <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
                <p className="text-lg font-medium">Ministry & Business Leaders</p>
              </div>
              <div className="p-6">
                <h3 className="text-4xl font-bold text-primary mb-2">12</h3>
                <p className="text-lg font-medium">Annual Events</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-section">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How Breaking New Grounds Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our network facilitates growth and development through three key areas
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Relationships</h3>
                <p className="text-gray-600">
                  Connect with like-minded leaders through mentoring, coaching, and networking opportunities.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Instruction</h3>
                <p className="text-gray-600">
                  Access resources, training materials, and skills assessment tools to enhance your growth.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Settings</h3>
                <p className="text-gray-600">
                  Participate in webinars, workshops, conferences, and networking events to build connections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-section-alt">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our members about how Breaking New Grounds has helped them grow
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=SJ"
                      alt="Sarah Johnson"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Sarah Johnson</h3>
                    <p className="text-gray-600">CEO, Faithful Solutions</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Breaking New Grounds Network has been instrumental in connecting me with like-minded business leaders
                  who share my faith values. The mentorship I've received has transformed my approach to business."
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=MW"
                      alt="Pastor Michael Williams"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Pastor Michael Williams</h3>
                    <p className="text-gray-600">Grace Community Church</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The resources and training provided by BNG have helped our ministry grow in ways we never imagined.
                  The relationships we've built through this network are invaluable."
                </p>
              </div>
            </div>
            <div className="text-center mt-10">
              <Button variant="outline" size="lg" className="font-semibold text-base" asChild>
                <Link href="/testimonials">Read More Success Stories</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Partner Benefits Section */}
        <section className="py-16 md:py-24 bg-section">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Partner Membership Benefits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our network and unlock these exclusive benefits
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Exclusive Networking Events</h3>
                  <p className="text-gray-600">Connect with like-minded ministry and business leaders</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">One-on-One Coaching</h3>
                  <p className="text-gray-600">Personalized guidance from experienced leaders</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Resource Library</h3>
                  <p className="text-gray-600">Access to exclusive handbooks, guides, and training materials</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Annual Conference</h3>
                  <p className="text-gray-600">Priority registration and sponsorship opportunities</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Featured Partner Status</h3>
                  <p className="text-gray-600">Visibility on our website and at events</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Quarterly Strategy Sessions</h3>
                  <p className="text-gray-600">Dedicated support to help you reach your goals</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="font-semibold text-base" asChild>
                <Link href="/membership">Become a Partner Today</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-section-primary text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Break New Ground?</h2>
              <p className="text-xl mb-8">
                Join our network of ministry and business leaders who are growing together and making a kingdom impact.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-base" asChild>
                  <Link href="/membership">Become a Partner</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 font-semibold text-base"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
