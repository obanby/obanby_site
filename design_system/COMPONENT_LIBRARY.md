# Component Library Reference

All components are ready to use. Just import and compose them into new pages.

---

## Layout Components

### BlogHeader
```tsx
import { BlogHeader } from "@/app/components/BlogHeader";

<BlogHeader />
```
Sticky navigation with logo and menu links.

---

### BlogFooter
```tsx
import { BlogFooter } from "@/app/components/BlogFooter";

<BlogFooter />
```
Complete footer with navigation, newsletter CTA, and social links.

---

## Content Sections

### HeroSection
```tsx
import { HeroSection } from "@/app/components/HeroSection";

<HeroSection />
```
Large hero section with headline, description, and CTAs.
**Customizable**: Edit `/src/app/components/HeroSection.tsx` to change content.

---

### FeaturedWork
```tsx
import { FeaturedWork } from "@/app/components/FeaturedWork";

<FeaturedWork />
```
3-column grid showcasing work/projects with numbers and tags.
**Customizable**: Edit the `workItems` array in the component.

---

### BlogGrid
```tsx
import { BlogGrid } from "@/app/components/BlogGrid";

<BlogGrid />
```
2-column responsive grid of article cards.
**Customizable**: Edit the `articles` array in the component.

---

### CTASection
```tsx
import { CTASection } from "@/app/components/CTASection";

<CTASection />
```
Newsletter signup section with inverted colors (black background).

---

## Individual Components

### ArticleCard
```tsx
import { ArticleCard } from "@/app/components/ArticleCard";

<ArticleCard
  title="Your Article Title"
  excerpt="Brief description of the article content..."
  date="Jan 16, 2026"
  readTime="5 min read"
  category="Engineering"  // optional
  featured={false}        // optional
/>
```

**Props:**
- `title`: string (required)
- `excerpt`: string (required)
- `date`: string (required)
- `readTime`: string (required)
- `category?`: string (optional)
- `featured?`: boolean (optional, default: false)

---

### ArticleLayout
```tsx
import { ArticleLayout } from "@/app/components/ArticleLayout";

<ArticleLayout
  title="Full Article Title"
  subtitle="Optional subtitle for context"
  date="Jan 16, 2026"
  readTime="8 min read"
  category="Leadership"
>
  <p>Your article content goes here...</p>
  <h2>Section Heading</h2>
  <p>More content...</p>
</ArticleLayout>
```

**Props:**
- `title`: string (required)
- `subtitle?`: string (optional)
- `date`: string (required)
- `readTime`: string (required)
- `category?`: string (optional)
- `children`: React.ReactNode (required) - Your article content

---

## Radix UI Components (Pre-installed)

All Radix UI components are available in `/src/app/components/ui/`:

### Button
```tsx
import { Button } from "@/app/components/ui/button";

<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button className="bg-accent-red">Custom Red</Button>
<Button size="lg">Large</Button>
```

### Badge
```tsx
import { Badge } from "@/app/components/ui/badge";

<Badge>Default</Badge>
<Badge variant="outline">Outline</Badge>
<Badge className="bg-accent-blue">Blue</Badge>
```

### Separator
```tsx
import { Separator } from "@/app/components/ui/separator";

<Separator />
<Separator orientation="vertical" />
```

### Tabs
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Card
```tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Dialog
```tsx
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
  </DialogContent>
</Dialog>
```

### Many More!
Check `/src/app/components/ui/` for:
- Accordion
- Alert Dialog
- Avatar
- Checkbox
- Dropdown Menu
- Input
- Label
- Popover
- Radio Group
- Select
- Switch
- Textarea
- Tooltip
- And more...

---

## Utility Classes

### Container Classes
```tsx
<div className="container-reading">   {/* 680px max-width */}
<div className="container-content">   {/* 1200px max-width */}
```

### Section Padding
```tsx
<section className="section-padding">     {/* 6rem top/bottom */}
<section className="section-padding-sm">  {/* 4rem top/bottom */}
<section className="section-padding-lg">  {/* 8rem top/bottom */}
```

### Accent Colors
```tsx
<h1 className="accent-red">Red text</h1>
<div className="bg-accent-red">Red background</div>

