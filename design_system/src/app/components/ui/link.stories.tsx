import { Link } from "./link";

export const Default = () => (
  <div className="space-y-4">
    <p className="text-base">
      This is a paragraph with a <Link href="#">default link</Link> in the middle.
    </p>
  </div>
);

export const WithArrow = () => (
  <div className="space-y-4">
    <p className="text-base">
      <Link href="#" arrow>
        or see what I'm working on
      </Link>
    </p>
    <p className="text-base">
      <Link href="#" arrow size="sm">
        Read more
      </Link>
    </p>
  </div>
);

export const Sizes = () => (
  <div className="space-y-4">
    <div>
      <Link href="#" size="sm">
        Small link (14px)
      </Link>
    </div>
    <div>
      <Link href="#" size="default">
        Default link (16px)
      </Link>
    </div>
    <div>
      <Link href="#" size="lg">
        Large link (18px)
      </Link>
    </div>
  </div>
);

export const Variants = () => (
  <div className="space-y-4">
    <div>
      <Link href="#" variant="default">
        Default variant (gray on hover)
      </Link>
    </div>
    <div>
      <Link href="#" variant="accent">
        Accent variant (maroon on hover)
      </Link>
    </div>
    <div>
      <Link href="#" variant="secondary">
        Secondary variant (maroon text)
      </Link>
    </div>
    <div>
      <Link href="#" variant="muted">
        Muted variant (starts gray, black on hover)
      </Link>
    </div>
  </div>
);

export const Underline = () => (
  <div className="space-y-4">
    <div>
      <Link href="#" underline="none">
        No underline
      </Link>
    </div>
    <div>
      <Link href="#" underline="hover">
        Underline on hover
      </Link>
    </div>
    <div>
      <Link href="#" underline="always">
        Always underlined
      </Link>
    </div>
  </div>
);

export const InParagraph = () => (
  <div className="max-w-2xl space-y-6">
    <p className="text-base leading-relaxed">
      The path from engineer to technical leader isn't a straight line. For more details,{" "}
      <Link href="#" variant="accent">
        read the full guide
      </Link>{" "}
      or{" "}
      <Link href="#" arrow>
        see related articles
      </Link>
      .
    </p>

    <p className="text-base leading-relaxed">
      Want to learn more about design systems?{" "}
      <Link href="#" variant="secondary" underline="hover">
        Check out our component library
      </Link>{" "}
      or{" "}
      <Link href="#" variant="muted">
        join our community
      </Link>
      .
    </p>
  </div>
);

export const CTAStyle = () => (
  <div className="space-y-6">
    <div>
      <Link href="#" size="lg" variant="accent" arrow>
        Get started now
      </Link>
    </div>
    <div>
      <Link href="#" size="default" variant="default" arrow>
        or see what I'm working on
      </Link>
    </div>
    <div>
      <Link href="#" size="sm" variant="muted" arrow>
        Learn more
      </Link>
    </div>
  </div>
);

export const Navigation = () => (
  <nav className="space-y-3">
    <div>
      <Link href="#" variant="default">
        Writing
      </Link>
    </div>
    <div>
      <Link href="#" variant="accent">
        Projects
      </Link>
    </div>
    <div>
      <Link href="#" variant="secondary">
        About
      </Link>
    </div>
    <div>
      <Link href="#" variant="muted">
        Contact
      </Link>
    </div>
  </nav>
);

export const Footer = () => (
  <footer className="space-y-8 max-w-4xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h4 className="font-bold mb-4">Navigate</h4>
        <div className="space-y-2">
          <div>
            <Link href="#" variant="default">
              Writing
            </Link>
          </div>
          <div>
            <Link href="#" variant="default">
              Projects
            </Link>
          </div>
          <div>
            <Link href="#" variant="default">
              About
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-bold mb-4">Social</h4>
        <div className="space-y-2">
          <div>
            <Link href="#" variant="secondary">
              Twitter
            </Link>
          </div>
          <div>
            <Link href="#" variant="secondary">
              GitHub
            </Link>
          </div>
          <div>
            <Link href="#" variant="secondary">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-bold mb-4">More</h4>
        <div className="space-y-2">
          <div>
            <Link href="#" variant="muted" arrow>
              Newsletter
            </Link>
          </div>
          <div>
            <Link href="#" variant="muted" arrow>
              RSS Feed
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export const InlineWithText = () => (
  <div className="max-w-2xl space-y-6">
    <h2 className="text-2xl font-bold">Making the Leap</h2>

    <p className="text-base leading-relaxed">
      If you're considering the move from engineer to leader, here's my advice: start before
      you have the title. Lead projects. Mentor junior engineers.{" "}
      <Link href="#" variant="accent" underline="hover">
        Write design docs
      </Link>
      . Build consensus. These are all leadership skills you can practice while still writing code.
    </p>

    <p className="text-base leading-relaxed">
      Want to dive deeper?{" "}
      <Link href="#" size="default" variant="accent" arrow>
        Read the complete guide
      </Link>
    </p>
  </div>
);

export const ExternalLinks = () => (
  <div className="space-y-4">
    <div>
      <Link href="https://github.com" target="_blank" rel="noopener noreferrer" variant="secondary">
        GitHub (opens in new tab)
      </Link>
    </div>
    <div>
      <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" variant="secondary">
        Twitter (opens in new tab)
      </Link>
    </div>
    <div>
      <Link
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        variant="default"
        arrow
      >
        External resource
      </Link>
    </div>
  </div>
);

export const AllExamples = () => (
  <div className="max-w-3xl space-y-12">
    <section>
      <h3 className="text-xl font-bold mb-4">Basic Links</h3>
      <div className="space-y-2">
        <div>
          <Link href="#">Default link</Link>
        </div>
        <div>
          <Link href="#" arrow>
            Link with arrow
          </Link>
        </div>
      </div>
    </section>

    <section>
      <h3 className="text-xl font-bold mb-4">Color Variants</h3>
      <div className="space-y-2">
        <div>
          <Link href="#" variant="default">
            Default (gray on hover)
          </Link>
        </div>
        <div>
          <Link href="#" variant="accent">
            Accent (red on hover)
          </Link>
        </div>
        <div>
          <Link href="#" variant="secondary">
            Blue
          </Link>
        </div>
        <div>
          <Link href="#" variant="secondary">
            Red
          </Link>
        </div>
      </div>
    </section>

    <section>
      <h3 className="text-xl font-bold mb-4">In Context</h3>
      <p className="text-base leading-relaxed">
        This is a paragraph with{" "}
        <Link href="#" variant="accent">
          an accent link
        </Link>{" "}
        and{" "}
        <Link href="#" variant="secondary">
          a blue link
        </Link>
        . You can also add{" "}
        <Link href="#" arrow>
          arrows to links
        </Link>{" "}
        for CTAs.
      </p>
    </section>
  </div>
);

export const Controlled = ({
  text = "Click me",
  variant = "default",
  size = "default",
  arrow = false,
  underline = "none",
}: {
  text?: string;
  variant?: "default" | "accent" | "secondary" | "muted";
  size?: "sm" | "default" | "lg";
  arrow?: boolean;
  underline?: "none" | "hover" | "always";
}) => (
  <div className="max-w-2xl">
    <p className="text-base leading-relaxed">
      This is a paragraph with a{" "}
      <Link href="#" variant={variant} size={size} arrow={arrow} underline={underline}>
        {text}
      </Link>{" "}
      that you can customize using the controls.
    </p>
  </div>
);
