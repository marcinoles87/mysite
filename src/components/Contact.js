import React, { useState } from 'react'

import './contact.scss'

import contactImg from './img/profil.jpg'

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



  return (
    <div className='contact-container' id='contact'>
        <h1>Contact</h1>
        <img src={contactImg} alt='img-to-contact'></img>
        <h2>Marcin Oleś</h2>
           <p>Now - Warehouse Manager</p>
           <p>In Future - Frontend developer</p>
           

        <div className='contact-link'>

           
        <i className="fa-solid fa-square-phone fa-lg" onClick={handleClickOne} value='783 845 344'></i>
        <i className="fa-regular fa-envelope fa-lg" onClick={handleClickTwo}></i>
          

        </div>

             <div className='contact-info'>{info}</div>
    </div>
  )
}

export default Contact