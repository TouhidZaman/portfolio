import React, { useState } from "react";
import "./SideNav.css";
import profile from "../../images/Touhid.jpg";
import { Link } from "react-router-dom";

const SideNav = () => {
    const [toggleClass, setToggleClass] = useState("");
    const [menuClass, setMenuClass] = useState("fa-bars");
    const toggleSideNav = () => {
        setToggleClass((prevClass) => {
            if (prevClass === "toggle") {
                return "";
            } else {
                return "toggle";
            }
        });
        setMenuClass((prevClass) => {
            if (prevClass === "fa-bars") {
                return "fa-times";
            } else {
                return "fa-bars";
            }
        });
    };
    return (
        <header className={`${toggleClass}`}>
            <div className="user">
                <img src={profile} alt="" />
                <h3 className="name">Muhammad Touhiduzzaman</h3>
                <p className="post">MERN Stack developer</p>
            </div>

            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/my-projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/my-blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
            </nav>
            <div id="menu" onClick={toggleSideNav} className={`fas ${menuClass}`}></div>
        </header>
    );
};

export default SideNav;
