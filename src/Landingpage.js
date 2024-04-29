import React from 'react';
import { Link } from 'react-router-dom';
import background from './background.jpg'


const LandingPage = () => {
 
  return (
    <div style={{backgroundImage: `url(${background})`, 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height:'100vh',
    width:'100vw',
    position: 'absolute'}} >

    
      <h1 style={{color:'greenyellow'}}>Welcome to our Website</h1>
      <nav style={{color:'red',display:'flex',marginLeft:'80px',fontSize:'40px',
      alignContent:'space-between',alignItems:'center',position:'relative',top:'40px' }}>
                 
                <Link to="/home" style={{color:'HighlightText',marginRight:'250px'}}>Home</Link> 
                <Link to="/about" style={{color:'HighlightText',marginRight:'250px'}} >About</Link>
                <Link to="/joblistings"style={{color:'HighlightText'}} >Job Listings</Link>
                    
         </nav>
    </div>
  );
}

export default LandingPage;
