import React, { useEffect, useState } from "react";
import "./Locations.css";
import { InfiniteScroll, canScroll } from "../../components/InfiniteScroll/InfiniteScroll";
import LocationCard from "../../components/LocationCard/LocationCard";

const url = "https://rickandmortyapi.com/api/location/";

const getLocations = async (page) => {
    const response = await fetch(`${url}?page=${page}`);
    const json = await response.json();

    return json.results.map((l) => {
        return {
            id: l.id,
            name: l.name,
            type: l.type
        };
    });
};

const Locations = () => {
    const [page, setPage] = useState(0);
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = InfiniteScroll();

    useEffect(() => {
        getLocations(page).then((l) => {
            const copy = locations;
            const newLocations = copy.concat(l);
            setLocations(newLocations);
            setIsLoading(false);
        });
    }, [page]);

    useEffect(() => {
        if (!isLoading) return;
        setPage(page + 1);
    }, [isLoading]);

    useEffect(() => {
        //Si el usuario tiene una pantalla muy alta
        //Y no tiene scroll para usar el "Infinite Scroll",
        //Lo causamos nosotros.
        const check = canScroll();
        if (!check) {
            setIsLoading(true);
        }
    });

    return (
        <div id="locations">
            <p>Here you can see all Rick & Morty locations</p>
            <p>Click on one to see more details</p>
            <ul id="locations-list">
                {locations.map((l, index) => (
                    <LocationCard key={index} location={l} />
                ))}
            </ul>
        </div>
    );
};

export default Locations;
