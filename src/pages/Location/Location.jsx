import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
useParams;

const url = "https://rickandmortyapi.com/api/location/";

const getLocation = async (id) => {
    const response = await fetch(`${url}${id}`);
    const json = await response.json();

    const object = {
        name: json.name,
        type: json.type,
        dimension: json.dimension
    };

    let residents = "";

    for (const url of json.residents) {
        const id = url.split("character/")[1];
        residents += id + ",";
    }

    const residentsUrl = `https://rickandmortyapi.com/api/character/${residents}`;
    const residentsResponse = await fetch(residentsUrl);
    const residentsJson = await residentsResponse.json();

    object.residents = residentsJson.map((r) => {
        return { image: r.image };
    });

    return json;
};

const Location = () => {
    const { id } = useParams();
    const [location, setLocation] = useState([]);

    useEffect(() => {
        getLocation(id).then((c) => setLocation(c));
    }, []);

    return <div>Location {id}</div>;
};

export default Location;
