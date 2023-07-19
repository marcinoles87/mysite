import React from 'react'

import './freetime.scss'

function Freetime() {

  const handleOnClick = (e) => {
    const item = document.querySelector('.new');
    item.classList.toggle('newClass')
    console.log(item)
  }
  return (
    <div className='freetime-container'>
        <h1>Freetime - rest , piece , energy</h1>
        <ul className='freetime-list'>
            <li className='freetime-list-item'>
              <p className='freetime-text' onClick={handleOnClick}>Family</p>
              <p className='new' onClick={handleOnClick}> Nowy napis to ja</p>
              </li>


            <li className='freetime-list-item'><p className='freetime-text'>Sport</p></li>
            <li className='freetime-list-item'><p className='freetime-text'>Movie</p></li>
            <li className='freetime-list-item'><p className='freetime-text'>Foods</p></li>
            
        </ul>

    </div>
  )
}

export default Freetime