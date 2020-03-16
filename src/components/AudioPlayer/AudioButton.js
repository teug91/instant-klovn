import React from 'react'
import styled from 'styled-components'
import { useAudio } from './useAudio'
import { Icon, play, stop } from '../Icon'
import { colors } from '../../theme'
import { string } from 'prop-types'

const Button = styled.button`
    border: none;
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
    background: ${colors.red};
    outline: none;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
        0px 6px 10px 0px rgba(0, 0, 0, 0.14),
        0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    &:active {
        background: ${colors.redDarker};
    }
`

const AudioButton = ({ audio }) => {
    const [playing, toggle] = useAudio(audio)

    const icon = playing ? stop : play
    const label = playing ? 'Stop' : 'Play'

    return (
        <Button onClick={toggle} aria-label={label}>
            <Icon icon={icon} />
        </Button>
    )
}

AudioButton.propTypes = {
    audio: string.isRequired,
}

export default AudioButton
