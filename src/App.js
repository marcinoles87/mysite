import React from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';


import img1 from './components/img/think.jpg'
import img2 from './components/img/learn.jpg'
import img3 from './components/img/work.jpg'

import './App.scss';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import Card from './components/Card';
import Contact from './components/Contact';

function App() {

  const handleClick = () => {
    console.log(document.documentElement.offsetTop)
    document.documentElement.scrollTo(0 , 0)
  }


  
  return (
    
    <div className="App">

        <div className='app-container' id='home'>

          
            <Navigation></Navigation>
            <Header></Header>
          
            <i className="fa-solid fa-circle-up fa-2xl" onClick={handleClick}></i>  
                  
            </div>

        
              <About></About>
              <div className='cards-container'>
              
              <Card method={'1. Think'} text={'Przemyślane i mądre działanie '}  img={img1}></Card>
              <Card method={'2. Teach'} text={'Każdy dzień uczyć sie choćby 10 minut daje nam wiecej niż nie robienie niczego'} img={img2} icon={<i class="fa-regular fa-comments"></i>}></Card>
              <Card method={'3. Work'} text={'Przełożenie nauki na praktyke w realnych projektach'} img={img3} icon={<i class="fa-regular fa-thumbs-up"></i>}></Card>

              
              </div>
              
              <Projects></Projects>

              {/* <Freetime></Freetime> */}
              <Portfolio></Portfolio>
              <Contact></Contact>
              
          
    
    </div>
  );
}

export default App;
