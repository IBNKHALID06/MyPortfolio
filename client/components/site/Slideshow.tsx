type Slide = { src: string; alt?: string };

export default function Slideshow({ slides }: { slides: Slide[] }) {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 w-max">
        {slides.map((s, i) => (
          <img
            key={`${s.src}-${i}`}
            src={s.src}
            alt={s.alt ?? "Slide"}
            className="h-56 rounded-xl border border-primary/20 shadow-sm"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
