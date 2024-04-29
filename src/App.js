import React from 'react';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Homepage/HomePage';
import About from './About/About';
import JobListings from './JobListings/JobListings';
import Footer from './Footer/Footer';
import japanlogo from './japanlogo.avif'
import LandingPage from './Landingpage';


function App() { 
  
  return (
    
    <div className="App" >
     <img src={japanlogo} alt="Japan Logo" style={{ position: 'absolute', top: '20px', left: '1200px', width: '90px', height: '90px', zIndex: '20' }} />
      <Router>
      
        <Routes>
                <Route path='/' element={ <LandingPage/ >} />
                <Route path="/home" element={ <HomePage/ > } />
                <Route path="/about" element={ <About/ >} />
                <Route path="/joblistings" element={ <JobListings/ > } />
                
           </Routes>
      </Router>
     
     <div>
     
       <Footer/ > </div>
    </div>
   
  );
}


export default App;
