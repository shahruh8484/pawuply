import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl rounded-2xl bg-primary p-8 text-center md:p-12">
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Get 10% Off Your First Order
          </h2>
          <p className="mt-4 text-balance text-lg text-primary-foreground/90">
            Subscribe to our newsletter for exclusive deals and pet care tips
          </p>
          <form className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-primary-foreground text-foreground"
            />
            <Button type="submit" variant="secondary" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
