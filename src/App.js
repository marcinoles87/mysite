import React from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';

import './App.scss';

function App() {
  return (
    
    <div className="App">

        <div className='app-container'>

          
            <Navigation></Navigation>
            <Header></Header>
            <Main></Main>

        </div>

        <div className='about-container'>
              <About></About>
          </div>
    
    </div>
  );
}

export default App;
