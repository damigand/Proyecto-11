import React from "react";
import "./CharacterCard.css";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
    return (
        <Link to={`/characters/${character.id}`}>
            <div className="character-card">
                <img src={character.image} />
                <h1 className="card-name">{character.name}</h1>
            </div>
        </Link>
    );
};

export default CharacterCard;
