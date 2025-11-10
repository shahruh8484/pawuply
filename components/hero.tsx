import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 md:py-32">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Everything Your Pet Needs
              </h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl">
                Premium quality supplies for dogs, cats, birds, and more. Because they deserve the best.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/happy-dog-and-cat.png"
                alt="Happy pets"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
