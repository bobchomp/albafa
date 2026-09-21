import type { ReactNode } from "react";

export default function DeadButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button type="button" className={`dead-link ${className}`}>
      {children}
    </button>
  );
}
