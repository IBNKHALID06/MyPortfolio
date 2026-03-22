export default function LavaBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* SVG goo filter to create metaball-like merging */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Blobs layer */}
      <div className="absolute inset-0 [filter:url(#goo)]">
        <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-violet-500/70 blur-2xl animate-[blobFloat_10s_ease-in-out_infinite]" />
        <div className="absolute top-1/4 -right-16 h-64 w-64 rounded-full bg-fuchsia-500/70 blur-2xl animate-[blobFloat_12s_ease-in-out_infinite] [animation-delay:1s]" />
        <div className="absolute bottom-0 left-1/4 h-[20rem] w-[20rem] rounded-full bg-purple-600/70 blur-2xl animate-[blobFloat_14s_ease-in-out_infinite] [animation-delay:2s]" />
        <div className="absolute top-2/3 right-1/3 h-48 w-48 rounded-full bg-indigo-500/70 blur-2xl animate-[blobFloat_16s_ease-in-out_infinite] [animation-delay:3s]" />
        <div className="absolute top-6 left-1/2 h-44 w-44 rounded-full bg-pink-500/60 blur-2xl animate-[blobFloat_18s_ease-in-out_infinite] [animation-delay:4s]" />
      </div>
    </div>
  );
}
