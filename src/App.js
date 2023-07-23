import React from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Freetime from './components/Freetime';

import './App.scss';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';

function App() {

  
  return (
    
    <div className="App">

        <div className='app-container' id='home'>

          
            <Navigation></Navigation>
            <Header></Header>
            <Main></Main>

        </div>

        
              <About></About>
              <Projects></Projects>
              {/* <Freetime></Freetime> */}
              <Portfolio></Portfolio>
              
          
    
    </div>
  );
}

export default App;
