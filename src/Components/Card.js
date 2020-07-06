import React from 'react'
import up from '../images/icon-up.svg'
import '../styles/card.css'

const Card = ({username, followers, icon, todayFollowers, name}) =>{
    const cardClass = `card ${name}`
    return(
        <article className = {cardClass}>
        <p className = "card-tittle">
            <img src = {icon} alt = " "/>
            &nbsp; {username}
        </p>
        <p className = "card-followers">
            <span className = "card-followers-number">{followers}</span>
            <br/>
            <span className = "card-followers-tittle">Followers</span>
        </p>
        <p className ="card-today">
            <img src = {up} alt =""/>
            {todayFollowers}
        </p>
    </article>
    )
}

export default Card 