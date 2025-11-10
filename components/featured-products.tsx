import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const products = [
  {
    name: "Premium Dog Food",
    price: "$49.99",
    rating: 5,
    reviews: 124,
    image: "/premium-dog-food-bag.png",
  },
  {
    name: "Cat Scratching Post",
    price: "$34.99",
    rating: 5,
    reviews: 89,
    image: "/cat-scratching-post.png",
  },
  {
    name: "Bird Cage Deluxe",
    price: "$129.99",
    rating: 4,
    reviews: 45,
    image: "/ornate-birdcage.png",
  },
  {
    name: "Aquarium Starter Kit",
    price: "$89.99",
    rating: 5,
    reviews: 67,
    image: "/fish-aquarium-kit.jpg",
  },
  {
    name: "Interactive Dog Toy",
    price: "$24.99",
    rating: 5,
    reviews: 203,
    image: "/interactive-dog-toy.png",
  },
  {
    name: "Cozy Cat Bed",
    price: "$39.99",
    rating: 5,
    reviews: 156,
    image: "/cozy-cat-bed.jpg",
  },
]

export function FeaturedProducts() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Customer Favorites
          </h2>
          <p className="text-balance text-lg text-muted-foreground">The most loved products by pet owners everywhere</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden">
              <div className="aspect-square overflow-hidden bg-accent">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground">{product.name}</h3>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">{product.price}</span>
                  <Button>Add to Cart</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