<h1 className="accent-blue">Blue text</h1>
<div className="bg-accent-blue">Blue background</div>
```

### Dividers
```tsx
<div className="divider-brutalist"></div>  {/* 2px black line */}
```

### Prose (Reading Content)
```tsx
<div className="prose">
  <p>Optimized typography for reading</p>
</div>
```

---

## Creating New Pages

### Example: About Page

Create `/src/app/components/AboutPage.tsx`:

```tsx
import { BlogHeader } from "@/app/components/BlogHeader";
import { BlogFooter } from "@/app/components/BlogFooter";
import { Separator } from "@/app/components/ui/separator";
import { Button } from "@/app/components/ui/button";

export function AboutPage() {
  return (
    <>
      <BlogHeader />
      
      {/* Hero */}
      <section className="section-padding-lg border-b-2 border-foreground">
        <div className="container-reading">
          <h1 className="mb-8">
            About <span className="accent-red">Me</span>
          </h1>
          <p className="text-xl leading-relaxed">
            Software engineer turned business leader. I build systems, lead teams, 
            and ship products that matter.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding-lg">
        <div className="container-reading prose">
          <h2>Background</h2>
          <p>
            Your story here...
          </p>

          <h2>Current Focus</h2>
          <p>
            What you're working on...
          </p>
        </div>
      </section>

      <BlogFooter />
    </>
  );
}
```

### Example: Custom Landing Page

Create `/src/app/components/LandingPage.tsx`:

```tsx
import { BlogHeader } from "@/app/components/BlogHeader";
import { HeroSection } from "@/app/components/HeroSection";
import { FeaturedWork } from "@/app/components/FeaturedWork";
import { CTASection } from "@/app/components/CTASection";
import { BlogFooter } from "@/app/components/BlogFooter";

export function LandingPage() {
  return (
    <>
      <BlogHeader />
      <HeroSection />
      <FeaturedWork />
      
      {/* Custom section using design system */}
      <section className="section-padding-lg bg-muted">
        <div className="container-content">
          <h2 className="mb-12">Custom Section</h2>
          {/* Your content */}
        </div>
      </section>
      
      <CTASection />
      <BlogFooter />
    </>
  );
}
```

### Example: Article Archive Page

Create `/src/app/components/ArchivePage.tsx`:

```tsx
import { BlogHeader } from "@/app/components/BlogHeader";
import { BlogFooter } from "@/app/components/BlogFooter";
import { ArticleCard } from "@/app/components/ArticleCard";
import { Badge } from "@/app/components/ui/badge";

const articles = [
  // Your articles array
];

export function ArchivePage() {
  return (
    <>
      <BlogHeader />
      
      <section className="section-padding-lg">
        <div className="container-content">
          <h1 className="mb-12">Article Archive</h1>
          
          {/* Filter badges */}
          <div className="flex gap-3 mb-16">
            <Badge variant="outline">All</Badge>
            <Badge variant="outline">Engineering</Badge>
            <Badge variant="outline">Leadership</Badge>
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {articles.map((article, idx) => (
              <ArticleCard key={idx} {...article} />
            ))}
          </div>
        </div>
      </section>
      
      <BlogFooter />
    </>
  );
}
```

---

## Quick Start: Build a New Page

1. **Create new component** in `/src/app/components/YourPage.tsx`
2. **Import components** you need
3. **Compose them** together
4. **Add to App.tsx** as a new tab or route

```tsx
// In your new page component
import { BlogHeader } from "@/app/components/BlogHeader";
import { BlogFooter } from "@/app/components/BlogFooter";
// ... other components

export function YourPage() {
  return (
    <>
      <BlogHeader />
      {/* Your sections here */}
      <BlogFooter />
    </>
  );
}
```

Then add to App.tsx:
```tsx
import { YourPage } from "@/app/components/YourPage";

// Add new tab
<TabsTrigger value="yourpage">Your Page</TabsTrigger>

// Add content
<TabsContent value="yourpage">
  <YourPage />
</TabsContent>
```

---

## Tips

✓ **All components are already styled** with the brutalist-minimal theme
✓ **Mix and match** components to create new layouts  
✓ **Customize content** by editing the component files
✓ **Use utility classes** for spacing and colors
✓ **Follow the spacing system** (4, 8, 12, 16, 24, 32)
✓ **Keep color minimal** - black/white primary, red/blue accents
