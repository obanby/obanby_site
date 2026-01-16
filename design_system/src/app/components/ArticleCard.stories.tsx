import { ArticleCard } from './ArticleCard';

export const Default = () => (
  <div className="max-w-[600px]">
    <ArticleCard
      title="The Engineer's Guide to Technical Leadership"
      excerpt="Making the transition from writing code to leading teams. What changes, what stays the same, and what you need to unlearn."
      date="Jan 16, 2026"
      readTime="8 min read"
    />
  </div>
);

export const WithCategory = () => (
  <div className="max-w-[600px]">
    <ArticleCard
      title="Building Design Systems at Scale"
      excerpt="Lessons from implementing component libraries across multiple products. The technical decisions, organizational challenges, and unexpected wins."
      date="Jan 10, 2026"
      readTime="12 min read"
      category="Systems"
    />
  </div>
);

export const Featured = () => (
  <div className="max-w-[600px]">
    <ArticleCard
      title="Why Brutalism Works for Technical Content"
      excerpt="Exploring the intersection of brutalist design and technical writing. How stark simplicity can enhance clarity and comprehension."
      date="Jan 5, 2026"
      readTime="6 min read"
      category="Design"
      featured={true}
    />
  </div>
);

export const LongTitle = () => (
  <div className="max-w-[600px]">
    <ArticleCard
      title="How to Build Scalable, Maintainable, and Production-Ready Web Applications Using Modern React Patterns"
      excerpt="A comprehensive guide to building web applications that stand the test of time."
      date="Dec 28, 2025"
      readTime="15 min read"
      category="Engineering"
    />
  </div>
);
