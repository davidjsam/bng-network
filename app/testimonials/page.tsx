import { Footer } from "@/components/footer"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Testimonials
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear what our members have to say about Breaking New Grounds Network.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-gray-50/70">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonials</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our network members about their experiences.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-8">
                {/* Testimonial cards would be here */}
                <div className="bg-white text-left h-full rounded-lg border shadow-sm p-6">
                  <div className="italic text-gray-600 mb-4">
                    "Breaking New Grounds Network has been instrumental in connecting me with like-minded business
                    leaders who share my faith values. The mentorship I've received has transformed my approach to
                    business."
                  </div>
                  <div className="flex items-center space-x-4 border-t pt-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">SJ</span>
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">CEO, Faithful Solutions</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white text-left h-full rounded-lg border shadow-sm p-6">
                  <div className="italic text-gray-600 mb-4">
                    "The resources and training provided by BNG have helped our ministry grow in ways we never imagined.
                    The relationships we've built through this network are invaluable."
                  </div>
                  <div className="flex items-center space-x-4 border-t pt-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">MW</span>
                    </div>
                    <div>
                      <p className="font-medium">Pastor Michael Williams</p>
                      <p className="text-sm text-gray-500">Grace Community Church</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white text-left h-full rounded-lg border shadow-sm p-6">
                  <div className="italic text-gray-600 mb-4">
                    "As a young entrepreneur, finding mentors who understand both business principles and kingdom values
                    was challenging until I joined BNG. The guidance I've received has been life-changing."
                  </div>
                  <div className="flex items-center space-x-4 border-t pt-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">DC</span>
                    </div>
                    <div>
                      <p className="font-medium">David Chen</p>
                      <p className="text-sm text-gray-500">Founder, Kingdom Tech</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white text-left h-full rounded-lg border shadow-sm p-6">
                  <div className="italic text-gray-600 mb-4">
                    "The annual conference organized by Breaking New Grounds was a turning point for our ministry. The
                    connections and insights gained have helped us expand our impact in the community."
                  </div>
                  <div className="flex items-center space-x-4 border-t pt-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">RT</span>
                    </div>
                    <div>
                      <p className="font-medium">Rebecca Thompson</p>
                      <p className="text-sm text-gray-500">Director, Hope Outreach Ministries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
