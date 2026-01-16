# Ladle Documentation

Your brutalist-minimal design system is now powered by **Ladle** - a blazing-fast, lightweight alternative to Storybook built on Vite! ⚡

## 🚀 Running Ladle

```bash
npm run ladle
```

This will start Ladle on http://localhost:61000

## Why Ladle?

- **10x Faster** - Built on Vite, starts in milliseconds
- **Simpler** - Just export React components, no complex APIs
- **Lighter** - Minimal dependencies, smaller bundle
- **Zero Config** - Works out of the box with sensible defaults
- **Hot Reload** - Instant updates as you edit

## 📚 Components Available

### UI Components (Base Layer)
- **Button** - All variants with red/blue accents
- **Badge** - Tags and labels with design system colors
- **Card** - Content containers with brutalist styling
- **Input** - Form inputs with 2px border option
- **Separator** - Horizontal and vertical dividers

### Blog Components (Composite Layer)
- **ArticleCard** - Blog post preview cards
- **HeroSection** - Landing page hero
- **FeaturedWork** - Project showcase grid
- **CTASection** - Newsletter signup

## 📝 Story Format

Ladle uses a beautifully simple format - just export named React components:

```tsx
// MyComponent.stories.tsx
import { MyComponent } from './MyComponent';

export const Default = () => <MyComponent />;

export const WithProps = () => <MyComponent color="red" size="lg" />;

export const AllVariants = () => (
  <div className="flex gap-4">
    <MyComponent variant="default" />
    <MyComponent variant="outline" />
    <MyComponent variant="ghost" />
  </div>
);
```

That's it! No meta objects, no story objects, just components.

## 🎨 Features

### 1. **Controls**
Ladle automatically generates controls for your component props:
```tsx
export const Controlled = ({ text = 'Hello', size = 'medium' }) => (
  <Button size={size}>{text}</Button>
);
```

### 2. **Width Modes**
Test responsive designs with built-in viewport controls:
- XSmall: 414px (mobile)
- Small: 640px (tablet)
- Medium: 768px (tablet landscape)
- Large: 1024px (desktop)
- XLarge: 1280px (wide)

### 3. **Dark Mode**
Toggle dark mode with the moon icon in the top right.

### 4. **Hot Reload**
Edit your components or stories - changes appear instantly!

## 📁 File Structure

```
.ladle/
├── config.mjs       # Ladle configuration
└── components.tsx   # Global providers & styles

src/
├── app/components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── button.stories.tsx  ← Stories here
│   ├── ArticleCard.tsx
│   └── ArticleCard.stories.tsx  ← Stories here
```

## ⚙️ Configuration

The `.ladle/config.mjs` file controls Ladle's behavior:

```js
export default {
  stories: 'src/**/*.stories.{tsx,jsx}',
  addons: {
    control: { enabled: true },
    width: {
      enabled: true,
      options: {
        xsmall: 414,
        small: 640,
        medium: 768,
        large: 1024,
        xlarge: 1280,
      },
    },
  },
};
```

## 🎯 Creating Stories

### Basic Story
```tsx
export const MyStory = () => <Button>Click me</Button>;
```

### Story with Controls
```tsx
export const WithControls = ({ 
  label = 'Button',
  variant = 'default',
  disabled = false 
}) => (
  <Button variant={variant} disabled={disabled}>
    {label}
  </Button>
);
```

### Multiple Variants
```tsx
export const AllButtons = () => (
  <div className="flex gap-4">
    <Button variant="default">Default</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
);
```

### With Layout
```tsx
export const Responsive = () => (
  <div className="max-w-md p-8">
    <Card>
      <CardHeader>
        <CardTitle>Responsive Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Resize the viewport to see responsiveness</p>
      </CardContent>
    </Card>
  </div>
);
```

## 🎨 Design System Colors

Your stories automatically have access to your design system:

```tsx
// Brutalist Accents
<Button className="bg-accent-red">Red Accent</Button>
<Button className="bg-accent-blue">Blue Accent</Button>

// Monochrome Base
<div className="bg-foreground text-background">
  Inverted colors
</div>

// 2px Brutalist Borders
<Card className="border-2 border-foreground">
  Sharp, bold card
</Card>
```

## 📦 Building for Production

Create a static build:

```bash
npm run build-ladle
```

This creates a `build` folder you can deploy anywhere.

## 🔥 Ladle vs Storybook

| Feature | Ladle | Storybook |
|---------|-------|-----------|
| **Startup Time** | <1s | 10-30s |
| **Dependencies** | Minimal | 100+ packages |
| **Story Format** | Just React | Complex API |
| **Bundle Size** | ~500KB | ~5MB |
| **Hot Reload** | Instant | Slow |
| **Config** | Optional | Required |

## 💡 Pro Tips

### 1. **Story Naming**
Export names become story titles:
```tsx
export const DefaultButton = () => <Button />;  // "Default Button"
export const WithIcon = () => <Button>✓</Button>;  // "With Icon"
```

### 2. **Organize Stories**
Use folders to organize - file path becomes navigation:
```
src/components/ui/button.stories.tsx → UI / Button
src/components/ArticleCard.stories.tsx → Components / Article Card
```

### 3. **Test States**
Create stories for all states:
```tsx
export const Loading = () => <Button disabled>Loading...</Button>;
export const Error = () => <Button variant="destructive">Error</Button>;
export const Success = () => <Button className="bg-green-500">Success</Button>;
```

### 4. **Use Composition**
Build complex stories from smaller pieces:
```tsx
export const FullForm = () => (
  <div className="space-y-4 max-w-md">
    <Input placeholder="Name" />
    <Input type="email" placeholder="Email" />
    <Button className="w-full">Submit</Button>
  </div>
);
```

## 🎬 Next Steps

1. **Add More Stories** - Create `.stories.tsx` files for all components
2. **Use Controls** - Add function parameters for interactive props
3. **Test Responsiveness** - Use width addon to test mobile/desktop
4. **Share** - Build and deploy your component library
5. **Integrate** - Use Ladle alongside your development workflow

## 📖 Learn More

- [Ladle Documentation](https://ladle.dev/)
- [GitHub Repository](https://github.com/tajo/ladle)
- [Examples](https://ladle.dev/docs/examples)

## 🚨 Common Issues

### Stories Not Appearing?
- Check file naming: must end in `.stories.tsx` or `.stories.jsx`
- Check file location: should be in `src/**/*`
- Restart Ladle after adding new story files

### Styles Not Loading?
- Make sure `.ladle/components.tsx` imports your CSS
- Check that Tailwind is configured correctly

### Hot Reload Not Working?
- Save the file to trigger reload
- Check console for errors
- Restart Ladle if needed

---

**Enjoy your blazing-fast component explorer!** 🚀

Run `npm run ladle` and start building!
