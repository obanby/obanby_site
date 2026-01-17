# ADR 001: Content Management Strategy for Essays

**Date**: 2026-01-17
**Status**: Accepted
**Decision Makers**: Site Owner

---

## Context

Building a personal blog/portfolio site with a warm editorial design system (maroon accent, cream backgrounds, 50+ React components). Need to determine the best approach for managing and publishing written content (essays, articles, blog posts).

### Requirements

1. **Creative Control**: Each essay should allow unique styling and layouts
2. **Component Usage**: Ability to use custom design system components (VideoCard, CaseStudyCard, Callout, CodeBlock, etc.) within essays
3. **Ease of Writing**: Convenient drafting and publishing workflow
4. **Performance**: Should not impact page load times as content grows
5. **Scalability**: Support for 100+ essays without performance degradation

### Constraints

- Using Next.js with server-side rendering (SSR)
- Have invested heavily in custom design system components
- Want editorial flexibility, not template-locked content
- Solo author (no need for multi-user CMS collaboration)

---

## Decision

**Use MDX files with Next.js App Router for full creative control over each essay.**

### Approach

1. **Content Format**: MDX (Markdown + JSX components)
2. **Storage**: Files in repository (`/content/` or `/app/essays/[slug]/page.tsx`)
3. **Styling**: Direct access to all design system components
4. **Publishing**: Git commit → deploy (via Vercel/similar)
5. **Metadata**: Frontmatter in MDX files for categorization

### Writing Workflow

```
1. Draft essay in any editor (Notion, iA Writer, VS Code, etc.)
2. Create MDX file in /content/ or /app/essays/[slug]/
3. Add frontmatter metadata (title, date, category, featured, tags)
4. Style with design system components as desired
5. Git commit and push
6. Automatic deployment
```

### Example Structure

```typescript
// /app/essays/[slug]/page.tsx
import { ArticleLayout } from '@/components/ArticleLayout';
import { Callout } from '@/components/ui/callout';
import { CodeBlock } from '@/components/ui/code-block';

export default function Essay() {
  return (
    <ArticleLayout
      title="The Engineer's Guide to Technical Leadership"
      date="2026-01-15"
      category="Leadership"
    >
      <p>Content with full creative control...</p>

      <Callout variant="info" title="Key Insight">
        Custom components anywhere!
      </Callout>

      <CodeBlock language="typescript">
        // Code examples with syntax highlighting
      </CodeBlock>
    </ArticleLayout>
  );
}
```

Or with MDX:
```mdx
---
title: "Technical Leadership"
date: "2026-01-15"
category: "Leadership"
featured: true
---

<ArticleLayout>
  Content here...

  <Callout variant="warning" title="Important">
    Full component access!
  </Callout>
</ArticleLayout>
```

---

## Options Considered

### Option 1: MDX + Git (CHOSEN)

**Pros:**
- ✅ Full creative control - use ANY component per essay
- ✅ Version controlled (Git history)
- ✅ No database or API complexity
- ✅ Fast builds with Vite/Next.js
- ✅ Free (no CMS subscription)
- ✅ Can automate publishing (Git → deploy)
- ✅ Simple architecture

**Cons:**
- ❌ Need to rebuild/deploy for new content (acceptable with auto-deploy)
- ❌ Not friendly for non-technical collaborators (not needed - solo author)

### Option 2: Headless CMS (Contentful/Sanity/Strapi)

**Pros:**
- ✅ Visual editing interface
- ✅ API-driven (could build mobile app)
- ✅ Easy for non-technical users

**Cons:**
- ❌ Creative constraints (limited to predefined block types)
- ❌ Complex setup (content modeling, API integration)
- ❌ Monthly costs ($20-100+)
- ❌ Need to map every component type
- ❌ Loses the benefit of custom design system
- ❌ Overkill for solo author

### Option 3: Hybrid (MDX + Lightweight Metadata UI)

**Pros:**
- ✅ Creative freedom in MDX
- ✅ UI for metadata management (Tina/Decap CMS)
- ✅ Version controlled

**Cons:**
- ❌ Metadata in two places (frontmatter + external)
- ❌ Added complexity for minimal benefit
- ❌ Still requires rebuilds

### Option 4: Notion API

**Pros:**
- ✅ Best writing experience
- ✅ Easy categorization (database properties)
- ✅ Mobile writing support

**Cons:**
- ❌ Limited to Notion's block types
- ❌ Complex mapping of Notion blocks → custom components
- ❌ Loses creative styling flexibility
- ❌ API rate limits and build-time dependencies

---

## Rationale

### Why MDX + Git Wins

**1. Aligns with Investment**
We've built a sophisticated design system with unique components (VideoCard, CaseStudyCard, Collage, etc.). MDX is the ONLY option that lets us use these freely.

