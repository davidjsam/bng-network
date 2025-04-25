import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Hero } from "@/components/hero"
import { FocusAreas } from "@/components/focus-areas"
import { RelatedPrograms } from "@/components/related-programs"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />

        <section className="py-12 md:py-16 lg:py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Established to create kingdom relationships and partnerships in ministry and business.
                </p>
              </div>
              <div className="mx-auto max-w-[800px] text-center">
                <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  Through this cooperative, exposure to various resources and channels will help each business and
                  ministry entity to discover their potential in a greater way, and fulfill their God-given vision.
                </p>
                <blockquote className="mt-6 border-l-4 border-primary pl-4 italic">
                  "But the path of the just is as the shining light, that shineth more and more unto the perfect day."
                  <footer className="text-sm mt-1">- Proverbs 4:18</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <FocusAreas />

        <RelatedPrograms />

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to break new ground in your ministry or business? Contact us today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" asChild>
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
