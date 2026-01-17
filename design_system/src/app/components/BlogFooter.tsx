import { Separator } from "@/app/components/ui/separator";
import { Button } from "@/app/components/ui/button";

export function BlogFooter() {
  return (
    <footer className="border-t-2 border-foreground">
      <div className="container-content section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <h4 className="mb-4">
              <span className="text-secondary">■</span> YOUR_NAME
            </h4>
            <p className="text-muted-foreground">
              Software engineer turned business leader. Writing about the intersection of code and strategy.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <label className="mb-6 block">Navigate</label>
            <nav className="space-y-3">
              <a href="#" className="block border-b-0 hover:text-secondary transition-colors">
                Writing
              </a>
              <a href="#" className="block border-b-0 hover:text-secondary transition-colors">
                Projects
              </a>
              <a href="#" className="block border-b-0 hover:text-muted-foreground transition-colors">
                About
              </a>
              <a href="#" className="block border-b-0 hover:text-muted-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <label className="mb-6 block">Subscribe</label>
            <p className="text-muted-foreground mb-6">
              Get updates when I publish new content. No spam, unsubscribe anytime.
            </p>
            <Button variant="secondary" className="w-full md:w-auto">
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 All rights reserved
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm border-b-0 hover:text-secondary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm border-b-0 hover:text-secondary transition-colors">
              GitHub
            </a>
            <a href="#" className="text-sm border-b-0 hover:text-secondary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
