const eventRouter = require("express").Router();
const { createEvent, getUpcomingEvents, getPastEvents, deleteEvent, getEvent } = require("../controllers/events");
const { verifyAccessToken } = require("../helpers/getJwt");

eventRouter.post("/events", verifyAccessToken, createEvent)
eventRouter.get("/events/upcoming", getUpcomingEvents)
eventRouter.get("/events/past", getPastEvents)
eventRouter.get("/events/details/:slug", getEvent)
eventRouter.delete("/events/:id", verifyAccessToken, deleteEvent)

module.exports = { eventRouter }