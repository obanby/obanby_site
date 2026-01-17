import { ProjectCard } from "./project-card";

export const Default = () => (
  <div className="max-w-sm">
    <ProjectCard
      title="Design System"
      description="Built a comprehensive component library serving 50+ products across web and mobile platforms."
    />
  </div>
);

export const WithYear = () => (
  <div className="max-w-sm">
    <ProjectCard
      title="Analytics Dashboard"
      description="Real-time analytics platform processing 1M+ events per day with WebSocket streaming."
      year="2024"
    />
  </div>
);

export const WithTags = () => (
  <div className="max-w-sm">
    <ProjectCard
      title="E-commerce Platform"
      description="Full-stack e-commerce solution with payment processing, inventory management, and analytics."
      year="2023"
      tags={["React", "Node.js", "PostgreSQL"]}
    />
  </div>
);

export const Small = () => (
  <div className="max-w-xs">
    <ProjectCard
      size="small"
      title="API Gateway"
      description="Microservices API gateway with authentication and rate limiting."
      year="2024"
      tags={["Node.js", "Redis"]}
    />
  </div>
);

export const Medium = () => (
  <div className="max-w-sm">
    <ProjectCard
      size="medium"
      title="Content Management"
      description="Headless CMS with custom workflow engine for editorial teams managing thousands of articles."
      year="2023"
      tags={["React", "GraphQL", "MongoDB"]}
    />
  </div>
);

export const Large = () => (
  <div className="max-w-md">
    <ProjectCard
      size="large"
      title="Machine Learning Pipeline"
      description="End-to-end ML pipeline for training and deploying models at scale. Automated retraining, A/B testing, and monitoring infrastructure."
      year="2025"
      tags={["Python", "TensorFlow", "Kubernetes"]}
    />
  </div>
);

export const Variants = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
    <ProjectCard
      variant="default"
      title="Default Variant"
      description="Card background with subtle hover effect."
      year="2024"
      tags={["React", "TypeScript"]}
    />
    <ProjectCard
      variant="outline"
      title="Outline Variant"
      description="Muted background with outline styling."
      year="2024"
      tags={["Vue", "Tailwind"]}
    />
    <ProjectCard
      variant="filled"
      title="Filled Variant"
      description="Filled muted background with hover state."
      year="2024"
      tags={["Next.js", "Vercel"]}
    />
  </div>
);

export const GridLayout = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl">
    <ProjectCard
      title="Design System"
      description="Component library for web and mobile products."
      year="2025"
      tags={["React", "TypeScript"]}
    />
    <ProjectCard
      title="Analytics Platform"
      description="Real-time data visualization and reporting dashboard."
      year="2024"
      tags={["React", "D3.js"]}
    />
    <ProjectCard
      title="Mobile App"
      description="Cross-platform mobile application with 100K+ users."
      year="2024"
      tags={["React Native"]}
    />
    <ProjectCard
      title="API Gateway"
      description="Microservices gateway with auth and rate limiting."
      year="2023"
      tags={["Node.js", "Redis"]}
    />
    <ProjectCard
      title="CMS Platform"
      description="Headless content management with workflow engine."
      year="2023"
      tags={["GraphQL", "MongoDB"]}
    />
    <ProjectCard
      title="E-commerce"
      description="Full-stack shopping platform with payments."
      year="2023"
      tags={["Next.js", "Stripe"]}
    />
    <ProjectCard
      title="DevOps Tools"
      description="CI/CD pipeline automation and monitoring."
      year="2022"
      tags={["Docker", "Kubernetes"]}
    />
    <ProjectCard
      title="Data Pipeline"
      description="ETL pipeline processing millions of records daily."
      year="2022"
      tags={["Python", "Airflow"]}
    />
  </div>
);

export const MasonryLayout = () => (
  <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl">
    <ProjectCard
      className="mb-4 break-inside-avoid"
      title="Short Project"
      description="Brief description."
      year="2024"
      tags={["React"]}
    />
    <ProjectCard
      className="mb-4 break-inside-avoid"
      title="Medium Length Project"
      description="This project has a moderate description that takes up a bit more space. It explains the technical implementation and business impact."
      year="2024"
      tags={["React", "Node.js", "PostgreSQL"]}
    />
    <ProjectCard
      className="mb-4 break-inside-avoid"
      title="Long Description Project"
      description="This is a longer project description that demonstrates how the card handles more content. It includes details about the technical architecture, team structure, business outcomes, and lessons learned during implementation. The masonry layout adjusts the card heights automatically."
      year="2023"
      tags={["React", "GraphQL", "MongoDB", "AWS"]}
    />
    <ProjectCard
      className="mb-4 break-inside-avoid"
      title="Another Short One"
      description="Quick summary of work."
      year="2023"
    />
    <ProjectCard
      className="mb-4 break-inside-avoid"
      title="Technical Deep Dive"
      description="Complex technical project involving multiple services, databases, and integrations. Required careful architectural planning and phased rollout."
      year="2024"
      tags={["Microservices", "Kubernetes"]}
    />
  </div>
);

