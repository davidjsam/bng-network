import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, Calendar } from "lucide-react"

export function FocusAreas() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Focus Areas</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Breaking New Grounds facilitates your growth and development in three areas:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <Users className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Relationships</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• Coaching with BNG Leaders</li>
                  <li>• Formalized Mentor-Mentee Programs</li>
                  <li>• Networking Connections through Events</li>
                  <li>• College or Early in Career Mentoring Opportunities</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <BookOpen className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Instruction</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• Handbooks</li>
                  <li>• Access to related videos, books, podcasts and publications</li>
                  <li>• Links and Training on Skills Assessment Resources</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
              <CardHeader>
                <Calendar className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• Webinars</li>
                  <li>• Meetings/Workshops</li>
                  <li>• Annual Conference</li>
                  <li>• Networking "Get Togethers"</li>
                  <li>• Social Media (Private Facebook Group)</li>
                  <li>• Job Shadow & Training Opportunities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
