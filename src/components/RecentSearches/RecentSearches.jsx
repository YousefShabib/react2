
import React from 'react';
import './RecentSearches.css'
const RecentSearches = () => {
    const searches = [
        { from: "SIN", to: "LAX", date: "7 Sep 2021" },
        { from: "MY", to: "DUB", date: "9 Sep 2021" }
    ];

    return (
        <div className="recent-searches">
            <h5>RECENT SEARCHES</h5>
            <div className="search-container">
                {searches.map((search, index) => (
                    <div key={index} className="search-card">
                        <span className="top-left airport-code">{search.from}</span>
                        <span className="flight-icon">
                        <img src="src/assets/Plane.57.49.png" alt="plane" width="130" height="40"/>
                        </span>
                        <span className="top-right airport-code">{search.to}</span>
                        <p>
                            <strong>Depart On:</strong> {search.date}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentSearches;