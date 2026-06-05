import { type SVGProps } from "react";

export function Starburst({ className, ...props }: SVGProps<SVGSVGElement>) {
  const points = 16;
  const outer = 50;
  const inner = 22;
  const path = Array.from({ length: points * 2 }, (_, i) => {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI / points) * i - Math.PI / 2;
    return `${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 100 100" className={className} {...props}>
      <polygon points={path} fill="currentColor" />
    </svg>
  );
}
