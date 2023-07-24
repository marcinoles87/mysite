import React from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Freetime from './components/Freetime';

import './App.scss';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import Card from './components/Card';

function App() {

  
  return (
    
    <div className="App">

        <div className='app-container' id='home'>

          
            <Navigation></Navigation>
            <Header></Header>
          

        </div>

        
              <About></About>
              <div className='cards-container'>
                <Card></Card>
              <Card></Card>
              <Card></Card>
              </div>
              
              <Projects></Projects>

              {/* <Freetime></Freetime> */}
              <Portfolio></Portfolio>
              
          
    
    </div>
  );
}

export default App;
