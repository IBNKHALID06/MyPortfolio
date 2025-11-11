import type { ReactNode, HTMLAttributes } from "react";

export function TooltipProvider({ children }: { children: ReactNode; delayDuration?: number }) {
  return <>{children}</>;
}

export function Tooltip({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function TooltipTrigger({ children, ...props }: { children: ReactNode } & HTMLAttributes<HTMLElement>) {
  return <span {...props}>{children}</span>;
}

export function TooltipContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className} style={{ display: "none" }}>{children}</div>;
}
