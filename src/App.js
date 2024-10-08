import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import CustomNavbar from './components/navbar.js';
import Pricing from './Price.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PasswordPage from './passwordPage.js';

function ScrollToSection() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}


function App() {
  return (
    <Router basename = '/curtis-dental-lab' >
      <div className='App' >
        <ScrollToSection/>
        <CustomNavbar/>
        <Routes >
          <Route path = "/" element = {<Home/>}/>
          <Route index element = {<Home />}/>
          <Route path='passwordPage' element={<PasswordPage/>}/>
          <Route path='price-catalog' element={<Pricing/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;