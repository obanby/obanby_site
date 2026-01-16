import { Input } from './input';

export const Default = () => <Input placeholder="Enter text..." />;

export const WithLabel = () => (
  <div className="space-y-2 w-[300px]">
    <label className="text-sm font-medium">Email</label>
    <Input type="email" placeholder="you@example.com" />
  </div>
);

export const Password = () => (
  <div className="space-y-2 w-[300px]">
    <label className="text-sm font-medium">Password</label>
    <Input type="password" placeholder="••••••••" />
  </div>
);

export const Disabled = () => <Input placeholder="Disabled input" disabled />;

export const BrutalistStyle = () => (
  <Input 
    placeholder="2px border input" 
    className="border-2 border-foreground focus-visible:ring-0 focus-visible:border-accent-red"
  />
);
