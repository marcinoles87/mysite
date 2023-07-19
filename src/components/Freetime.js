import React from 'react'

import './freetime.scss'

function Freetime() {
  return (
    <div className='freetime-container'>
        <h1>Freetime - rest , piece , energy</h1>
        <ul className='freetime-list'>
            <li className='freetime-list-item'>
              <p className='freetime-text'>Family</p>
              <p className='freetime-text-more'>
                -relaks z moim dziecmi 
                -wieczory z zona :)
                -spacery
              </p>
              </li>


            <li className='freetime-list-item'><p className='freetime-text'>Sport</p></li>
            <li className='freetime-list-item'><p className='freetime-text'>Movie</p></li>
            <li className='freetime-list-item'><p className='freetime-text'>Foods</p></li>
            
        </ul>

    </div>
  )
}

export default Freetime