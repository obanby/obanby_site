import { Button } from "@/app/components/ui/button";

export function BlogHeader() {
  return (
    <header className="border-b-2 border-foreground">
      <div className="container-content">
        <div className="flex items-center justify-between py-8">
          {/* Logo / Site Name */}
          <div>
            <h3 className="tracking-tight">
              <span className="accent-red">■</span> YOUR_NAME
            </h3>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <a href="#" className="border-b-0 hover:accent-red transition-colors">
              Writing
            </a>
            <a href="#" className="border-b-0 hover:accent-blue transition-colors">
              Projects
            </a>
            <a href="#" className="border-b-0 hover:text-muted-foreground transition-colors">
              About
            </a>
          </nav>

          {/* CTA */}
          <Button variant="ghost" className="hidden md:block">
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  );
}
