import { BlogFooter } from "./BlogFooter";

export const Default = () => <BlogFooter />;

export const FullWidth = () => (
  <div className="w-full">
    <BlogFooter />
  </div>
);

export const WithPageContent = () => (
  <div className="w-full min-h-screen flex flex-col">
    <div className="flex-1 container-content py-16">
      <h1 className="text-5xl font-black mb-4">Page Content</h1>
      <p className="text-xl text-muted-foreground mb-8">
        This shows how the footer looks at the bottom of a page.
      </p>
      <p className="text-base leading-relaxed">
        The footer includes navigation links, brand information, and a newsletter signup call-to-action.
      </p>
    </div>
    <BlogFooter />
  </div>
);
