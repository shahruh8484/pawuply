import Link from "next/link"
import { ShoppingCart, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl text-primary-foreground">🐾</span>
            </div>
            <span className="text-xl font-semibold text-foreground">PawSupply</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#dogs"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Dogs
            </Link>
            <Link
              href="#cats"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Cats
            </Link>
            <Link
              href="#birds"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Birds
            </Link>
            <Link
              href="#fish"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Fish
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
