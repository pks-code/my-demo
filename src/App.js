import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
//import AboutUs from './components/AboutUs.js'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <h1>Hi...! This is Pravin </h1>
      <h5>Addition of Number 10 and  20 is {10+20}</h5>
      <Navbar name="Navbar" content=" I am the content" />
      <TextForm />
     <Router>
      <ul>
        <li><Link to="/navbar">Home</Link></li>
        <li><Link to="/textform">Textform</Link></li>
      </ul>
      
        <Routes>
            <Route path="/navbar" element={<Navbar name="Navbar" content=" I am the content" />} />
            <Route path="/textform" element={<TextForm />} />
        </Routes>    
      </Router>
    </>  
  );
}

export default App;
