const projectRouter = require("express").Router();
const { createProject, getProjects, getProjectByGatgory, getProject, deleteProject } = require("../controllers/project");
const { verifyAccessToken } = require("../helpers/getJwt");

projectRouter.post("/projects", verifyAccessToken, createProject)
projectRouter.get("/projects", getProjects)
projectRouter.get("/projects/:slug", getProject)
projectRouter.get("/projects/category", getProjectByGatgory)
projectRouter.delete("/projects/:id", verifyAccessToken, deleteProject)

module.exports = {projectRouter}