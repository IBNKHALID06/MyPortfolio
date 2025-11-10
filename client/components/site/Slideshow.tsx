import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Slide = { src: string; alt: string; caption?: string };

interface Props {
  slides: Slide[];
  intervalMs?: number;
  className?: string;
}

export default function Slideshow({ slides, intervalMs = 5000, className }: Props) {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, safeSlides.length]);

  const start = () => {
    stop();
    if (!safeSlides.length) return;
    timer.current = window.setTimeout(() => setIndex((i) => (i + 1) % safeSlides.length), intervalMs);
  };
  const stop = () => { if (timer.current) { clearTimeout(timer.current); timer.current = null; } };

  const prev = () => setIndex((i) => (i - 1 + safeSlides.length) % safeSlides.length);
  const next = () => setIndex((i) => (i + 1) % safeSlides.length);

  if (!safeSlides.length) return null;

  return (
    <div className={cn("relative w-full overflow-hidden rounded-xl", className)} onMouseEnter={stop} onMouseLeave={start}>
      <div className="relative aspect-[16/9] bg-secondary">
        {safeSlides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
              i === index ? "opacity-100" : "opacity-0"
            )}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        {safeSlides[index]?.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white px-4 py-2 text-sm">{safeSlides[index].caption}</div>
        )}
      </div>

      <button aria-label="Previous" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center size-9 rounded-full bg-black/40 text-white hover:bg-black/60">
        <ChevronLeft className="size-5" />
      </button>
      <button aria-label="Next" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center size-9 rounded-full bg-black/40 text-white hover:bg-black/60">
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {safeSlides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn("h-2.5 w-2.5 rounded-full border border-white/70", i === index ? "bg-white" : "bg-white/20")}
          />
        ))}
      </div>
    </div>
  );
}
