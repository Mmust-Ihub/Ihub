const projectRouter = require("express").Router();
const { createProject, getProjects, getProjectByCategory, getProject, deleteProject } = require("../controllers/project");
const { verifyAccessToken } = require("../helpers/getJwt");

projectRouter.post("/projects", verifyAccessToken, createProject)
projectRouter.get("/projects", getProjects)
projectRouter.get("/projects/:slug", getProject)
projectRouter.get("/projects/category", getProjectByCategory)
projectRouter.delete("/projects/:id", verifyAccessToken, deleteProject)

module.exports = {projectRouter}