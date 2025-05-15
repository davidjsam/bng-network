import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, Calendar, School, Heart } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Our Programs
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how Breaking New Grounds can help you grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Breaking New Grounds Focus Areas</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                  <Card>
                    <CardHeader>
                      <Users className="h-10 w-10 mb-2 text-primary" />
                      <CardTitle>Relationships</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Coaching with BNG Leaders or Formalized Mentor-Mentee Programs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Networking Connections through Events</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>College or Early in Career Mentoring Opportunities</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <BookOpen className="h-10 w-10 mb-2 text-primary" />
                      <CardTitle>Instruction</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Handbooks</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Access to related videos, book, podcast and publication recommendations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Links and Training on Skills Assessment Resources</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Calendar className="h-10 w-10 mb-2 text-primary" />
                      <CardTitle>Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Webinars</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Meetings/Workshops</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Annual Conference</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Networking "Get Togethers"</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Social Media (Private Facebook Group)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Job Shadow & Training Opportunities</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Related Ministry Programs</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                  <Card>
                    <CardHeader>
                      <School className="h-10 w-10 mb-2 text-primary" />
                      <CardTitle>Abundant Life Christian Academy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 mb-4">
                        A tuition-free and T.A.N.A.S accredited K-12th Grade school that places an emphasis on
                        ministering to children of all background types, from single parent and foster families to
                        children of incarcerated parents and domestic violence situations.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium">Key Features:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Tuition-free education</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>T.A.N.A.S accredited</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>K-12th Grade curriculum</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Focus on children from diverse backgrounds</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Heart className="h-10 w-10 mb-2 text-primary" />
                      <CardTitle>Men's & Women's Restoration Centers & New Horizons</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 mb-4">
                        Providing individuals in transition with the resources and skills they need to thrive - at home,
                        at work and throughout their community.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium">Services Offered:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Life skills training</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Career development</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Spiritual guidance</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Community integration support</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
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
