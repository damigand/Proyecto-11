import React from "react";
import { useParams } from "react-router-dom";

const Episode = () => {
    const { id } = useParams();

    return <div>Episode {id}</div>;
};

export default Episode;
