import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/characters">Characters</NavLink>
                </li>
                <li>
                    <NavLink to="/locations">Locations</NavLink>
                </li>
                <li>
                    <NavLink to="/episodes">Episodes</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
