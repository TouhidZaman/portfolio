import React from "react";
import "./About.css";
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const About = () => {
    return (
        <section className="about" id="about">
            <h1 className="heading">
                <span>about</span> me
            </h1>

            <div className="row">
                <div className="info">
                    <h3>
                        <span> name : </span> Muhammad Touhiduzzaman
                    </h3>
                    <h3>
                        <span> Work : </span> I'm a MERN Stack Web Developer
                    </h3>
                    <h3>
                        <span> qualification : </span> B. Sc in Computer Science and
                        Engineering
                    </h3>
                    <h3>
                        <span> Institute : </span> Daffodil International University
                    </h3>
                    <h3>
                        <span> language : </span> Bangla (Native), English (Comfortable),
                        Hindi (Comfortable)
                    </h3>
                    <a
                        href="https://github.com/TouhidZaman"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="btn btn-social">
                            <FaGithub className="icon"/>
                            Github 
                        </button>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/touhidzaman/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        
                        <button className="btn btn-social">
                            <BsLinkedin className="icon"/>
                            LinkedIn 
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
