# How to Build New Pages with Your Design System

Your design system is now a **modular component library**. Each component is ready to use - just import and compose them into new pages.

---

## 🎯 Quick Example

Check out the **Projects tab** - it's a complete new page built entirely from your design system components!

---

## 📦 Your Component Library

### Layout Components (Full Sections)
```
BlogHeader        → Sticky navigation bar
BlogFooter        → Complete footer
HeroSection       → Large hero with headline + CTAs
FeaturedWork      → 3-column project grid
BlogGrid          → 2-column article grid
CTASection        → Newsletter signup (inverted colors)
```

### Content Components (Individual Pieces)
```
ArticleCard       → Single article preview
ArticleLayout     → Full article reading layout
```

### Radix UI Components (50+)
```
Button, Badge, Separator, Card, Dialog, Tabs, 
Accordion, Alert, Avatar, Checkbox, Dropdown, 
Input, Label, Popover, Select, Switch, Tooltip...

All in: /src/app/components/ui/
```

---

## 🚀 How to Build a New Page (3 Steps)

### Step 1: Create Component File
```bash
/src/app/components/YourPageName.tsx
```

### Step 2: Import & Compose
```tsx
import { BlogHeader } from "@/app/components/BlogHeader";
import { BlogFooter } from "@/app/components/BlogFooter";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

export function YourPageName() {
  return (
    <>
      <BlogHeader />
      
      {/* Your custom sections using design system */}
      <section className="section-padding-lg">
        <div className="container-content">
          <h1>Your Content</h1>
          {/* Mix and match components */}
        </div>
      </section>
      
      <BlogFooter />
    </>
  );
}
```

### Step 3: Add to App.tsx
```tsx
// 1. Import your page
import { YourPageName } from "@/app/components/YourPageName";

// 2. Add tab trigger (in TabsList)
<TabsTrigger value="yourpage">Your Page</TabsTrigger>

// 3. Add tab content (in Tabs)
<TabsContent value="yourpage" className="mt-0">
  <YourPageName />
</TabsContent>
```

Done! Your page is now live.

---

## 💡 Real Examples

### Example 1: Simple About Page

Create `/src/app/components/AboutPage.tsx`:

```tsx
import { BlogHeader } from "@/app/components/BlogHeader";
import { BlogFooter } from "@/app/components/BlogFooter";

export function AboutPage() {
  return (
    <>
      <BlogHeader />
      
      <section className="section-padding-lg">
        <div className="container-reading">
          <h1 className="mb-8">About <span className="accent-red">Me</span></h1>
          
          <div className="prose">
            <p>Your bio here...</p>
            <h2>Background</h2>
            <p>More content...</p>
          </div>
        </div>
      </section>
      
      <BlogFooter />
    </>
  );
}
```

### Example 2: Contact Page with Form

Create `/src/app/components/ContactPage.tsx`:

```tsx
import { BlogHeader } from "@/app/components/BlogHeader";
import { BlogFooter } from "@/app/components/BlogFooter";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";

export function ContactPage() {
  return (
    <>
      <BlogHeader />
      
      <section className="section-padding-lg">
        <div className="container-reading">
          <h1 className="mb-12">Get in Touch</h1>
          
          <div className="space-y-6">
            <div>
              <Label>Name</Label>
              <Input className="mt-2" />
            </div>
            
            <div>
              <Label>Email</Label>
              <Input type="email" className="mt-2" />
            </div>
            
            <div>
              <Label>Message</Label>
              <Textarea className="mt-2" rows={6} />
            </div>
            
            <Button className="bg-foreground w-full">Send Message</Button>
          </div>
        </div>
      </section>
      
      <BlogFooter />
    </>
  );
}
```

### Example 3: Article Archive with Filters

Create `/src/app/components/ArchivePage.tsx`:

