import React, { Suspense } from 'react'
import klovn from '../../audio/klovn.mp3'

const ClientSideLazy = React.lazy(() => import('./ClientSide'))

export const AudioPlayer = () => {
    const isSSR = typeof window === 'undefined'

    return !isSSR ? (
        <Suspense fallback={null}>
            <ClientSideLazy audio={klovn} />
        </Suspense>
    ) : null
}
