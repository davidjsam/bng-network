import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { QuoteIcon } from "lucide-react"

interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
  initials: string
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Breaking New Grounds Network has been instrumental in connecting me with like-minded business leaders who share my faith values. The mentorship I've received has transformed my approach to business.",
      name: "Sarah Johnson",
      role: "CEO, Faithful Solutions",
      avatar: "/placeholder.svg?height=80&width=80&text=SJ",
      initials: "SJ",
    },
    {
      quote:
        "The resources and training provided by BNG have helped our ministry grow in ways we never imagined. The relationships we've built through this network are invaluable.",
      name: "Pastor Michael Williams",
      role: "Grace Community Church",
      avatar: "/placeholder.svg?height=80&width=80&text=MW",
      initials: "MW",
    },
    {
      quote:
        "As a young entrepreneur, finding mentors who understand both business principles and kingdom values was challenging until I joined BNG. The guidance I've received has been life-changing.",
      name: "David Chen",
      role: "Founder, Kingdom Tech",
      avatar: "/placeholder.svg?height=80&width=80&text=DC",
      initials: "DC",
    },
    {
      quote:
        "The annual conference organized by Breaking New Grounds was a turning point for our ministry. The connections and insights gained have helped us expand our impact in the community.",
      name: "Rebecca Thompson",
      role: "Director, Hope Outreach Ministries",
      avatar: "/placeholder.svg?height=80&width=80&text=RT",
      initials: "RT",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonials</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our network members about their experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-left h-full">
                <CardContent className="pt-6">
                  <QuoteIcon className="h-8 w-8 text-primary opacity-70 mb-4" />
                  <p className="italic text-gray-600">{testimonial.quote}</p>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 bg-indigo-100/50">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
