import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
    const [activeMobile, setActiveMobile] = useState(false);

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
                <li className="mobile-menu">
                    <i onClick={() => setActiveMobile(!activeMobile)} className="bx bx-menu"></i>
                    <MobileMenu active={activeMobile} setActive={setActiveMobile} />
                </li>
            </ul>
        </nav>
    );
};

export default Header;
