import React from "react";
import './HolidayCard.css';

const HolidayCard = ({ image, location, duration, price }) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="holiday-card">
                <img src={image} alt={location} className="holiday-image" />
                <div className="holiday-info">
                    <h5>{location}</h5>
                    <p>{duration}</p>
                    <span className="holiday-price">${price}</span>
                </div>
            </div>
        </div>
    );
};

const RecommendedHolidays = () => {
    const holidays = [
        {
            image: "src/assets/image_480.png", // Add Image URL
            location: "Bali",
            duration: "4D3N",
            price: "899",
        },
        {
            image: "src/assets/SwitzerlandImage.png", // Add Image URL
            location: "Swiss",
            duration: "6D5N",
            price: "900",
        },
        {
            image: "src/assets/BoracayImage.png", // Add Image URL
            location: "Boracay",
            duration: "5D4N",
            price: "699",
        },
        {
            image: "src/assets/PalawanImage.png", // Add Image URL
            location: "Palawan",
            duration: "4D3N",
            price: "789",
        },
    ];

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="holiday-title">Recommended Holidays</h2>
                <a href="#" className="view-all-link">
                    View all holidays →
                </a>
            </div>
            <div className="row mt-4">
                {holidays.map((holiday, index) => (
                    <HolidayCard key={index} {...holiday} />
                ))}
            </div>
        </div>
    );
};

export default RecommendedHolidays;
