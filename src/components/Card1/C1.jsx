import React from 'react';
import './C1.css'; // Import the CSS file for styling

const Card = ({ destination, price }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="card-destination">{destination}</h3>
                <p className="card-price">FROM ${price}</p>
            </div>
        </div>
    );
};

export default Card;