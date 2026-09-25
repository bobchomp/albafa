import { Fragment, type ReactNode } from "react";

// A seamless scrolling strip. The track holds two identical halves and
// scrolls left by exactly one half, so the loop point is invisible. Each
// half repeats `children` enough times to be wider than any screen, and ends
// with padding equal to the gap so the spacing across the seam matches the
// spacing everywhere else.
export default function Marquee({
  children,
  repeat,
  secondsPerRepeat,
  halfClassName,
}: {
  children: ReactNode;
  repeat: number;
  secondsPerRepeat: number;
  halfClassName: string;
}) {
  const half = (copy: number) => (
    <div
      key={copy}
      aria-hidden={copy === 1 || undefined}
      className={`flex shrink-0 items-center ${halfClassName}`}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <Fragment key={i}>{children}</Fragment>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden">
      <div
        className="marquee flex w-max"
        style={{ animationDuration: `${repeat * secondsPerRepeat}s` }}
      >
        {half(0)}
        {half(1)}
      </div>
    </div>
  );
}
