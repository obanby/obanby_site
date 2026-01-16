# Brutalist-Minimal Blog Design System

A design language that balances brutalist boldness with Notion-like reading clarity.

## Philosophy

**Brutalist First Impression** → **Notion-like Reading Experience**

- Bold, stark, creative on the surface
- Clean, spacious, readable in the content
- Structured creativity: systematic but not boring
- Minimal color: black/white primary, selective bold accents

---

## Color Palette

### Primary Colors
- **Black**: `#000000` - Primary text, borders, backgrounds
- **White**: `#FFFFFF` - Primary background, text on dark
- **Gray**: `#666666` - Muted text, secondary information

### Accent Colors (Use Sparingly)
- **Red**: `#DC0D28` - Bold statements, CTAs, passion
- **Blue**: `#4040FF` - Technical elements, links, creativity

### Usage
```css
/* Tailwind classes */
.accent-red          /* Text color */
.bg-accent-red       /* Background */
.accent-blue         /* Text color */
.bg-accent-blue      /* Background */
```

---

## Typography

### Fonts
- **Body**: Inter (300, 400, 500, 700, 900)
- **Mono**: JetBrains Mono (400, 500, 700)

### Scale
```
h1: 3rem (48px)    - font-black (900) - Hero headlines
h2: 2.25rem (36px) - font-bold (700)  - Section headers
h3: 1.875rem (30px) - font-bold (700) - Subsections
h4: 1.5rem (24px)  - font-bold (700)  - Components
p:  1rem (16px)    - font-normal (400) - Body text
```

### Reading-Optimized
```tsx
<div className="prose">
  <p>Optimized for reading: 1.125rem, 1.8 line-height</p>
</div>
```

---

## Spacing

### Philosophy
Generous negative space. White space is intentional, not empty.

### Scale
```css
--space-4:  1rem    /* 16px - Standard */
--space-8:  2rem    /* 32px - Medium */
--space-12: 3rem    /* 48px - Large */
--space-16: 4rem    /* 64px - Section (sm) */
--space-24: 6rem    /* 96px - Section */
--space-32: 8rem    /* 128px - Section (lg) */
```

### Utility Classes
```tsx
<section className="section-padding">     {/* 6rem top/bottom */}
<section className="section-padding-sm">  {/* 4rem top/bottom */}
<section className="section-padding-lg">  {/* 8rem top/bottom */}
```

---

## Layout Containers

### Reading Container
Max-width: 680px - Optimal for long-form reading
```tsx
<div className="container-reading">
  {/* Article content */}
</div>
```

### Content Container
Max-width: 1200px - For grids and wider layouts
```tsx
<div className="container-content">
  {/* General content */}
</div>
```

---

## Components

### Buttons
```tsx
import { Button } from "@/app/components/ui/button";

<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button className="bg-accent-red">Red Accent</Button>
<Button className="bg-accent-blue">Blue Accent</Button>
```

### Badges
```tsx
import { Badge } from "@/app/components/ui/badge";

<Badge>Default</Badge>
<Badge variant="outline">Outline</Badge>
<Badge className="bg-accent-red">Featured</Badge>
```

### Dividers
```tsx
import { Separator } from "@/app/components/ui/separator";

<Separator />  {/* Standard */}
<div className="divider-brutalist"></div>  {/* Bold 2px */}
```

---

## Blog Components

### Header
```tsx
import { BlogHeader } from "@/app/components/BlogHeader";
<BlogHeader />
```

### Hero Section
```tsx
import { HeroSection } from "@/app/components/HeroSection";
<HeroSection />
```

### Article Card
```tsx
import { ArticleCard } from "@/app/components/ArticleCard";

<ArticleCard
  title="Article Title"
  excerpt="Brief description..."
  date="Jan 15, 2026"
  readTime="8 min read"
  category="Leadership"
  featured={true}
/>
```

### Article Layout
```tsx
import { ArticleLayout } from "@/app/components/ArticleLayout";

<ArticleLayout
  title="Article Title"
  subtitle="Optional subtitle"
  date="Jan 15, 2026"
  readTime="8 min read"
  category="Leadership"
>
  {/* Article content in prose */}
</ArticleLayout>
```

### Featured Work
```tsx
import { FeaturedWork } from "@/app/components/FeaturedWork";
<FeaturedWork />
```

### Blog Grid
```tsx
import { BlogGrid } from "@/app/components/BlogGrid";
<BlogGrid />
```

### CTA Section
```tsx
import { CTASection } from "@/app/components/CTASection";
<CTASection />
```

### Footer
```tsx
import { BlogFooter } from "@/app/components/BlogFooter";
<BlogFooter />
```

---

## Design Principles

### 1. Brutalist Elements
- Sharp corners (0px border radius by default)
- Bold, oversized typography
- Stark black/white contrasts
- 2px borders for emphasis
- No gradients, no shadows

### 2. Notion-like Reading
- Generous line-height (1.7-1.8)
- Wide margins and padding
- Max-width constraints for readability
- Clear hierarchy
- Ample white space

### 3. Color Philosophy
- **Primary**: Black and white only
- **Accent Red**: Sparingly for emphasis (max 5% of page)
- **Accent Blue**: Technical elements, links
- **Gray**: Only for muted/secondary text

### 4. Spacing Strategy
- Double the space you think you need
- Section padding: minimum 6rem (96px)
- Paragraph spacing: 1.5rem (24px)
- Element spacing follows 8px grid

### 5. Typography Rules
- Headlines: Bold, black, oversized
- Body: Clean, normal weight, generous leading
- Labels: Uppercase, small, medium weight
- Monospace: For code and technical data

---

## Customization Guide

### Changing Accent Colors
Edit `/src/styles/theme.css`:
```css
:root {
  --accent-red: #DC0D28;  /* Your bold color */
  --accent-blue: #4040FF; /* Your creative color */
}
```

### Adjusting Spacing
Edit spacing scale in `/src/styles/theme.css`:
```css
:root {
  --space-24: 6rem;  /* Section padding */
  --space-32: 8rem;  /* Large section padding */
}
```

### Typography Scale
Edit font sizes in `/src/styles/theme.css`:
```css
:root {
  --text-5xl: 3rem;     /* h1 size */
  --text-4xl: 2.25rem;  /* h2 size */
  /* etc. */
}
```

---

## Best Practices

### Do's ✓
- Use generous white space
- Keep color usage minimal and intentional
- Maintain stark contrasts
- Use bold typography for impact
- Optimize reading experience with proper line-height
- Structure content with clear hierarchy

### Don'ts ✗
- Don't overuse accent colors
- Don't add gradients or soft shadows
- Don't crowd content together
- Don't use rounded corners (except when needed for UX)
- Don't compromise readability for aesthetics
- Don't use more than 3 colors per view

---

## Example Layouts

Check the live demo tabs:
1. **Blog Home** - Landing page with hero, features, article grid
2. **Article Example** - Long-form reading layout
3. **Design System** - Full component showcase

---

## Next Steps

1. Replace placeholder content with your own
2. Customize colors to match your brand
3. Add your name/logo in header and footer
4. Connect newsletter signup forms
5. Build out additional blog pages (About, Archive, etc.)
6. Add dark mode toggle if desired
7. Integrate with your CMS or markdown system

---

Built with **React**, **Tailwind CSS v4**, and **Radix UI**
