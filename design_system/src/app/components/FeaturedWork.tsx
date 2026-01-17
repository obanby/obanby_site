import { Badge } from "@/app/components/ui/badge";

interface WorkItem {
  title: string;
  description: string;
  tags: string[];
}

const workItems: WorkItem[] = [
  {
    title: "Scalable Design Systems",
    description: "Building component libraries that serve millions of users across multiple products and platforms.",
    tags: ["Systems", "Leadership"]
  },
  {
    title: "Technical Strategy",
    description: "From individual contributor to engineering leader. Lessons learned scaling teams and products.",
    tags: ["Leadership", "Strategy"]
  },
  {
    title: "Full-Stack Architecture",
    description: "Modern web applications built with React, TypeScript, and cloud-native infrastructure.",
    tags: ["Engineering", "Architecture"]
  }
];

export function FeaturedWork() {
  return (
    <section className="section-padding-lg">
      <div className="container-content">
        {/* Header */}
        <div className="mb-20">
          <h2 className="mb-4">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Selected projects and areas of focus
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workItems.map((item, index) => (
            <div 
              key={index}
              className="border-2 border-foreground p-8 hover:bg-secondary transition-colors cursor-pointer group"
            >
              {/* Number */}
              <div className="mb-6">
                <span className="text-4xl font-black text-secondary">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <h4 className="mb-4 group-hover:text-secondary transition-colors">
                {item.title}
              </h4>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
