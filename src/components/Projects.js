import React from 'react'

import './project.scss'
import githubwork from './img/githubwork.png'


function Projects() {
  return (
    <div className='project-container'>
      <div className='project-github' id='skills'>
       
      </div>

      <div className='project-item'>
        <div className='project-skill-person'> 
            <h1>Person skills</h1>
            <h3>Team Player</h3>
            <h3>Comunications</h3>
            <h3>Calm</h3>
            
        </div>

        <div className='project-skill-person'> 
            <h1>Tech skills</h1>
            <h3>HTML</h3>
            <h3>CSS / SaSS</h3>
            <h3>JS / React</h3>
            
        </div>

        <div className='project-githubwork'>

            <h1>My github workday</h1> 
          
            <img className='project-githubwork' src={githubwork} alt='github-work'></img>
            <i class="fa-solid fa-circle-down fa-2xl"></i>
            <a href='https://github.com/marcinoles87'>see me on Github</a>
          </div>
      </div>
        


    </div>
  )
}

export default Projects