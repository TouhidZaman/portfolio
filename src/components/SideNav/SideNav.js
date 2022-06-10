import React from "react";
import "./SideNav.css";
import profile from "../../images/Touhid.jpg";
import { Link } from "react-router-dom";

const SideNav = () => {
    return (
        <header>
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
            <div id="menu" className="fas fa-bars"></div>
        </header>
    );
};

export default SideNav;
