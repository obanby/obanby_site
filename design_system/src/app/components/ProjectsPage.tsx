import { BlogHeader } from "@/app/components/BlogHeader";
import { BlogFooter } from "@/app/components/BlogFooter";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";

// Example: A complete new page built using the design system components

export function ProjectsPage() {
  return (
    <>
      {/* Reusable Header */}
      <BlogHeader />

      {/* Hero Section - Custom but follows design system */}
      <section className="section-padding-lg border-b-2 border-foreground">
        <div className="container-content">
          <div className="max-w-3xl">
            <label className="mb-6 block">Selected Work</label>
            <h1 className="mb-8">
              Projects that <span className="accent-red">ship</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From side projects to production systems serving millions. 
              A collection of work that represents technical depth and business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project - Large */}
      <section className="section-padding-lg">
        <div className="container-content">
          <div className="border-2 border-foreground p-12">
            <div className="flex items-start justify-between mb-8">
              <Badge className="bg-accent-red">Featured</Badge>
              <span className="text-sm font-mono text-muted-foreground">2025-2026</span>
            </div>
            
            <h2 className="mb-6">Enterprise Design System</h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              Built a comprehensive design system serving 50+ products across web and mobile. 
              React, TypeScript, and Figma. Adopted by 200+ engineers.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Design Systems</Badge>
              <Badge variant="outline">Leadership</Badge>
            </div>

            <div className="flex gap-4">
              <Button className="bg-foreground">View Case Study</Button>
              <Button variant="outline">See Documentation</Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Project Grid */}
      <section className="section-padding-lg">
        <div className="container-content">
          <h2 className="mb-16">More Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="border-2 border-foreground p-8 hover:bg-secondary transition-colors group cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl font-black accent-blue">01</span>
                <span className="text-sm font-mono text-muted-foreground">2024</span>
              </div>
              
              <h4 className="mb-4 group-hover:accent-blue transition-colors">
                Real-time Analytics Dashboard
              </h4>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Built a high-performance analytics platform processing 1M+ events per day. 
                React, Node.js, and PostgreSQL.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border-2 border-foreground p-8 hover:bg-secondary transition-colors group cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl font-black">02</span>
                <span className="text-sm font-mono text-muted-foreground">2023</span>
              </div>
              
              <h4 className="mb-4 group-hover:accent-red transition-colors">
                Mobile App Architecture
              </h4>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Led technical architecture for cross-platform mobile app. 
                React Native, TypeScript, and GraphQL.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">GraphQL</Badge>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border-2 border-foreground p-8 hover:bg-secondary transition-colors group cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl font-black accent-red">03</span>
                <span className="text-sm font-mono text-muted-foreground">2023</span>
              </div>
              
              <h4 className="mb-4 group-hover:accent-blue transition-colors">
                API Platform Migration
              </h4>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Migrated monolithic API to microservices. Zero downtime, 
                40% performance improvement. Led team of 8 engineers.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Architecture</Badge>
                <Badge variant="outline">Leadership</Badge>
                <Badge variant="outline">DevOps</Badge>
              </div>
            </div>

            {/* Project 4 */}
            <div className="border-2 border-foreground p-8 hover:bg-secondary transition-colors group cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl font-black accent-blue">04</span>
                <span className="text-sm font-mono text-muted-foreground">2022</span>
              </div>
              
              <h4 className="mb-4 group-hover:accent-red transition-colors">
                Open Source Component Library
              </h4>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Published open-source React component library. 
                10k+ weekly downloads, 2k+ GitHub stars.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Open Source</Badge>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">npm</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Side Projects */}
      <section className="section-padding-lg bg-muted">
        <div className="container-content">
          <h3 className="mb-12">Side Projects & Experiments</h3>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group cursor-pointer">
              <div className="w-12 h-12 bg-foreground flex items-center justify-center flex-shrink-0">
                <span className="text-background font-mono text-sm">01</span>
              </div>
              <div className="flex-1">
                <h4 className="mb-2 group-hover:accent-blue transition-colors">
                  Weekend Prototype: AI Writing Assistant
                </h4>
                <p className="text-muted-foreground">
                  Experimented with OpenAI API to build a writing tool. 
                  React, TypeScript, Tailwind.
                </p>
              </div>
              <Badge variant="outline" className="hidden md:block">2024</Badge>
            </div>

            <Separator />

            <div className="flex items-start gap-6 group cursor-pointer">
              <div className="w-12 h-12 bg-foreground flex items-center justify-center flex-shrink-0">
                <span className="text-background font-mono text-sm">02</span>
              </div>
              <div className="flex-1">
                <h4 className="mb-2 group-hover:accent-red transition-colors">
                  CLI Tool for Developers
                </h4>
                <p className="text-muted-foreground">
                  Built command-line tool to automate common dev workflows. 
                  Node.js, published to npm.
                </p>
              </div>
              <Badge variant="outline" className="hidden md:block">2023</Badge>
            </div>

            <Separator />

            <div className="flex items-start gap-6 group cursor-pointer">
              <div className="w-12 h-12 bg-foreground flex items-center justify-center flex-shrink-0">
                <span className="text-background font-mono text-sm">03</span>
              </div>
              <div className="flex-1">
                <h4 className="mb-2 group-hover:accent-blue transition-colors">
                  Design System Documentation Site
                </h4>
                <p className="text-muted-foreground">
                  Created interactive documentation for component library. 
                  Next.js, MDX, live code examples.
                </p>
              </div>
              <Badge variant="outline" className="hidden md:block">2023</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Footer */}
      <BlogFooter />
    </>
  );
}
