import React, {useContext} from 'react'
import Project from '../Project/Project'
import ProyectContext from '../../Context/ProyectContext'
import './Projects.scss'

export default function Projects() {
    
    const data = useContext(ProyectContext);

    return (
        <div className="projectsContainer">
            <h2 className="projectsContainer__title">Projects</h2>

            <div className="projectsContainer__container">
                {data.repos.map(item => <Project name={item.name} description={item.description} key={item.id} url={item.html_url} />)}
            </div>
        </div>
    )
}
