import React from 'react';
import { useState, useEffect } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact  from './components/Contact';
import Skills from './components/Skills';

import './App.css';

function App() {
  
  return (
    <div className="min-h-screen dark:bg-blue-950">
      
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
