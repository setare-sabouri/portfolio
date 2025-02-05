import React, { useEffect, useState } from "react";
import { FaGithub } from 'react-icons/fa';
import "./projects.scss";
import { Link } from "react-router-dom";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`/api/projects`)
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <Link to={`/main/projects/${project.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;