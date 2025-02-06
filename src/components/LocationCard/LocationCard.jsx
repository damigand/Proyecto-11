import React from "react";
import "./LocationCard.css";
import { Link } from "react-router-dom";

const LocationCard = ({ location }) => {
    return (
        <Link>
            <div className="location-card">
                <h1 className="card-name">{location.name}</h1>
            </div>
        </Link>
    );
};

export default LocationCard;
