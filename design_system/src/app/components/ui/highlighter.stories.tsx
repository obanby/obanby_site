import { Highlighter } from "./highlighter";

export const Default = () => (
  <div className="max-w-2xl">
    <p className="text-base leading-relaxed">
      This is a paragraph with <Highlighter>highlighted text</Highlighter> in the middle.
      The yellow highlight draws attention to important words or phrases.
    </p>
  </div>
);

export const SingleWord = () => (
  <div className="max-w-2xl">
    <p className="text-base leading-relaxed">
      The <Highlighter>most</Highlighter> important word in this sentence is highlighted.
    </p>
  </div>
);

export const MultiplePhrases = () => (
  <div className="max-w-2xl">
    <p className="text-base leading-relaxed">
      You can highlight <Highlighter>multiple phrases</Highlighter> in the same paragraph,
      making it easy to <Highlighter>emphasize key points</Highlighter> throughout your content.
    </p>
  </div>
);

export const InHeading = () => (
  <div className="max-w-2xl">
    <h1 className="text-4xl font-black mb-4">
      Building <Highlighter>Design Systems</Highlighter> That Scale
    </h1>
    <p className="text-base leading-relaxed">
      Highlights work in headings too, providing visual emphasis for key terms.
    </p>
  </div>
);

export const CustomStyling = () => (
  <div className="max-w-2xl space-y-4">
    <p className="text-base leading-relaxed">
      <Highlighter className="font-bold">Bold highlight</Highlighter> - custom styling
    </p>
    <p className="text-base leading-relaxed">
      <Highlighter className="italic">Italic highlight</Highlighter> - custom styling
    </p>
    <p className="text-base leading-relaxed">
      <Highlighter className="px-2 py-1">More padding</Highlighter> - custom styling
    </p>
  </div>
);

export const InArticle = () => (
  <article className="max-w-2xl space-y-6">
    <h1 className="text-4xl font-black">The Power of Visual Emphasis</h1>

    <p className="text-xl text-muted-foreground">
      How highlighting key concepts improves reading comprehension and retention.
    </p>

    <p className="text-base leading-relaxed">
      Studies show that <Highlighter>visual emphasis</Highlighter> helps readers quickly
      identify and remember important information. When scanning long articles, highlighted
      text acts as <Highlighter>visual anchors</Highlighter> that guide the reader's attention.
    </p>

    <h2 className="text-2xl font-bold">Strategic Highlighting</h2>

    <p className="text-base leading-relaxed">
      Don't overuse highlighting. The key is to be <Highlighter>selective and intentional</Highlighter>.
      Too much yellow can overwhelm the reader and defeat the purpose. Aim to highlight
      <Highlighter>2-3 key concepts</Highlighter> per section at most.
    </p>

    <p className="text-base leading-relaxed">
      When used properly, highlights create a <Highlighter>visual hierarchy</Highlighter> that
      makes your content more scannable and memorable.
    </p>
  </article>
);

export const InList = () => (
  <div className="max-w-2xl">
    <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
    <ul className="space-y-3 list-disc list-inside">
      <li>
        <Highlighter>Use sparingly</Highlighter> - Less is more
      </li>
      <li>
        <Highlighter>Key concepts only</Highlighter> - Don't highlight entire sentences
      </li>
      <li>
        <Highlighter>Maintain contrast</Highlighter> - Ensure text remains readable
      </li>
      <li>
        <Highlighter>Be consistent</Highlighter> - Apply the same emphasis rules throughout
      </li>
    </ul>
  </div>
);

export const WithCodeBlock = () => (
  <div className="max-w-2xl space-y-4">
    <p className="text-base leading-relaxed">
      The <Highlighter>Highlighter component</Highlighter> is simple to use:
    </p>

    <pre className="bg-muted p-4 border-2 border-foreground font-mono text-sm">
{`<Highlighter>Your text here</Highlighter>`}
    </pre>

    <p className="text-base leading-relaxed">
      It automatically applies <Highlighter>yellow background</Highlighter> with appropriate padding.
    </p>
  </div>
);

export const AllExamples = () => (
  <div className="max-w-3xl space-y-12">
    <section>
      <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
      <p className="text-base leading-relaxed">
        This is a paragraph with <Highlighter>highlighted text</Highlighter> in the middle.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4">In Headings</h2>
      <h3 className="text-xl font-bold">
        Building <Highlighter>Accessible</Highlighter> User Interfaces
      </h3>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4">Multiple Highlights</h2>
      <p className="text-base leading-relaxed">
        You can use <Highlighter>multiple highlights</Highlighter> to emphasize
        <Highlighter>different concepts</Highlighter> throughout your content.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4">In Lists</h2>
      <ul className="space-y-2 list-disc list-inside">
        <li><Highlighter>First point</Highlighter> - Important item</li>
        <li><Highlighter>Second point</Highlighter> - Another key concept</li>
        <li><Highlighter>Third point</Highlighter> - Final emphasis</li>
      </ul>
    </section>
  </div>
);

export const Controlled = ({
  text = "highlighted text",
  bold = false,
  italic = false,
}: {
  text?: string;
  bold?: boolean;
  italic?: boolean;
}) => (
  <div className="max-w-2xl">
    <p className="text-base leading-relaxed">
      This is a paragraph with{" "}
      <Highlighter
        className={`${bold ? "font-bold" : ""} ${italic ? "italic" : ""}`}
      >
        {text}
      </Highlighter>{" "}
      that you can customize using the controls.
    </p>
  </div>
);
