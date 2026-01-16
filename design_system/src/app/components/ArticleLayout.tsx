import { Badge } from "@/app/components/ui/badge";
import { Separator } from "@/app/components/ui/separator";

interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  date: string;
  readTime: string;
  category?: string;
  children: React.ReactNode;
}

export function ArticleLayout({ 
  title, 
  subtitle, 
  date, 
  readTime, 
  category,
  children 
}: ArticleLayoutProps) {
  return (
    <article className="section-padding-lg">
      <div className="container-reading">
        {/* Header */}
        <header className="mb-16">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-8">
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
          </div>

          {/* Title */}
          <h1 className="mb-6">{title}</h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="text-2xl text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </header>

        <Separator className="mb-16" />

        {/* Content */}
        <div className="prose">
          {children}
        </div>
      </div>
    </article>
  );
}
