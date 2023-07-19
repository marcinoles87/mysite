import React from 'react'

import './project.scss'


function Projects() {
  return (
    <div className='project-container'>
      <div className='project-github'>
        <h1>My github </h1>
        <icon>git hub icon</icon>
        <p> Git hub everday workout</p>
      </div>

      <div className='project-item'>
        <ul>
          <li><a href='#'></a>1</li>
          <li><a href='#'></a>2</li>
          <li><a href='#'></a>3</li>
          <li><a href='#'></a>4</li>
          <li><a href='#'></a>5</li>
        </ul>
      </div>


    </div>
  )
}

export default Projects