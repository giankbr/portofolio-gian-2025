'use client';

import { Music } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NowPlaying from './now-playing';

type Track = {
  artist: string;
  songUrl: string;
  title: string;
  album: string;
  albumImageUrl: string;
};

export default function SpotifyTracks() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopTracks() {
      try {
        const res = await fetch('/api/spotify/top-tracks');
        const data = await res.json();
        setTracks(data);
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTopTracks();
  }, []);

  return (
    <div>
      {/* Now Playing Section */}
      <div className="mb-8 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
        <h3 className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">Now Playing</h3>
        <NowPlaying />
      </div>

      {/* Top Tracks */}
      <h3 className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">Top Tracks</h3>

      <div className="space-y-4">
        {loading ? (
          // Skeleton loader for tracks
          Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center gap-4 animate-pulse">
                <div className="w-16 h-16 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                <div className="flex-1">
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2"></div>
                </div>
              </div>
            ))
        ) : tracks.length > 0 ? (
          tracks.map((track, index) => (
            <Link
              key={track.songUrl}
              href={track.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-2 -mx-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors group"
            >
              <div className="relative min-w-[64px] h-16">
                {track.albumImageUrl ? (
                  <Image src={track.albumImageUrl} alt={track.album} width={64} height={64} className="rounded-md shadow-sm object-cover" />
                ) : (
                  <div className="w-16 h-16 bg-zinc-200 dark:bg-zinc-800 rounded-md flex items-center justify-center">
                    <Music size={24} className="text-zinc-400" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-md">
                  <PlayIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute top-0 left-0 w-6 h-6 bg-black/60 flex items-center justify-center rounded-tl-md rounded-br-md text-white text-xs font-medium">{index + 1}</div>
              </div>
              <div className="min-w-0">
                <p className="font-medium truncate">{track.title}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 truncate">{track.artist}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-zinc-500 dark:text-zinc-400 italic">No tracks available</p>
        )}
      </div>

      {/* Spotify branding */}
      <div className="mt-6 flex items-center justify-end">
        <Link
          href="https://open.spotify.com/user/YOUR_SPOTIFY_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 flex items-center gap-1.5"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          <span>View on Spotify</span>
        </Link>
      </div>
    </div>
  );
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
  );
}
