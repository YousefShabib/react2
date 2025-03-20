import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="src/assets/Logo.05.02.png" alt="logo" width="130" height="50" />
            </div>

            {/* Hamburger menu for mobile */}
            <div className="navbar-hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Navigation links */}
            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="/explore">Explore</a></li>
                <li><a href="/search">Search</a></li>
                <li><a href="/hotels">Hotels</a></li>
                <li><a href="/offers">Offers</a></li>
            </ul>

            <div className="pics">
                <a href="default.asp">
                    <img src="src/assets/notfication.svg" alt="1" width="40" height="40" />
                </a>

                <a>
                    <img className="my-pic" src="src/assets/my_pic.jpeg" alt="1" width="50" height="50" />
                </a>
            </div>

        </nav>
    );
};

export default Navbar;