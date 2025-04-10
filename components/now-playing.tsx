'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { PauseIcon, PlayIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type NowPlayingData = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
};

export default function NowPlaying() {
  const [data, setData] = useState<NowPlayingData>({ isPlaying: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNowPlaying() {
      setLoading(true);
      try {
        const res = await fetch('/api/spotify/now-playing');
        const newData = await res.json();
        setData(newData);
      } catch (error) {
        console.error('Error fetching now playing:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNowPlaying();

    // Poll for updates every 30 seconds
    const intervalId = setInterval(fetchNowPlaying, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-row items-center gap-2 sm:gap-4 w-full max-w-full">
      <AnimatePresence mode="wait">
        {loading ? (
          <div className="w-12 h-12 rounded-md bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
        ) : data.isPlaying ? (
          <motion.div key="album-art" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="relative min-w-[48px] h-12">
            <Image src={data.albumImageUrl!} alt={data.album!} width={48} height={48} className="rounded-md shadow-sm" />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-md">
              <PauseIcon size={20} className="text-white" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="not-playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-12 h-12 rounded-md bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center"
          >
            <PlayIcon size={20} className="text-zinc-500" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col min-w-0">
        {data.isPlaying ? (
          <>
            <Link href={data.songUrl!} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-medium truncate hover:underline">
              {data.title}
            </Link>
            <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 truncate">{data.artist}</span>
          </>
        ) : (
          <>
            <p className="text-sm sm:text-base font-medium">Not Playing</p>
            <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Spotify</span>
          </>
        )}
      </div>
    </div>
  );
}
