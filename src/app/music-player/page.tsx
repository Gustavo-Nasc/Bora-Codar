'use client'

import { FormEvent, useCallback, useRef, useState } from 'react'
import {
  FaPlay,
  FaPause,
  FaVolumeXmark,
  FaVolumeHigh,
  FaRotateLeft,
  FaRotate,
  FaMagnifyingGlass,
} from 'react-icons/fa6'
import ReactPlayer from 'react-player'
import './styles/Player.css'

export default function MusicPlayer() {
  // Referências
  const playerRef = useRef<ReactPlayer>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // CONFIGURAÇÕES DO PLAYER
  const [url, setUrl] = useState<string | undefined>(undefined)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [loop, setLoop] = useState(false)
  const [volume, setVolume] = useState(1)
  const [duration, setDuration] = useState<number | undefined>(undefined)
  const [currentTime, setCurrentTime] = useState<number | undefined>(0)

  // FUNÇÕES DO PLAYER

  // Mutar / Desmutar
  function handleMuteClick() {
    muted ? setMuted(false) : setMuted(true)

    document.getElementById('mute')?.classList.toggle('hidden')
    document.getElementById('unmute')?.classList.toggle('hidden')
  }

  // Tocar / Pausar
  function handlePlayClick() {
    playing ? setPlaying(false) : setPlaying(true)

    document.getElementById('play')?.classList.toggle('hidden')
    document.getElementById('pause')?.classList.toggle('hidden')
  }

  // Deixar em Loop / Tirar do Loop
  function handleLoopClick() {
    loop ? setLoop(false) : setLoop(true)

    document.getElementById('loop')?.classList.toggle('hidden')
    document.getElementById('unloop')?.classList.toggle('hidden')
  }

  // Atualizar URL
  const handleSubmitURLForm = useCallback((e: FormEvent) => {
    e.preventDefault()

    setUrl(inputRef.current?.value)
  }, [])

  function handleDuration() {
    const minutes = Math.floor(playerRef.current?.getDuration() / 60)
    const seconds = (playerRef.current?.getDuration() % 60) / 100

    setDuration(minutes + seconds)
  }

  return (
    <main className="bg-[#0F0D13] min-h-screen flex flex-col gap-6 items-center justify-center p-6">
      <form onSubmit={handleSubmitURLForm} className="flex gap-3 items-center">
        <input
          placeholder="Insira a URL aqui"
          ref={inputRef}
          className="py-1 px-2 rounded-sm text-black"
        />
        <button>
          <FaMagnifyingGlass size={32} />
        </button>
      </form>

      <div className="bg-[#2A2141] w-full max-w-2xl p-6 rounded-xl flex flex-col gap-6">
        <div className="relative w-full h-max">
          <ReactPlayer
            url={url}
            playing={playing}
            muted={muted}
            loop={loop}
            volume={volume}
            ref={playerRef}
            className="rounded-xl"
            width="100%"
            onReady={handleDuration}
          />
        </div>
        <div className="flex justify-between">
          <button onClick={handleMuteClick}>
            <FaVolumeHigh size={32} id="unmute" />
            <FaVolumeXmark size={32} className="hidden" id="mute" />
          </button>
          <button onClick={handlePlayClick}>
            <FaPlay size={32} id="play" />
            <FaPause size={32} className="hidden" id="pause" />
          </button>
          <button onClick={handleLoopClick}>
            <FaRotateLeft size={32} id="loop" />
            <FaRotate size={32} className="hidden" id="unloop" />
          </button>
        </div>
        <input
          type="range"
          step=".01"
          className="slider"
          max={1}
          value={volume}
          onChange={(event) => {
            setVolume(parseFloat(event.target.value))
          }}
        />
        {url && (
          <div>
            <input
              type="range"
              value={currentTime}
              className="w-full bg-black"
            />
            <div className="flex justify-between">
              <p>0:00</p>
              <p>{duration?.toString().replaceAll('.', ':')}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
