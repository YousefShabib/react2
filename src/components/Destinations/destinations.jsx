import React from "react";
import "./destinations.css";

const destinations = [
    { name: "Paris", price: 699, img: "src/assets/ParisImage.png" },
    { name: "Greece", price: 1079, img: "src/assets/GreeceImage.png" },
    { name: "Norway", price: 895, img: "src/assets/NorwayImage.png" },
    { name: "Tuscany", price: 1245, img: "src/assets/TuscanyImage.png" },
];

const Destinations = () => {
    return (
        <div className="destinations-container">
            <div className="header">
                <h3 className="trip-title">PLAN YOUR NEXT TRIP</h3>
                <a href="#" className="view-all">View all destinations →</a>
            </div>
            <h1 className="main-title">Most Popular Destinations</h1>
            <div className="destinations-list">
                {destinations.map((dest, index) => (
                    <div key={index} className="destination-card">
                        <img src={dest.img} alt={dest.name} className="destination-img" />
                        <div className="destination-info">
                            <h2>{dest.name}</h2>
                            <p className="x">
                                <h5>FROM </h5><span className="price">${dest.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destinations;
