import { CaseStudyCard } from "./case-study-card";

export const Default = () => (
  <CaseStudyCard
    title="Design System"
    description="Built a comprehensive design system serving 50+ products across web and mobile. React, TypeScript, and Figma."
  />
);

export const WithNumber = () => (
  <CaseStudyCard
    number="01"
    title="Enterprise Platform"
    description="Scalable architecture processing 1M+ events per day. Built with React, Node.js, and PostgreSQL."
  />
);

export const GlassVariant = () => (
  <CaseStudyCard
    number="02"
    variant="glass"
    title="Real-time Analytics"
    description="High-performance dashboard with live data visualization and reporting. WebSocket-based streaming architecture."
  />
);

export const DefaultVariant = () => (
  <CaseStudyCard
    number="03"
    variant="default"
    title="Mobile Application"
    description="Cross-platform mobile app serving 100K+ users. React Native with cloud-native backend infrastructure."
  />
);

export const WithoutNumber = () => (
  <CaseStudyCard
    variant="glass"
    title="API Platform"
    description="RESTful API serving millions of requests per month. GraphQL federation with microservices architecture."
  />
);

export const LongDescription = () => (
  <CaseStudyCard
    number="04"
    title="Content Management System"
    description="Headless CMS with custom workflow engine. Built for editorial teams managing thousands of articles, with real-time collaboration, version control, and multi-channel publishing capabilities."
  />
);

export const Grid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
    <CaseStudyCard
      number="01"
      variant="glass"
      title="Design System"
      description="Component library serving 50+ products. React, TypeScript, and Figma integration."
    />
    <CaseStudyCard
      number="02"
      variant="glass"
      title="Analytics Platform"
      description="Real-time dashboard processing 1M+ events daily. WebSocket streaming architecture."
    />
    <CaseStudyCard
      number="03"
      variant="glass"
      title="Mobile App"
      description="Cross-platform application with 100K+ users. React Native and cloud backend."
    />
  </div>
);

export const TwoColumn = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
    <CaseStudyCard
      number="01"
      variant="glass"
      title="Enterprise Design System"
      description="Built a comprehensive design system serving 50+ products across web and mobile platforms. React component library with TypeScript, extensive documentation, and Figma integration. Adopted by 200+ engineers across the organization."
    />
    <CaseStudyCard
      number="02"
      variant="glass"
      title="Real-time Analytics Dashboard"
      description="High-performance analytics platform processing 1M+ events per day. WebSocket-based streaming architecture with React frontend, Node.js backend, and PostgreSQL database. Sub-second latency for real-time insights."
    />
  </div>
);

export const SingleFeatured = () => (
  <div className="max-w-4xl">
    <CaseStudyCard
      number="01"
      variant="glass"
      title="Enterprise Architecture Transformation"
      description="Led technical strategy for migrating monolithic application to microservices architecture. Designed and implemented service mesh with Kubernetes, reduced deployment time by 85%, and improved system reliability to 99.99% uptime. Team of 40+ engineers across 8 product teams."
    />
  </div>
);

export const MixedVariants = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
    <CaseStudyCard
      number="01"
      variant="glass"
      title="Glass Effect"
      description="This card uses the glass variant with subtle gradients and hover effects that create a liquid glass appearance."
    />
    <CaseStudyCard
      number="02"
      variant="default"
      title="Default Style"
      description="This card uses the default variant with solid background and brutalist shadow effects on hover."
    />
  </div>
);

export const InSection = () => (
  <section className="section-padding-lg bg-muted">
    <div className="container-content">
      <div className="mb-20">
        <h2 className="mb-4">Featured Projects</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Selected work representing technical depth and business impact
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CaseStudyCard
          number="01"
          variant="glass"
          title="Design Systems"
          description="Building component libraries that serve millions of users across multiple products."
        />
        <CaseStudyCard
          number="02"
          variant="glass"
          title="Technical Leadership"
          description="From IC to engineering leader. Scaling teams and products in high-growth environments."
        />
        <CaseStudyCard
          number="03"
          variant="glass"
          title="Full-Stack Architecture"
          description="Modern web applications with React, TypeScript, and cloud-native infrastructure."
        />
      </div>
    </div>
  </section>
);

export const AllFeatures = () => (
  <div className="space-y-12 max-w-4xl">
    <div>
      <h3 className="text-xl font-bold mb-6">Glass Variant with Number</h3>
      <CaseStudyCard
        number="01"
        variant="glass"
        title="Glass Effect Demo"
        description="Hover to see the liquid glass effect with gradient overlays, shadow transformation, and sliding reflection."
      />
    </div>

    <div>
      <h3 className="text-xl font-bold mb-6">Default Variant</h3>
      <CaseStudyCard
        variant="default"
        title="Solid Background"
        description="Clean solid background with brutalist shadow effects. Simpler appearance without gradient effects."
      />
    </div>

    <div>
      <h3 className="text-xl font-bold mb-6">Without Number</h3>
      <CaseStudyCard
        variant="glass"
        title="No Background Number"
        description="Card without the large background number. Focus stays on title and description."
      />
    </div>
  </div>
);

export const Controlled = ({
  number = "01",
  title = "Case Study Title",
  description = "This is a case study card with interactive controls. Adjust the properties to see different configurations.",
  variant = "glass",
  showNumber = true,
}: {
  number?: string;
  title?: string;
  description?: string;
  variant?: "default" | "glass";
  showNumber?: boolean;
}) => (
  <div className="max-w-2xl">
    <CaseStudyCard
      number={showNumber ? number : undefined}
      variant={variant}
      title={title}
      description={description}
    />
  </div>
);
