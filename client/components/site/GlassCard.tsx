import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface Props extends PropsWithChildren {
  className?: string;
}

export default function GlassCard({ className, children }: Props) {
  return <div className={cn("card-glass", className)}>{children}</div>;
}
