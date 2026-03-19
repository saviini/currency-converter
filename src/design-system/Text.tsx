import type { HTMLAttributes, ReactNode } from "react";

import "./components.css";

type Variant = "display" | "title" | "body" | "bodySm" | "caption" | "micro";

const map: Record<Variant, string> = {
  display: "ds-text-display",
  title: "ds-text-title",
  body: "ds-text-body",
  bodySm: "ds-text-body-sm",
  caption: "ds-text-caption",
  micro: "ds-text-micro",
};

type TextProps = HTMLAttributes<HTMLElement> & {
  as?: "h1" | "h2" | "p" | "span" | "div";
  variant: Variant;
  children: ReactNode;
};

export function Text({ as: Tag = "p", variant, className = "", children, ...rest }: TextProps) {
  return (
    <Tag className={`${map[variant]} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
