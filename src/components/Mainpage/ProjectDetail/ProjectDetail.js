import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../Projects/DataProjects';

export const ProjectDetail = () => {
    const { id } = useParams(); // Get the project ID from the URL

    const project = projects.find((proj) => proj.id.toString() === id);

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <div className="project-detail">
            <h2>{project.title}</h2>
            <img src={project.previewImage} alt={project.title} style={{ width: '100%', maxWidth: '600px' }} />
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">Visit Project</a>
            <br />
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
};
