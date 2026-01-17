import { cn } from "@/app/components/ui/utils";

interface HighlighterProps {
  children: React.ReactNode;
  className?: string;
}

export function Highlighter({ children, className }: HighlighterProps) {
  return (
    <span
      className={cn(
        "bg-accent-yellow px-1 py-0.5 inline-block",
        className
      )}
    >
      {children}
    </span>
  );
}
