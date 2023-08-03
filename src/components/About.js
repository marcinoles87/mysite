import React from 'react'

import profilImg from './img/profil2.jpg'

import './about.scss'
import Freetime from './Freetime'
import Card from './Card'

function About() {

   

  const handleOnScroll = (e) => {
    const aboutSec = document.querySelector('.about-container')
    console.log(window) 
    console.log(e.pageY)
    if(window.innerHeight > 700  && window.innerWidth < 450){
    aboutSec.classList.add('test')
  }

    
  }
  return (
    <div className='about-container' id='about' onMouseEnter={handleOnScroll}> 
    <h1><span>About</span> me</h1>
      <div className='about-text'>
       
        <img className='profil-img' src={profilImg} alt='my-profil'></img>
        <p>Czesc , jestem Marcin , poczatkujacy front-end developer . 
          Swoja historie z programowaniem zaczełem już na studiach w 2012 roku .
          W tamtym momencie poznałem troche javy , blendera 3d , javascriptu i frontendu ktory osobiście mnie użekł , lecz 
          niestety moje życiowe plany sie zmieniły . W 2013 roku na świat przyszedł moj syn Marcel .
          Moje priorytety musiałem odłożyć na bok ... Od tamtego czasu aż do 2018 roku niewiele sie zmieniło,
          moim głównym celem była rodzina lecz w 2019 roku na świat przyszedł moj drugi syn Jakub , a w 2020
          moja wyczekana córka Zuzanna .Pandemia dała mi do zrozumienia że świat sie zmienia i wtedy też zaczełem z powrotem
          powolutku wdrażać swoj plan na powrót do nauki ...  </p>

      

            <div className='about-info'>
              <div className='info-item'>
                <h1>Age</h1>
                <h2>35</h2>
              </div>

              <div className='info-item'>
                <h1>Name</h1>
                <h2>Marcin</h2>
              </div>

              <div className='info-item'>
                <h1>Country</h1>
                <h2>Poland</h2>
              </div> 
              
              <div className='info-item'>
                <h1>Experience</h1>
                <h2>1.5 year</h2>
              </div>


            <div className='info-item'>
                <h1>Language</h1>
                <h2>English B1/B2</h2>
              </div>
            </div>

            

           

      </div>
     
    </div>
    
  )
}

export default About