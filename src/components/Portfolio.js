import React from 'react'

import './portfolio.scss';

function Portfolio() {
  return (
    <div className='portfolio-container'>
        <h1> Portfolio</h1>

        <div className='portfolio-projects'>
            
            <div className='project-description'>
                <h1>Name</h1>
                <p>Description</p>
            </div>
           
            <div className='projects-link'>
                <a href='#'></a>
            </div>
        </div>
    </div>
  )
}

export default Portfolio