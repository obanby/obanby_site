import { Button } from "@/app/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding-lg border-y-2 border-foreground bg-foreground text-background">
      <div className="container-reading text-center">
        <h2 className="mb-6 text-background">
          Ready to dive deeper?
        </h2>
        
        <p className="text-xl mb-12 opacity-90 leading-relaxed">
          Join the newsletter for weekly insights on engineering, leadership, and building products that matter.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-background text-foreground hover:bg-background/90 w-full sm:w-auto"
          >
            Subscribe now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-background text-background hover:bg-background/10 w-full sm:w-auto"
          >
            View archive
          </Button>
        </div>

        <p className="text-sm mt-8 opacity-70">
          No spam. Unsubscribe anytime. Delivered every Sunday.
        </p>
      </div>
    </section>
  );
}
