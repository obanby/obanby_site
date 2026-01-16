# Brutalist-Minimal Design System

A production-ready design system built with **React 18**, **Tailwind CSS v4**, and **Radix UI**. Featuring a brutalist-minimal aesthetic with 50+ pre-styled components, comprehensive theming, and interactive component documentation via Ladle.

---

## 🚀 Getting Started

### Development Server
```bash
npm install
npm run dev
```
Opens at `http://localhost:5173` - View the main application with example pages.

### Component Documentation (Ladle)
```bash
npm run ladle
```
Opens at `http://localhost:61000` - Interactive component library for exploring and testing components in isolation.

### Build for Production
```bash
npm run build        # Build main app
npm run build-ladle  # Build Ladle documentation
```

---

## 🎨 Design Philosophy

### The Brutalist-Minimal Approach

This design system blends two seemingly opposing philosophies:

#### **Brutalist Elements**
- **Bold, Unapologetic Typography**: 900-weight headings that demand attention
- **Sharp Geometry**: 0px border radius, no softness
- **Heavy Borders**: 2px borders for emphasis and structure
- **Raw Contrast**: Pure black (#000000) on pure white (#FFFFFF)
- **No Decorative Elements**: No shadows, gradients, or visual flourishes

#### **Minimalist Principles**
- **Generous Negative Space**: Breathing room is a design feature
- **Restrained Color Palette**: 95% monochrome, 5% accent
- **Functional Simplicity**: Every element serves a purpose
- **Clear Hierarchy**: Size and weight create visual order
- **Reading-First Layout**: Wide margins (Notion-inspired)

### Why This Works

**For Blogs & Content Sites:**
- Bold headers grab attention in feeds and social previews
- Generous spacing creates relaxed reading experience
- Stark contrast ensures accessibility (WCAG AAA compliant)
- Minimal distractions keep focus on content

**For Technical Audiences:**
- Brutalism signals authenticity and substance over style
- Minimalism communicates clarity and precision
- The aesthetic appeals to engineers and designers alike

---

## 🎯 Design Choices

### Color System

#### **Monochrome Base**
```css
--background: #FFFFFF
--foreground: #000000
--muted: #F5F5F5
--border: #E5E5E5
```

**Philosophy**: Content is king. Black text on white background has the highest readability. Muted grays provide subtle structure without distraction.

#### **Accent Colors** (Use Sparingly - Max 5% of Any Page)
```css
--accent-red: #DC0D28   /* Passion, urgency, key actions */
--accent-blue: #4040FF  /* Technical, creative, secondary actions */
```

**Philosophy**: Accents are punctuation, not sentences. A single red word in a black headline is more impactful than a red paragraph.

**Usage Guidelines:**
- Red: CTAs, warnings, emphasis on critical info
- Blue: Links, technical terms, secondary actions
- Never use both accents in the same component unless necessary

#### **Dark Mode** (Full Support)
```css
.dark {
  --background: #000000
  --foreground: #FFFFFF
  /* Inverted with same high contrast */
}
```

### Typography

#### **Font Families**
```css
--font-sans: 'Inter', system-ui, sans-serif
--font-mono: 'JetBrains Mono', monospace
```

**Inter**: Modern, readable, extensive weight range (400-900)
**JetBrains Mono**: Code blocks, technical emphasis, tables

#### **Type Scale**
```css
--text-5xl: 3rem (48px)      /* Hero headings */
--text-4xl: 2.25rem (36px)   /* Page titles */
--text-3xl: 1.875rem (30px)  /* Section headers */
--text-2xl: 1.5rem (24px)    /* Subheadings */
--text-xl: 1.25rem (20px)    /* Large body, leads */
--text-base: 1rem (16px)     /* Body text */
--text-sm: 0.875rem (14px)   /* Captions, metadata */
```

**Philosophy**: Clear hierarchy with generous size jumps. Headers are meant to be seen.

#### **Font Weights**
```css
--font-normal: 400   /* Body text */
--font-medium: 500   /* Slight emphasis */
--font-semibold: 600 /* Button text */
--font-bold: 700     /* Strong emphasis */
--font-black: 900    /* Brutalist headings */
```

**Usage**: Headers use 900 weight for maximum impact. Body text uses 400 for comfortable reading.

### Spacing System

```css
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-3: 0.75rem (12px)
--space-4: 1rem (16px)
--space-6: 1.5rem (24px)
--space-8: 2rem (32px)
--space-12: 3rem (48px)
--space-16: 4rem (64px)
--space-24: 6rem (96px)
--space-32: 8rem (128px)
```

**Philosophy**: Based on 4px base unit. Generous spacing (8rem sections) creates breathing room essential for minimalism.

**Common Patterns:**
- Tight spacing (4-8px): Form elements, inline items
- Medium spacing (16-32px): Component padding, gaps
- Generous spacing (48-96px): Section padding, hero areas

### Border Radius

```css
--radius: 0px        /* Default - sharp corners */
--radius-sm: 0px     /* Small - still sharp */
--radius-md: 2px     /* Medium - barely rounded */
--radius-lg: 4px     /* Large - subtle roundness */
```

**Philosophy**: Brutalism favors sharp edges. The 0px default maintains the aesthetic. Minimal rounding (2-4px) is available for functional elements (inputs, badges) where accessibility benefits from softness.

### Layout Containers

```css
.container-reading {
  max-width: 680px;   /* Optimal reading line length */
}

.container-content {
  max-width: 1200px;  /* Wide layouts, grids */
}

.container-full {
  max-width: 100%;    /* Full-width sections */
}
```

**Philosophy**:
- **680px reading**: 60-75 characters per line, ideal for articles
- **1200px content**: Multi-column layouts without overwhelming width
- **Full-width**: Strategic use for visual impact (heroes, footers)

### Section Padding

```css
.section-padding-sm: 4rem (64px)
.section-padding: 6rem (96px)
.section-padding-lg: 8rem (128px)
```

**Philosophy**: Vertical rhythm is critical in minimalism. Large section padding creates clear breaks and emphasizes content importance.

---

## 🏗️ Technical Architecture

### CSS Architecture

**Tailwind CSS v4** (Latest)
- No `tailwind.config.js` required
- CSS-first configuration via `@import` and `@theme`
- Vite plugin for processing
- Custom properties bridge CSS variables to Tailwind utilities

**File Structure:**
```
/src/styles/
├── index.css       # Master import file
├── fonts.css       # Google Fonts (Inter, JetBrains Mono)
├── tailwind.css    # Tailwind directives + source scanning
└── theme.css       # Design tokens (CSS custom properties)
```

**How It Works:**
1. `theme.css` defines CSS custom properties (e.g., `--foreground: #000000`)
2. `@theme inline` directive maps properties to Tailwind (e.g., `--color-foreground: var(--foreground)`)
3. Tailwind generates utilities (e.g., `text-foreground`, `bg-foreground`)
4. All files imported in `index.css`, which is imported in both main app and Ladle

### Component Architecture

**Radix UI Foundation:**
- 50+ accessible, unstyled primitives
- Keyboard navigation, screen reader support built-in
- ARIA attributes handled automatically

**Class Variance Authority (CVA):**
- Type-safe variant management
- Composable component APIs
```tsx
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: { default: "...", outline: "..." },
      size: { sm: "...", md: "...", lg: "..." }
    }
  }
);
```

**Tailwind Merge:**
- Intelligent class merging via `cn()` utility
- Prevents class conflicts (e.g., `text-sm` + `text-lg` → `text-lg`)

**Pattern:**
```tsx
import { cn } from "./utils";
import { cva } from "class-variance-authority";

const variants = cva("base", { variants: {...} });

function Component({ className, variant, ...props }) {
  return (
    <Primitive
      className={cn(variants({ variant }), className)}
      {...props}
    />
  );
}
```

### Build System

**Vite 6**
- Lightning-fast HMR
- ESM-native builds
- Plugin ecosystem

**Key Plugins:**
- `@vitejs/plugin-react` - React Fast Refresh
- `@tailwindcss/vite` - Tailwind CSS v4 processing

**Ladle Integration:**
- Ladle uses Vite under the hood
- `.ladle/vite.config.ts` mirrors main config
- Ensures identical styling in documentation

---

## 📦 Component Library

### Blog Components (Custom)

**Layout Components:**
- `BlogHeader` - Navigation with logo and links
- `BlogFooter` - Footer with social links and newsletter signup
- `HeroSection` - Bold landing section with CTA
- `ArticleLayout` - Long-form reading layout with max-width

**Content Components:**
- `ArticleCard` - Blog post preview with image, title, excerpt
- `BlogGrid` - Responsive grid of article cards
- `FeaturedWork` - Project showcase with large images
- `CTASection` - Newsletter signup with form

### Radix UI Components (50+)

Located in `/src/app/components/ui/`

**Forms:**
Button, Input, Textarea, Select, Checkbox, Radio Group, Switch, Slider, Form, Label

**Overlays:**
Dialog, Alert Dialog, Sheet, Drawer, Popover, Hover Card, Tooltip, Context Menu, Dropdown Menu

**Navigation:**
Tabs, Accordion, Navigation Menu, Menubar, Breadcrumb, Pagination

**Feedback:**
Alert, Toast (Sonner), Progress, Skeleton

**Data Display:**
Card, Avatar, Badge, Table, Calendar, Chart, Separator

**Utilities:**
Scroll Area, Resizable, Collapsible, Toggle, Command, Sidebar

All components follow the same pattern:
- Radix primitive for behavior
- CVA for variants
- Tailwind for styling
- Design tokens for theming

---

## 🥄 Ladle Component Documentation

### What is Ladle?

Ladle is a lightweight, Vite-powered component explorer. It's blazing fast, has minimal dependencies, and uses a simple story format.

### Running Ladle

```bash
npm run ladle
```

Opens at `http://localhost:61000`

### Features

**Instant Hot Reload:**
Edit components or stories - changes appear instantly

**Built-in Controls:**
Interactive props panel for testing component variants

**Responsive Testing:**
Width presets (414px mobile → 1280px desktop)

**Dark Mode Toggle:**
Test light and dark themes with one click

### Creating Stories

Stories are just exported React components:

```tsx
// src/app/components/ui/button.stories.tsx

import { Button } from './button';

export const Default = () => <Button>Click me</Button>;

export const Outline = () => <Button variant="outline">Outline</Button>;

export const AllSizes = () => (
  <div className="flex gap-4">
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);

// Story with interactive controls
export const Controlled = ({
  label = 'Button',
  variant = 'default',
  disabled = false
}) => (
  <Button variant={variant} disabled={disabled}>
    {label}
  </Button>
);
```

**That's it.** No meta objects, no complex APIs.

### Story Organization

File paths become navigation:
```
src/app/components/ui/button.stories.tsx
  → UI / Button

src/app/components/ArticleCard.stories.tsx
  → Components / Article Card
```

### Why Ladle?

**Key Benefits:**
- **Startup Time**: <1s - Instant development server
- **Dependencies**: ~10 packages - Minimal footprint
- **Story Format**: Plain React - Just export components
- **Bundle Size**: ~500KB - Fast loading documentation
- **Hot Reload**: Instant - Changes appear immediately
- **Config**: Optional - Works out of the box

**Perfect for:**
- Fast iteration and development
- Teams that prefer simplicity
- Projects already using Vite

---

## 🛠️ Development Workflow

### 1. Component Development

**Create Component:**
```tsx
// src/app/components/ui/my-component.tsx
import { cn } from "./utils";
import { cva } from "class-variance-authority";

const variants = cva("base-classes", {
  variants: { variant: { default: "...", secondary: "..." } }
});

export function MyComponent({ className, variant, ...props }) {
  return (
    <div className={cn(variants({ variant }), className)} {...props} />
  );
}
```

**Create Story:**
```tsx
// src/app/components/ui/my-component.stories.tsx
import { MyComponent } from './my-component';

export const Default = () => <MyComponent>Content</MyComponent>;
export const Secondary = () => <MyComponent variant="secondary">Content</MyComponent>;
```

**Test in Ladle:**
```bash
npm run ladle
# Navigate to UI / My Component
# Test variants, responsive behavior, dark mode
```

### 2. Page Building

**Create Page Component:**
```tsx
// src/app/components/MyPage.tsx
import { BlogHeader } from "@/app/components/BlogHeader";
import { BlogFooter } from "@/app/components/BlogFooter";

export function MyPage() {
  return (
    <>
      <BlogHeader />

      <section className="section-padding-lg">
        <div className="container-content">
          <h1 className="mb-8">
            My <span className="accent-red">Page</span>
          </h1>
          {/* Content */}
        </div>
      </section>

      <BlogFooter />
    </>
  );
}
```

**Add to App:**
```tsx
// src/app/App.tsx
import { MyPage } from "@/app/components/MyPage";

// Add tab trigger
<TabsTrigger value="mypage">My Page</TabsTrigger>

// Add tab content
<TabsContent value="mypage">
  <MyPage />
</TabsContent>
```

### 3. Theme Customization

Edit `/src/styles/theme.css`:

```css
:root {
  /* Change accent colors */
  --accent-red: #FF0000;  /* Your red */
  --accent-blue: #0066FF; /* Your blue */

  /* Adjust spacing */
  --space-custom: 5rem;

  /* Add custom properties */
  --my-color: #123456;
}

/* Map to Tailwind */
@theme inline {
  --color-my-color: var(--my-color);
}
```

Use in components:
```tsx
<div className="bg-my-color">Custom color</div>
```

---

## 📚 Key Files Reference

### Configuration
- `vite.config.ts` - Main Vite config (React + Tailwind plugins)
- `.ladle/vite.config.ts` - Ladle Vite config (Tailwind plugin)
- `.ladle/config.mjs` - Ladle configuration (stories path, addons)
- `.ladle/components.tsx` - Global provider (imports styles)

### Styles
- `src/styles/index.css` - Master CSS file (imports all styles)
- `src/styles/theme.css` - **Design tokens** (all custom properties)
- `src/styles/tailwind.css` - Tailwind directives
- `src/styles/fonts.css` - Google Fonts imports

### Components
- `src/app/components/ui/` - Radix UI primitives (50+ components)
- `src/app/components/` - Blog components (header, footer, cards, etc.)
- `src/app/components/**/*.stories.tsx` - Ladle stories

### App
- `src/main.tsx` - Vite entry point
- `src/app/App.tsx` - Main application with tabs
- `index.html` - HTML entry point

---

## 🎓 External Resources
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Ladle Documentation](https://ladle.dev)
- [CVA Documentation](https://cva.style)

---

## 💡 Best Practices

### Color Usage
✓ Keep pages 95% monochrome
✓ Use accent colors for <5 elements per page
✓ Red for primary CTAs and warnings
✓ Blue for secondary actions and links
✗ Don't mix red and blue in same component
✗ Don't use accents for backgrounds (only text/borders)

### Typography
✓ Use 900 weight for hero headings
✓ Use 400 weight for body text
✓ Maintain clear size hierarchy (5xl → 4xl → 3xl)
✗ Don't use more than 3 heading sizes per page
✗ Don't use 900 weight for anything except headings

### Spacing
✓ Use section-padding classes for vertical rhythm
✓ Prefer space-8 and larger for breathing room
✓ Use container-reading for articles
✗ Don't add padding to containers AND their parents
✗ Don't use tight spacing in minimalist designs

### Components
✓ Use Radix UI components for interactive elements
✓ Extend with CVA for custom variants
✓ Use `cn()` utility for class merging
✗ Don't override Radix accessibility features
✗ Don't create custom components when Radix exists

---

## 🚀 Deployment

### Build
```bash
npm run build
```
Outputs to `/dist` directory.

### Static Hosting
Deploy to Vercel, Netlify, Cloudflare Pages, or any static host:
```bash
npm run build
# Upload /dist folder
```

### Build Component Docs
```bash
npm run build-ladle
```
Outputs to `/build` directory. Can be deployed separately or alongside main app.

---

## 🎉 What's Next?

### Immediate Next Steps
1. **Explore Ladle** - Run `npm run ladle` and browse all components
2. **Build a Page** - See "Development Workflow" section above
3. **Customize Theme** - Edit `src/styles/theme.css`
4. **Add Content** - Replace placeholder text with your content

### Extend the System
- Add new components following the CVA + Radix pattern
- Create composite components from primitives
- Build page templates for common layouts
- Add routing (React Router, TanStack Router, etc.)

### Production Checklist
- [ ] Replace all placeholder content
- [ ] Connect forms to real backend/service
- [ ] Add analytics tracking
- [ ] Test accessibility (screen readers, keyboard nav)
- [ ] Optimize images (WebP, lazy loading)
- [ ] Set up SEO meta tags
- [ ] Configure error boundaries

---

**Built with brutal simplicity. Designed for focused content.**
