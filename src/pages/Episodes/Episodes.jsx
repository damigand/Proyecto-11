import "./Episodes.css";
import React, { useEffect, useState } from "react";
import { InfiniteScroll } from "../../components/InfiniteScroll/InfiniteScroll.jsx";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard.jsx";

import { getEpisodes } from "../../utils/API/API.js";

const Episodes = () => {
    const [page, setPage] = useState(0);
    const [episodes, setEpisodes] = useState([]);
    const [isLoading, setIsLoading] = InfiniteScroll();

    useEffect(() => {
        getEpisodes(page).then((l) => {
            const copy = episodes;
            const newEpisodes = copy.concat(l);
            setEpisodes(newEpisodes);
            setIsLoading(false);
        });
    }, [page]);

    useEffect(() => {
        if (!isLoading) return;
        setPage(page + 1);
    }, [isLoading]);

    return (
        <div id="episodes">
            <p>Here you can see all Rick & Morty episodes</p>
            <p>Click on one to see more details</p>
            <ul id="episodes-list">
                {episodes.map((l, index) => (
                    <EpisodeCard key={index} episode={l} />
                ))}
            </ul>
        </div>
    );
};

export default Episodes;
