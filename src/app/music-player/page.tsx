'use client'

import { useRef } from 'react'
import ReactPlayer from 'react-player'
import Player from './components/Player'

export default function MusicPlayer() {
  const reactPlayerRef = useRef<ReactPlayer>(null)

  console.log(reactPlayerRef)

  return (
    <main className="bg-[#0F0D13] min-h-screen flex flex-col items-center justify-center p-6">
      <Player
        url="https://www.youtube.com/watch?v=lA8o3kUl1TA"
        ref={reactPlayerRef}
      />
    </main>
  )
}
