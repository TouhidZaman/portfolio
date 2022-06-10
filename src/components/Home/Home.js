import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Introduction from "../Introduction/Introduction";
import MyProjects from "../MyProjects/MyProjects";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Introduction />
            <About />
            <MyProjects />
            <Contact />
        </>
    );
};

export default Home;
