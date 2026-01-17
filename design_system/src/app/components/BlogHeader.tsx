import { Button } from "@/app/components/ui/button";

export function BlogHeader() {
  return (
    <header className="border-b-2 border-foreground">
      <div className="container-content">
        <div className="flex items-center justify-between py-8">
          {/* Logo / Site Name */}
          <div>
            <h3 className="tracking-tight">
              <span className="text-secondary">■</span> YOUR_NAME
            </h3>
          </div>

          {/* Subscribe CTA */}
          <Button variant="ghost">
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  );
}
