import React from 'react'
import styled from 'styled-components'
import { useAudio } from './useAudio'
import klovn from '../../audio/klovn.mp3'
import { Icon, play, pause } from '../Icon'
import { colors } from '../../theme'

const Button = styled.button`
    border-color: ${colors.red};
    border-radius: 50%;
    height: 256px;
    width: 256px;
    background: none;
    border-width: 6px;
    border-style: solid;
    outline: none;
    &:active {
        background: ${colors.redLight};
    }
`

export const AudioPlayer = () => {
    const [playing, toggle] = useAudio(klovn)

    const icon = playing ? pause : play

    return (
        <Button onClick={toggle}>
            <Icon icon={icon} />
        </Button>
    )
}
