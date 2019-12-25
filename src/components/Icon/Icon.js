import React from 'react'
import { colors } from '../../theme'

export const Icon = ({ icon }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60%"
        height="120"
        viewBox="0 0 24 24"
    >
        <path d={icon} fill="white" />
    </svg>
)
