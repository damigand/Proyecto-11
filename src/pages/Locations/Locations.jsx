import React, { useEffect, useState } from "react";
import "./Locations.css";
import { InfiniteScroll } from "../../components/InfiniteScroll/InfiniteScroll";
import LocationCard from "../../components/LocationCard/LocationCard";

const url = "https://rickandmortyapi.com/api/location/";

const getLocations = async (page) => {
    const response = await fetch(`${url}?page=${page}`);
    const json = await response.json();

    return json.results.map((l) => {
        return {
            id: l.id,
            name: l.name,
            image: l.image
        };
    });
};

const Locations = () => {
    const [page, setPage] = useState(1);
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
