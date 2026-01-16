import { ArticleCard } from "@/app/components/ArticleCard";

const articles = [
  {
    title: "The Engineer's Guide to Technical Leadership",
    excerpt: "Making the transition from writing code to leading teams. What changes, what stays the same, and what you need to unlearn.",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    category: "Leadership",
    featured: true
  },
  {
    title: "Building Design Systems at Scale",
    excerpt: "Lessons from implementing component libraries across multiple products. The technical decisions, organizational challenges, and unexpected wins.",
    date: "Jan 10, 2026",
    readTime: "12 min read",
    category: "Systems"
  },
  {
    title: "Why Brutalism Works for Technical Content",
    excerpt: "Exploring the intersection of brutalist design and technical writing. How stark simplicity can enhance clarity and comprehension.",
    date: "Jan 5, 2026",
    readTime: "6 min read",
    category: "Design"
  },
  {
    title: "TypeScript Patterns I Actually Use",
    excerpt: "Beyond the basics. The type patterns and architectural decisions that have stood the test of time in production systems.",
    date: "Dec 28, 2025",
    readTime: "10 min read",
    category: "Engineering"
  },
  {
    title: "On Saying No",
    excerpt: "The hardest skill in leadership isn't saying yes to opportunities—it's saying no to protect what matters most.",
    date: "Dec 20, 2025",
    readTime: "5 min read",
    category: "Leadership"
  },
  {
    title: "Radix UI: A Love Letter",
    excerpt: "Why headless component libraries changed everything. Building accessible, customizable interfaces without compromising on developer experience.",
    date: "Dec 15, 2025",
    readTime: "7 min read",
    category: "Engineering"
  }
];

export function BlogGrid() {
  return (
    <section className="section-padding-lg bg-muted">
      <div className="container-content">
        {/* Header */}
        <div className="mb-20">
          <h2 className="mb-4">Latest Writing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Thoughts on engineering, leadership, and building products
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
