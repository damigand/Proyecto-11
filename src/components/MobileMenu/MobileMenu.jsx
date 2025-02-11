import React from "react";
import "./MobileMenu.css";
import { NavLink } from "react-router-dom";
const MobileMenu = ({ active, setActive }) => {
    return (
        <div id="mobile-menu" className={active ? "active" : ""}>
            <div onClick={() => setActive(!active)}>
                <NavLink className="mobile-link" to="/">
                    Home
                </NavLink>
            </div>
            <div onClick={() => setActive(!active)}>
                <NavLink className="mobile-link" to="/characters">
                    Characters
                </NavLink>
            </div>
            <div onClick={() => setActive(!active)}>
                <NavLink className="mobile-link" to="/locations">
                    Locations
                </NavLink>
            </div>
            <div onClick={() => setActive(!active)}>
                <NavLink className="mobile-link" to="/episodes">
                    Episodes
                </NavLink>
            </div>
        </div>
    );
};

export default MobileMenu;
