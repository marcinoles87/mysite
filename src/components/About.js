import React from 'react'

import profilImg from './img/minsc.png'

import './about.scss'
import Freetime from './Freetime'
import Card from './Card'

function About() {

  const handleOnScroll = () => {
    
  }
  return (
    <div className='about-container' id='about' onScroll={handleOnScroll}> 
    <h1><span>About</span> me</h1>
      <div className='about-text'>
       
        <img className='profil-img' src={profilImg} alt='my-profil'></img>
        <p>Czesc , jestem Marcin , poczatkujacy front-end developer . 
          Swoja historie z programowaniem zaczełem już na studiach w 2012 roku .
          W tamtym momencie liznalem troche javy , blendera 3d , javascriptu i frontendu ktory osobiście mnie użekł , lecz 
          niestety moje życiowe plany sie zmieniły . W 2013 roku na świat przyszedł moj syn Marcel .
          Moje priorytety musiałem odłożyć na bok ... Od tamtego czasu aż do 2018 roku niewiele sie zmieniło,
          moim głównym celem była rodzina lecz w 2019 roku na świat przyszedł moj drugi syn Jakub , a w 2020
          moja wyczekana córka Zuzanna . </p>

      

            <div className='about-info'>
              <div className='info-item'>
                <h1>Age</h1>
                <h2>35</h2>
              </div>
            </div>

      </div>
     
    </div>
    
  )
}

export default About