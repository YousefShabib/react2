import React from 'react';
import { Hotel, Ticket, Utensils, Bus, Clapperboard } from 'lucide-react';
import './PrepareTrip.css';

const PrepareTrip = () => {
    const tripOptions = [
        { name: "Hotel", color: "bg-pink-500", icon: <Hotel size={24} /> },
        { name: "Attractions", color: "bg-orange-500", icon: <Ticket size={24} /> },
        { name: "Eats", color: "bg-green-500", icon: <Utensils size={24} /> },
        { name: "Commute", color: "bg-yellow-500", icon: <Bus size={24} /> },
        { name: "Movies", color: "bg-green-600", icon: <Clapperboard size={24} /> },
    ];

    return (
        <div className="prepare-trip px-6 py-4">
            <h2 className="title">Prepare for Your Trip</h2>
            <div className="trip-options">
                {tripOptions.map((option, index) => (
                    <button
                        key={index}
                        className={`trip-option ${option.color} hover:scale-105 active:scale-95 transition-transform p-4 rounded-lg shadow-lg`}
                        onClick={() => alert(`${option.name} clicked!`)}
                    >
                        <div className="icon text-white">{option.icon}</div>
                        <span className="mt-2 text-white">{option.name}</span>
                    </button>

                ))}
            </div>
        </div>
    );
};

export default PrepareTrip;
