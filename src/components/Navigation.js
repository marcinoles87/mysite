import React from 'react';

import './navigation.scss'

function Navigation() {
  return (
    <nav className='nav-container'>
      <div className='nav-links'>

        <ul className='nav-list'>
          <li className='nav-link'><a href='#home'>Home</a></li>
          <li className='nav-link'><a href='#about'>About me</a></li>
          <li className='nav-link'><a href='#home'>Skills</a></li>
          <li className='nav-link'><a href='#home'>Project</a></li>
          
          
        </ul>

      </div>
    </nav>
  )
}

export default Navigation