import { Button } from './button';

export const Default = () => <Button>Button</Button>;

export const Outline = () => <Button variant="outline">Outline Button</Button>;

export const Ghost = () => <Button variant="ghost">Ghost Button</Button>;

export const Destructive = () => <Button variant="destructive">Destructive</Button>;

export const RedAccent = () => (
  <Button className="bg-accent-red hover:bg-accent-red/90">Red Accent</Button>
);

export const BlueAccent = () => (
  <Button className="bg-accent-blue hover:bg-accent-blue/90">Blue Accent</Button>
);

export const Small = () => <Button size="sm">Small Button</Button>;

export const Large = () => <Button size="lg">Large Button</Button>;

export const AllVariants = () => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-4 flex-wrap">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
    <div className="flex gap-4 flex-wrap">
      <Button className="bg-accent-red hover:bg-accent-red/90">Red Accent</Button>
      <Button className="bg-accent-blue hover:bg-accent-blue/90">Blue Accent</Button>
    </div>
    <div className="flex gap-4 flex-wrap items-center">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  </div>
);
