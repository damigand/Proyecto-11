const url = "https://rickandmortyapi.com/api";

export const getLocations = async (page) => {
    const response = await fetch(`${url}/location?page=${page}`);
    const json = await response.json();

    return json.results.map((l) => {
        return {
            id: l.id,
            name: l.name,
            type: l.type
        };
    });
};

export const getLocation = async (id) => {
    const response = await fetch(`${url}/location/${id}`);
    const json = await response.json();

    const object = {
        name: json.name,
        type: json.type,
        dimension: json.dimension
    };

    //Obtenemos datos de los residentes con una petición más
    let residents = "";

    for (const url of json.residents) {
        const id = url.split("character/")[1];
        residents += id + ",";
    }

    const residentsUrl = `https://rickandmortyapi.com/api/character/${residents}`;
    const residentsResponse = await fetch(residentsUrl);
    const residentsJson = await residentsResponse.json();

    object.residents = residentsJson.map((r) => {
        return { image: r.image, url: r.url };
    });

    return object;
};

export const getEpisodes = async (page) => {
    const response = await fetch(`${url}/episode?page=${page}`);
    const json = await response.json();

    return json.results.map((e) => {
        return {
            id: e.id,
            name: e.name,
            episode: e.episode
        };
    });
};

export const getEpisode = async (id) => {
    const response = await fetch(`${url}/episode/${id}`);
    const json = await response.json();

    const object = {
        name: json.name,
        episode: json.episode,
        air_date: json.air_date
    };

    let characters = "";

    for (const url of json.characters) {
        const id = url.split("character/")[1];
        characters += id + ",";
    }

    const charactersUrl = `https://rickandmortyapi.com/api/character/${characters}`;
    const charactersResponse = await fetch(charactersUrl);
    const charactersJson = await charactersResponse.json();

    object.characters = charactersJson.map((r) => {
        return { image: r.image, url: r.url };
    });

    return object;
};

export const getCharacters = async (page) => {
    const response = await fetch(`${url}/character?page=${page}`);
    const json = await response.json();

    return json.results.map((p) => {
        return {
            id: p.id,
            name: p.name,
            image: p.image
        };
    });
};

export const getCharacter = async (id) => {
    const response = await fetch(`${url}/character/${id}`);
    const json = await response.json();
    return json;
};
