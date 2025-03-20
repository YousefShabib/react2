import React from "react";
import "./subscribe.css";

const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <div className="newsletter-content">
                <p className="newsletter-subtitle">SUBSCRIBE TO OUR NEWSLETTER</p>
                <h2 className="newsletter-title">Get weekly updates</h2>
                <div className="newsletter-box">
                    <p className="newsletter-text">Fill in your details to join the party!</p>
                    <input type="text" placeholder="Your name" className="newsletter-input" />
                    <input type="email" placeholder="Email address" className="newsletter-input" />
                    <button className="newsletter-button">SUBMIT</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
