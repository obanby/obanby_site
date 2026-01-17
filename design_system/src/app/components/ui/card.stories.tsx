import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Button } from './button';

export const Default = () => (
  <Card className="w-[400px]">
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card description goes here</CardDescription>
    </CardHeader>
    <CardContent>
      <p>This is the card content with some example text.</p>
    </CardContent>
    <CardFooter>
      <Button>Action</Button>
    </CardFooter>
  </Card>
);

export const BrutalistBorder = () => (
  <Card className="w-[400px] border-2 border-foreground">
    <CardHeader>
      <CardTitle>Brutalist Card</CardTitle>
      <CardDescription>With 2px border</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Use border-2 border-foreground for the brutalist style.</p>
    </CardContent>
  </Card>
);

export const WithAccent = () => (
  <Card className="w-[400px] border-2 border-foreground hover:bg-secondary transition-colors">
    <CardHeader>
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl font-black text-secondary">01</span>
        <span className="text-sm font-mono text-muted-foreground">2024</span>
      </div>
      <CardTitle>Featured Project</CardTitle>
      <CardDescription>This is a project card with brutalist styling</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">
        Project description with hover effects and accent colors.
      </p>
    </CardContent>
  </Card>
);
