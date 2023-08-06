import React from 'react'

import './header.scss'

import profil from './img/minsc-nobg.png'
import profil3 from './img/profil3.png'
import logoGh from './img/github.png'
import logoLn from './img/linkedin.png'



function Header() {
  return (
    <div className='header-container'>
      <div className='header-img'>
        <img className='profil-img' src={profil} alt='profil'></img>
      </div>

      <div className='header-info'>

        

        <h1 className='header-info-text'>READY TO WORK</h1>
        <h2>Hi there , Im Marcin !</h2>
        <p className='header-info-text2'> FUTURE FRONTEND - DEVELOPER</p>
        {/* <button className='header-button'>More Info </button> */}
        <a href='https://github.com/marcinoles87'><img src={logoGh} alt='github-logo'></img></a>
        <a href='https://www.linkedin.com/in/marcin-ole%C5%9B-65a797101/'><img src={logoLn} alt='linkedin-logo'></img></a>
       
      </div>


      

    </div>

    
  )
}

export default Header