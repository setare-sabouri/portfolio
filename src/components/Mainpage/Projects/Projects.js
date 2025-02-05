import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
// import projects from "./DataProjects";
import "./projects.scss";
import { Link } from "react-router-dom";

function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);


    return (

        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <Link to={`${project.id}`} key={project.id}>
                        <div className="project-card" key={project.id}>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={project.previewImage}
                                    alt={project.title}
                                    className="project-image"
                                />
                            </a>
                            <div className="project-info">
                                <h3 style={{ color: project.githubColor }}>{project.title}</h3>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="github-icon" style={{ fill: project.githubColor }} />
                                </a>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );

}

export { Projects };
