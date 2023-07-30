import React from 'react'
import './card.scss'



function Card({method ,text , img , icon}) {
  return (
    <div className='card-container'>
        
        <img src={img} alt='card'></img>
        <h1>{method}</h1>
        <p>{text}
        
        </p>
    </div>
  )
}

export default Card
