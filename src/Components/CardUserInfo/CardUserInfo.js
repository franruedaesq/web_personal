import React, {useContext} from 'react'
import './CardUserInfo.scss'
import ProyectContext from '../../Context/ProyectContext'

export default function CardUserInfo() {
    const data = useContext(ProyectContext);
    return (
        <div className="cardUserInfo">
            <img className="cardUserInfo__avatar" src={data.userInfo.avatar_url} alt=""/>
            <p>{data.userInfo.bio}</p>
        </div>
    )
}
