import type { HTMLAttributes, ReactNode } from "react";

import "./components.css";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  interactive?: boolean;
};

export function Card({ children, className = "", interactive, ...rest }: CardProps) {
  const cls = ["ds-card", interactive && "ds-card--interactive", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  );
}
