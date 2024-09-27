
const contactRouter = require("express").Router();
const { contactUs } = require("../controllers/contact");
contactRouter.post("/contact", contactUs)

module.exports = { contactRouter }