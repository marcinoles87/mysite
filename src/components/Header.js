import React from 'react'

import './header.scss'

import profil from './img/minsc-nobg.png'


function Header() {
  return (
    <div className='header-container'>
      <div className='header-img'>
        <img className='profil-img' src={profil} alt='profil'></img>
      </div>

      <div className='header-info'>
        <h1 className='header-info-text'>Hello , I'm Marcin Oles</h1>
        <p className='header-info-text2'> This is my personal website from 2023</p>
        <button className='header-button'>More ... click </button>
      </div>
    </div>
  )
}

export default Header