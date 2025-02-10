import React from "react";
import "./LocationCard.css";
import { Link } from "react-router-dom";

const LocationCard = ({ location }) => {
    return (
        <Link to={`/locations/${location.id}`}>
            <div className="location-card">
                <h1 className="card-name">{location.name}</h1>
                <span className="card-type">{location.type}</span>
            </div>
        </Link>
    );
};

export default LocationCard;
