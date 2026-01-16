import { CodeBlock } from "./code-block";

export const Default = () => (
  <CodeBlock>
{`function hello() {
  console.log("Hello, World!");
  return true;
}`}
  </CodeBlock>
);

export const WithLanguage = () => (
  <CodeBlock language="go">
{`interface Reader {
  func Read([]bytes) error
}
`}
  </CodeBlock>
);

export const WithLineNumbers = () => (
  <CodeBlock language="javascript" showLineNumbers>
{`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(10);
console.log(result);`}
  </CodeBlock>
);

export const OutlineVariant = () => (
  <CodeBlock variant="outline" language="css">
{`.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.button {
  background: #000;
  color: #fff;
  border: 2px solid #000;
}`}
  </CodeBlock>
);

export const MinimalVariant = () => (
  <CodeBlock variant="minimal">
{`npm install @radix-ui/react-dialog
npm install class-variance-authority
npm install tailwind-merge`}
  </CodeBlock>
);

export const LongCode = () => (
  <CodeBlock language="tsx" showLineNumbers>
{`import * as React from "react";
import { cn } from "./utils";

export interface ButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center",
          "font-semibold transition-colors",
          "focus-visible:outline-none focus-visible:ring-2",
          className
        )}
        {...props}
      />
    );
  }
);`}
  </CodeBlock>
);

export const AllVariants = () => (
  <div className="space-y-8 max-w-3xl">
    <div>
      <h3 className="text-xl font-bold mb-4">Default (Inverted)</h3>
      <CodeBlock language="javascript">
{`const greeting = "Hello, World!";
console.log(greeting);`}
      </CodeBlock>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-4">Outline</h3>
      <CodeBlock variant="outline" language="python">
{`def greet(name):
    print(f"Hello, {name}!")

greet("World")`}
      </CodeBlock>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-4">Minimal</h3>
      <CodeBlock variant="minimal">
{`git add .
git commit -m "Add new feature"
git push origin main`}
      </CodeBlock>
    </div>
  </div>
);
