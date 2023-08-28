import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import Header from './Header'

const Main = () => {
    return (
        <Router>     
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>
            </Routes>
        </Router>
    )
}
export default Main;
