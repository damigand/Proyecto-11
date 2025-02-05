import React, { useEffect, useState } from "react";
import "./Characters.css";
import CharacterCard from "../../components/CharacterCard/CharacterCard";

const url = "https://rickandmortyapi.com/api/character/";

const getCharacters = async (page) => {
    const response = await fetch(`${url}?page=${page}`);
    const json = await response.json();

    return json.results.map((p) => {
        return {
            id: p.id,
            name: p.name,
            image: p.image
        };
    });
};

const Characters = () => {
    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    //Controla el escuchador de la ventana para evitar duplicados.
    useEffect(() => {
        window.addEventListener("scroll", checkBottomPage);
        return () => window.removeEventListener("scroll", checkBottomPage);
    }, []);

    //Comprueba si está al final de la página.
    function checkBottomPage() {
        const scrollY = window.scrollY;
        const innerHeight = window.innerHeight;
        const bodyScroll = document.body.scrollHeight;

        if (scrollY + innerHeight >= bodyScroll) setIsLoading(true);
    }

    return (
        <div id="characters">
            <ul id="character-list">
                {characters.map((c, index) => (
                    <CharacterCard key={index} character={c} />
                ))}
            </ul>
        </div>
    );
};

export default Characters;
