import { PropsWithChildren } from "react";

export default function SectionTitle({ children }: PropsWithChildren) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-extrabold text-glow-purple">
        {children}
      </h2>
      <div className="mt-2 h-px w-24 bg-gradient-to-r from-violet-500/70 to-transparent" />
    </div>
  );
}
