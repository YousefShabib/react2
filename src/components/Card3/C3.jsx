import React from "react";
import "./C3.css";

const stays = [
    {
        title: "Matterhorn Suites",
        type: "Entire bungalow",
        price: "$575/night",
        rating: 4.9,
        reviews: 60,
        image: "src/assets/my_pic.jpeg", // Example image
    },
    {
        title: "Discovery Shores",
        type: "2-Story beachfront suite",
        price: "$360/night",
        rating: 4.8,
        reviews: 116,
        image: "src/assets/my_pic.jpeg", // Example image
    },
    {
        title: "Arctic Hut",
        type: "Single deluxe hut",
        price: "$420/night",
        rating: 4.7,
        reviews: 78,
        image: "src/assets/my_pic.jpeg", // Example image
    },
    {
        title: "Lake Louise Inn",
        type: "Deluxe King Room",
        price: "$244/night",
        rating: 4.6,
        reviews: 63,
        image: "src/assets/my_pic.jpeg", // Example image
    },
];

const Card3 = () => {
    return (
        <div className="container">
            <div className="header">
                <h2 className="title">Popular Stays</h2>
                <a href="#" className="view-all">View all stays →</a>
            </div>
            <div className="stays-container">
                {stays.map((stay, index) => (
                    <div className="card" key={index}>
                        <img src={stay.image} alt={stay.title} className="card-image" />
                        <div className="card-content">
                            <p className="card-type">{stay.type}</p>
                            <h3 className="card-title">{stay.title}</h3>
                            <p className="card-price">{stay.price}</p>
                            <p className="card-rating">⭐ {stay.rating} ({stay.reviews} reviews)</p>
                            <button className="details-button">MORE DETAILS</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card3;