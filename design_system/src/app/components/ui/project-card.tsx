import * as React from "react";
import { cn } from "./utils";

interface ProjectCardProps extends React.ComponentProps<"div"> {
  title: string;
  description: string;
  year?: string;
  tags?: string[];
  size?: "small" | "medium" | "large";
  variant?: "default" | "outline" | "filled";
}

function ProjectCard({
  className,
  title,
  description,
  year,
  tags,
  size = "medium",
  variant = "default",
  ...props
}: ProjectCardProps) {
  return (
    <div
      data-slot="project-card"
      className={cn(
        "group cursor-pointer p-6 h-full flex flex-col relative",
        "transition-all duration-300",
        "hover:z-10 hover:scale-105 hover:-translate-y-1",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:shadow-[4px_8px_16px_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.5)]",
        size === "small" && "p-4",
        size === "medium" && "p-5",
        size === "large" && "p-6",
        variant === "default" && "bg-card hover:bg-secondary/10",
        variant === "outline" && "bg-muted/30 hover:bg-secondary/10",
        variant === "filled" && "bg-muted hover:bg-secondary/15",
        className,
      )}
      style={{
        transformStyle: 'preserve-3d',
      }}
      {...props}
    >
      {/* Year badge - corner */}
      {year && (
        <div className="text-[10px] font-mono text-muted-foreground/60 mb-2 uppercase tracking-wider">
          {year}
        </div>
      )}

      {/* Title */}
      <h4 className={cn(
        "font-black leading-tight group-hover:text-secondary transition-colors",
        size === "small" && "text-sm mb-2",
        size === "medium" && "text-base md:text-lg mb-2",
        size === "large" && "text-lg md:text-xl mb-3"
      )}>
        {title}
      </h4>

      {/* Description */}
      <p className={cn(
        "text-muted-foreground leading-relaxed flex-1",
        size === "small" && "text-xs",
        size === "medium" && "text-xs md:text-sm",
        size === "large" && "text-sm"
      )}>
        {description}
      </p>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-3 text-[9px] font-mono text-muted-foreground/50 uppercase tracking-wider">
          {tags.join(" · ")}
        </div>
      )}
    </div>
  );
}

export { ProjectCard };
export type { ProjectCardProps };
