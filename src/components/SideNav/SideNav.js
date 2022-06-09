import React from "react";
import "./SideNav.css";
import profile from "../../images/Touhid.jpg";

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
                        <a href="#home">home</a>
                    </li>
                    <li>
                        <a href="#about">about</a>
                    </li>
                    <li>
                        <a href="#education">Skills</a>
                    </li>
                    <li>
                        <a href="#portfolio">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">contact</a>
                    </li>
                </ul>
            </nav>
            <div id="menu" className="fas fa-bars"></div>
        </header>
    );
};

export default SideNav;
