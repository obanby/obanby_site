import { BlogHeader } from "./BlogHeader";

export const Default = () => <BlogHeader />;

export const FullWidth = () => (
  <div className="w-full">
    <BlogHeader />
  </div>
);

export const WithContent = () => (
  <div className="w-full">
    <BlogHeader />
    <div className="container-content py-16">
      <h1 className="text-5xl font-black mb-4">Page Title</h1>
      <p className="text-xl text-muted-foreground">
        This shows how the header looks with content below it. The header now only contains the logo and Subscribe button. Navigation is handled by the NavigationTabs component.
      </p>
    </div>
  </div>
);
