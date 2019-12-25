import React, { lazy, Suspense } from 'react'
import klovn from '../../audio/klovn.mp3'

const AudioButton = lazy(() => import('./AudioButton'))

export const AudioPlayer = () => {
    const isSSR = typeof window === 'undefined'

    return !isSSR ? (
        <Suspense fallback={null}>
            <AudioButton audio={klovn} />
        </Suspense>
    ) : null
}
