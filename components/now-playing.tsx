'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
    const fetchNowPlaying = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/spotify/now-playing');
        const newData = await res.json();
        setData(newData);
      } catch (err) {
        console.error('Error fetching now playing:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const intervalId = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(intervalId);
  }, []);

  const equalizerVariants = {
    playing: (i: number) => ({
      scaleY: [0.3, 1, 0.6, 0.8, 1, 0.4, 0.9, 0.3],
      backgroundColor: i === 1 ? ['#8b5cf6', '#ec4899', '#8b5cf6'] : undefined,
      transition: {
        scaleY: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 1.8,
          delay: i * 0.2,
          ease: 'easeInOut',
        },
        backgroundColor: {
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 8,
          ease: 'easeInOut',
        },
      },
    }),
    paused: { scaleY: 0.3 },
  };

  const renderAlbumArt = () => {
    if (loading) {
      return (
        <motion.div
          animate={{ opacity: [0.5, 0.8, 0.5], rotate: [0, 3, 0, -3, 0] }}
          transition={{
            opacity: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
            rotate: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
          }}
          className="w-full h-full flex items-center justify-center"
        >
          <LoadingIcon />
        </motion.div>
      );
    }

    if (data.isPlaying && data.albumImageUrl) {
      return (
        <motion.div animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.8 }} className="w-full h-full">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="h-full w-full relative">
            <Image
              src={data.albumImageUrl}
              alt={data.album || 'Album cover'}
              width={96}
              height={96}
              className="rounded-2xl shadow object-cover h-full w-full"
              priority
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>
        </motion.div>
      );
    }

    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-800 to-violet-600">
        <SpotifyIcon className="text-white" />
      </div>
    );
  };

  const renderEqualizer = () =>
    [0, 1, 2, 3].map((i) => (
      <motion.div
        key={i}
        custom={i}
        variants={equalizerVariants}
        animate="playing"
        className="w-[3px] h-6 bg-purple-500 rounded-full origin-bottom"
        style={{ backgroundColor: i === 1 ? '#8b5cf6' : undefined }}
      />
    ));

  return (
    <div className="w-full max-w-none bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow p-8 flex items-center gap-8">
      {/* Album / Loading */}
      <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-purple-500/20 to-zinc-200 dark:to-zinc-800 flex items-center justify-center">
        {renderAlbumArt()}
      </div>

      {/* Song Info */}
      <div className="flex flex-col min-w-0 flex-1">
        {data.isPlaying ? (
          <>
            <a
              href={data.songUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl font-bold truncate hover:underline hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {data.title}
            </a>
            <span className="text-xl text-zinc-500 dark:text-zinc-400 truncate font-medium mt-1">{data.artist}</span>
            <div className="flex items-end h-6 gap-1 mt-3">{renderEqualizer()}</div>
          </>
        ) : (
          <div className="flex flex-col items-start justify-center h-full">
            <span className="text-2xl font-bold text-zinc-700 dark:text-zinc-200">Not Playing</span>
            <span className="text-base text-zinc-500 dark:text-zinc-400">Spotify</span>
          </div>
        )}
      </div>
    </div>
  );
}

// Icons
const LoadingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-zinc-500">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M9 17l6-5-6-5v10z" fill="currentColor" />
  </svg>
);

const SpotifyIcon = ({ className = '' }: { className?: string }) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M9 18V5l12-2v13"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);
