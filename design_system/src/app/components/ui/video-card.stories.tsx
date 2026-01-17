import { VideoCard } from "./video-card";

export const Default = () => (
  <div className="max-w-2xl">
    <VideoCard
      title="Building Design Systems at Scale"
      creator="Tech Conference 2024"
      note="A deep dive into component architecture, design tokens, and organizational adoption strategies."
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    />
  </div>
);

export const WithArticleLink = () => (
  <div className="max-w-2xl">
    <VideoCard
      title="The Future of Web Development"
      creator="React Summit 2024"
      note="Exploring modern frameworks, server components, and the evolution of frontend architecture."
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      articleUrl="#"
      articleTitle="Read what I think"
    />
  </div>
);

export const Small = () => (
  <div className="max-w-xl">
    <VideoCard
      title="Quick Tech Talk"
      creator="Podcast Interview"
      note="15-minute discussion on engineering leadership."
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      size="small"
    />
  </div>
);

export const Medium = () => (
  <div className="max-w-2xl">
    <VideoCard
      title="Conference Keynote"
      creator="Design Systems Summit"
      note="45-minute keynote on scaling design systems across organizations."
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      size="medium"
    />
  </div>
);

export const Large = () => (
  <div className="max-w-3xl">
    <VideoCard
      title="Workshop: Advanced React Patterns"
      creator="Frontend Masters"
      note="Comprehensive workshop covering hooks, context, performance optimization, and architectural patterns for large-scale applications."
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      size="large"
      articleUrl="#"
    />
  </div>
);

export const DarkVariant = () => (
  <div className="max-w-2xl">
    <VideoCard
      title="Technical Deep Dive"
      creator="Engineering Blog"
      note="Video walkthrough of the technical implementation and architectural decisions."
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      variant="dark"
      articleUrl="#"
    />
  </div>
);

export const MinimalInfo = () => (
  <div className="max-w-2xl">
    <VideoCard
      title="Just a Title"
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    />
  </div>
);

export const CustomArticleTitle = () => (
  <div className="max-w-2xl">
    <VideoCard
      title="My Take on TypeScript"
      creator="Personal Video"
      note="Why TypeScript changed how I think about code quality and developer experience."
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      articleUrl="#"
      articleTitle="Read the full essay →"
    />
  </div>
);

export const VerticalStack = () => (
  <div className="max-w-2xl space-y-4">
    <VideoCard
      title="Video 1: Introduction"
      creator="Course Series"
      note="Getting started with the fundamentals."
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      size="small"
    />
    <VideoCard
      title="Video 2: Advanced Techniques"
      creator="Course Series"
      note="Deep dive into advanced patterns and practices."
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      size="small"
    />
    <VideoCard
      title="Video 3: Real-world Examples"
      creator="Course Series"
      note="Applying concepts to production applications."
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      size="small"
      articleUrl="#"
    />
  </div>
);

export const GridLayout = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl">
    <VideoCard
      title="Conference Talk 2024"
      creator="Tech Summit"
      note="Building systems that scale across organizations."
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      articleUrl="#"
    />
    <VideoCard
      title="Podcast Episode"
      creator="Engineering Podcast"
      note="Discussion on leadership and technical strategy."
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    />
    <VideoCard
      title="Workshop Recording"
      creator="Internal Training"
      note="Team workshop on React best practices."
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      variant="dark"
    />
    <VideoCard
      title="Lightning Talk"
      creator="Meetup"
      note="Quick 10-minute overview of key concepts."
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      articleUrl="#"
      articleTitle="Read my notes →"
    />
  </div>
);

export const InSection = () => (
  <section className="section-padding-lg bg-muted">
    <div className="container-content">
      <div className="mb-16">
        <h2 className="mb-4">Talks & Appearances</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Selected presentations and interviews on engineering, leadership, and building products.
        </p>
      </div>

      <div className="space-y-6 max-w-3xl">
        <VideoCard
          title="The Engineer's Guide to Technical Leadership"
          creator="Tech Conference 2024"
          note="Making the transition from writing code to leading teams. What changes, what stays the same, and what you need to unlearn."
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          articleUrl="#"
        />
        <VideoCard
          title="Building Design Systems That Scale"
          creator="Design Systems Summit 2024"
          note="Lessons from implementing component libraries across multiple products. The technical decisions and organizational challenges."
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          articleUrl="#"
          articleTitle="Read the case study →"
        />
        <VideoCard
          title="Podcast: From Code to Strategy"
          creator="Engineering Leaders Podcast"
          note="Hour-long conversation about career transitions, technical decision-making, and building high-performing teams."
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        />
      </div>
    </div>
  </section>
);

export const MixedSizes = () => (
  <div className="space-y-6 max-w-4xl">
    <div>
      <h3 className="text-lg font-bold mb-4">Small Size</h3>
      <VideoCard
        title="Quick Tip"
        creator="Short Video"
        note="Brief explanation of a concept."
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="small"
      />
    </div>

    <div>
      <h3 className="text-lg font-bold mb-4">Medium Size (Default)</h3>
      <VideoCard
        title="Standard Presentation"
        creator="Conference Talk"
        note="30-minute presentation on technical topics with detailed examples."
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="medium"
      />
    </div>

    <div>
      <h3 className="text-lg font-bold mb-4">Large Size</h3>
      <VideoCard
        title="Deep Dive Workshop"
        creator="Training Series"
        note="Comprehensive 2-hour workshop covering advanced techniques, architectural patterns, and real-world implementations."
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="large"
        articleUrl="#"
      />
    </div>
  </div>
);

export const AllVariants = () => (
  <div className="space-y-8 max-w-3xl">
    <div>
      <h3 className="text-lg font-bold mb-4">Default Variant</h3>
      <VideoCard
        title="Light Background Card"
        creator="Video Creator"
        note="Standard light background with dark text for typical page contexts."
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        variant="default"
        articleUrl="#"
      />
    </div>

    <div>
      <h3 className="text-lg font-bold mb-4">Dark Variant</h3>
      <VideoCard
        title="Dark Background Card"
        creator="Video Creator"
        note="Inverted dark background with light text for special sections or emphasis."
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        variant="dark"
        articleUrl="#"
      />
    </div>
  </div>
);

export const Controlled = ({
  title = "Video Title",
  creator = "Creator Name",
  note = "This is a video card with interactive controls. Adjust the properties to see different configurations.",
  size = "medium",
  variant = "default",
  showCreator = true,
  showNote = true,
  showArticleLink = false,
}: {
  title?: string;
  creator?: string;
  note?: string;
  size?: "small" | "medium" | "large";
  variant?: "default" | "dark";
  showCreator?: boolean;
  showNote?: boolean;
  showArticleLink?: boolean;
}) => (
  <div className="max-w-3xl">
    <VideoCard
      title={title}
      creator={showCreator ? creator : undefined}
      note={showNote ? note : undefined}
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      articleUrl={showArticleLink ? "#" : undefined}
      size={size}
      variant={variant}
    />
  </div>
);
