import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import './App.css';

function App() {

  return (
    <div className="container">
      <nav className='nav'>
        <ul>
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Skills
          </li>
          <li>
            Projects
          </li>
          <li>
            Contact
          </li>
        </ul>
      </nav>
      <Home/>
    </div>
  );
}

export default App;
