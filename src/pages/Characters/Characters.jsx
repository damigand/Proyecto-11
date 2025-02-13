import React, { useEffect, useState } from "react";
import "./Characters.css";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { InfiniteScroll } from "../../components/InfiniteScroll/InfiniteScroll";

import { getCharacters } from "../../utils/API/API";

const Characters = () => {
    const [page, setPage] = useState(0);
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = InfiniteScroll();

    //Cargo los primeros Characteres.
    useEffect(() => {
        getCharacters(page).then((c) => {
            const copy = characters;
            const newCharacters = copy.concat(c);
            setCharacters(newCharacters);
            setIsLoading(false);
        });
    }, [page]);

    //Si llego al final de la página, actualizo el "page" para
    //Cargar los siguientes 20 characteres.
    useEffect(() => {
        if (!isLoading) return;
        setPage(page + 1);
    }, [isLoading]);

    return (
        <div id="characters">
            <p>Here you can see all Rick & Morty Characters</p>
            <p>Click on one to see more details</p>
            <ul id="character-list">
                {characters.map((c, index) => (
                    <CharacterCard key={index} character={c} />
                ))}
            </ul>
        </div>
    );
};

export default Characters;