```tsx
import { BlogHeader } from "@/app/components/BlogHeader";
import { BlogFooter } from "@/app/components/BlogFooter";
import { ArticleCard } from "@/app/components/ArticleCard";
import { Badge } from "@/app/components/ui/badge";

const articles = [
  {
    title: "Article 1",
    excerpt: "Description...",
    date: "Jan 15, 2026",
    readTime: "5 min",
    category: "Engineering"
  },
  // Add more articles...
];

export function ArchivePage() {
  return (
    <>
      <BlogHeader />
      
      <section className="section-padding-lg">
        <div className="container-content">
          <h1 className="mb-8">All Articles</h1>
          
          {/* Filter badges */}
          <div className="flex gap-3 mb-16">
            <Badge variant="outline">All</Badge>
            <Badge variant="outline">Engineering</Badge>
            <Badge variant="outline">Leadership</Badge>
            <Badge variant="outline">Design</Badge>
          </div>
          
          {/* Article grid using ArticleCard component */}
          <div className="grid md:grid-cols-2 gap-12">
            {articles.map((article, i) => (
              <ArticleCard key={i} {...article} />
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

## 🎨 Design System Patterns

### Pattern 1: Hero Section
```tsx
<section className="section-padding-lg border-b-2 border-foreground">
  <div className="container-content">
    <div className="max-w-3xl">
      <label className="mb-6 block">EYEBROW TEXT</label>
      <h1 className="mb-8">
        Main Headline <span className="accent-red">with accent</span>
      </h1>
      <p className="text-xl text-muted-foreground">
        Supporting description...
      </p>
    </div>
  </div>
</section>
```

### Pattern 2: Content Grid
```tsx
<section className="section-padding-lg">
  <div className="container-content">
    <h2 className="mb-12">Section Title</h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      <div className="border-2 border-foreground p-8">
        {/* Card content */}
      </div>
      {/* More cards... */}
    </div>
  </div>
</section>
```

### Pattern 3: Reading Content
```tsx
<section className="section-padding-lg">
  <div className="container-reading">
    <div className="prose">
      <p>Optimized for reading...</p>
      <h2>Section</h2>
      <p>More content...</p>
    </div>
  </div>
</section>
```

### Pattern 4: Featured Block
```tsx
<div className="border-2 border-foreground p-12 hover:bg-secondary transition-colors group">
  <span className="text-4xl font-black accent-red">01</span>
  <h3 className="mt-6 mb-4 group-hover:accent-blue transition-colors">
    Title
  </h3>
  <p className="text-muted-foreground">Description...</p>
</div>
```

---

## 🛠️ Customization Tips

### Change Colors
Edit `/src/styles/theme.css`:
```css
:root {
  --accent-red: #DC0D28;   /* Your red */
  --accent-blue: #4040FF;  /* Your blue */
}
```

### Adjust Spacing
Use utility classes:
```tsx
className="section-padding"     // 6rem (96px)
className="section-padding-sm"  // 4rem (64px)
className="section-padding-lg"  // 8rem (128px)
```

Or custom:
```tsx
className="py-24"  // 6rem
className="py-32"  // 8rem
```

### Add Accent Colors
```tsx
<h1 className="accent-red">Red text</h1>
<div className="bg-accent-blue">Blue background</div>
```

### Container Widths
```tsx
className="container-reading"   // 680px - For articles
className="container-content"   // 1200px - For layouts
```

Or custom:
```tsx
className="max-w-4xl mx-auto px-6"
```

---

## ✅ Checklist: Building a New Page

- [ ] Create component file in `/src/app/components/`
- [ ] Import `BlogHeader` and `BlogFooter`
- [ ] Import other components you need
- [ ] Use `section-padding-lg` for sections
- [ ] Use `container-content` or `container-reading` for width
- [ ] Add accent colors sparingly (red/blue)
- [ ] Import in `App.tsx`
- [ ] Add `TabsTrigger` for navigation
- [ ] Add `TabsContent` with your component
- [ ] Test responsiveness

---

## 📚 Reference Files

- **Component List**: `/COMPONENT_LIBRARY.md`
- **Design System**: `/DESIGN_SYSTEM.md`
- **This Guide**: `/HOW_TO_BUILD_PAGES.md`

---

## 🎓 Learning by Example

**Live Examples in App:**
1. **Blog Home** tab → See how to compose multiple sections
2. **Article Example** tab → See reading layout in action
3. **Projects** tab → **NEW! Complete custom page example**
4. **Design System** tab → See all components and styles

**Look at the code:**
- `/src/app/components/ProjectsPage.tsx` ← Study this!
- Shows mixing header/footer with custom content
- Shows using badges, buttons, separators
- Shows the grid patterns and spacing system

---

## 💪 You're Ready!

You now have:
✓ A complete design system
✓ 50+ reusable components
✓ Example pages to reference
✓ Clear patterns to follow

**Just import, compose, and build!**

Every component is styled and ready. You're not writing CSS or fighting with design—you're building pages by composing pre-built, beautiful components.

Start by looking at `ProjectsPage.tsx` and see how simple it is to create a complete, professional page using just your component library.
