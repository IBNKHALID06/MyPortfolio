import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, Music, SkipForward, Minus, Plus } from "lucide-react";

type Track = { src: string; name: string };

const defaultTracks: Track[] = [
  {
    name: "Nothing's Gonna Hurt You Baby - Cigarettes After Sex",
    src: "https://cdn.builder.io/o/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2F8057928c7744410baca42faf050fa434?alt=media&token=a102540e-d125-4993-bdb5-2cda7cd404f4&apiKey=c204d5ef3ac44e349ef5b320a536efad",
  },
  {
    name: "Kilgore Doubtfire - Escape",
    src: "https://cdn.builder.io/o/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2Fb02360fc85de40478f3f4da4bb40a8a6?alt=media&token=d301e4e1-e082-42a2-a03d-0089eb9352d3&apiKey=c204d5ef3ac44e349ef5b320a536efad",
  },
  {
    name: "Hannah Williams & The Affirmations - Late Nights & Heartbreak",
    src: "https://cdn.builder.io/o/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2F86017ef8dbfa4cfc88b146e96429c7f4?alt=media&token=12074282-b199-4149-964a-d42615355826&apiKey=c204d5ef3ac44e349ef5b320a536efad",
  },
  {
    name: "¿Porqué te vas - Jeanette",
    src: "https://cdn.builder.io/o/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2Fbd742a3fd1f141d281cb59b01696a8ef?alt=media&token=620242c9-2b23-48b4-b0ae-957526c3e45a&apiKey=c204d5ef3ac44e349ef5b320a536efad",
  },
  {
    name: "Xcho - Ты и Я",
    src: "https://cdn.builder.io/o/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2Fc43db634fa7a43d4b620f3eb96b326ea?alt=media&token=ef8368ab-5618-4db9-89eb-ceec91b3d10e&apiKey=c204d5ef3ac44e349ef5b320a536efad",
  },
  {
    name: "TOO CLOSE TO ME (slowed)",
    src: "https://cdn.builder.io/o/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2Ffd09ea06564d4be897e792d6c3631aab?alt=media&token=2aa82af4-7460-4dfb-bdaa-ab712ecbf479&apiKey=c204d5ef3ac44e349ef5b320a536efad",
  },
  {
    name: "Stuck Next To You - Tiishe [Slowed]",
    src: "https://cdn.builder.io/o/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2Fe9eeb68e0af84daf9c95de8ddcc8ebde?alt=media&token=402824a7-7fb9-4594-b539-f67f9e1841c7&apiKey=c204d5ef3ac44e349ef5b320a536efad",
  },
];

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [list, setList] = useState<Track[]>(defaultTracks);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.6);
  const [showVol, setShowVol] = useState(false);

  useEffect(() => {
    const anyWin = window as any;
    if (anyWin.khalidTracks && Array.isArray(anyWin.khalidTracks)) {
      setList(anyWin.khalidTracks);
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
    const onEnd = () => setIndex((i) => (list.length ? (i + 1) % list.length : 0));
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    return () => { audio.removeEventListener("timeupdate", onTime); audio.removeEventListener("ended", onEnd); };
  }, [list.length]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !list[index]) return;
    audio.src = list[index].src;
    audio.volume = volume;
    if (isPlaying) audio.play().catch(() => setIsPlaying(false));
  }, [index, list]);

  useEffect(() => { const a = audioRef.current; if (a) a.volume = volume; }, [volume]);

  const toggle = async () => {
    const audio = audioRef.current; if (!audio) return;
    if (!list[index]) return; // no track loaded
    if (isPlaying) { audio.pause(); audio.currentTime = 0; setProgress(0); setIsPlaying(false); }
    else { await audio.play().catch(() => {}); setIsPlaying(true); }
  };

  const onSeek = (v: number) => {
    const audio = audioRef.current; if (!audio || !audio.duration) return;
    audio.currentTime = v * audio.duration; setProgress(v);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="card-glass p-2 rounded-full flex items-center gap-2">
        <button
          onClick={toggle}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground size-10 hover:scale-[1.04] transition-transform"
        >
          {isPlaying ? <Pause className="size-5" /> : <Play className="size-5" />}
        </button>

        {isPlaying && (
          <div className="flex items-center gap-2 pl-2">
            <div className="block">
              <div className="flex items-center gap-2 text-xs text-foreground/80">
                <Music className="size-4 text-primary" />
                <span className="truncate w-[140px]">{list[index]?.name ?? "No track"}</span>
              </div>
              <input className="range-mustang range-wave w-44" type="range" min={0} max={1} step={0.001} value={progress} onChange={(e) => onSeek(Number(e.target.value))} />
            </div>

            {/* Skip button */}
            <button onClick={() => setIndex((i) => (list.length ? (i + 1) % list.length : 0))} aria-label="Next" className="inline-flex items-center justify-center rounded-full border border-primary/30 size-8 hover:bg-primary/10">
              <SkipForward className="size-4" />
            </button>

            {/* Volume popover */}
            <div className="relative">
              <button onClick={() => setShowVol((v) => !v)} aria-label="Volume" className="inline-flex items-center justify-center rounded-full border border-primary/30 size-8 hover:bg-primary/10">
                <Volume2 className="size-4 text-foreground/70" />
              </button>
              {showVol && (
                <div className="absolute bottom-10 right-1/2 translate-x-1/2 card-glass p-2 rounded-lg shadow-lg" onMouseLeave={() => setShowVol(false)}>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <button aria-label="Volume down" onClick={() => setVolume((v) => Math.max(0, Math.round((v - 0.05) * 100) / 100))} className="inline-flex items-center justify-center size-6 rounded-full border border-primary/30 hover:bg-primary/10"><Minus className="size-3"/></button>
                    <div className="text-[10px] text-foreground/70 text-center min-w-8">{Math.round(volume * 100)}%</div>
                    <button aria-label="Volume up" onClick={() => setVolume((v) => Math.min(1, Math.round((v + 0.05) * 100) / 100))} className="inline-flex items-center justify-center size-6 rounded-full border border-primary/30 hover:bg-primary/10"><Plus className="size-3"/></button>
                  </div>
                  <div className="relative h-24 w-6">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1.5 rounded-full bg-foreground/15 pointer-events-none" />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1.5 rounded-full bg-primary pointer-events-none" style={{ height: `${Math.round(volume * 100)}%` }} />
                    <input
                      className="range-vertical absolute w-24"
                      aria-label="Volume"
                      type="range"
                      min={0}
                      max={1}
                      step={0.01}
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      style={{ left: "calc(50% - 3px)", transform: "rotate(-90deg)", transformOrigin: "center" }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <audio ref={audioRef} preload="metadata" />
    </div>
  );
}
