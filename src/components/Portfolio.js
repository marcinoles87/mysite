import React, { useState } from 'react'

import './portfolio.scss';

import vip from './img/vip.png';
import vip2 from './img/vip2.png';
import weather from './img/weather.png';
import hangman from './img/hangman.png';

function Portfolio() {
  
    const [show , setShow] = useState(false)


    const showSection = () => {
        const element = document.querySelector('.portfolio-container') ;
        const element2 = document.querySelector('.portfolio-description') ;
        console.log(element)
        element.classList.add('show')
        element2.classList.add('show')

    }
    
  return (
    <div className='portfolio-container'onMouseEnter={showSection}>
        <h1 className='portfolio-name' id='projects'>Some of my projects</h1>

        <div className='portfolio-projects' onMouseEnter={showSection}>
            
           
            <div className='portfolio-description' >
                <h1>Vip Tour Cracow</h1>
                <p>-First "usefull" site for my friend</p>
                <p>-Use bootstrap templets , HTML , CSS</p>
                <p>-Nice / Smooth / Simple</p>
            </div>

           
            <div className='portfolio-link'>
                <img src={vip} alt='viptour-site'></img>
            </div>
        </div>

        <div className='portfolio-projects' onMouseEnter={showSection}>
            
            <div className='portfolio-description'>
                <ul>Vip Tour Cracow 2
                    <li>-Second site for my friend</li>
                    <li>-Better build , use React</li>
                    <li>-Some media/video use</li>
                    <li>-React router use</li>
                </ul>
            </div>
           
            <div className='portfolio-link'>
            <img src={vip2} alt='viptour-site'></img>
            </div>
        </div>

        <div className='portfolio-projects' onMouseEnter={showSection}>
            
            <div className='portfolio-description'>
                <h1>Weather App</h1>
                <p>-Weather app for Poland city</p>
                <p>-React build , simply project</p>
                <p>-Use external Api from poland metheologic station</p>
                <p>-Everyday new data about weather</p>
            </div>
           
            <div className='portfolio-link'>
            <img src={weather} alt='weather app'></img>
            </div>
        </div>

        <div className='portfolio-projects' onMouseEnter={showSection}>
            
            <div className='portfolio-description'>
                <h1>Hangman game</h1>
                <p>-Hangmane game for my kids</p>
                <p>-Nice and Simple</p>
                <p>-React use</p>
                <p>-New function use</p>
            </div>
           
            <div className='portfolio-link'>
            <img src={hangman} alt='hangman-game'></img>
            </div>
        </div>

        <h2> If you Like this few project please visit my profil on Github and see more... Thanks</h2>
    </div>
  )
}

export default Portfolio