import { Collage } from "./collage";
import { ProjectCard } from "./project-card";
import { Button } from "./button";
import { Badge } from "./badge";

export const WithProjectCards = () => {
  const items = [
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Design System"
          description="Component library serving 50+ products."
          year="2025"
          tags={["React", "TypeScript"]}
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Analytics Platform"
          description="Real-time dashboard with 1M+ events daily."
          year="2024"
          tags={["React", "Node.js"]}
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Mobile App"
          description="Cross-platform app with 100K users."
          year="2024"
          tags={["React Native"]}
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="API Gateway"
          description="Microservices gateway with auth."
          year="2023"
          tags={["Node.js", "Redis"]}
        />
      ),
    },
    {
      type: "header" as const,
      title: "Earlier Work",
      subtitle: "2022-2023",
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="CMS Platform"
          description="Headless CMS for editorial teams."
          year="2023"
          tags={["GraphQL", "MongoDB"]}
          variant="outline"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="E-commerce"
          description="Shopping platform with payments."
          year="2023"
          tags={["Next.js", "Stripe"]}
          variant="outline"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="DevOps Tools"
          description="CI/CD automation and monitoring."
          year="2022"
          tags={["Docker", "K8s"]}
          variant="filled"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Data Pipeline"
          description="ETL processing millions of records."
          year="2022"
          tags={["Python", "Airflow"]}
          variant="filled"
        />
      ),
    },
  ];

  return (
    <Collage
      title="All Projects"
      subtitle="A collection of technical work spanning design systems, infrastructure, and products"
      items={items}
      columns={{ mobile: 1, tablet: 2, desktop: 4 }}
      gap={4}
      footer={
        <div className="text-center pt-8">
          <Button variant="outline">View All Projects →</Button>
        </div>
      }
    />
  );
};

export const MixedContent = () => {
  const items = [
    {
      type: "content" as const,
      content: (
        <div className="bg-secondary text-secondary-foreground p-6 h-full flex items-center justify-center">
          <h4 className="text-2xl font-black text-center">Featured Work</h4>
        </div>
      ),
      colSpan: "col-span-2 row-span-2",
    },
    {
      type: "content" as const,
      content: (
        <div className="bg-card border-2 border-foreground p-4 h-full">
          <h5 className="font-bold mb-2">Quick Stat</h5>
          <p className="text-3xl font-black text-secondary">200+</p>
          <p className="text-xs text-muted-foreground">Engineers</p>
        </div>
      ),
    },
    {
      type: "content" as const,
      content: (
        <div className="bg-card border-2 border-foreground p-4 h-full">
          <h5 className="font-bold mb-2">Products</h5>
          <p className="text-3xl font-black text-secondary">50+</p>
          <p className="text-xs text-muted-foreground">Served</p>
        </div>
      ),
    },
    {
      type: "header" as const,
      title: "Recent Projects",
      subtitle: "2024-2025",
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Design System"
          description="Component library for enterprise."
          year="2025"
          tags={["React", "TypeScript"]}
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Analytics"
          description="Real-time data platform."
          year="2024"
          tags={["Node.js"]}
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <div className="bg-muted p-6 h-full flex flex-col justify-center">
          <Badge variant="secondary" className="mb-3 w-fit">New</Badge>
          <h5 className="font-bold mb-2">Coming Soon</h5>
          <p className="text-xs text-muted-foreground">More projects launching Q2 2026</p>
        </div>
      ),
    },
    {
      type: "content" as const,
      content: (
        <div className="bg-foreground text-background p-6 h-full flex items-center justify-center">
          <p className="text-sm font-mono text-center">Open Source Contributions</p>
        </div>
      ),
    },
  ];

  return (
    <Collage
      items={items}
      columns={{ mobile: 2, tablet: 3, desktop: 4 }}
      gap={4}
    />
  );
};

export const SimpleGrid = () => {
  const items = [
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project Alpha"
          description="First project in the portfolio."
          year="2025"
          size="small"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project Beta"
          description="Second project showcasing skills."
          year="2024"
          size="small"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project Gamma"
          description="Third project with impact."
          year="2024"
          size="small"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project Delta"
          description="Fourth project demonstrating expertise."
          year="2023"
          size="small"
        />
      ),
    },
  ];

  return (
    <Collage
      title="Simple Portfolio"
      subtitle="4 Projects"
      items={items}
      columns={{ mobile: 1, tablet: 2, desktop: 4 }}
      gap={4}
    />
  );
};

