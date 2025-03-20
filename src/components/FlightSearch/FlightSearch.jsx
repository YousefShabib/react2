import React, { useState } from "react";
import "./FlightSearch.css";

const FlightSearch = () => {
    const [tripType, setTripType] = useState("one-way");

    return (
        <div className="flight-search-container">
            <div className="flight-search-content">
                <h1 className="flight-search-title">Let’s explore & travel the world</h1>
                <p className="flight-search-subtitle">
                    Find the best destinations and the most popular stays!
                </p>

                <div className="flight-search-box">
                    <div className="flight-search-header">
                        <p className="search-title">SEARCH FLIGHTS</p>
                        <div className="trip-type">
                            <label>
                                <input
                                    type="radio"
                                    name="trip"
                                    value="return"
                                    checked={tripType === "return"}
                                    onChange={() => setTripType("return")}
                                />
                                Return
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="trip"
                                    value="one-way"
                                    checked={tripType === "one-way"}
                                    onChange={() => setTripType("one-way")}
                                />
                                One-way
                            </label>
                        </div>
                    </div>

                    <div className="flight-inputs">
                        <div className="input-group">
                            <label>Departure</label>
                            <input type="text" defaultValue="Singapore (SIN)" />
                        </div>
                        <div className="input-group">
                            <label>Arrival</label>
                            <input type="text" defaultValue="Los Angeles (LA)" />
                        </div>
                        <div className="input-group">
                            <label>Date</label>
                            <input type="date" />
                        </div>
                        <button className="search-button">SEARCH FLIGHTS</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightSearch;
