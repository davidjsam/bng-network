import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
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
          <div className="space-x-4">
            <Button asChild className="bg-white text-indigo-900 hover:bg-indigo-100">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button variant="outline" asChild className="border-white text-white hover:bg-white/20">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
