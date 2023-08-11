import { useState } from 'react'
import { useTimer } from 'react-timer-hook'

type TimerProps = {
  expiryTimestamp: Date
}

export function Timer({ expiryTimestamp }: TimerProps) {
  const { totalSeconds, hours, minutes, seconds, pause, resume } = useTimer({
    expiryTimestamp,
  })

  const [time, setTime] = useState(totalSeconds)

  ;(function handlePause() {
    const buttonPause = document.getElementById('pause')

    buttonPause?.addEventListener('click', pause)
  })()
  ;(function handlePlay() {
    const buttonPlay = document.getElementById('play')

    buttonPlay?.addEventListener('click', resume)
  })()

  return (
    <div>
      <input
        type="range"
        value={time}
        max={totalSeconds}
        className="w-full h-9 rounded-full slider-time"
      />
      <div className="flex justify-between">
        <p>0:00</p>
        <p>
          {hours > 0 && (
            <>
              <span>{hours}</span>:
            </>
          )}
          {minutes > 0 && (
            <>
              <span>{minutes}</span>:
            </>
          )}
          {seconds < 10 && 0}
          <span>{parseInt(seconds.toFixed(2))}</span>
        </p>
      </div>
      <p>{totalSeconds}</p>
    </div>
  )
}
