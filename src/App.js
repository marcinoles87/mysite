import React from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
