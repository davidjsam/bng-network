import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About Breaking New Grounds
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our story, mission, and vision.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-gray-500">
                  Breaking New Grounds Network is established to create kingdom relationships and partnerships in
                  ministry and business. Through this cooperative, exposure to various resources and channels will help
                  each business and ministry entity to discover their potential in a greater way, and fulfill their
                  God-given vision.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "But the path of the just is as the shining light, that shineth more and more unto the perfect day."
                  <footer className="text-sm mt-1">- Proverbs 4:18</footer>
                </blockquote>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Vision</h2>
                <p className="text-gray-500">
                  We envision a community where ministry and business leaders come together to support one another,
                  share resources, and grow in their God-given callings. By facilitating relationships, providing
                  instruction, and creating settings for connection, we aim to help each member reach their full
                  potential.
                </p>
                <p className="text-gray-500">
                  Breaking New Grounds is committed to fostering an environment where faith and business principles work
                  hand in hand to create sustainable, impactful organizations that serve their communities and honor
                  God.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/contact">Connect With Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
