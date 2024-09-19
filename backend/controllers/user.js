const createError = require("http-errors")
const { testimonialSchema } = require("../helpers/shemaValidation");
const { userModel, testimonialModel } = require("../models/userModel");
const { hashPassword } = require("../utils/hashPassword");
const { uploadImage } = require("../utils/uploadImage");

exports.userProfile = async (req, res, next) => {
  const user = await userModel.findById(req.payload.aud);
  const userProfile = {
    username: user.username,
    email: user.email,
  };
  return res.status(200).json({ userProfile: userProfile, userId: user._id });
};

exports.editProfile = async (req, res, next) => {
  const data = req.body;
  if ("password" in data) {
    data.password = await hashPassword(data.password);
  }
  const user = await userModel.findByIdAndUpdate(
    req.payload.aud,
    { $set: data },
    { new: true }
  );
  return res.status(200).json({
    username: user.username,
    email: user.email,
  });
};

// Testimonial section
exports.createTestimonial = async (req, res, next) => {
  try {
    const result = testimonialSchema.validate(req.body);
    if (result?.error) {
      const error = result.error.details[0].message;
      throw createError.BadRequest(error);
    }
    const { name, occupation, message, rating } = req.body;
    const imageUrl = await uploadImage(req.files[0]);
    await testimonialModel.create({name, occupation, message, rating, imageUrl})
    return res.status(200).json(req.body);
  } catch (error) {
    next(error);
  }
};

exports.getTestimonials = async(req, res, next) => {
  try {
    let page = req.query.page !== undefined ? req.query.page : process.env.page;
    let perPage =
      req.query.perPage !== undefined ? req.query.page : process.env.perPage;
    page = parseInt(page);
    perPage = parseInt(perPage);
    const projects = await testimonialModel
      .find()
      .skip(page * perPage)
      .limit(perPage)
      .sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    next(error)
  }
}

exports.deleteTestimonial = async (req, res, next) => {
  try {
    const id = req.params.id;
    const testimonial = await testimonialModel.findOne({ _id: id });
    if (!testimonial) {
      throw createError.NotFound("The testimonial does not exists ..");
    }
    await testimonialModel.findOneAndDelete({_id: id})
    return res.status(200).json({"status": "success", "message": "blog deleted successfully ..."})
  } catch (error) {
    next(error);
  }
};
