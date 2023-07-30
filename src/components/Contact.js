import React, { useState } from 'react'

import './contact.scss'

import contactImg from './img/minsc-nobg.png'

function Contact() {

  const [info , setInfo] = useState('')

  const handleClickOne = (e) => {

    console.log(e.target.value)
    setInfo('783 845 344')
  }

  const handleClickTwo = (e) => {

    console.log(e.target.value)
    setInfo('marcinoles87@gmail.com')
  }

  const handleClickThree = (e) => {

    console.log(e.target.value)
    setInfo('cv_download')
  }

  return (
    <div className='contact-container'>
        <h1>Contact</h1>
        <img src={contactImg}></img>
        <h2> Marcin Oles</h2>

        <div className='contact-link'>

           
            <i class="fa-solid fa-address-card fa-lg " onClick={handleClickOne} value='783 845 344'></i>
            <i class="fa-solid fa-address-card fa-lg " onClick={handleClickTwo}></i>
            <i class="fa-solid fa-address-card fa-lg" onClick={handleClickThree} value='marcinoles87@gmail.com'></i>

        </div>

             <div className='contact-info'>{info}</div>
    </div>
  )
}

export default Contact