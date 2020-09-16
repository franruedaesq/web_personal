import React from 'react'
import './BtnLink.scss'

export default function BtnLink({text}) {
    return (
        <button className="btnLink">
            {text}
        </button>
    )
}
