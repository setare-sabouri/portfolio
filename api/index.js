const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Get all projects
app.get("/main/projects", async (req, res) => {
    try {
        const projects = await prisma.project.findMany();
        res.json(projects);
        console.log("all got")
    } catch (error) {
        console.error("Error fetching projeEEEcts:", error);
        res.status(500).json({ error: "Error fetching proooooojects" });
    }
});

// Get a single project by ID
app.get("/main/projects/:id", async (req, res) => {
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

// module.exports = (req, res) => {
//     app(req, res);
// };
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});