const eventRouter = require("express").Router();
const { createEvent, getUpcomingEvents, getPastEvents } = require("../controllers/events");
const { verifyAccessToken } = require("../helpers/getJwt");

eventRouter.post("/events", verifyAccessToken, createEvent)
eventRouter.get("/events/upcoming", getUpcomingEvents)
eventRouter.get("/events/past", getPastEvents)
// eventRouter.get("/projects/category", getProjectByGatgory)
// eventRouter.delete("/projects/:id", verifyAccessToken, deleteProject)

module.exports = {eventRouter}