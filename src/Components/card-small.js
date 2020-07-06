import React from 'react'
import up from '../images/icon-up.svg'
import '../styles/card-small.css'

const CardSmall = ({icon, growth, pageViews}) =>{
    return(
        <div className = "card-small">
            <p className = "card-small-views"> Page views</p>
            <p className = "card-small-icon">
                <img src = {icon} alt = " "/>
            </p>
            <p className = "card-small-number"> {pageViews}</p>
            <p className = "card-small-percentage">
                <span>
                    <img src = {up} alt = " "/>
                    {growth}%
                </span>
            </p>
         </div>
    )
}

export default CardSmall