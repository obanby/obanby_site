import { Badge } from './badge';

export const Default = () => <Badge>Badge</Badge>;

export const Secondary = () => <Badge variant="secondary">Secondary</Badge>;

export const Outline = () => <Badge variant="outline">Outline</Badge>;

export const Destructive = () => <Badge variant="destructive">Destructive</Badge>;

export const RedAccent = () => <Badge className="bg-accent-red">Featured</Badge>;

export const BlueAccent = () => <Badge className="bg-accent-blue">Technical</Badge>;

export const AllVariants = () => (
  <div className="flex gap-3 flex-wrap">
    <Badge>Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge className="bg-accent-red">Featured</Badge>
    <Badge className="bg-accent-blue">Technical</Badge>
  </div>
);
