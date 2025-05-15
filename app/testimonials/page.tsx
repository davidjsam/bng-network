import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
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

        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}
