import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { School, Heart } from "lucide-react"

export function RelatedPrograms() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Related Ministry Programs</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our network extends to these impactful ministry programs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            <Card>
              <CardHeader>
                <School className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Abundant Life Christian Academy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  A tuition-free and T.A.N.A.S accredited K-9th Grade school that places an emphasis on ministering to
                  children of all background types, from single parent and foster families to children of incarcerated
                  parents and domestic violence situations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Men's & Women's Restoration Centers & New Horizons</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Providing individuals in transition with the resources and skills they need to thrive - at home, at
                  work and throughout their community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
