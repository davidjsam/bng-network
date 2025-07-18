import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="/Hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-indigo-900/60 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              BREAKING NEW GROUNDS
            </h1>
            <p className="text-xl font-semibold text-indigo-200 md:text-2xl">MINISTRY & BUSINESS NETWORK</p>
            <p className="mx-auto max-w-[700px] text-slate-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Creating kingdom relationships and partnerships in ministry and business.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Button
              size="lg"
              className="bg-white text-indigo-900 hover:bg-indigo-100 font-semibold px-8 py-6 text-base min-w-[180px]"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/20 font-semibold px-8 py-6 text-base min-w-[180px]"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
