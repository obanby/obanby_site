# Brutalist-Minimal Blog Design System

A complete, production-ready design system for building blog pages with a brutalist-minimal aesthetic. Built with **React**, **Tailwind CSS v4**, and **Radix UI**.

---

## 🎯 What You Have

### ✅ Complete Design System
- Custom brutalist-minimal theme
- Black/white base with selective red/blue accents
- Generous spacing system for negative space
- Typography optimized for both impact and readability
- 50+ pre-styled Radix UI components

### ✅ Ready-to-Use Page Components
- **BlogHeader** - Navigation
- **BlogFooter** - Footer with links & newsletter
- **HeroSection** - Bold landing section
- **FeaturedWork** - Project showcase grid
- **BlogGrid** - Article listing
- **ArticleCard** - Individual post preview
- **ArticleLayout** - Long-form reading experience
- **CTASection** - Newsletter signup

### ✅ Live Examples
Switch between tabs to see:
1. **Blog Home** - Complete landing page
2. **Article Example** - Long-form reading layout
3. **Components** - Visual component library with code
4. **Projects** - Example custom page

---

## 🚀 Quick Start: Build a New Page

### 1. Create Component File
```tsx
// /src/app/components/MyPage.tsx

import { BlogHeader } from "@/app/components/BlogHeader";
import { BlogFooter } from "@/app/components/BlogFooter";

export function MyPage() {
  return (
    <>
      <BlogHeader />
      
      <section className="section-padding-lg">
        <div className="container-content">
          <h1>My Page</h1>
          {/* Your content */}
        </div>
      </section>
      
      <BlogFooter />
    </>
  );
}
```

### 2. Add to App.tsx
```tsx
// Import
import { MyPage } from "@/app/components/MyPage";

// Add tab trigger
<TabsTrigger value="mypage">My Page</TabsTrigger>

// Add tab content
<TabsContent value="mypage">
  <MyPage />
</TabsContent>
```

Done! Your page is live.

---

## 📚 Documentation

### Essential Guides
- **`/HOW_TO_BUILD_PAGES.md`** ← **START HERE** - Step-by-step guide
- **`/COMPONENT_LIBRARY.md`** - Complete component reference
- **`/DESIGN_SYSTEM.md`** - Design principles and tokens

### In-App Reference
- **Components tab** - Visual showcase with code snippets
- **Projects tab** - Real example of building a custom page
- All components are in `/src/app/components/`

---

## 🎨 Design Principles

### Brutalist First Impression
- Bold, oversized typography (900 weight headings)
- Stark black/white contrasts
- Sharp corners (0px radius)
- 2px borders for emphasis
- No gradients, no shadows

### Notion-like Reading
- Generous line-height (1.7-1.8)
- Wide margins and padding
- 680px max-width for articles
- Clear hierarchy
- Ample negative space

### Color Philosophy
- **Primary**: Black (#000000) and White (#FFFFFF)
- **Accent Red**: #DC0D28 - Bold statements, passion
- **Accent Blue**: #4040FF - Technical elements, creativity
- **Use sparingly**: 95% black/white, 5% accent

---

## 🛠️ Key Utilities

### Containers
```tsx
<div className="container-reading">   {/* 680px - Articles */}
<div className="container-content">   {/* 1200px - Layouts */}
```

### Section Padding
```tsx
<section className="section-padding">     {/* 6rem */}
<section className="section-padding-sm">  {/* 4rem */}
<section className="section-padding-lg">  {/* 8rem */}
```

### Accent Colors
```tsx
<h1 className="accent-red">Red text</h1>
<div className="bg-accent-blue">Blue background</div>
```

### Dividers
```tsx
<Separator />  {/* Standard */}
<div className="divider-brutalist"></div>  {/* Bold 2px */}
```

---

## 📦 Available Components

### Blog Components (Custom Built)
- ArticleCard
- ArticleLayout
- BlogFooter
- BlogGrid
- BlogHeader
- CTASection
- FeaturedWork
- HeroSection
- ProjectsPage (example)

### Radix UI Components (Pre-installed)
- Accordion
- Alert & Alert Dialog
- Avatar
- Badge
- Breadcrumb
- Button
- Calendar
- Card
- Carousel
- Chart
- Checkbox
- Collapsible
- Command
- Context Menu
- Dialog
- Drawer
- Dropdown Menu
- Form
- Hover Card
- Input & Input OTP
- Label
- Menubar
- Navigation Menu
- Pagination
- Popover
- Progress
- Radio Group
- Resizable
- Scroll Area
- Select
- Separator
- Sheet
- Sidebar
- Skeleton
- Slider
- Sonner (Toast)
- Switch
- Table
- Tabs
- Textarea
- Toggle & Toggle Group
- Tooltip

All in `/src/app/components/ui/`

---

## 🎓 Learning Path

1. **Explore the live examples**
   - Switch between the 4 tabs
   - See how components are composed

2. **Study ProjectsPage.tsx**
   - See how to build a complete page
   - Notice the component imports
   - Observe the design patterns

3. **Read HOW_TO_BUILD_PAGES.md**
   - Step-by-step instructions
   - Code examples
   - Common patterns

4. **Check Components tab**
   - Visual reference for all components
   - Copy/paste code snippets
   - See variants and options

5. **Build your first page**
   - Start simple (About page)
   - Import components you need
   - Follow the spacing/color system

---

## 🎯 Next Steps

### Customize
1. Edit colors in `/src/styles/theme.css`
2. Update placeholder content in components
3. Add your name/logo in header/footer

### Extend
1. Create new page components
2. Add them as tabs in App.tsx
3. Mix and match existing components

### Deploy
1. Replace demo content with real content
2. Connect newsletter signup forms
3. Add routing (React Router, Next.js, etc.)
4. Deploy to Vercel, Netlify, etc.

---

## 📝 Example: Building an About Page

```tsx
// /src/app/components/AboutPage.tsx

import { BlogHeader } from "@/app/components/BlogHeader";
import { BlogFooter } from "@/app/components/BlogFooter";
import { Separator } from "@/app/components/ui/separator";

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
          <p className="text-xl text-muted-foreground leading-relaxed">
            Software engineer turned business leader.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding-lg">
        <div className="container-reading prose">
          <h2>Background</h2>
          <p>Your story here...</p>

          <Separator className="my-12" />

          <h2>What I Do</h2>
          <p>Your work here...</p>
        </div>
      </section>

      <BlogFooter />
    </>
  );
}
```

Then add to App.tsx and you're done!

---

## 💡 Tips

✓ **Components are already styled** - Just import and use  
✓ **Follow the spacing system** - 4, 8, 12, 16, 24, 32  
✓ **Keep color minimal** - Mostly black/white  
✓ **Use accent colors sparingly** - 5% of the page max  
✓ **Generous padding** - When in doubt, add more space  
✓ **Check live examples** - See patterns in action  

---

## 🤝 Support

- **Components tab**: Visual reference with code
- **COMPONENT_LIBRARY.md**: Full component docs
- **HOW_TO_BUILD_PAGES.md**: Step-by-step guide
- **DESIGN_SYSTEM.md**: Design principles

---

## 🎉 You're Ready!

You have a complete, modular design system. Every component is styled, documented, and ready to use. Just import, compose, and build beautiful blog pages.

**Start exploring the tabs above and see your design system in action!**
