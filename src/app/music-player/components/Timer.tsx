import { useTimer } from 'react-timer-hook'

type TimerProps = {
  expiryTimestamp: Date
}

export function Timer({ expiryTimestamp }: TimerProps) {
  const { hours, minutes, seconds, start, pause, resume } = useTimer({
    expiryTimestamp,
  })

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>
      <div style={{ fontSize: '100px' }}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
    </div>
  )
}
