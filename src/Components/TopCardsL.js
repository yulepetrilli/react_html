import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'
import Card from './Card.js'
import '../styles/topcardlist.css'

const cardListData = [
    {
        id: '1',
        username:'@yuupetrilli',
        followers: '1483',
        todayFollowers: 12,
        icon: facebook,
        name: 'facebook'
    },
    {
        id: '2',
        username:'@yuupetrilli',
        followers: '28k',
        todayFollowers: 12,
        icon: twitter,
        name: 'twitter'
    },
    {
        id: '3',
        username:'@yuupetrilli',
        followers: '6k',
        todayFollowers: 12,
        icon: instagram,
        name: 'instagram'
    },
    {
        id: '4',
        username:'@yuupetrilli',
        followers: '12k',
        todayFollowers: 12,
        icon: youtube,
        name: 'youtube'
    }
]

const TopCardsL = () =>{
    return(
        <section className = "top-cards">
            <div className = "wrapper">
                <div className = "grid">
                   {
                       cardListData.map( (cardData)=> 
                            <Card 
                                key = {cardData.id}
                                {...cardData}
                            />
                       )
                   }
                   
                   {/*  <article className = "card twitter">
                        <p className = "card-tittle">
                            <img src = {twitter} alt = " "/>
                            &nbsp; @yuupetrilli
                        </p>
                        <p className = "card-followers">
                            <span className = "card-followers-number">28k</span>
                            <br/>
                            <span className = "card-followers-tittle">Followers</span>
                        </p>
                        <p className ="card-today">
                            <img src = {up} alt =""/>
                            12 today
                        </p>
                    </article>
                    <article className = "card instagram">
                        <p className = "card-tittle">
                            <img src = {instagram} alt = " "/>
                            &nbsp; @yuupetrilli
                        </p>
                        <p className = "card-followers">
                            <span className = "card-followers-number">6k</span>
                            <br/>
                            <span className = "card-followers-tittle">Followers</span>
                        </p>
                        <p className ="card-today">
                            <img src = {up} alt =""/>
                            12 today
                        </p>
                    </article>
                    <article className = "card youtube">
                        <p className = "card-tittle">
                            <img src = {youtube} alt = " "/>
                            &nbsp; @yuupetrilli
                        </p>
                        <p className = "card-followers">
                            <span className = "card-followers-number">1483</span>
                            <br/>
                            <span className = "card-followers-tittle">Followers</span>
                        </p>
                        <p className ="card-today">
                            <img src = {up} alt =""/>
                            12 today
                        </p>
                    </article> */}
                </div>
            </div>
        </section>
    )
}

export default TopCardsL