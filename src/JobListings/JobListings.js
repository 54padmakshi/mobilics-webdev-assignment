import React from 'react';
import './JobListings.css'; // Import CSS for styling
import { Link } from 'react-router-dom';
import work from './work.jpg';

const JobListings = () => {
     

    return (
        <div className="job-listings-page" style={{
            backgroundImage: `url(${work})`,
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            backgroundSize: 'cover',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>

             <section className='section'>     

            {/* Link to IT Jobs in Japan */}
            <a href="https://yaaay.jp/" target="_blank" rel="noopener noreferrer" style={{ color: 'turquoise', fontSize: '20px' }}>IT Jobs in Japan</a>
            
            {/* Link back to Landing Page */}
            <Link to='/' style={{ color: 'HighlightText', fontSize: '20px',marginTop:'30px' }}>Back to Landing Page</Link>
            </section> 
        </div>
    );
}

export default JobListings;
