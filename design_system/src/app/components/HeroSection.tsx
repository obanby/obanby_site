import { Button } from "@/app/components/ui/button";

export function HeroSection() {
  return (
    <section className="section-padding-lg border-b-2 border-foreground">
      <div className="container-content">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-8">
            <label className="inline-block">Software Engineer × Business Leader</label>
          </div>

          {/* Headline */}
          <h1 className="mb-8 leading-none">
            Building systems.
            <br />
            <span className="accent-red">Leading teams.</span>
            <br />
            Shipping products.
          </h1>

          {/* Description */}
          <p className="text-xl max-w-2xl mb-12 leading-relaxed">
            Exploring the intersection of technical mastery and strategic leadership. 
            Writing about code, systems, and the art of building things that matter.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button size="lg" className="bg-foreground hover:bg-foreground/90">
              Read latest posts
            </Button>
            <Button size="lg" variant="outline">
              View projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
