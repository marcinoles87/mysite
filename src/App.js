import React from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Freetime from './components/Freetime';

import './App.scss';

function App() {
  return (
    
    <div className="App">

        <div className='app-container'>

          
            <Navigation></Navigation>
            <Header></Header>
            <Main></Main>

        </div>

        
              <About></About>
              <Freetime></Freetime>
          
    
    </div>
  );
}

export default App;
