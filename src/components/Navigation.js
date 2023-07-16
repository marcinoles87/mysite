import React from 'react';

import './navigation.scss'

function Navigation() {
  return (
    <nav className='nav-container'>
      <div className='nav-links'>

        <ul className='nav-list'>
          <li className='nav-link'>Home</li>
          <li className='nav-link'>About Me</li>
          <li className='nav-link'>Projects</li>
          <li className='nav-link'>Contact</li>
        </ul>

      </div>
    </nav>
  )
}

export default Navigation