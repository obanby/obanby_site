import * as React from "react";
import { cn } from "./utils";
import { cva, type VariantProps } from "class-variance-authority";

const calloutVariants = cva(
  "relative w-full border-2 p-4 font-medium",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-foreground",
        info: "bg-background text-accent-blue border-accent-blue border-l-[6px]",
        warning: "bg-background text-accent-red border-accent-red border-l-[6px]",
        error: "bg-accent-red text-background border-accent-red",
        success: "bg-foreground text-background border-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const calloutIconVariants = cva(
  "inline-flex items-center justify-center font-black text-base mr-2",
  {
    variants: {
      variant: {
        default: "text-foreground",
        info: "text-accent-blue",
        warning: "text-accent-red",
        error: "text-background",
        success: "text-background",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {
  icon?: React.ReactNode;
  title?: string;
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, variant, icon, title, children, ...props }, ref) => {
    const defaultIcons = {
      default: "ℹ",
      info: "ℹ",
      warning: "⚠",
      error: "✕",
      success: "✓",
    };

    const displayIcon = icon !== undefined ? icon : defaultIcons[variant || "default"];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(calloutVariants({ variant }), className)}
        {...props}
      >
        <div className="flex items-start gap-3">
          {displayIcon !== null && (
            <div className={cn(calloutIconVariants({ variant }), "flex-shrink-0 mt-0.5")}>
              {displayIcon}
            </div>
          )}
          <div className="flex-1">
            {title && (
              <div className="font-bold text-base mb-1 uppercase tracking-wide">
                {title}
              </div>
            )}
            <div className="text-sm leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Callout.displayName = "Callout";

export { Callout, calloutVariants };
