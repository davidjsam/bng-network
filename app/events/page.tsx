import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import { Footer } from "@/components/footer"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Upcoming Events
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for these upcoming opportunities to connect and grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Annual Conference</CardTitle>
                  <CardDescription>Breaking New Grounds Network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">TBD</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">TBD</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Join us for our annual conference where ministry and business leaders come together to network,
                      learn, and grow. Featuring keynote speakers, workshops, and networking opportunities.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Register Interest</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Networking Mixer</CardTitle>
                  <CardDescription>Breaking New Grounds Network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">TBD</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">TBD</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      An evening of networking and relationship building for Christian business owners and
                      professionals. Light refreshments will be served.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Express Interest</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ministry Leadership Workshop</CardTitle>
                  <CardDescription>Breaking New Grounds Network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">TBD</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">TBD</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      A hands-on workshop designed to equip ministry leaders with practical tools and strategies for
                      effective leadership and growth.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mentorship Program Kickoff</CardTitle>
                  <CardDescription>Breaking New Grounds Network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">TBD</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">TBD</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      The launch of our annual mentorship program, connecting experienced leaders with those early in
                      their ministry or business journey.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Apply Now</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Webinar: Faith & Business</CardTitle>
                  <CardDescription>Breaking New Grounds Network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">TBD</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">TBD</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      An online session exploring how to integrate faith principles into business practices for greater
                      impact and purpose.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Register Interest</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Holiday Networking Celebration</CardTitle>
                  <CardDescription>Breaking New Grounds Network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">TBD</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">TBD</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Join us for a festive evening of celebration, reflection, and connection as we close out the year
                      and look forward to new opportunities.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Save Your Spot</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