export const InSection = () => (
  <section className="section-padding-lg bg-background">
    <div className="container-content">
      <div className="mb-16">
        <h2 className="mb-4">All Projects</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A collection of technical work spanning design systems, infrastructure, and product development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Design Systems"
          description="Building scalable component libraries for enterprise products."
          year="2025"
          tags={["React", "TypeScript", "Figma"]}
          variant="default"
        />
        <ProjectCard
          title="Platform Engineering"
          description="Cloud infrastructure and developer tooling for high-velocity teams."
          year="2024"
          tags={["Kubernetes", "Terraform", "AWS"]}
          variant="outline"
        />
        <ProjectCard
          title="Data Products"
          description="Analytics and ML pipelines processing billions of events."
          year="2024"
          tags={["Python", "Spark", "Airflow"]}
          variant="filled"
        />
        <ProjectCard
          title="Mobile Applications"
          description="Cross-platform apps serving hundreds of thousands of users."
          year="2023"
          tags={["React Native", "GraphQL"]}
          variant="default"
        />
        <ProjectCard
          title="API Architecture"
          description="RESTful and GraphQL APIs with federation and gateway patterns."
          year="2023"
          tags={["Node.js", "Apollo", "Redis"]}
          variant="outline"
        />
        <ProjectCard
          title="DevOps & CI/CD"
          description="Automated deployment pipelines and infrastructure as code."
          year="2022"
          tags={["GitHub Actions", "Docker"]}
          variant="filled"
        />
      </div>
    </div>
  </section>
);

export const Sizes = () => (
  <div className="space-y-8 max-w-4xl">
    <div>
      <h3 className="text-lg font-bold mb-4">Small</h3>
      <div className="max-w-xs">
        <ProjectCard
          size="small"
          title="Small Card"
          description="Compact card for sidebar or tight layouts."
          year="2024"
          tags={["React"]}
        />
      </div>
    </div>

    <div>
      <h3 className="text-lg font-bold mb-4">Medium (Default)</h3>
      <div className="max-w-sm">
        <ProjectCard
          size="medium"
          title="Medium Card"
          description="Standard size for grid layouts. Balanced spacing and typography."
          year="2024"
          tags={["React", "TypeScript"]}
        />
      </div>
    </div>

    <div>
      <h3 className="text-lg font-bold mb-4">Large</h3>
      <div className="max-w-md">
        <ProjectCard
          size="large"
          title="Large Card"
          description="Larger card for featured projects or hero sections. More prominent typography and generous spacing for impact."
          year="2024"
          tags={["React", "Node.js", "PostgreSQL"]}
        />
      </div>
    </div>
  </div>
);

export const AllFeatures = () => (
  <div className="space-y-12 max-w-4xl">
    <div>
      <h3 className="text-xl font-bold mb-6">Full Featured Card</h3>
      <div className="max-w-md">
        <ProjectCard
          title="Enterprise Design System"
          description="Comprehensive component library serving 50+ products across web and mobile platforms. Adopted by 200+ engineers with extensive documentation and Figma integration."
          year="2025"
          tags={["React", "TypeScript", "Figma", "Storybook"]}
          size="large"
          variant="default"
        />
      </div>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-6">Minimal Card (No Year, No Tags)</h3>
      <div className="max-w-md">
        <ProjectCard
          title="Simple Project"
          description="Sometimes less is more. This card shows only the essential information."
          variant="outline"
        />
      </div>
    </div>
  </div>
);

export const Controlled = ({
  title = "Project Title",
  description = "This is a project card with interactive controls. Adjust the properties to see different configurations.",
  year = "2024",
  tags = ["React", "TypeScript"],
  size = "medium",
  variant = "default",
  showYear = true,
  showTags = true,
}: {
  title?: string;
  description?: string;
  year?: string;
  tags?: string[];
  size?: "small" | "medium" | "large";
  variant?: "default" | "outline" | "filled";
  showYear?: boolean;
  showTags?: boolean;
}) => (
  <div className="max-w-2xl">
    <ProjectCard
      title={title}
      description={description}
      year={showYear ? year : undefined}
      tags={showTags ? tags : undefined}
      size={size}
      variant={variant}
    />
  </div>
);
