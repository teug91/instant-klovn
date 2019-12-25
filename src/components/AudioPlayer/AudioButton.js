import React from 'react'
import styled from 'styled-components'
import { useAudio } from './useAudio'
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

export const AudioButton = ({ audio }) => {
    const [playing, toggle] = useAudio(audio)

    const icon = playing ? pause : play

    return (
        <Button onClick={toggle}>
            <Icon icon={icon} />
        </Button>
    )
}
