import { BlogGrid } from "./BlogGrid";

export const Default = () => <BlogGrid />;

export const FullWidth = () => (
  <div className="w-full">
    <BlogGrid />
  </div>
);
