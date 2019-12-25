import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme'

const StyledHeader = styled.header`
    text-align: center;
    font-size: 48px;
    padding-top: 32px;
`

export const Header = () => (
    <StyledHeader>
        INSTANT KLOVN
    </StyledHeader>
)