export const WithMultipleSections = () => {
  const items = [
    {
      type: "header" as const,
      title: "Current Work",
      subtitle: "2024-2025",
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Design System"
          description="Enterprise component library serving multiple products and teams."
          year="2025"
          tags={["React", "TypeScript", "Figma"]}
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Platform Engineering"
          description="Cloud infrastructure and developer tooling for high-velocity shipping."
          year="2024"
          tags={["Kubernetes", "AWS"]}
        />
      ),
    },
    {
      type: "header" as const,
      title: "Past Projects",
      subtitle: "2022-2023",
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Mobile Application"
          description="Cross-platform app with 100K+ active users."
          year="2023"
          tags={["React Native"]}
          variant="outline"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Data Pipeline"
          description="ETL pipeline processing millions of records daily."
          year="2022"
          tags={["Python", "Airflow"]}
          variant="filled"
        />
      ),
    },
  ];

  return (
    <Collage
      title="Project Archive"
      subtitle="Selected work from 2022-2025"
      items={items}
      columns={{ mobile: 1, tablet: 2, desktop: 2 }}
      gap={6}
      footer={
        <div className="flex justify-center">
          <Button variant="secondary" size="lg">
            View Complete Portfolio →
          </Button>
        </div>
      }
    />
  );
};

export const DenseGrid = () => {
  const items = Array.from({ length: 12 }, (_, i) => ({
    type: "content" as const,
    content: (
      <ProjectCard
        title={`Project ${i + 1}`}
        description="Brief project description showcasing technical work and impact."
        year={i < 4 ? "2025" : i < 8 ? "2024" : "2023"}
        tags={["Tech", "Stack"]}
        size="small"
        variant={i % 3 === 0 ? "default" : i % 3 === 1 ? "outline" : "filled"}
      />
    ),
  }));

  return (
    <Collage
      title="All Projects"
      subtitle="12 Projects · 2023-2025"
      items={items}
      columns={{ mobile: 1, tablet: 3, desktop: 6 }}
      gap={3}
    />
  );
};

export const SpannedLayout = () => {
  const items = [
    {
      type: "content" as const,
      content: (
        <div className="bg-secondary text-secondary-foreground p-8 h-full flex flex-col justify-center items-center">
          <h3 className="text-3xl font-black mb-2 text-center">Featured</h3>
          <p className="text-sm text-center">Main showcase item</p>
        </div>
      ),
      colSpan: "col-span-2 row-span-2",
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project 1"
          description="Regular card slot."
          year="2025"
          size="small"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project 2"
          description="Another regular slot."
          year="2024"
          size="small"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project 3"
          description="Third regular card."
          year="2024"
          size="small"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project 4"
          description="Fourth card in grid."
          year="2023"
          size="small"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <div className="bg-muted p-6 h-full flex flex-col justify-center">
          <Badge variant="secondary" className="mb-2 w-fit">Coming Soon</Badge>
          <p className="text-xs text-muted-foreground">New projects in development</p>
        </div>
      ),
      colSpan: "col-span-2",
    },
  ];

  return (
    <Collage
      title="Portfolio Layout"
      items={items}
      columns={{ mobile: 2, tablet: 4, desktop: 4 }}
      gap={4}
    />
  );
};

export const NoGap = () => {
  const items = Array.from({ length: 6 }, (_, i) => ({
    type: "content" as const,
    content: (
      <div className="bg-card border-2 border-foreground p-6 h-full flex items-center justify-center">
        <span className="text-4xl font-black text-secondary">{String(i + 1).padStart(2, '0')}</span>
      </div>
    ),
  }));

  return (
    <Collage
      title="Zero Gap Layout"
      subtitle="Tiles with no spacing"
      items={items}
      columns={{ mobile: 2, tablet: 3, desktop: 6 }}
      gap={0}
    />
  );
};

export const CustomColumns = () => {
  const items = [
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Full Width on Mobile"
          description="This layout uses 1 column on mobile, 3 on tablet, 5 on desktop."
          year="2025"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project 2"
          description="Same configuration for all cards."
          year="2024"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project 3"
          description="Responsive grid system."
          year="2024"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project 4"
          description="Adapts to screen size."
          year="2023"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project 5"
          description="Custom column count."
          year="2023"
        />
      ),
    },
  ];

  return (
    <Collage
      items={items}
      columns={{ mobile: 1, tablet: 3, desktop: 5 }}
      gap={4}
    />
  );
};

