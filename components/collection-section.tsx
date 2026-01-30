import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function CollectionSection() {
  return (
    <section id="collection" className="py-24 lg:py-32 bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative">
              <Image
                src="/images/collection.jpg"
                alt="Spring Summer 2026 Collection"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">
              New Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground leading-tight mb-8">
              Spring/Summer 2026
              <br />
              Collection
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Discover our latest Spring/Summer 2026 collection, inspired by nature and modern elegance. 
              Each piece is carefully crafted to bring timeless style and comfort to your wardrobe.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed mb-12">
              From sustainable materials to contemporary designs, our new collection offers 
              sophisticated pieces that celebrate both heritage and innovation.
            </p>

            <a
              href="/collection"
              className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-primary-foreground border border-primary-foreground/50 px-8 py-4 hover:bg-primary-foreground hover:text-foreground transition-all"
            >
              View Collection
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}