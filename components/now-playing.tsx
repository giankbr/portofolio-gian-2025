'use client';

import { useEffect, useState } from 'react';

// Type matches API response
type NowPlayingData = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
  progressMs?: number;
  durationMs?: number;
};

export default function NowPlaying() {
  const [data, setData] = useState<NowPlayingData>({ isPlaying: false });
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Equalizer animation state
  const EQUALIZER_BARS = 6;
  const [barHeights, setBarHeights] = useState<number[]>(Array(EQUALIZER_BARS).fill(8));

  useEffect(() => {
    async function fetchNowPlaying() {
      setLoading(true);
      try {
        const res = await fetch('/api/spotify/now-playing');
        const json = await res.json();
        setData(json);
      } catch (err) {
        setData({ isPlaying: false });
      } finally {
        setLoading(false);
      }
    }
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setProgress(data.progressMs || 0);
    if (!data.isPlaying || !data.progressMs) return;
    let raf: number;
    let start = Date.now();
    let base = data.progressMs;
    function tick() {
      const elapsed = Date.now() - start;
      let next = base + elapsed;
      if (data.durationMs && next > data.durationMs) next = data.durationMs;
      setProgress(next);
      if (data.durationMs && next < data.durationMs) {
        raf = requestAnimationFrame(tick);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [data.isPlaying, data.progressMs, data.durationMs]);

  useEffect(() => {
    if (!data.isPlaying) {
      setBarHeights(Array(EQUALIZER_BARS).fill(8));
      return;
    }
    let raf: number;
    const start = Date.now();
    function animate() {
      const t = (Date.now() - start) / 500; // speed factor
      setBarHeights(
        Array.from({ length: EQUALIZER_BARS }, (_, i) => {
          // Sine wave with phase offset for each bar, reduced amplitude
          return 16 + Math.abs(Math.sin(t + i)) * 8; // amplitude reduced from 24 to 8
        })
      );
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [data.isPlaying]);

  function msToTime(ms?: number) {
    if (!ms) return '0:00';
    const min = Math.floor(ms / 60000);
    const sec = Math.floor((ms % 60000) / 1000);
    return `${min}:${sec.toString().padStart(2, '0')}`;
  }

  const LoadingIcon = () => <div className="animate-spin rounded-full h-10 w-10 border-2 border-purple-500 border-t-transparent"></div>;

  const SpotifyIcon = ({ className = '' }: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.062 14.583c-.248 0-.403-.137-.662-.27-1.767-.914-3.988-1.134-6.608-.616-.241.055-.403.082-.541.082-.403 0-.713-.302-.713-.705 0-.378.248-.651.568-.706 3.102-.624 5.704-.357 7.894.95.289.179.434.344.434.705 0 .403-.31.56-.372.56zm.94-2.627c-.303 0-.496-.165-.8-.329-2.016-1.05-5.076-1.35-7.636-.742-.303.068-.496.096-.661.096-.496 0-.868-.372-.868-.868 0-.462.303-.8.696-.868 3.102-.661 6.608-.33 9.102.951.372.22.537.427.537.868 0 .496-.372.892-.37.892zm.855-2.816c-.365 0-.6-.192-.974-.384-2.281-1.188-6.048-1.298-8.22-.715-.365.096-.6.124-.808.124-.6 0-1.048-.448-1.048-1.048 0-.565.365-.972.848-1.072 2.588-.675 6.826-.548 9.612.844.448.268.662.524.662 1.048 0 .6-.448 1.203-1.072 1.203z" />
    </svg>
  );

  const renderAlbumArt = () => {
    if (loading) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
          <LoadingIcon />
        </div>
      );
    }
    if (data.isPlaying && data.albumImageUrl) {
      return (
        <div className="w-full h-full relative group">
          <img src={data.albumImageUrl} alt={data.album || 'Album cover'} className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl" />
        </div>
      );
    }
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600">
        <SpotifyIcon className="text-white opacity-70" />
      </div>
    );
  };

  const EqualizerBar = ({ height }: { height: number }) => (
    <div className="w-1 bg-gradient-to-t from-purple-600 to-pink-500 rounded-full transition-all duration-200 ease-out" style={{ height: `${height}px` }} />
  );

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-center gap-6 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 shadow-sm">
        {/* Album Art */}
        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-md">{renderAlbumArt()}</div>
        {/* Song Info */}
        <div className="flex-1 min-w-0 w-full">
          <div className="flex items-center gap-2 mb-1">
            <SpotifyIcon className="text-green-500" />
            <span className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">Now Playing</span>
          </div>
          {data.isPlaying ? (
            <div>
              <a
                href={data.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-bold text-zinc-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 truncate"
              >
                {data.title}
              </a>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 truncate mt-0.5">{data.artist}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{data.album}</p>
              {/* Equalizer */}
              <div className="flex items-end gap-1 pt-2">
                {barHeights.map((height, i) => (
                  <EqualizerBar key={i} height={height} />
                ))}
              </div>
              {/* Progress Bar (Real) */}
              {data.durationMs && (
                <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                  <span>{msToTime(progress)}</span>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-1 rounded-full transition-all duration-200"
                      style={{ width: `${((progress || 0) / (data.durationMs || 1)) * 100}%` }}
                    ></div>
                  </div>
                  <span>{msToTime(data.durationMs)}</span>
                </div>
              )}
            </div>
          ) : loading ? (
            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm mt-2">
              <LoadingIcon />
              <span>Connecting...</span>
            </div>
          ) : (
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">Nothing Playing</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Start listening on Spotify</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
