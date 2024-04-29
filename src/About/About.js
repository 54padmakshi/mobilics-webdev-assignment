import React from 'react';
import './About.css'; // Import CSS for styling
import { Link } from 'react-router-dom';
import about from './about.jpg'

const About = () => {
    return (
        <div className="about-page" 
        style={{backgroundImage: `url(${about})`,
        backgroundRepeat:'no-repeat',position:'absolute',backgroundSize: 'cover',
        minHeight: '100vh',display:'flex',flexDirection :'column' }} >
            {/* Introduction to Japanese Culture */}
            
            <section className="culture-section">
                <h2>Japanese Culture</h2>
                <p>An overview of Japanese culture...</p>
            </section>

            {/* Visa Requirements */}
            <section className="visa-section">
                <h2>Visa Requirements</h2>
                <p>Information about visa requirements...</p>
            </section>

            {/* Cost of Living */}
            <section className="cost-section">
                <h2>Cost of Living</h2>
                <p>Details about the cost of living in Japan...</p>
            </section>

            <Link to='/' style={{color:'HighlightText',alignmentBaseline: "baseline", fontSize:'20px'}}>Back to Landing Page</Link>
        </div>
    );
}

export default About;
