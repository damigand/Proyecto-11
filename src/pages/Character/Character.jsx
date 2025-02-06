import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Character.css";

const url = "https://rickandmortyapi.com/api/character/";

const getCharacter = async (id) => {
    const response = await fetch(`${url}${id}`);
    const json = await response.json();
    return json;
};

const Character = () => {
    //He intentado mil veces pasar el objeto character
    //De CharacterCard a este mediante el Link, pero
    //No lo consigo, no tengo ese conocimiento todavía supongo.

    const [character, setCharacter] = useState({});

    const { id } = useParams();
    useEffect(() => {
        getCharacter(id).then((c) => setCharacter(c));
    }, []);

    const lowercaseStatus = String(character.status).toLowerCase();
    const lowercaseGender = String(character.gender).toLowerCase();
    const lowercaseSpecie = String(character.species).toLowerCase();

    return (
        <div id="character">
            <div className="character-info">
                <img src={character.image} />
                <div className="character-text">
                    <div className="character-status">
                        <h4>Status</h4>
                        <span className={"status " + lowercaseStatus}>{character.status}</span>
                    </div>
                    <div className="character-name">
                        <span className="name">{character.name}</span>
                    </div>
                    <div className="character-gender">
                        <h4>Gender</h4>
                        <span className={"gender " + lowercaseGender}>{character.gender}</span>
                    </div>
                    <div className="character-species">
                        <h4>Species</h4>
                        <span className={"species " + lowercaseSpecie}>{character.species}</span>
                    </div>
                </div>
                {/* Aqui van los episodios */}
            </div>
            <div className="character-origin">
                <h1>Location of origin</h1>
                <div>
                    <span className="origin-name">{character.origin?.name}</span>
                    {/* Aqui iría el Link del origen, envolviendo el span. */}
                </div>
            </div>
            <div className="character-location">
                <h1>Current Location</h1>
                <span className="location-name">{character.location?.name}</span>
                {/* Aqui iría el Link del location, envolviendo el span. */}
            </div>
        </div>
    );
};

export default Character;
