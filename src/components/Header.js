import React from 'react'

import profil from './img/minsc.png'

function Header() {
  return (
    <div className='header-container'>
      <div className='header-img'>
        <img className='profil-img' src={profil} alt='profil'></img>
      </div>

      <div className='header-info'>
        <h1 className='header-info-text'>Info About My Self</h1>
      </div>
    </div>
  )
}

export default Header