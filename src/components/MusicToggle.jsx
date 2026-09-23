import { useRef, useState } from 'react'

export default function MusicToggle() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      // Only ever starts after a direct tap, so it's safe on mobile.
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/music/wedding.mp3" loop preload="none" />
      <button
        className="music-toggle"
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        title={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? '❚❚' : '♪'}
      </button>
    </>
  )
}
