import { useState } from "react";
import { Tabs, TabsContent } from "@/app/components/ui/tabs";
import { DesignSystemShowcase } from "@/app/components/DesignSystemShowcase";
import { NavigationTabs } from "@/app/components/NavigationTabs";
import { BlogHeader } from "@/app/components/BlogHeader";
import { HeroSection } from "@/app/components/HeroSection";
import { FeaturedWork } from "@/app/components/FeaturedWork";
import { BlogGrid } from "@/app/components/BlogGrid";
import { BlogFooter } from "@/app/components/BlogFooter";
import { ArticleLayout } from "@/app/components/ArticleLayout";
import { CTASection } from "@/app/components/CTASection";
import { ProjectsPage } from "@/app/components/ProjectsPage";
import { ComponentShowcase } from "@/app/components/ComponentShowcase";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen">
      {/* Navigation Tabs - Sticky */}
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content */}
      <Tabs value={activeTab} className="w-full">
        {/* Blog Home Page */}
        <TabsContent value="home" className="mt-0">
          <BlogHeader />
          <HeroSection />
          <FeaturedWork />
          <BlogGrid />
          <CTASection />
          <BlogFooter />
        </TabsContent>

        {/* Article Example */}
        <TabsContent value="article" className="mt-0">
          <BlogHeader />
          <ArticleLayout
            title="The Engineer's Guide to Technical Leadership"
            subtitle="Making the transition from writing code to leading teams. What changes, what stays the same, and what you need to unlearn."
            date="Jan 15, 2026"
            readTime="8 min read"
            category="Leadership"
          >
            <p>
              The path from engineer to technical leader isn't a straight line. It's a fundamental shift 
              in how you create value, measure success, and spend your time. After years of optimizing 
              for clean code and elegant solutions, you're suddenly optimizing for something far more 
              complex: human systems.
            </p>

            <h2>What Actually Changes</h2>

            <p>
              Your job is no longer to write the best code. It's to enable others to write better code. 
              This sounds obvious, but the implications run deep. The skills that made you successful as 
              an engineer—deep focus, technical mastery, solving hard problems alone—can actually work 
              against you as a leader.
            </p>

            <p>
              I learned this the hard way. My first instinct as a new tech lead was to dive into the 
              hardest technical problems myself. It felt productive. It felt safe. But it was wrong. 
              The team didn't need another senior engineer—they needed someone to clear blockers, 
              provide context, and make the hard calls that let everyone else do their best work.
            </p>

            <h3>The Communication Shift</h3>

            <p>
              As an engineer, clear communication is important. As a leader, it's everything. You're 
              constantly translating—between technical and business stakeholders, between teams, between 
              what is and what could be. Every meeting, every document, every Slack message is an 
              opportunity to create alignment or sow confusion.
            </p>

            <blockquote>
              "The quality of your code matters less than the clarity of your communication."
            </blockquote>

            <h3>The Time Horizon Problem</h3>

            <p>
              Engineers work in sprints. Leaders work in quarters and years. You're making decisions 
              today whose impacts won't be felt for months. You're building systems that will outlive 
              your tenure. This requires a different kind of thinking—more strategic, more patient, 
              more comfortable with uncertainty.
            </p>

            <h2>What Stays the Same</h2>

            <p>
              But here's what surprised me: the core engineering mindset remains invaluable. Systems 
              thinking. Breaking down complex problems. Seeking elegant solutions. These skills translate 
              directly to leadership, just at a different layer of abstraction.
            </p>

            <p>
              You're still debugging, just now you're debugging organizational inefficiencies instead of 
              code. You're still architecting, just now you're architecting team structures and processes 
              instead of software systems. You're still shipping, just now you're shipping outcomes 
              instead of features.
            </p>

            <h3>The Technical Foundation</h3>

            <p>
              Your technical credibility doesn't disappear—it becomes a foundation for everything else. 
              The team trusts your decisions because they know you understand the work. Stakeholders 
              trust your estimates because you've been in the trenches. That credibility is earned 
              through years of shipping code, and it doesn't expire when you change roles.
            </p>

            <h2>What You Need to Unlearn</h2>

            <p>
              The hardest part isn't learning new skills. It's unlearning the habits that made you 
              successful before. Here are the big ones:
            </p>

            <ul>
              <li><strong>Unlearn perfectionism.</strong> As an engineer, you can refactor until the code is beautiful. As a leader, done is often better than perfect. Ship it, learn, iterate.</li>
              <li><strong>Unlearn solo heroics.</strong> Staying late to fix a critical bug yourself might feel productive, but it's teaching the team that you don't trust them with hard problems.</li>
              <li><strong>Unlearn optimization for yourself.</strong> The best decision for your growth might not be the best decision for the team. Learn to prioritize their success over your comfort.</li>
              <li><strong>Unlearn needing to be right.</strong> As an engineer, being right is often objective—the code works or it doesn't. As a leader, being right matters less than getting buy-in and building consensus.</li>
            </ul>

            <h2>The Actual Job</h2>

            <p>
              So what does technical leadership actually look like day-to-day? It's messier and more 
              human than the engineering work you're used to. It's:
            </p>

            <ul>
              <li>Running effective meetings that leave people energized, not drained</li>
              <li>Writing documents that create clarity and drive decisions</li>
              <li>Having difficult conversations about performance and expectations</li>
              <li>Saying no to good ideas so you can say yes to great ones</li>
              <li>Building relationships across the organization</li>
              <li>Protecting your team's time and focus</li>
              <li>Making technical decisions that balance today's needs with tomorrow's flexibility</li>
            </ul>

            <p>
              None of this is glamorous. Most of it won't show up in your GitHub activity. But it's 
              the work that allows great engineering to happen.
            </p>

            <h2>Making the Leap</h2>

            <p>
              If you're considering the move from engineer to leader, here's my advice: start before 
              you have the title. Lead projects. Mentor junior engineers. Write design docs. Build 
              consensus. These are all leadership skills you can practice while still writing code.
            </p>

            <p>
              And know that it's okay to move back. Leadership isn't a promotion—it's a career change. 
              Some of the best engineers I know tried leadership, realized it wasn't for them, and 
              returned to IC roles where they're happier and more impactful. There's no shame in that. 
              There's only shame in staying in a role that doesn't fit.
            </p>

            <h2>The Journey Continues</h2>

            <p>
              I'm still learning. Every day brings new challenges that no amount of technical expertise 
              prepared me for. But that's also what makes it exciting. After years of mastering technical 
              problems, I'm a beginner again—learning how to lead, how to inspire, how to create the 
              conditions for others to do their best work.
            </p>

            <p>
              It's humbling. It's rewarding. And it's worth it.
            </p>
          </ArticleLayout>
          <BlogFooter />
        </TabsContent>

        {/* Design System */}
        <TabsContent value="design" className="mt-0">
          <DesignSystemShowcase />
        </TabsContent>

        {/* Projects */}
        <TabsContent value="projects" className="mt-0">
          <ProjectsPage />
        </TabsContent>
      </Tabs>
    </div>
  );
}