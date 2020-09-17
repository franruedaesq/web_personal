import React from 'react'
import BtnLink from '../BtnLink/BtnLink'
import './Project.scss'

export default function Project({name, description, url}) {
    return (
        <div className="project">
            <p className="project__title">{name}</p>
            <p className="project__description">{description}</p>
            <div className="project__buttons">
            <a href={url} target="_blank"><BtnLink text="Ir al repo"/></a>
            <a href={`https://franruedaesq.github.io/${name}`} target="_blank"><BtnLink text="Ir a web"/></a>
            </div>
        </div>
    )
}
