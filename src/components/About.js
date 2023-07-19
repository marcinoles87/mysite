import React from 'react'

import profilImg from './img/minsc.png'

import './about.scss'
import Freetime from './Freetime'

function About() {
  return (
    <div className='about-container'>
      <div className='about-text'>
        <h1>This is me ...</h1>
        <img className='profil-img' src={profilImg} alt='my-profil'></img>
        <p>Czesc , jestem Marcin , poczatkujacy front-end developer . 
          Swoja historie z programowaniem zaczełem już na studiach w 2012 roku .
          W tamtym momencie liznalem troche javy , blendera 3d , javascriptu i frontendu ktory osobiście mnie użekł , lecz 
          niestety moje życiowe plany sie zmieniły . W 2013 roku na świat przyszedł moj syn Marcel .
          Moje priorytety musiałem odłożyć na bok ... Od tamtego czasu aż do 2018 roku niewiele sie zmieniło,
          moim głównym celem była rodzina lecz w 2019 roku na świat przyszedł moj drugi syn Jakub , a w 2020
          moja wyczekana córka Zuzanna . </p>

        <div className='about-text2'>
            <h2> Front-end</h2>

            <p>I tak też w 2021 roku postanowilem powrócić do nauki programowania , mój wybór padł
            na front-end . Zakupilem kurs na udemy od Samuraja Programowania ( uważam go za bardzo dobry - nie robiąc nikomu reklamy ;) )
            Codzienie wieczorami kiedy juz wszyscy spali po 2-3 godziny starałem sie przejść wszystkie etapy kursów . Za każdym razem robiąc 
            materiały z Bartkiem na końcu starałem sie zrobić wszystko sam bez pomocy . Czasem sie udawało lepiej czasem gorzej ale mimo wszystko
            zawsze do przodu :) . Moja przygoda poraz kolejny musiała sie zakonczyc w  pażdzierniku 2022 roku  z powodu mojej nagłej choroby serca. 
            Lecz mimo tego sie nie poddawałem i w 2023 roku poraz kolejny wróciłem do pisania lecz juz nie tyle czasu co wcześniej . Teraz tu jestem i 
            mam nadzieje ze podoba ci sie to co tutaj widzisz ... Pozdrawiam wszystkich serdecznie , Nigdy sie nie poddawaj !


          </p>

        </div>
        
      </div>

    

    </div>
  )
}

export default About