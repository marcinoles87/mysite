import React, { useState } from 'react'

import './portfolio.scss';

import vip from './img/vip.png';
import vip2 from './img/vip2.png';
import weather from './img/weather.png';
import hangman from './img/hangman.png';

function Portfolio() {
  
    const [show , setShow] = useState(true)


    const showSection = () => {
        const element = document.querySelector('.portfolio-container') ;
        const element2 = document.querySelector('.portfolio-description') ;
        console.log(element)
        element.classList.add('show')
        element2.classList.add('show')

    }
    
  return (
    <div className='portfolio-container'onMouseEnter={showSection}>
        <h1 className='portfolio-name' id='projects'>Portfolio</h1>

        <div className='portfolio-projects' onMouseEnter={showSection}>
            
           
            <div className='portfolio-description' >

                <div>
                    <img src={vip} alt='viptour-site'></img>
                </div>
                
                <div className='portfolio-text'>
                    <h3>Vip Tour Cracow   <span>2021</span></h3>
                    <p>First "usefull" site for my friend</p>
                    <p>Use bootstrap templets , HTML , CSS</p>
                    <p>Nice / Smooth / Simple</p>
                    <a href='#'>Preview</a>
                </div>
            </div>


            
            <div className='portfolio-description' >

                <div>
                    <img src={vip2} alt='viptour-site'></img>
                </div>
                
                <div className='portfolio-text'>
                    <h3>Vip Tour Cracow  2 <span>2022</span></h3>
                    <p>Second site for my friend</p>
                    <p>React , video , HTML , CSS</p>
                    <p>Nice / Smooth / Simple</p>
                    <a href='#'>Preview</a>
                </div>
            </div>


            
            <div className='portfolio-description' >

                <div>
                    <img src={weather} alt='viptour-site'></img>
                </div>
                
                <div className='portfolio-text'>
                    <h3>Weather App   <span>2023</span></h3>
                    <p>Write city and see weather in biggest city in Poland</p>
                    <p>External data , fetch data</p>
                    <p>Nice , usefull</p>
                    <a href='#'>Preview</a>
                </div>
            </div>

            
            <div className='portfolio-description' >

                <div>
                    <img src={hangman} alt='viptour-site'></img>
                </div>
                
                <div className='portfolio-text'>
                    <h3>Hangman game   <span>2023</span></h3>
                    <p>Little game for my kids</p>
                    <p>Use React </p>
                    <p>Nice / Smooth / Simple</p>
                    <a href='#'>Preview</a>
                </div>
            </div>

           
        
                
            
        </div>

    </div>
  )
}

export default Portfolio