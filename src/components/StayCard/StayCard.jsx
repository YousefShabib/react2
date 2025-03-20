import React from "react";
import './StayCard.css';

const StayCard = ({ image, type, title, price, rating, reviews }) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="stay-card">
                <img src={image} alt={title} className="stay-image" />
                <div className="stay-info">
                    <p className="stay-type">{type}</p>
                    <h5 className="stay-title">{title}</h5>
                    <p className="stay-price">${price}/night</p>
                    <div className="stay-rating">
                        <span className="star">⭐</span>
                        <span className="rating-value">{rating}</span>
                        <a href="#" className="reviews"> ({reviews} reviews)</a>
                    </div>
                    <button className="btn btn-outline-primary w-100 mt-3">MORE DETAILS</button>
                </div>
            </div>
        </div>
    );
};

const PopularStays = () => {
    const stays = [
        {
            image: "src/assets/Matterhorn Suites Image.png", // Add Image URL
            type: "Entire bungalow",
            title: "Matterhorn Suites",
            price: "575",
            rating: "4.9",
            reviews: "60",
        },
        {
            image: "src/assets/Discovery Shores Image.png", // Add Image URL
            type: "2-Story beachfront suite",
            title: "Discovery Shores",
            price: "360",
            rating: "4.8",
            reviews: "116",
        },
        {
            image: "src/assets/Arctic Hut Image.png", // Add Image URL
            type: "Single deluxe hut",
            title: "Arctic Hut",
            price: "420",
            rating: "4.7",
            reviews: "78",
        },
        {
            image: "src/assets/Lake Louise Image.png", // Add Image URL
            type: "Deluxe King Room",
            title: "Lake Louise Inn",
            price: "244",
            rating: "4.6",
            reviews: "63",
        },
    ];

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="popular-title">Popular Stays</h2>
                <a href="#" className="view-all-link">
                    View all stays →
                </a>
            </div>
            <div className="row mt-4">
                {stays.map((stay, index) => (
                    <StayCard key={index} {...stay} />
                ))}
            </div>
        </div>
    );
};

export default PopularStays;
