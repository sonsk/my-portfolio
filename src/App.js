import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';

import Allprojects from './components/Allprojects';



import './App.css';

function App() {
  
  return (
    <div className="min-h-screen dark:bg-blue-950">
     
      <Router>     
        <Routes>
          <Route index element={<Main/>}></Route>
          <Route path="/all-projects" element={<Allprojects/>}></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
