import { ReactNode } from "react";

interface CollageContentItem {
  type: "content";
  content: ReactNode;
  colSpan?: string; // e.g., "col-span-1", "col-span-2 row-span-2"
}

interface CollageHeaderItem {
  type: "header";
  title: string;
  subtitle?: string;
}

type CollageItem = CollageContentItem | CollageHeaderItem;

interface CollageProps {
  items: CollageItem[];
  title?: string;
  subtitle?: string;
  footer?: ReactNode;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: number;
  className?: string;
}

export function Collage({
  items,
  title,
  subtitle,
  footer,
  columns = { mobile: 2, tablet: 4, desktop: 6 },
  gap = 0,
  className = ""
}: CollageProps) {
  const gridCols = `grid-cols-${columns.mobile} md:grid-cols-${columns.tablet} lg:grid-cols-${columns.desktop}`;
  const gridGap = gap === 0 ? "gap-0" : `gap-${gap}`;

  return (
    <section className={`section-padding-lg bg-background ${className}`}>
      <div className="container-content">
        {/* Header */}
        {title && (
          <div className="mb-8">
            <h3 className="mb-2">{title}</h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground font-mono">{subtitle}</p>
            )}
          </div>
        )}

        {/* Masonry Grid - Generic layout */}
        <div
          className={`grid ${gridCols} auto-rows-[minmax(120px,auto)] ${gridGap}`}
          style={{ gridAutoFlow: 'dense' }}
        >
          {items.map((item, index) => {
            // Header item - takes full row
            if (item.type === "header") {
              return (
                <div
                  key={index}
                  className={`col-span-${columns.mobile} md:col-span-${columns.tablet} lg:col-span-${columns.desktop} flex items-center py-6 md:py-8`}
                >
                  <div className="flex-1 border-t-2 border-foreground mr-4" />
                  <div className="text-center">
                    <h4 className="text-lg md:text-xl font-black uppercase tracking-tight">
                      {item.title}
                    </h4>
                    {item.subtitle && (
                      <p className="text-xs font-mono text-muted-foreground mt-1">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="flex-1 border-t-2 border-foreground ml-4" />
                </div>
              );
            }

            // Content item - regular grid item
            return (
              <div key={index} className={item.colSpan || "col-span-1"}>
                {item.content}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        {footer && (
          <div className="mt-8">
            {footer}
          </div>
        )}
      </div>
    </section>
  );
}

export type { CollageProps, CollageItem, CollageContentItem, CollageHeaderItem };
