import React from "react";
import "./Introduction.css";

const Introduction = () => {
    return (
        <section className="home" id="home">
            <h3>Hi There !</h3>
            <h1>
                I'm <span>Muhammad Touhiduzzaman</span>
            </h1>
            <p>
                I'm a MERN stack web developer. I have more then four year's of experience
                in this field. I have already developed so many web applications and some
                of them already in live. some projects are listed below ! feel free to
                check it out and If you have any quaries please send me feed back. Thank
                you
            </p>
            <a href="https://drive.google.com/uc?id=1jNwwN7WQ5VYRItMTiFPlzikfsbKqIZhI&export=download">
                <button className="btn">
                    download Resume <i className="fas fa-download"></i>
                </button>
            </a>
        </section>
    );
};

export default Introduction;
