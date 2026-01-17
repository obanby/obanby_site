import * as React from "react";
import { cn } from "./utils";
import { cva, type VariantProps } from "class-variance-authority";

const linkVariants = cva(
  "border-b-0 transition-colors inline-flex items-center gap-1",
  {
    variants: {
      variant: {
        default: "text-foreground hover:text-muted-foreground",
        accent: "text-foreground hover:accent-red",
        muted: "text-muted-foreground hover:text-foreground",
        blue: "text-accent-blue hover:text-accent-blue/80",
        red: "text-accent-red hover:text-accent-red/80",
      },
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
      },
      underline: {
        none: "",
        hover: "hover:underline",
        always: "underline",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      underline: "none",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  arrow?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, underline, arrow = false, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(linkVariants({ variant, size, underline }), className)}
        {...props}
      >
        {children}
        {arrow && <span className="inline-block">→</span>}
      </a>
    );
  }
);

Link.displayName = "Link";

export { Link, linkVariants };
