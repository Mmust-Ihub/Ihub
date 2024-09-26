const createError = require("http-errors");
const moment = require("moment");
const { eventSchema } = require("../helpers/shemaValidation");
const { uploadImage } = require("../utils/uploadImage");
const { eventsModel } = require("../models/events.model");

exports.createEvent = async (req, res, next) => {
  try {
    const body = req.body;
    const result = eventSchema.validate(body);
    if (result?.error) {
      const error = result.error.details[0].message;
      throw createError.BadRequest(error);
    }
    body.slug = body.title.replaceAll(" ", "-");
    body.createdBy = req.payload.aud;
    const imageFile = req.files[0];
    const imageUrl = await uploadImage(imageFile);
    const data = { ...body, image_url: imageUrl };
    await eventsModel.create(data);
    return res
      .status(201)
      .json({ status: "success", message: "event created successfully"});
  } catch (error) {
    next(error);
  }
};

exports.getEvent = async (req, res, next) => {
  try {
    const slug = req.params.slug;
    const event = await eventsModel.findOne({slug: slug})
    return res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};

exports.getUpcomingEvents = async (req, res, next) => {
  try {
    let page = req.query.page !== undefined ? req.query.page : process.env.page;
    let perPage =
      req.query.perPage !== undefined ? req.query.page : process.env.perPage;
    page = parseInt(page);
    perPage = parseInt(perPage);
    const currentDate = moment().toDate();
    const upcoming = await eventsModel
      .find({ end_date: { $gt: currentDate } })
      .skip(page * perPage)
      .limit(perPage);
    res.status(200).json(upcoming);
  } catch (error) {
    next(error);
  }
};

exports.getPastEvents = async (req, res, next) => {
  try {
    let page = req.query.page !== undefined ? req.query.page : process.env.page;
    let perPage =
      req.query.perPage !== undefined ? req.query.page : process.env.perPage;
    page = parseInt(page);
    perPage = parseInt(perPage);
    const currentDate = moment().toDate();
    const past = await eventsModel
      .find({ end_date: { $lt: currentDate } })
      .skip(page * perPage)
      .limit(perPage);
    return res.status(200).json(past);
  } catch (error) {
    next(error);
  }
};

exports.deleteEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    await eventsModel.findByIdAndDelete(eventId);
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
