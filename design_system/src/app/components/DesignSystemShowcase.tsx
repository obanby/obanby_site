import { Separator } from "@/app/components/ui/separator";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

export function DesignSystemShowcase() {
  return (
    <div className="container-content py-24">
      {/* Header */}
      <div className="mb-32">
        <h1 className="mb-4">Design System</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A brutalist-minimal design language balancing bold creative expression with clean, readable content.
        </p>
      </div>

      {/* Typography */}
      <section className="mb-32">
        <h2 className="mb-12">Typography</h2>
        
        <div className="space-y-12">
          <div>
            <label className="mb-4 block">Heading 1 - Hero</label>
            <h1>The future of creative engineering</h1>
          </div>

          <div>
            <label className="mb-4 block">Heading 2 - Section</label>
            <h2>Building systems that scale</h2>
          </div>

          <div>
            <label className="mb-4 block">Heading 3 - Subsection</label>
            <h3>From code to strategy</h3>
          </div>

          <div>
            <label className="mb-4 block">Heading 4 - Component</label>
            <h4>Technical leadership in practice</h4>
          </div>

          <div>
            <label className="mb-4 block">Body - Reading</label>
            <div className="prose max-w-2xl">
              <p>
                Great products emerge from the intersection of technical mastery and business clarity. 
                They require systems thinking, attention to detail, and the courage to simplify. 
                Every line of code is a decision. Every decision shapes the future.
              </p>
            </div>
          </div>

          <div>
            <label className="mb-4 block">Body - UI</label>
            <p className="max-w-2xl">
              Clean, minimal interfaces that prioritize content and clarity. No unnecessary decoration, 
              just intentional design that serves the message.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-32" />

      {/* Colors */}
      <section className="mb-32">
        <h2 className="mb-12">Colors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Primary */}
          <div>
            <label className="mb-4 block">Primary Palette</label>
            <div className="space-y-3">
              <div className="h-24 bg-foreground flex items-center justify-center">
                <span className="text-background font-mono text-sm">Black</span>
              </div>
              <div className="h-24 bg-background border-2 border-foreground flex items-center justify-center">
                <span className="text-foreground font-mono text-sm">White</span>
              </div>
              <div className="h-24 bg-muted-foreground flex items-center justify-center">
                <span className="text-background font-mono text-sm">Gray</span>
              </div>
            </div>
          </div>

          {/* Secondary Accent */}
          <div>
            <label className="mb-4 block">Secondary - Maroon</label>
            <div className="space-y-3">
              <div className="h-24 bg-secondary flex items-center justify-center">
                <span className="text-white font-mono text-sm">#8B2635</span>
              </div>
              <p className="text-sm text-muted-foreground pt-2">
                Use for emphasis, CTAs, featured elements, and hover states
              </p>
            </div>
          </div>

          {/* Accent Yellow */}
          <div>
            <label className="mb-4 block">Accent - Highlight</label>
            <div className="space-y-3">
              <div className="h-24 bg-accent-yellow flex items-center justify-center">
                <span className="text-foreground font-mono text-sm">#FFF59D</span>
              </div>
              <p className="text-sm text-muted-foreground pt-2">
                Use for text highlighting and inline emphasis
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-32" />

      {/* Spacing */}
      <section className="mb-32">
        <h2 className="mb-12">Spacing & Layout</h2>
        
        <div className="space-y-8">
          <div>
            <label className="mb-4 block">Negative Space Philosophy</label>
            <p className="max-w-2xl mb-8">
              Generous spacing creates breathing room for ideas. White space isn't empty—it's intentional.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-24 h-12 bg-foreground"></div>
                <span className="font-mono text-sm">Standard (1rem / 16px)</span>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-24 h-12 bg-foreground"></div>
                <span className="font-mono text-sm">Medium (2rem / 32px)</span>
              </div>
              <div className="flex items-center gap-12">
                <div className="w-24 h-12 bg-foreground"></div>
                <span className="font-mono text-sm">Large (3rem / 48px)</span>
              </div>
              <div className="flex items-center gap-24">
                <div className="w-24 h-12 bg-foreground"></div>
                <span className="font-mono text-sm">Section (6rem / 96px)</span>
              </div>
            </div>
          </div>

          <div className="pt-12">
            <label className="mb-4 block">Reading Container</label>
            <p className="text-sm text-muted-foreground mb-4">
              Max-width: 680px - Optimal for long-form reading
            </p>
            <div className="h-32 border-2 border-foreground" style={{maxWidth: '680px'}}>
              <div className="h-full flex items-center justify-center">
                <span className="font-mono text-sm">Reading Container</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <label className="mb-4 block">Content Container</label>
            <p className="text-sm text-muted-foreground mb-4">
              Max-width: 1200px - For wider layouts and grids
            </p>
            <div className="h-32 border-2 border-muted-foreground" style={{maxWidth: '1200px'}}>
              <div className="h-full flex items-center justify-center">
                <span className="font-mono text-sm">Content Container</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-32" />

      {/* Components */}
      <section className="mb-32">
        <h2 className="mb-12">Components</h2>
        
        <div className="space-y-12">
          {/* Buttons */}
          <div>
            <label className="mb-6 block">Buttons</label>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary (Maroon)</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          {/* Badges */}
          <div>
            <label className="mb-6 block">Badges</label>
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary (Maroon)</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          {/* Dividers */}
          <div>
            <label className="mb-6 block">Dividers</label>
            <div className="space-y-8">
              <div>
                <p className="text-sm text-muted-foreground mb-4">Standard</p>
                <Separator />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-4">Brutalist</p>
                <div className="divider-brutalist"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-32" />

      {/* Principles */}
      <section className="mb-32">
        <h2 className="mb-12">Design Principles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="mb-4">Brutalist First Impression</h4>
            <p className="text-muted-foreground">
              Bold typography, stark contrasts, and sharp edges create immediate visual impact. 
              No gradients, no shadows, no unnecessary decoration.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Notion-like Reading</h4>
            <p className="text-muted-foreground">
              Once engaged, the experience becomes serene. Generous line-height, ample margins, 
              and clear hierarchy make long-form content a pleasure to read.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Selective Color</h4>
            <p className="text-muted-foreground">
              Black and white dominate. Color is earned, not given. Red for passion and emphasis. 
              Blue for precision and technical clarity.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Structured Creativity</h4>
            <p className="text-muted-foreground">
              A systematic approach to expression. Consistent spacing, predictable patterns, 
              but room for unexpected moments of bold creative choice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
