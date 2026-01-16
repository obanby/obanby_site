import * as React from "react";
import { cn } from "./utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  brutalistTheme,
  brutalistThemeOutline,
  brutalistThemeMinimal,
} from "./code-block-theme";

const codeBlockVariants = cva(
  "relative block w-full overflow-hidden font-mono text-sm",
  {
    variants: {
      variant: {
        default: "bg-[#282C34] text-[#ABB2BF] border-2 border-[#282C34]",
        outline: "bg-background text-foreground border-2 border-foreground",
        minimal: "bg-muted text-foreground border-l-4 border-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CodeBlockProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof codeBlockVariants> {
  language?: string;
  showLineNumbers?: boolean;
  children: string;
}

const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  ({ className, variant = "default", language = "text", showLineNumbers = false, children, ...props }, ref) => {
    // Select theme based on variant
    const themeMap = {
      default: brutalistTheme,
      outline: brutalistThemeOutline,
      minimal: brutalistThemeMinimal,
    };

    const selectedTheme = themeMap[variant];

    // Clean up the code string (remove leading/trailing whitespace)
    const code = typeof children === 'string' ? children.trim() : '';

    return (
      <div
        ref={ref}
        className={cn(codeBlockVariants({ variant }), "relative w-full", className)}
        {...props}
      >
        {language && language !== "text" && (
          <div className="absolute top-0 right-0 z-10 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider bg-background text-foreground border-2 border-t-0 border-r-0 border-foreground">
            {language}
          </div>
        )}
        <SyntaxHighlighter
          language={language}
          style={selectedTheme}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: "1rem",
            background: "transparent",
            fontSize: "0.875rem",
            lineHeight: "1.6",
          }}
          codeTagProps={{
            style: {
              fontFamily: "'JetBrains Mono', monospace",
            },
          }}
          lineNumberStyle={{
            minWidth: "2.5em",
            paddingRight: "1em",
            marginRight: "1em",
            color: variant === "default" ? "#5C6370" : "#666666",
            borderRight: variant === "default" ? "1px solid #3E4451" : "1px solid #E5E5E5",
            userSelect: "none",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    );
  }
);

CodeBlock.displayName = "CodeBlock";

export { CodeBlock, codeBlockVariants };
