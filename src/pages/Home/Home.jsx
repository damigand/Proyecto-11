import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="home">
            <div className="home-title">
                <h1>Welcome to Rick and Morty!</h1>
            </div>
            <div className="home-content">
                <p>Here you'll be able to check everything about Rick and Morty.</p>
                <p>You can start by visiting any of these sections:</p>
                <div className="sections">
                    <Link to="/characters">Characters</Link>
                    <Link to="/locations">Locations</Link>
                    <Link to="/episodes">Episodes</Link>
                </div>
            </div>
            <div className="credits">
                <p>
                    This website was made by damigand using{" "}
                    <Link to="https://rickandmortyapi.com" target="_blank">
                        Rickandmortyapi
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Home;
