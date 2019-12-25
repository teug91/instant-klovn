import React from 'react'
import styled from 'styled-components'
import { useAudio } from './useAudio'
import { Icon, play, stop } from '../Icon'
import { colors } from '../../theme'

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

    return (
        <Button onClick={toggle}>
            <Icon icon={icon} />
        </Button>
    )
}

export default AudioButton
