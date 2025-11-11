import type { ReactNode } from "react";

// Minimal no-op Toaster to avoid missing module errors
export function Toaster(_props: { children?: ReactNode }) {
  return null;
}
