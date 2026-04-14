import { Play, Pause, Volume2, Music, SkipForward } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Track = { src: string; name: string };

// Direct URLs for the new tracks
const defaultTracks: Track[] = [
  {
    name: "Nothing's Gonna Hurt You Baby - Cigarettes After Sex",
    src: "https://cdn.builder.io/o/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2F8057928c7744410baca42faf050fa434?alt=media&token=a102540e-d125-4993-bdb5-2cda7cd404f4&apiKey=c204d5ef3ac44e349ef5b320a536efad",
  },
  {
    name: "Good Looking - Suki Waterhouse",
    src: "https://cdn.builder.io/o/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2Fd681475c932f421ea4385e56af9db305?alt=media&token=73bc6834-fa13-4400-bb86-fdf123e529f1&apiKey=c204d5ef3ac44e349ef5b320a536efad",
  },
  {
    name: "Problem - Ariana Grande (Feat. Iggy Azalea)",
    src: "https://cdn.builder.io/o/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2F2cc75eec2ee24ab19aba8b107f6223b4?alt=media&token=cc4637a3-7ddd-425b-8388-827d6f4342d4&apiKey=c204d5ef3ac44e349ef5b320a536efad",
  },
  {
    name: "So High - Doja Cat",
    src: "https://cdn.builder.io/o/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2F76d696281b0c466baac508d776343f14?alt=media&token=a17883da-f62f-4865-9e08-e3ee96c8e952&apiKey=c204d5ef3ac44e349ef5b320a536efad",
  },
  {
    name: "Baby Came Home 2 & Valentines - The Neighbourhood",
    src: "https://cdn.builder.io/o/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2Fc822f6a431074a4399336aa8ddb72e85?alt=media&token=07fbd571-bbbc-40b0-b9a1-38122009c827&apiKey=c204d5ef3ac44e349ef5b320a536efad",
  },
  {
    name: "Nobody New - The Marías",
    src: "https://cdn.builder.io/o/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2F9d76c7b2bcd3476bbcb5fb8b4a518594?alt=media&token=d706d9a1-793b-439e-9a31-6ec863924968&apiKey=c204d5ef3ac44e349ef5b320a536efad",
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
  const [showPlaylist, setShowPlaylist] = useState(false);

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
    if (!list[index]) return;
    if (isPlaying) { audio.pause(); audio.currentTime = 0; setProgress(0); setIsPlaying(false); }
    else { await audio.play().catch(() => {}); setIsPlaying(true); }
  };

  const onSeek = (v: number) => {
    const audio = audioRef.current; if (!audio || !audio.duration) return;
    audio.currentTime = v * audio.duration; setProgress(v);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="backdrop-blur-md bg-background/80 border border-primary/20 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 p-4">
          {/* Play Button */}
          <button
            onClick={toggle}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground size-12 hover:shadow-lg hover:scale-110 transition-all duration-200 flex-shrink-0"
          >
            {isPlaying ? <Pause className="size-6" /> : <Play className="size-6 ml-0.5" />}
          </button>

          {/* Track Info and Controls */}
          {isPlaying && (
            <div className="flex items-center gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-sm text-foreground/80 mb-2">
                  <Music className="size-4 text-primary flex-shrink-0" />
                  <span className="truncate text-sm font-medium">{list[index]?.name ?? "No track"}</span>
                </div>
                <input
                  className="w-40 h-1 bg-foreground/10 rounded-full appearance-none cursor-pointer accent-primary hover:accent-primary/80 transition-colors"
                  type="range"
                  min={0}
                  max={1}
                  step={0.001}
                  value={progress}
                  onChange={(e) => onSeek(Number(e.target.value))}
                />
              </div>

              {/* Skip button */}
              <button
                onClick={() => setIndex((i) => (list.length ? (i + 1) % list.length : 0))}
                aria-label="Next"
                className="inline-flex items-center justify-center rounded-lg border border-primary/30 size-9 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 flex-shrink-0"
              >
                <SkipForward className="size-4 text-foreground/70" />
              </button>

              {/* Volume Control */}
              <div className="relative">
                <button
                  onClick={() => setShowVol((v) => !v)}
                  aria-label="Volume"
                  className="inline-flex items-center justify-center rounded-lg border border-primary/30 size-9 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 flex-shrink-0"
                >
                  <Volume2 className="size-4 text-foreground/70" />
                </button>
                {showVol && (
                  <div className="absolute bottom-12 right-0 backdrop-blur-md bg-background/90 border border-primary/20 rounded-xl shadow-2xl p-3" onMouseLeave={() => setShowVol(false)}>
                    <div className="flex flex-col items-center gap-3 w-8">
                      <input
                        className="w-1 h-20 bg-foreground/10 rounded-full appearance-none cursor-pointer accent-primary"
                        aria-label="Volume"
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={volume}
                        onChange={(e) => setVolume(Number(e.target.value))}
                        style={{ writingMode: "vertical-rl", WebkitAppearance: "slider-vertical" as any }}
                      />
                      <div className="text-xs text-foreground/70 font-medium">{Math.round(volume * 100)}%</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Playlist toggle */}
              <button
                onClick={() => setShowPlaylist((v) => !v)}
                aria-label="Playlist"
                className="inline-flex items-center justify-center rounded-lg border border-primary/30 size-9 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 flex-shrink-0"
              >
                <Music className="size-4 text-foreground/70" />
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold">{list.length}</span>
              </button>
            </div>
          )}
        </div>

        {/* Playlist Popover */}
        {showPlaylist && (
          <div className="border-t border-primary/10 bg-background/50">
            <div className="max-h-48 overflow-y-auto">
              {list.map((track, i) => (
                <button
                  key={i}
                  onClick={() => { setIndex(i); setShowPlaylist(false); }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors border-l-2 ${
                    i === index
                      ? 'bg-primary/10 border-l-primary text-primary font-medium'
                      : 'border-l-transparent text-foreground/70 hover:bg-foreground/5'
                  }`}
                >
                  <div className="truncate">{track.name}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <audio ref={audioRef} preload="metadata" crossOrigin="anonymous" />
    </div>
  );
}
