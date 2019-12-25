import { useState, useEffect } from 'react'

export const useAudio = url => {
    const [audio] = useState(new Audio(url))
    const [playing, setPlaying] = useState(false)

    const toggle = () => setPlaying(!playing)

    useEffect(() => {
        const stop = () => {
            audio.pause()
            audio.currentTime = 0
        }

        playing ? audio.play() : stop()
    }, [playing])

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false))
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false))
        }
    }, [])

    return [playing, toggle]
}