export const WithFooter = () => {
  const items = [
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project 1"
          description="First project in the collection."
          year="2025"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project 2"
          description="Second project showcasing work."
          year="2024"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project 3"
          description="Third project with impact."
          year="2024"
        />
      ),
    },
  ];

  return (
    <Collage
      title="Portfolio with Footer"
      items={items}
      columns={{ mobile: 1, tablet: 2, desktop: 3 }}
      gap={6}
      footer={
        <div className="border-t-2 border-foreground pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Want to see more? Check out my GitHub for open source work.
          </p>
          <Button variant="ghost">View GitHub →</Button>
        </div>
      }
    />
  );
};

export const MinimalExample = () => {
  const items = [
    {
      type: "content" as const,
      content: <div className="bg-card border-2 border-foreground p-8">Item 1</div>,
    },
    {
      type: "content" as const,
      content: <div className="bg-muted p-8">Item 2</div>,
    },
    {
      type: "content" as const,
      content: <div className="bg-card border-2 border-foreground p-8">Item 3</div>,
    },
    {
      type: "content" as const,
      content: <div className="bg-muted p-8">Item 4</div>,
    },
  ];

  return (
    <Collage
      items={items}
      columns={{ mobile: 2, tablet: 4, desktop: 4 }}
      gap={4}
    />
  );
};

export const AllFeatures = () => {
  const items = [
    {
      type: "header" as const,
      title: "Featured Projects",
      subtitle: "Highlighted Work",
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Enterprise System"
          description="Large-scale system serving millions of users with high availability."
          year="2025"
          tags={["React", "TypeScript", "AWS"]}
          size="large"
        />
      ),
      colSpan: "col-span-2 row-span-2",
    },
    {
      type: "content" as const,
      content: (
        <div className="bg-card border-2 border-foreground p-4 h-full flex flex-col justify-center">
          <p className="text-4xl font-black text-secondary mb-1">99.99%</p>
          <p className="text-xs text-muted-foreground font-mono">Uptime</p>
        </div>
      ),
    },
    {
      type: "content" as const,
      content: (
        <div className="bg-card border-2 border-foreground p-4 h-full flex flex-col justify-center">
          <p className="text-4xl font-black text-secondary mb-1">1M+</p>
          <p className="text-xs text-muted-foreground font-mono">Events/Day</p>
        </div>
      ),
    },
    {
      type: "header" as const,
      title: "More Work",
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project A"
          description="Technical implementation."
          year="2024"
          tags={["React"]}
          size="small"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project B"
          description="Another great project."
          year="2024"
          tags={["Node.js"]}
          size="small"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project C"
          description="Third interesting project."
          year="2023"
          tags={["Python"]}
          size="small"
        />
      ),
    },
    {
      type: "content" as const,
      content: (
        <ProjectCard
          title="Project D"
          description="Final showcase item."
          year="2023"
          tags={["Go"]}
          size="small"
        />
      ),
    },
  ];

  return (
    <Collage
      title="Complete Portfolio"
      subtitle="All Projects · 2023-2025"
      items={items}
      columns={{ mobile: 2, tablet: 4, desktop: 4 }}
      gap={4}
      footer={
        <div className="text-center pt-8 border-t-2 border-foreground">
          <p className="text-sm text-muted-foreground mb-4">
            Interested in working together?
          </p>
          <Button variant="secondary">Get in Touch →</Button>
        </div>
      }
    />
  );
};

export const Controlled = ({
  gap = 4,
  mobileColumns = 1,
  tabletColumns = 2,
  desktopColumns = 4,
}: {
  gap?: number;
  mobileColumns?: number;
  tabletColumns?: number;
  desktopColumns?: number;
}) => {
  const items = Array.from({ length: 8 }, (_, i) => ({
    type: "content" as const,
    content: (
      <ProjectCard
        title={`Project ${i + 1}`}
        description="Adjustable grid layout with responsive columns."
        year="2024"
        size="small"
      />
    ),
  }));

  return (
    <Collage
      items={items}
      columns={{ mobile: mobileColumns, tablet: tabletColumns, desktop: desktopColumns }}
      gap={gap}
    />
  );
};
