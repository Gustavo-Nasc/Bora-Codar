import './Player.css'

import React, { ForwardRefRenderFunction, RefObject, forwardRef, useState } from 'react'
import {
  FaPlay,
  FaPause,
  FaVolumeXmark,
  FaVolumeHigh,
  FaRotateLeft,
  FaRotate,
} from 'react-icons/fa6'
import ReactPlayer from 'react-player'

type PlayerProps = {
  url: string
  ref: RefObject<ReactPlayer>
}

const Player: ForwardRefRenderFunction<ReactPlayer, PlayerProps> = (
  { url, ref },
) => {
  // CONFIGURAÇÕES DO PLAYER
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [loop, setLoop] = useState(false)
  const [volume, setVolume] = useState(1)
  const [duration, setDuration] = useState<number | undefined>(0)

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

  function handleDuration() {
    setDuration(ref.current?.getDuration())
  }

  return (
    <div className="bg-[#2A2141] w-full max-w-2xl p-6 rounded-xl flex flex-col gap-4">
      <div className="relative w-full h-max">
        <ReactPlayer
          url={url}
          className="rounded-xl"
          ref={ref}
          playing={playing}
          muted={muted}
          loop={loop}
          volume={volume}
          width="100%"
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
      <p onLoad={handleDuration}>{duration}</p>
    </div>
  )
}

export default forwardRef(Player)
