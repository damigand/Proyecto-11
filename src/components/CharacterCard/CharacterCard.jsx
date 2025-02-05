import React from "react";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
    return (
        <div className="character">
            <img src={character.image} />
            <h1>{character.name}</h1>
        </div>
    );
};

export default CharacterCard;
