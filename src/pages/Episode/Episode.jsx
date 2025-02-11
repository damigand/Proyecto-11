import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Episode.css";
import { getEpisode } from "../../components/API/API";

const Episode = () => {
    const { id } = useParams();
    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        getEpisode(id).then((c) => setEpisode(c));
    }, []);

    const info = episode.episode?.split(/S|E/);

    return (
        <div id="episode">
            <div className="episode-text">
                <h1 className="episode-name">{episode.name}</h1>
                <div className="episode-info">
                    <span className="episode-season">
                        <span>Season</span>
                        <span>{info ? info[1] : ""}</span>
                    </span>
                    <span className="episode-episode">
                        <span>Episode</span>
                        <span>{info ? info[2] : ""}</span>
                    </span>
                </div>
                <span className="episode-date">
                    <span>Air Date</span>
                    <span>{episode.air_date}</span>
                </span>
            </div>
            <h2>Characters that appear in this episode</h2>
            <div className="episode-characters">
                {episode.characters?.map((l, index) => {
                    const number = l.url.split("character/")[1];
                    return (
                        <Link key={index} to={`/characters/${number}`} className="character">
                            <img src={l.image} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Episode;
