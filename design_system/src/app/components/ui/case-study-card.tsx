import * as React from "react";
import { cn } from "./utils";
import { Button } from "./button";

interface CaseStudyCardProps extends React.ComponentProps<"div"> {
  number?: string;
  title: string;
  description: string;
  variant?: "default" | "glass";
}

function CaseStudyCard({
  className,
  number,
  title,
  description,
  variant = "glass",
  ...props
}: CaseStudyCardProps) {
  return (
    <div
      data-slot="case-study-card"
      className={cn(
        "group relative overflow-hidden border-2 border-foreground",
        // Liquid glass effect - subtle gradient background with layering
        variant === "glass" && [
          "bg-gradient-to-br from-background via-card to-muted/30",
          "before:absolute before:inset-0 before:bg-gradient-to-tr before:from-secondary/5 before:via-transparent before:to-secondary/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
          "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_120%,rgba(139,38,53,0.1),transparent_50%)] after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100",
        ],
        variant === "default" && "bg-card",
        "shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_0_rgba(139,38,53,0.3)] transition-all duration-300",
        "hover:-translate-x-1 hover:-translate-y-1",
        className,
      )}
      {...props}
    >
      <div className="relative z-10 p-8 md:p-10 space-y-6">
        {/* Optional large number - floating effect */}
        {number && (
          <div className="absolute top-4 right-4 text-[120px] md:text-[160px] font-black leading-none text-secondary/10 select-none transition-all duration-500 group-hover:text-secondary/20 group-hover:scale-110">
            {number}
          </div>
        )}

        {/* Content container */}
        <div className="relative space-y-4">
          {/* Title with liquid underline */}
          <div className="relative inline-block">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight">
              {title}
            </h3>
            <div className="absolute -bottom-1 left-0 h-1 bg-secondary w-0 group-hover:w-full transition-all duration-500 ease-out" />
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
            {description}
          </p>
        </div>

        {/* Read more button - floats up on hover */}
        <div className="pt-4 transform transition-all duration-300 group-hover:translate-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="border-2 border-foreground px-4 py-2 font-bold uppercase text-xs tracking-wider hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:shadow-[3px_3px_0_0_rgba(139,38,53,1)]"
          >
            Read Case Study →
          </Button>
        </div>

        {/* Glass reflection effect - diagonal line */}
        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000 ease-out pointer-events-none" />
      </div>
    </div>
  );
}

export { CaseStudyCard };
export type { CaseStudyCardProps };
