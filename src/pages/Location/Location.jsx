import React from "react";
import { useParams } from "react-router-dom";
useParams;

const Location = () => {
    const { id } = useParams();
    return <div>Location {id}</div>;
};

export default Location;
