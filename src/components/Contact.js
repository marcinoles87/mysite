import React from 'react'

import './contact.scss'

import contactImg from './img/minsc-nobg.png'

function Contact() {

  const handleClick = (e) => {
    const div = document.querySelector('contact-info')

  }
  return (
    <div className='contact-container'>
        <h1>Contact</h1>
        <img src={contactImg}></img>
        <h2> Marcin Oles</h2>

        <div className='contact-link'>

            <i class="fa-regular fa-phone" onClick={handleClick}></i>
            <i class="fa-solid fa-address-card fa-lg " onClick={handleClick}></i>
            <i class="fa-solid fa-address-card fa-lg" onClick={handleClick}></i>

        </div>

             <div className='contact-info'></div>
    </div>
  )
}

export default Contact