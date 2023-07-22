import React from 'react'

import './portfolio.scss';

import vip from './img/vip.png';
import vip2 from './img/vip2.png';
import weather from './img/weather.png';
import hangman from './img/hangman.png';

function Portfolio() {
  return (
    <div className='portfolio-container'>
        <h1 className='portfolio-name'> Portfolio</h1>

        <div className='portfolio-projects'>
            
            <div className='portfolio-description'>
                <h1>Name</h1>
                <p>Description</p>
            </div>
           
            <div className='portfolio-link'>
                <img src={vip} alt='viptour-site'></img>
            </div>
        </div>

        <div className='portfolio-projects'>
            
            <div className='portfolio-description'>
                <h1>Name</h1>
                <p>Description</p>
            </div>
           
            <div className='portfolio-link'>
            <img src={vip2} alt='viptour-site'></img>
            </div>
        </div>

        <div className='portfolio-projects'>
            
            <div className='portfolio-description'>
                <h1>Name</h1>
                <p>Description</p>
            </div>
           
            <div className='portfolio-link'>
            <img src={weather} alt='weather app'></img>
            </div>
        </div>

        <div className='portfolio-projects'>
            
            <div className='portfolio-description'>
                <h1>Name</h1>
                <p>Description</p>
            </div>
           
            <div className='portfolio-link'>
            <img src={hangman} alt='hangman-game'></img>
            </div>
        </div>
    </div>
  )
}

export default Portfolio