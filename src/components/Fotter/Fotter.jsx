import React from "react";
import "./Fotter.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <img src="src/assets/FooterLogo.19.31.png" alt="logo" width="130" height="50" />
                    <p>
                        Fickle Flight is your one-stop travel portal. We offer hassle-free
                        flight and hotel bookings. We also have all your flight needs in
                        your online shop.
                    </p>
                    <div className="social-icons">
                        <a href="#" className="social-icon facebook"></a>
                        <a href="#" className="social-icon instagram"></a>
                        <a href="#" className="social-icon twitter"></a>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">How we work</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Support Center</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Accessibility</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>More</h4>
                        <ul>
                            <li><a href="#">Covid Advisory</a></li>
                            <li><a href="#">Airline Fees</a></li>
                            <li><a href="#">Tips</a></li>
                            <li><a href="#">Quarantine Rules</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
