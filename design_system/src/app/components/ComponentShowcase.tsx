import { ArticleCard } from "@/app/components/ArticleCard";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Separator } from "@/app/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Switch } from "@/app/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

// Visual reference of all available components

export function ComponentShowcase() {
  return (
    <div className="container-content py-24">
      <h1 className="mb-4">Component Showcase</h1>
      <p className="text-xl text-muted-foreground mb-20 max-w-2xl">
        All components ready to use in your pages. Copy the code snippets and start building.
      </p>

      {/* Buttons */}
      <section className="mb-24">
        <h2 className="mb-8">Buttons</h2>
        <div className="border-2 border-muted p-8 bg-muted/50">
          <div className="flex flex-wrap gap-4 mb-6">
            <Button variant="default">Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
          <div className="flex flex-wrap gap-4 mb-6">
            <Button className="bg-accent-red hover:bg-accent-red/90">Red Accent</Button>
            <Button className="bg-accent-blue hover:bg-accent-blue/90">Blue Accent</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
        <pre className="mt-4 bg-foreground text-background p-4 text-sm overflow-x-auto">
{`import { Button } from "@/app/components/ui/button";

<Button variant="default">Default</Button>
<Button className="bg-accent-red">Red Accent</Button>
<Button size="lg">Large</Button>`}
        </pre>
      </section>

      <Separator className="my-20" />

      {/* Badges */}
      <section className="mb-24">
        <h2 className="mb-8">Badges</h2>
        <div className="border-2 border-muted p-8 bg-muted/50">
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge className="bg-accent-red">Red</Badge>
            <Badge className="bg-accent-blue">Blue</Badge>
          </div>
        </div>
        <pre className="mt-4 bg-foreground text-background p-4 text-sm overflow-x-auto">
{`import { Badge } from "@/app/components/ui/badge";

<Badge>Default</Badge>
<Badge variant="outline">Outline</Badge>
<Badge className="bg-accent-red">Red</Badge>`}
        </pre>
      </section>

      <Separator className="my-20" />

      {/* Article Card */}
      <section className="mb-24">
        <h2 className="mb-8">Article Card</h2>
        <div className="border-2 border-muted p-8 bg-muted/50">
          <ArticleCard
            title="Example Article Title Goes Here"
            excerpt="This is a preview of the article content. It gives readers a sense of what the article is about before they click through to read more."
            date="Jan 16, 2026"
            readTime="7 min read"
            category="Engineering"
            featured={true}
          />
        </div>
        <pre className="mt-4 bg-foreground text-background p-4 text-sm overflow-x-auto">
{`import { ArticleCard } from "@/app/components/ArticleCard";

<ArticleCard
  title="Article Title"
  excerpt="Preview text..."
  date="Jan 16, 2026"
  readTime="7 min read"
  category="Engineering"
  featured={true}
/>`}
        </pre>
      </section>

      <Separator className="my-20" />

      {/* Cards */}
      <section className="mb-24">
        <h2 className="mb-8">Cards</h2>
        <div className="border-2 border-muted p-8 bg-muted/50">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content with some text and information.</p>
              </CardContent>
              <CardFooter>
                <Button>Action</Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Bordered Card</CardTitle>
                <CardDescription>With 2px border</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Use border-2 border-foreground for brutalist style.</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <pre className="mt-4 bg-foreground text-background p-4 text-sm overflow-x-auto">
{`import { Card, CardContent, CardDescription, 
         CardFooter, CardHeader, CardTitle } 
from "@/app/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>`}
        </pre>
      </section>

      <Separator className="my-20" />

      {/* Form Elements */}
      <section className="mb-24">
        <h2 className="mb-8">Form Elements</h2>
        <div className="border-2 border-muted p-8 bg-muted/50">
          <div className="max-w-md space-y-6">
            <div>
              <Label>Input Field</Label>
              <Input placeholder="Enter text..." className="mt-2" />
            </div>

            <div className="flex items-center gap-3">
              <Checkbox id="check1" />
              <label htmlFor="check1" className="text-sm">Checkbox option</label>
            </div>

            <div className="flex items-center gap-3">
              <Switch id="switch1" />
              <label htmlFor="switch1" className="text-sm">Switch option</label>
            </div>
          </div>
        </div>
        <pre className="mt-4 bg-foreground text-background p-4 text-sm overflow-x-auto">
{`import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Switch } from "@/app/components/ui/switch";

<Label>Input Field</Label>
<Input placeholder="Enter text..." />

<Checkbox id="check1" />
<Switch id="switch1" />`}
        </pre>
      </section>

      <Separator className="my-20" />

      {/* Tabs */}
      <section className="mb-24">
        <h2 className="mb-8">Tabs</h2>
        <div className="border-2 border-muted p-8 bg-muted/50">
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">First Tab</TabsTrigger>
              <TabsTrigger value="tab2">Second Tab</TabsTrigger>
              <TabsTrigger value="tab3">Third Tab</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-6">
              <p>Content for the first tab goes here.</p>
            </TabsContent>
            <TabsContent value="tab2" className="mt-6">
              <p>Content for the second tab goes here.</p>
            </TabsContent>
            <TabsContent value="tab3" className="mt-6">
              <p>Content for the third tab goes here.</p>
            </TabsContent>
          </Tabs>
        </div>
        <pre className="mt-4 bg-foreground text-background p-4 text-sm overflow-x-auto">
{`import { Tabs, TabsContent, TabsList, TabsTrigger } 
from "@/app/components/ui/tabs";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">First</TabsTrigger>
    <TabsTrigger value="tab2">Second</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>`}
        </pre>
      </section>

      <Separator className="my-20" />

      {/* Typography */}
      <section className="mb-24">
        <h2 className="mb-8">Typography</h2>
        <div className="border-2 border-muted p-8 bg-muted/50 space-y-6">
          <div>
            <label className="block mb-2 text-xs">H1 Heading</label>
            <h1>The quick brown fox</h1>
          </div>
          <div>
            <label className="block mb-2 text-xs">H2 Heading</label>
            <h2>The quick brown fox</h2>
          </div>
          <div>
            <label className="block mb-2 text-xs">H3 Heading</label>
            <h3>The quick brown fox</h3>
          </div>
          <div>
            <label className="block mb-2 text-xs">H4 Heading</label>
            <h4>The quick brown fox</h4>
          </div>
          <div>
            <label className="block mb-2 text-xs">Paragraph</label>
            <p>The quick brown fox jumps over the lazy dog. This is body text with proper line-height and spacing.</p>
          </div>
          <div>
            <label className="block mb-2 text-xs">With Accent Colors</label>
            <h2>Heading with <span className="accent-red">red accent</span></h2>
            <h3>Heading with <span className="accent-blue">blue accent</span></h3>
          </div>
        </div>
        <pre className="mt-4 bg-foreground text-background p-4 text-sm overflow-x-auto">
{`<h1>Main Headline</h1>
<h2>Section <span className="accent-red">with red</span></h2>
<h3>Subsection <span className="accent-blue">with blue</span></h3>
<p>Body text...</p>`}
        </pre>
      </section>

      <Separator className="my-20" />

      {/* Layout Patterns */}
      <section className="mb-24">
        <h2 className="mb-8">Layout Patterns</h2>
        
        <div className="space-y-8">
          <div>
            <label className="block mb-4">Container - Reading (680px)</label>
            <div className="container-reading border-2 border-accent-blue p-8">
              <p className="text-sm text-muted-foreground">
                Use this for article content and long-form reading. Optimal width for readability.
              </p>
            </div>
          </div>

          <div>
            <label className="block mb-4">Container - Content (1200px)</label>
            <div className="container-content border-2 border-accent-red p-8">
              <p className="text-sm text-muted-foreground">
                Use this for general layouts, grids, and wider content sections.
              </p>
            </div>
          </div>

          <div>
            <label className="block mb-4">Section Padding</label>
            <div className="border-2 border-muted">
              <div className="section-padding bg-muted/50">
                <p className="text-center text-sm text-muted-foreground">
                  section-padding (6rem / 96px top & bottom)
                </p>
              </div>
            </div>
          </div>
        </div>

        <pre className="mt-4 bg-foreground text-background p-4 text-sm overflow-x-auto">
{`<div className="container-reading">
  {/* Article content */}
</div>

<div className="container-content">
  {/* General content */}
</div>

<section className="section-padding-lg">
  {/* Section with large padding */}
</section>`}
        </pre>
      </section>

      {/* Quick Reference */}
      <section className="bg-foreground text-background p-12 -mx-8">
        <h2 className="text-background mb-8">Quick Reference</h2>
        <div className="grid md:grid-cols-2 gap-8 text-sm font-mono">
          <div>
            <p className="opacity-70 mb-3">COLORS</p>
            <p>accent-red → Text color</p>
            <p>bg-accent-red → Background</p>
            <p>accent-blue → Text color</p>
            <p>bg-accent-blue → Background</p>
          </div>
          <div>
            <p className="opacity-70 mb-3">SPACING</p>
            <p>section-padding → 6rem</p>
            <p>section-padding-sm → 4rem</p>
            <p>section-padding-lg → 8rem</p>
          </div>
          <div>
            <p className="opacity-70 mb-3">CONTAINERS</p>
            <p>container-reading → 680px</p>
            <p>container-content → 1200px</p>
          </div>
          <div>
            <p className="opacity-70 mb-3">BORDERS</p>
            <p>border-2 border-foreground</p>
            <p>divider-brutalist</p>
          </div>
        </div>
      </section>
    </div>
  );
}
