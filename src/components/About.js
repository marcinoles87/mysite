import React from 'react'

import profilImg from './img/profil2.jpg'

import './about.scss'
import Card from './Card'

function About() {

   

  const handleOnEnter = (e) => {
    const aboutSec = document.querySelector('.about-container')
    console.log(window) 
    console.log(e.pageY)
    if(window.innerHeight > 700 ){
    aboutSec.classList.add('test')
  }

    
  }
  return (
    <div className='about-container' id='about' onMouseEnter={handleOnEnter}> 
    <h1><span>About</span> me</h1>
      <div className='about-text'>
       
        <img className='profil-img' src={profilImg} alt='my-profil'></img>
        <p>Czesc , jestem Marcin , poczatkujacy front-end developer . 
          Swoja historie z programowaniem zaczełem już na studiach w 2012 roku .
          W tamtym momencie poznałem troche javy , blendera 3d , javascriptu i frontendu ktory osobiście mnie użekł , lecz 
          niestety moje życiowe plany sie zmieniły . W 2013 roku na świat przyszedł moj syn Marcel , pozniej Kuba i na końcu Zuzia.
          Moje plany dotyczace IT musiałem odłożyć na bok ... :) W 2020 roku zaczełem zastanawiać się nad powrotem do nauki i tak
          też znalazłem kurs Samuraja Programowania . Poczytałem opinie , przestudiowałem rynek i stwierdziłem że warto sprobować .
          Za cel obrałem sobie początek 2021 roku i od wtedy aż do teraz , codziennie próbuje coś tworzyć ... Zapraszam do obejrzenia
          Moich projektów a także odwiedzenia profilu na githubie . Pozdrawiam !  </p>

      

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
                <h2>1.5/2 year</h2>
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