import React, {useContext} from 'react'
import './NavBar.scss'
import ProyectContext from '../../Context/ProyectContext'

export default function NavBar() {
    const data = useContext(ProyectContext);
    return (
        <div className="navBar" >
            <h2 className="navBar__title" >{data.userInfo.name}</h2>
        </div>
    )
}
