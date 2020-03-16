import React from 'react'
import * as icons from './icons'
import { oneOf } from 'prop-types'

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

Icon.propTypes = {
    icon: oneOf(Object.values(icons)).isRequired,
}
