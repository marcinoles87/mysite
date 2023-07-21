import React from 'react'

import './portfolio.scss';

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
                <a href='#' ></a>
            </div>
        </div>

        <div className='portfolio-projects'>
            
            <div className='portfolio-description'>
                <h1>Name</h1>
                <p>Description</p>
            </div>
           
            <div className='portfolio-link'>
                <a href='#' ></a>
            </div>
        </div>

        <div className='portfolio-projects'>
            
            <div className='portfolio-description'>
                <h1>Name</h1>
                <p>Description</p>
            </div>
           
            <div className='portfolio-link'>
                <a href='#' ></a>
            </div>
        </div>

        <div className='portfolio-projects'>
            
            <div className='portfolio-description'>
                <h1>Name</h1>
                <p>Description</p>
            </div>
           
            <div className='portfolio-link'>
                <a href='#' ></a>
            </div>
        </div>
    </div>
  )
}

export default Portfolio