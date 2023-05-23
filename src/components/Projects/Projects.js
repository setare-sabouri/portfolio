import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { FaGithub } from 'react-icons/fa';
import projects from "./DataProjects";
import "./projects.css"

function Projects() {


    return (
        <div className="projects">
            <h2>Projects</h2>
            <Carousel>
                {projects.map((project) => (
                    <Carousel.Item key={project.id}>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <img
                                className="d-block w-100"
                                src={project.previewImage}
                                alt={project.title}
                            />
                        </a>
                        <Carousel.Caption>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="github-icon" style={{ fill: project.githubColor }} />
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export { Projects };
