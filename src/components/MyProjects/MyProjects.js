import React from "react";
import "./MyProjects.css";
import bikeParts from "../../images/projects/bike-parts.jpg";
import groceryStock from "../../images/projects/grocery-stock.jpg";
import watchAnalyzer from "../../images/projects/watch-analyzer.jpg";
import healthCoach from "../../images/projects/health-coach.jpg";
import phoneFinder from "../../images/projects/phone-finder.jpg";
import emaJhon from "../../images/projects/ema-john.jpg";
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
                            <img src={bikeParts} alt="" />
                        </div>
                        <div>
                            <h3>{project.name}</h3>
                            <br></br>
                            {/* <p>{project.description}</p> */}
                            <Link className="btn" to={`/project${project._id}`}>Show details</Link>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyProjects;
