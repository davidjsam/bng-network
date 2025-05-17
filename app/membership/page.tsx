import { Button } from "@/components/ui/button"
import { CheckCircle, Users, BookOpen, Calendar, Award, Star, Shield } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function MembershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-section-primary text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Partner Membership</h1>
              <p className="text-xl text-gray-200 mb-8">
                Join our exclusive network of ministry and business leaders who are breaking new ground together.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-base" asChild>
                <Link href="/membership/signup">Apply Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 md:py-24" id="benefits">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Join Breaking New Grounds?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our Partner Membership provides exclusive benefits designed to help your ministry or business grow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Powerful Connections</h3>
                <p className="text-gray-600">
                  Connect with like-minded ministry and business leaders who share your values and vision.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Exclusive Resources</h3>
                <p className="text-gray-600">
                  Access our library of handbooks, guides, and training materials to enhance your growth.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Strategic Events</h3>
                <p className="text-gray-600">
                  Participate in webinars, workshops, conferences, and networking events designed for growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Details */}
        <section className="py-16 md:py-24 bg-gray-50/70">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Partner Membership</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our comprehensive membership package designed for established organizations seeking deeper involvement
                  and maximum impact.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold">Up to 7 Member Accounts</h3>
                      <p className="text-gray-600">Include key leaders from your organization</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold">Annual Conference Sponsorship</h3>
                      <p className="text-gray-600">Opportunity to sponsor and be featured at our annual conference</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold">Featured Partner Status</h3>
                      <p className="text-gray-600">Prominent visibility on our website and at events</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold">Dedicated Relationship Manager</h3>
                      <p className="text-gray-600">Personalized support for your organization</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold">Quarterly Strategy Sessions</h3>
                      <p className="text-gray-600">Regular check-ins to help you reach your goals</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-8">
                  <div className="text-4xl font-bold text-primary">$1,500</div>
                  <div className="text-xl text-gray-600">per year</div>
                </div>

                <Button size="lg" className="font-semibold text-base" asChild>
                  <Link href="/membership/signup">Apply Now</Link>
                </Button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">What's Included</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Networking Opportunities</h4>
                      <p className="text-gray-600">Connect with like-minded leaders at exclusive events</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Mentorship & Coaching</h4>
                      <p className="text-gray-600">One-on-one guidance from experienced leaders</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Resource Library</h4>
                      <p className="text-gray-600">Access to exclusive handbooks, guides, and training materials</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Priority Event Access</h4>
                      <p className="text-gray-600">Early registration and discounted rates for all events</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Growth Support</h4>
                      <p className="text-gray-600">Strategic guidance to help your organization thrive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Partners Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our members about the impact of Breaking New Grounds
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-gray-600 italic mb-6">
                  "Breaking New Grounds Network has been instrumental in connecting me with like-minded business leaders
                  who share my faith values. The mentorship I've received has transformed my approach to business."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h3 className="font-bold">Sarah Johnson</h3>
                    <p className="text-gray-600">CEO, Faithful Solutions</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-gray-600 italic mb-6">
                  "The resources and training provided by BNG have helped our ministry grow in ways we never imagined.
                  The relationships we've built through this network are invaluable."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h3 className="font-bold">Pastor Michael Williams</h3>
                    <p className="text-gray-600">Grace Community Church</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-gray-600 italic mb-6">
                  "As a young entrepreneur, finding mentors who understand both business principles and kingdom values
                  was challenging until I joined BNG. The guidance I've received has been life-changing."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h3 className="font-bold">David Chen</h3>
                    <p className="text-gray-600">Founder, Kingdom Tech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50/70" id="faq">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Common questions about our membership program</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">How do I join?</h3>
                <p className="text-gray-600">
                  Simply click the "Apply Now" button, complete the application form, and our team will review your
                  submission. Once approved, you'll receive a welcome package with next steps.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">What is the membership period?</h3>
                <p className="text-gray-600">
                  Memberships are annual and run for 12 months from the date you join. You'll receive a renewal notice
                  30 days before your membership expires.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">How many people from my organization can join?</h3>
                <p className="text-gray-600">
                  The Partner Membership includes up to 7 member accounts for individuals from your organization.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">Is there a refund policy?</h3>
                <p className="text-gray-600">
                  We offer a 30-day satisfaction guarantee. If you're not satisfied with your membership within the
                  first 30 days, contact us for a full refund.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-section-primary text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join Breaking New Grounds?</h2>
              <p className="text-xl mb-8 text-gray-200">
                Apply today and start accessing all the benefits of our Partner Membership.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-base" asChild>
                <Link href="/membership/signup">Apply Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
