"use client"

import { useState, useEffect } from "react"
import { Disc3 } from "lucide-react"

interface Track {
  id: string
  title: string
  artist: string
  albumArt: string
}

export default function SpotifyTracks() {
  const [isLoading, setIsLoading] = useState(true)
  const [tracks, setTracks] = useState<Track[]>([])

  useEffect(() => {
    // Simulate loading tracks
    const timer = setTimeout(() => {
      setTracks([
        {
          id: "1",
          title: "Track Name 1",
          artist: "Artist Name",
          albumArt: "/placeholder.svg?height=60&width=60",
        },
        {
          id: "2",
          title: "Track Name 2",
          artist: "Artist Name",
          albumArt: "/placeholder.svg?height=60&width=60",
        },
        {
          id: "3",
          title: "Track Name 3",
          artist: "Artist Name",
          albumArt: "/placeholder.svg?height=60&width=60",
        },
      ])
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <div className="text-zinc-500">Loading...</div>
  }

  return (
    <div className="space-y-4">
      {tracks.map((track) => (
        <div
          key={track.id}
          className="flex items-center gap-4 p-4 bg-zinc-900/50 rounded-lg hover:bg-zinc-900 transition-colors"
        >
          <div className="w-12 h-12 bg-zinc-800 rounded-md overflow-hidden flex-shrink-0">
            <img
              src={track.albumArt || "/placeholder.svg"}
              alt={`${track.title} album art`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-medium truncate">{track.title}</h3>
            <p className="text-zinc-400 text-sm truncate">{track.artist}</p>
          </div>
          <div className="flex-shrink-0">
            <Disc3 className="w-5 h-5 text-zinc-500" />
          </div>
        </div>
      ))}
    </div>
  )
}
