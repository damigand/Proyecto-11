import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Location.css";

import { getLocation } from "../../utils/API/API";

const Location = () => {
    const { id } = useParams();
    const [location, setLocation] = useState([]);

    useEffect(() => {
        getLocation(id).then((c) => setLocation(c));
    }, []);

    return (
        <div id="location">
            <div className="location-text">
                <h1 className="location-name">{location.name}</h1>
                <div className="location-info">
                    <span className="location-type">
                        <span>TYPE</span>
                        <span>{location.type ? location.type : "?"}</span>
                    </span>
                    <span className="location-dimension">
                        <span>DIMENSION</span>
                        <span>{location.dimension}</span>
                    </span>
                </div>
            </div>
            <h2>Residents of {location.name}</h2>
            <div className="location-residents">
                {location.residents?.map((l, index) => {
                    const number = l.url.split("character/")[1];
                    return (
                        <Link key={index} to={`/characters/${number}`} className="resident">
                            <img src={l.image} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Location;
