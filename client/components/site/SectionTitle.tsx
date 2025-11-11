import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function SectionTitle({ children, className, ...props }: { children: ReactNode } & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("text-2xl md:text-3xl font-bold tracking-tight text-foreground", className)} {...props}>
      {children}
    </h2>
  );
}
