import React from 'react';
import './Footer.css'; // Import CSS for styling

const Footer = () => {
    return (
        <footer className="footer">

            {/* Contact Information */}
            <div className="contact-info">
                <h3>Contact Us</h3>
                <p>Email: info@example.com</p>
                <p>Phone: +1234567890</p>
            </div>

            {/* Social Media Links */}
            <div className="social-media">
                <h3>Follow Us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    {/* Add more social media links */}
                </ul>
            </div>

            {/* Legal Links */}
            <div className="legal-links">
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            
        </footer>
    );
}

export default Footer;
