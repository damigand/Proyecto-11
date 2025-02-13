import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div id="not-found">
            <h1>Oops.</h1>
            <h2>This page doesn't exist</h2>
            <span>
                Try going back to <Link to="/">Home</Link>
            </span>
        </div>
    );
};

export default NotFound;
