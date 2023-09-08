import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact  from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Leftnav from './components/Leftnav';
import Footer from './components/Footer'
import Allprojects from './components/Allprojects';

import './App.css';

function App() {
  
  return (

        <Routes>
          <Route exact path="/" element={<Main />}></Route>

          <Route path="/all-projects" element={<Allprojects />}></Route>
        </Routes>
  
  );
}

export default App;
