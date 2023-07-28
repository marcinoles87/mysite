import React from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Freetime from './components/Freetime';

import img1 from './components/img/family.jpg'
import img2 from './components/img/sport.jpg'
import img3 from './components/img/movie.png'

import './App.scss';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import Card from './components/Card';
import Contact from './components/Contact';

function App() {

  
  return (
    
    <div className="App">

        <div className='app-container' id='home'>

          
            <Navigation></Navigation>
            <Header></Header>
          

        </div>

        
              <About></About>
              <div className='cards-container'>
              <Card method={'1. Learn'} text={'codziennie staram sie uczyc czegos nowego'}  img={img1}></Card>
              <Card method={'2. Teach'} text={'kodowac codziennie i powtarzac'} img={img2} icon={<i class="fa-regular fa-comments"></i>}></Card>
              <Card method={'3. Work'} text={'tworzyc projekty w oparciu o poznane techniki '} img={img3} icon={<i class="fa-regular fa-thumbs-up"></i>}></Card>

              
              </div>
              
              <Projects></Projects>

              {/* <Freetime></Freetime> */}
              <Portfolio></Portfolio>
              <Contact></Contact>
              
          
    
    </div>
  );
}

export default App;
