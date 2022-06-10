import React from "react";
import { useParams } from "react-router-dom";
import useProjects from "../../../hooks/useProjects";
import './ProjectDetails.css'

const ProjectDetails = () => {
    let { projectId } = useParams();
    const [project] = useProjects(projectId);

    return (
        <section className="project-details" id="my-projects">
            <h1 className="heading">
                Project <span>Details Page</span>
            </h1>
            <div className="project-container">
                <h2>Project Name: {project?.name}</h2>
                <p>Project Name: {project?.description}</p>
            </div>
        </section>
    );
};

export default ProjectDetails;
