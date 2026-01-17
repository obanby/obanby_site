import { Badge } from "@/app/components/ui/badge";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category?: string;
  featured?: boolean;
}

export function ArticleCard({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  category,
  featured = false 
}: ArticleCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="space-y-4">
        {/* Meta */}
        <div className="flex items-center gap-3">
          <time className="text-sm text-muted-foreground font-mono">
            {date}
          </time>
          <span className="text-muted-foreground">·</span>
          <span className="text-sm text-muted-foreground font-mono">
            {readTime}
          </span>
          {category && (
            <>
              <span className="text-muted-foreground">·</span>
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
            </>
          )}
          {featured && (
            <Badge variant="secondary" className="text-xs ml-auto">
              Featured
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="group-hover:text-secondary transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground leading-relaxed">
          {excerpt}
        </p>

        {/* Read More */}
        <div className="pt-2">
          <span className="text-sm border-b-2 border-foreground group-hover:text-secondary transition-colors">
            Read article →
          </span>
        </div>
      </div>
    </article>
  );
}
