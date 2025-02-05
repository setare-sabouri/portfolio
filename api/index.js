const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Get all projects
app.get("/projects", async (req, res) => {
    try {
        const projects = await prisma.project.findMany();
        res.json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ error: "Error fetching projects" });
    }
});

// Get a single project by ID
app.get("/projects/:id", async (req, res) => {
    try {
        const project = await prisma.project.findUnique({
            where: { id: parseInt(req.params.id) },
        });
        if (!project) return res.status(404).json({ error: "Project not found" });
        res.json(project);
    } catch (error) {
        console.error("Error fetching project:", error);
        res.status(500).json({ error: "Error fetching project" });
    }
});

// Export the Express app as a serverless function
module.exports = (req, res) => {
    app(req, res);
};