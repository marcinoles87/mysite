import React from 'react';

import './navigation.scss'

function Navigation() {

 const handelScroll = () =>{
  window.scroll(0 , 400)
 }
  

  return (
    <nav className='nav-container'>
      <div className='nav-links'>

        <ul className='nav-list'>
          <li className='nav-link'><a href='#' >Home</a></li>
          <li className='nav-link'><a href='#about'>About me</a></li>
          <li className='nav-link'><a href='#skills'>Skills</a></li>
          <li className='nav-link'><a href='#projects'>Project</a></li>
          
          
        </ul>

      </div>
    </nav>
  )
}

export default Navigation