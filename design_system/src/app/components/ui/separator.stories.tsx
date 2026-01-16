import { Separator } from './separator';

export const Horizontal = () => (
  <div className="w-full max-w-md">
    <div className="space-y-1">
      <h4 className="text-sm font-medium">Section Title</h4>
      <p className="text-sm text-muted-foreground">Section description</p>
    </div>
    <Separator className="my-4" />
    <div className="space-y-1">
      <h4 className="text-sm font-medium">Another Section</h4>
      <p className="text-sm text-muted-foreground">More content below</p>
    </div>
  </div>
);

export const Vertical = () => (
  <div className="flex h-20 items-center space-x-4">
    <div>Item 1</div>
    <Separator orientation="vertical" />
    <div>Item 2</div>
    <Separator orientation="vertical" />
    <div>Item 3</div>
  </div>
);

export const BrutalistThick = () => (
  <div className="w-full max-w-md space-y-4">
    <div>Content above</div>
    <Separator className="h-0.5 bg-foreground" />
    <div>Content below</div>
  </div>
);
