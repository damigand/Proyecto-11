import React from "react";
import "./EpisodeCard.css";
import { Link } from "react-router-dom";

const EpisodeCard = ({ episode }) => {
    const info = episode.episode.split(/S|E/);
    return (
        <Link to={`/episodes/${episode.id}`}>
            <div className="episode-card">
                <h3 className="card-name">{episode.name}</h3>
                <div className="date">
                    <span className="season">SEASON {info[1]}</span>
                    <span className="episode">EPISODE {info[2]}</span>
                </div>
            </div>
        </Link>
    );
};

export default EpisodeCard;
