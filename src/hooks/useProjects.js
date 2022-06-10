import { useEffect, useState } from "react";

const useProjects = (projectId) => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const loadProjects = async () => {
            await fetch("projects.json")
                .then((response) => response.json())
                .then((data) => setProjects(data));
        };
        loadProjects();
    }, []);

    if (projectId) {
        const project = projects?.find((project) => project?._id === projectId);
        return [project];
    }
    return [projects];
};

export default useProjects;
