import { Callout } from "./callout";

export const Default = () => (
  <Callout>
    This is a default callout. Use it for general information or neutral messages.
  </Callout>
);

export const Info = () => (
  <Callout variant="info" title="Information">
    This is an informational callout. Use the blue accent to highlight important notes or tips.
  </Callout>
);

export const Warning = () => (
  <Callout variant="warning" title="Warning">
    This is a warning callout. Use the red accent to indicate caution or important notices.
  </Callout>
);

export const Error = () => (
  <Callout variant="error" title="Error">
    This is an error callout. Use it to display error messages or critical alerts with high contrast.
  </Callout>
);

export const Success = () => (
  <Callout variant="success" title="Success">
    This is a success callout. Use it to confirm successful operations or positive outcomes.
  </Callout>
);

export const WithoutIcon = () => (
  <Callout icon={null} title="No Icon">
    This callout has no icon. Pass icon={null} to remove the default icon.
  </Callout>
);

export const WithCustomIcon = () => (
  <Callout icon="★" variant="info" title="Custom Icon">
    You can pass any custom icon or emoji as the icon prop.
  </Callout>
);

export const WithoutTitle = () => (
  <Callout variant="info">
    This callout has no title, just the content. The icon is still displayed.
  </Callout>
);

export const LongContent = () => (
  <Callout variant="warning" title="Important Notice">
    This is a longer callout with multiple paragraphs of content. It demonstrates how the component handles larger amounts of text while maintaining the brutalist aesthetic with bold borders and clear hierarchy.
    <br /><br />
    The callout automatically adjusts its height based on content. Notice how the left border accent creates a strong visual anchor, and the icon remains aligned at the top.
    <br /><br />
    Use callouts sparingly to maintain their impact. In a minimalist design system, less is more.
  </Callout>
);

export const AllVariants = () => (
  <div className="space-y-6 max-w-3xl">
    <Callout variant="default" title="Default">
      Default variant with black border and standard styling.
    </Callout>

    <Callout variant="info" title="Info">
      Info variant with blue accent for informational messages.
    </Callout>

    <Callout variant="warning" title="Warning">
      Warning variant with red accent for cautionary messages.
    </Callout>

    <Callout variant="error" title="Error">
      Error variant with inverted red background for critical alerts.
    </Callout>

    <Callout variant="success" title="Success">
      Success variant with inverted black background for confirmations.
    </Callout>
  </div>
);

export const InContent = () => (
  <div className="max-w-3xl space-y-6">
    <h1 className="text-4xl font-black">Using Callouts in Content</h1>

    <p className="text-lg leading-relaxed">
      Callouts are perfect for highlighting important information within your blog posts or documentation. They break up long text and draw attention to key points.
    </p>

    <Callout variant="info" title="Pro Tip">
      Use callouts strategically. Too many callouts reduce their effectiveness. Reserve them for genuinely important information.
    </Callout>

    <p className="text-base leading-relaxed">
      The brutalist aesthetic means callouts have strong visual presence without being overwhelming. The 2px borders and selective use of accent colors maintain the minimal yet bold design language.
    </p>

    <Callout variant="warning" title="Breaking Change">
      Version 2.0 introduces breaking changes to the API. Review the migration guide before upgrading.
    </Callout>

    <p className="text-base leading-relaxed">
      Notice how the callouts integrate seamlessly with the typography while maintaining clear visual hierarchy.
    </p>
  </div>
);

export const Controlled = ({
  variant = "default",
  title = "Callout Title",
  content = "This is the callout content. You can customize the variant, title, and content using the controls.",
  showIcon = true,
}: {
  variant?: "default" | "info" | "warning" | "error" | "success";
  title?: string;
  content?: string;
  showIcon?: boolean;
}) => (
  <Callout variant={variant} title={title} icon={showIcon ? undefined : null}>
    {content}
  </Callout>
);