**2. Next.js SSR Makes It Perfect**
- Each essay is a separate route
- Server-rendered → SEO optimized
- Only requested essay loads (zero bundle impact)
- Can have unlimited essays without performance penalty
- Static generation possible for even faster loads

**3. Creative Freedom**
One essay can use:
```tsx
<HeroSection custom={true} />
<VideoCard />
<Collage with ProjectCards />
```

Another essay can be:
```tsx
<SimpleArticleLayout>
  Just markdown with occasional <Highlighter>
</SimpleArticleLayout>
```

Each essay is its own creative canvas.

**4. Simple Architecture**
- No CMS to maintain
- No API to secure
- No database to back up
- No monthly costs
- Just files in Git

**5. Deployment Automation**
With Vercel/Netlify:
```
Git push → Automatic build → Live in 2 minutes
```

Same "write once, publish" convenience as CMS, but with full control.

### Trade-offs Accepted

**Rebuild on Publish:**
This is acceptable because:
- Modern build tools are fast (Next.js builds in seconds)
- Auto-deployment means it's invisible to workflow
- Getting a 2-minute delay for unlimited creative freedom is worth it
- Static generation makes the site blazing fast for readers

**No Visual Editor:**
This is acceptable because:
- Solo author (technical, comfortable with code/MDX)
- Can draft in any tool (Notion, VS Code, iA Writer)
- MDX is readable markdown - not intimidating
- Could add Tina CMS later if needed (works with MDX)

---

## Implementation Notes

### Recommended Setup

**1. Directory Structure:**
```
/app/
  essays/
    [slug]/
      page.tsx          # Server component

/content/
  technical-leadership.mdx
  design-systems.mdx
  metadata.ts           # Type-safe metadata export

/lib/
  essays.ts            # Utilities to load/parse MDX
```

**2. MDX Configuration:**
```typescript
// next.config.js
import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
})
```

**3. Metadata Schema:**
```typescript
interface EssayMetadata {
  title: string;
  slug: string;
  date: string;
  category: "Leadership" | "Engineering" | "Design" | "Strategy";
  featured?: boolean;
  tags?: string[];
  readTime?: string;
  excerpt?: string;
}
```

### Future Enhancements (Optional)

- **Tina CMS**: Add visual editing later if desired (works with MDX + Git)
- **Search**: Add Algolia/Fuse.js for essay search
- **RSS Feed**: Auto-generate from essay metadata
- **Related Essays**: Algorithm based on tags/categories
- **Reading Progress**: Track scroll position
- **Comments**: Add Giscus (GitHub-based) if desired

---

## Consequences

### Positive

1. **Unlimited Creative Freedom**: Every essay can be uniquely styled
2. **Component Reuse**: All design system components available
3. **Performance**: Zero impact on bundle size as content grows
4. **Simple Stack**: No database, no CMS, just files
5. **Version Control**: Full content history in Git
6. **Fast Builds**: Next.js optimized for MDX
7. **SEO Optimized**: Server-rendered HTML for every essay

### Negative

1. **Rebuild Required**: Content changes require deployment (mitigated by auto-deploy)
2. **No Visual Editor**: Need to be comfortable with MDX (acceptable for technical author)
3. **Manual Categorization**: Need to maintain frontmatter consistently

### Neutral

1. **Git-Based Workflow**: Familiar for developers, less so for non-technical (not a concern here)
2. **Static vs Dynamic**: Content is static at build time (matches blog use case)

---

## Validation

This decision will be validated by:
- Successfully publishing first 5 essays with diverse layouts
- Measuring build/deploy time (should be <2 minutes)
- Confirming component usage flexibility
- Monitoring site performance with 20+ essays

---

## Related Decisions

- **Next.js Framework**: Chosen for SSR capabilities
- **Warm Editorial Design System**: Built to support rich, varied content
- **Component-First Approach**: All components designed for content composition

---

## References

- [Next.js MDX Documentation](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
- [MDX Documentation](https://mdxjs.com/)
- [Vercel Auto-Deployment](https://vercel.com/docs/deployments/git)

---

## Notes

**Why Not CMS:**
The design system includes specialized components (VideoCard for talks, CaseStudyCard for projects, Collage for portfolios). These components are meant to be composed creatively - something headless CMSs can't easily support without significant mapping/configuration overhead.

**The "Write Once, Publish" Goal:**
Achieved via:
1. Auto-deployment (Git push → live)
2. MDX = just markdown (write in any editor)
3. Components imported as needed (not complex)

The "convenience" of a CMS (visual editor, click publish) is matched by:
- Draft anywhere → paste into MDX → git push
- 2-minute auto-deployment
- No CMS login, no UI complexity

**Future-Proof:**
If needs change (multiple authors, non-technical collaborators), can add:
- Tina CMS (Git-backed, works with MDX)
- Decap CMS (Git-backed, free)
- Sanity/Contentful (migrate MDX → structured content)

The MDX approach doesn't lock us in - it's actually the most portable format.
