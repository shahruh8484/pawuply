import { Card } from "@/components/ui/card"
import Link from "next/link"

const categories = [
  {
    name: "Dogs",
    description: "Food, toys, accessories",
    image: "/dog-toys-and-food.jpg",
    href: "#dogs",
  },
  {
    name: "Cats",
    description: "Treats, scratchers, beds",
    image: "/cat-toys-and-accessories.jpg",
    href: "#cats",
  },
  {
    name: "Birds",
    description: "Cages, seeds, perches",
    image: "/colorful-bird-in-cage.jpg",
    href: "#birds",
  },
  {
    name: "Fish",
    description: "Tanks, filters, food",
    image: "/aquarium-fish-tank.jpg",
    href: "#fish",
  },
]

export function Categories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Shop by Pet
          </h2>
          <p className="text-balance text-lg text-muted-foreground">
            Find everything you need for your furry, feathered, or finned friends
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group">
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground">{category.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
