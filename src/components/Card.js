import React from 'react'
import './card.scss'

import img from './img/github.png'

function Card
() {
  return (
    <div className='card-container'>
        <img src={img} alt='card'></img>
        <h1>Git hub</h1>
        <p>Lotem lorem Lot
        Lotem loremLotem loremLotem lorem
        Lotem loremLotem loremLotem lorem
        em loremLotem loremLotem lorem</p>
    </div>
  )
}

export default Card
