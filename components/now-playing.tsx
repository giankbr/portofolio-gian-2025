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

  // Enhanced equalizer animation variants
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

  return (
    <div className="flex flex-row items-center gap-2 sm:gap-4 w-full max-w-full group">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
              rotate: [0, 3, 0, -3, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: {
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
              },
              rotate: {
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut',
              },
            }}
            className="w-12 h-12 rounded-md bg-zinc-200 dark:bg-zinc-800"
          >
            <motion.div
              className="w-full h-full opacity-40 flex items-center justify-center"
              animate={{ scale: [0.8, 1, 0.8] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-zinc-500">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M9 17l6-5-6-5v10z" fill="currentColor" />
              </svg>
            </motion.div>
          </motion.div>
        ) : data.isPlaying ? (
          <motion.div
            key="album-art"
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
                duration: 0.8,
              },
            }}
            exit={{ opacity: 0, scale: 0.7, transition: { duration: 0.3 } }}
            className="relative min-w-[48px] h-12"
          >
            {/* Pulsing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-md"
              animate={{
                boxShadow: ['0 0 0 0 rgba(139, 92, 246, 0)', '0 0 0 4px rgba(139, 92, 246, 0.3)', '0 0 0 0 rgba(139, 92, 246, 0)'],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Album art container */}
            <motion.div whileHover={{ scale: 1.08 }} className="rounded-md overflow-hidden h-full w-full">
              {/* Spinning album with fallback */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="h-full w-full relative bg-zinc-800"
              >
                {data.albumImageUrl ? (
                  <Image
                    src={data.albumImageUrl}
                    alt={data.album || 'Album cover'}
                    width={48}
                    height={48}
                    className="rounded-md shadow-sm object-cover h-full w-full"
                    priority
                    onError={(e) => {
                      // Fallback to a music icon if image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-800 to-violet-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Pause overlay - only shows on hover */}
            <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-md backdrop-blur-sm">
              <PauseIcon size={20} className="text-white" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="not-playing"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { type: 'spring', stiffness: 400, damping: 25 },
            }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(139, 92, 246, 0.2)',
              transition: { duration: 0.2 },
            }}
            className="w-12 h-12 rounded-md bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 4,
                ease: 'easeInOut',
              }}
            >
              <PlayIcon size={20} className="text-zinc-500 group-hover:text-purple-500 transition-colors" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col min-w-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {data.isPlaying ? (
            <motion.div key="song-info" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="flex flex-col">
              <div className="flex items-center gap-2">
                <Link
                  href={data.songUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-medium truncate hover:underline hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {data.title}
                </Link>

                {/* Enhanced music equalizer animation */}
                <div className="hidden sm:flex items-end h-4 gap-0.5 ml-1">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={equalizerVariants}
                      animate="playing"
                      className="w-[2px] h-4 bg-purple-500 rounded-full origin-bottom"
                      style={{ backgroundColor: i === 1 ? '#8b5cf6' : undefined }}
                    />
                  ))}
                </div>
              </div>

              <motion.span
                className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 truncate"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {data.artist}
              </motion.span>
            </motion.div>
          ) : (
            <motion.div key="not-playing-text" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="flex flex-col">
              <p className="text-sm sm:text-base font-medium">Not Playing</p>
              <motion.span
                className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400"
                animate={{ opacity: [0.7, 0.9, 0.7] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Spotify
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
