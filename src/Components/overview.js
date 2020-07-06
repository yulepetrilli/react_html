import React from 'react'
import CardSmall from './card-small.js'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'
import '../styles/overview.css'

const cardSmallList = [
    {
        icon: facebook,
        pageViews: '87',
        growth: 3,
        id: 1
    },
    {
        icon: twitter,
        pageViews: '52',
        growth: 2257,
        id: 2
    },
    {
        icon: instagram,
        pageViews: '5462',
        growth: 1355,
        id: 3
    },
    {
        icon: youtube,
        pageViews: '117',
        growth: 303,
        id: 4
    },
]

const Overview = ()=> {
    return (
        <section className = "overview">
            <div className = "wrapper">
                <h2> Overview-Today</h2>
            </div>
            <div className = "grid">
                {
                    cardSmallList.map ((cardSmallData) =>
                        <CardSmall
                            key = {cardSmallData.id}
                            {...cardSmallData}
                        />          
                    )
                }
            </div>
        </section>
    )
}

export default Overview