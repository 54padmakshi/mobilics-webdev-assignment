import React from 'react';
import './HomePage.css'; // Import CSS for styling
import homepage from './homepage.avif'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home-page" style={{backgroundImage: `url(${homepage})`,
        backgroundRepeat:'no-repeat',position:'absolute',backgroundSize: 'cover',
        minHeight: '100vh',display:'flex',flexDirection :'column' }}>

            {/* Welcome Section */}
            <section className="welcome-section">
               
                <div className="welcome-content">
                    <h1 style={{color:'white',alignContent:'center',marginTop:'40px',fontSize:'40px'}}>Welcome to Work Opportunities in Japan</h1>
                    <p style={{color:'yellow',fontSize:'20px'}}>Explore exciting career prospects in Japan</p>
                </div>
            </section>

            {/* Overview of Work Opportunities */}
            <section className="opportunities-section">
                <h2>Work Opportunities in Japan</h2>
               
            </section>

            {/* Call-to-Action Buttons */}
            <section className="cta-section">
                <button className="explore-button">Explore Job Listings</button>
                <button className="learn-more-button">Learn More About Japan</button>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section" style={{color:'orange'}}>
                <h2>What Our Employees Say</h2>
                <div className="testimonials-content">
                    <p>Testimonials showcasing positive experiences...</p>
                </div>
            </section>
            
            <Link to='/'style={{color:'HighlightText',fontSize:'20px',alignmentBaseline: "baseline"}}>Back to Landing Page</Link>

        </div>
    );
}

export default HomePage;
