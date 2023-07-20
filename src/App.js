import React, { useState, useEffect } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
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
    <section id="skills">
      <Skills/>
    </section>
    <section id="projects">
      <Projects/>
    </section>
    <section id="contact">
      <Contact/>
    </section>
    </div>
    
  );
}

export default App;
