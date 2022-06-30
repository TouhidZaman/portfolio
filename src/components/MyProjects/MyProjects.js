import React from "react";
import "./MyProjects.css";
import useProjects from "../../hooks/useProjects";
import { Link } from "react-router-dom";

const MyProjects = () => {
    const [projects] = useProjects();
    return (
        <section className="portfolio" id="my-projects">
            <h1 className="heading">
                my <span>Projects</span>
            </h1>

            <div className="box-container">
                {projects.map((project) => (
                    <div key={project._id} className="box">
                        <div>
                            <img src={project.images[0].imgUrl} alt="" />
                        </div>
                        <div>
                            <h3>{project.name}</h3>
                            <br></br>
                            {/* <p>{project.description}</p> */}
                            <Link className="btn" to={`/project${project._id}`}>
                                Show details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyProjects;
