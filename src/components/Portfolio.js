import React, { useState } from 'react'

import './portfolio.scss';

import vip from './img/vip.png';
import przedszkole from './img/przedszkole.png';
import weather from './img/weather.png';
import hangman from './img/hangman.png';
import kreatorFaktur from './img/kreatorFaktur.png'

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
        <h1 className='portfolio-name' id='projects'>Projects</h1>

        <div className='portfolio-projects' onMouseEnter={showSection}>

            <div className='portfolio-description' >

                <div>
                    <img src={kreatorFaktur} alt='viptour-site'></img>
                </div>
                
                <div className='portfolio-text'>
                    <h3>Invoice Creator  <span>2024</span></h3>
                    <p>Create invoice </p>
                    <p>Use React </p>
                    <p>Nice / Smooth / Simple</p>
                    <a href='https://marcinoles87.github.io/invoicecreator/'>Preview</a>
                </div>
            </div>
            
           
            <div className='portfolio-description' >

                <div>
                    <img src={vip} alt='viptour-site'></img>
                </div>
                
                <div className='portfolio-text'>
                    <h3>Vip Tour Cracow   <span>2021</span></h3>
                    <p>First "usefull" site for my friend</p>
                    <p>Use bootstrap templets , HTML , CSS</p>
                    <p>Nice / Smooth / Simple</p>
                    <a href='https://www.auschwitzsaltmine.com/'>Preview</a>
                </div>
            </div>


            
            <div className='portfolio-description' >

                <div>
                    <img src={przedszkole} alt='viptour-site'></img>
                </div>
                
                <div className='portfolio-text'>
                    <h3>Strona przedszkola nr 111 w Krakowie <span>2023</span></h3>
                    <p>Education site</p>
                    <p>React , JS , HTML , CSS</p>
                    <p>Nice / Simple / Education</p>
                    <a href='https://marcinoles87.github.io/przedszkole2023'>Preview</a>
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
                    <a href='https://marcinoles87.github.io/weather2023/'>Preview</a>
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
                    <a href='https://marcinoles87.github.io/hangman2023/'>Preview</a>
                </div>
            </div>

           
        
                
            
        </div>

    </div>
  )
}

export default Portfolio