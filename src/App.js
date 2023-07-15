import React, { useState, useEffect } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import './App.css';

function App() {

  return (
    <div className='main'>
      <section id="home">
      <Home/>
    </section>
    <section id="about">
      <About/>
    </section>
    </div>
    
  );
}

export default App;
