import { useState } from "react";
import { NavigationTabs } from "./NavigationTabs";
import { BlogHeader } from "./BlogHeader";

export const Default = () => {
  const [activeTab, setActiveTab] = useState("home");

  return <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />;
};

export const WithActiveTab = () => {
  const [activeTab, setActiveTab] = useState("article");

  return <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />;
};

export const WithHeader = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="w-full">
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <BlogHeader />
    </div>
  );
};

export const WithHeaderAndContent = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="w-full min-h-screen">
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <BlogHeader />
      <div className="container-content py-16">
        <h1 className="text-5xl font-black mb-4">Page Title</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This shows how the navigation tabs work with the header and content.
        </p>
        <p className="text-base leading-relaxed">
          Notice how the tabs are sticky at the top, and the header sits below them.
          The tabs provide the main navigation between pages, while the header contains
          the site logo and subscribe button.
        </p>
      </div>
    </div>
  );
};

export const AllTabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-4">Active: Blog Home</h3>
        <NavigationTabs activeTab="home" onTabChange={setActiveTab} />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Active: Article Example</h3>
        <NavigationTabs activeTab="article" onTabChange={setActiveTab} />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Active: Components</h3>
        <NavigationTabs activeTab="design" onTabChange={setActiveTab} />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Active: Projects</h3>
        <NavigationTabs activeTab="projects" onTabChange={setActiveTab} />
      </div>
    </div>
  );
};
