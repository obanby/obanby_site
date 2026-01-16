import { CSSProperties } from "react";

// Brutalist-Minimal Syntax Theme
// Black/white base with selective red/blue accents
// Follows the design system's 95% monochrome, 5% accent rule

export const brutalistTheme = {
  'code[class*="language-"]': {
    color: "#ABB2BF",
    background: "none",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.875rem",
    lineHeight: "1.6",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    MozTabSize: "2",
    OTabSize: "2",
    tabSize: "2",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  } as CSSProperties,
  'pre[class*="language-"]': {
    color: "#ABB2BF",
    background: "#282C34",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.875rem",
    lineHeight: "1.6",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    MozTabSize: "2",
    OTabSize: "2",
    tabSize: "2",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1rem",
    margin: "0",
    overflow: "auto",
  } as CSSProperties,
  // Comments - Gray (muted)
  comment: {
    color: "#5C6370",
    fontStyle: "italic",
  },
  prolog: {
    color: "#5C6370",
  },
  doctype: {
    color: "#5C6370",
  },
  cdata: {
    color: "#5C6370",
  },
  // Punctuation - Light gray
  punctuation: {
    color: "#ABB2BF",
  },
  // Properties, tags, constants - Light gray
  property: {
    color: "#ABB2BF",
  },
  tag: {
    color: "#E06C75",
  },
  constant: {
    color: "#D19A66",
  },
  symbol: {
    color: "#61AFEF",
  },
  deleted: {
    color: "#E06C75",
  },
  // Booleans, numbers - Orange
  boolean: {
    color: "#D19A66",
  },
  number: {
    color: "#D19A66",
  },
  // Selectors, attributes, strings, chars - Green
  selector: {
    color: "#98C379",
    fontWeight: "500",
  },
  "attr-name": {
    color: "#D19A66",
  },
  string: {
    color: "#98C379",
  },
  char: {
    color: "#98C379",
  },
  builtin: {
    color: "#E5C07B",
  },
  inserted: {
    color: "#98C379",
  },
  // Operators, entities, URLs - Cyan
  operator: {
    color: "#56B6C2",
  },
  entity: {
    color: "#61AFEF",
  },
  url: {
    color: "#61AFEF",
  },
  ".language-css .token.string": {
    color: "#98C379",
  },
  ".style .token.string": {
    color: "#98C379",
  },
  // Variables - Red
  variable: {
    color: "#E06C75",
  },
  // Atrules, attributes, keywords - Purple
  atrule: {
    color: "#C678DD",
    fontWeight: "600",
  },
  "attr-value": {
    color: "#98C379",
  },
  function: {
    color: "#61AFEF",
    fontWeight: "600",
  },
  keyword: {
    color: "#C678DD",
    fontWeight: "600",
  },
  // Classes and important elements - Yellow
  "class-name": {
    color: "#E5C07B",
    fontWeight: "600",
  },
  // Regex, important - Orange/Red
  regex: {
    color: "#E06C75",
  },
  important: {
    color: "#E06C75",
    fontWeight: "bold",
  },
  // Bold and italic
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  // Namespace - muted
  namespace: {
    opacity: 0.7,
  },
};

// Outline variant theme (inverted colors)
export const brutalistThemeOutline = {
  ...brutalistTheme,
  'code[class*="language-"]': {
    ...(brutalistTheme['code[class*="language-"]'] as CSSProperties),
    color: "#000000",
  } as CSSProperties,
  'pre[class*="language-"]': {
    ...(brutalistTheme['pre[class*="language-"]'] as CSSProperties),
    color: "#000000",
    background: "#FFFFFF",
  } as CSSProperties,
  comment: {
    color: "#666666",
    fontStyle: "italic",
  },
  prolog: {
    color: "#666666",
  },
  doctype: {
    color: "#666666",
  },
  cdata: {
    color: "#666666",
  },
  punctuation: {
    color: "#000000",
  },
  property: {
    color: "#000000",
  },
  tag: {
    color: "#000000",
  },
  constant: {
    color: "#000000",
  },
  symbol: {
    color: "#000000",
  },
  deleted: {
    color: "#000000",
  },
  boolean: {
    color: "#000000",
  },
  number: {
    color: "#000000",
  },
  operator: {
    color: "#000000",
  },
  entity: {
    color: "#000000",
  },
  url: {
    color: "#000000",
  },
  variable: {
    color: "#000000",
  },
};

// Minimal variant theme (muted)
export const brutalistThemeMinimal = {
  ...brutalistTheme,
  'code[class*="language-"]': {
    ...(brutalistTheme['code[class*="language-"]'] as CSSProperties),
    color: "#000000",
  } as CSSProperties,
  'pre[class*="language-"]': {
    ...(brutalistTheme['pre[class*="language-"]'] as CSSProperties),
    color: "#000000",
    background: "#F5F5F5",
  } as CSSProperties,
  comment: {
    color: "#666666",
    fontStyle: "italic",
  },
  prolog: {
    color: "#666666",
  },
  doctype: {
    color: "#666666",
  },
  cdata: {
    color: "#666666",
  },
  punctuation: {
    color: "#000000",
  },
  property: {
    color: "#000000",
  },
  tag: {
    color: "#000000",
  },
  constant: {
    color: "#000000",
  },
  symbol: {
    color: "#000000",
  },
  deleted: {
    color: "#000000",
  },
  boolean: {
    color: "#000000",
  },
  number: {
    color: "#000000",
  },
  operator: {
    color: "#000000",
  },
  entity: {
    color: "#000000",
  },
  url: {
    color: "#000000",
  },
  variable: {
    color: "#000000",
  },
  // Only keywords get red accent in minimal mode
  keyword: {
    color: "#DC0D28",
    fontWeight: "600",
  },
  function: {
    color: "#000000",
    fontWeight: "600",
  },
  "class-name": {
    color: "#000000",
    fontWeight: "600",
  },
  // Strings still get blue in minimal mode
  selector: {
    color: "#4040FF",
    fontWeight: "500",
  },
  "attr-name": {
    color: "#4040FF",
  },
  string: {
    color: "#4040FF",
  },
  char: {
    color: "#4040FF",
  },
  builtin: {
    color: "#4040FF",
  },
  inserted: {
    color: "#4040FF",
  },
};
