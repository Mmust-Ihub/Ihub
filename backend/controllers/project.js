const createError = require("http-errors");
const { projectSchema } = require("../helpers/shemaValidation");
const projectsModel = require("../models/projects.model");
const { userModel } = require("../models/userModel");
const { uploadImage } = require("../utils/uploadImage");

exports.createProject = async (req, res, next) => {
  try {
    const body = req.body
    body.category = await JSON.parse(body.category).category;
    const result = projectSchema.validate(body);
    if (result?.error) {
      const error = result.error.details[0].message;
      throw createError.BadRequest(error);
    }
    const user = await userModel.findById(req.payload.aud);
    const imageFile = req.files[0];
    const imageUrl = await uploadImage(imageFile);
    await projectsModel.create({
      ...body,
      imageUrl: imageUrl,
      createdBy: user._id,
    });
    res.status(201).json({
      message: "project created successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getProjectByCategory = async (req, res, next) => {
  try {
    const category = req.params.category
    console.log(category)
    let page = req.query.page !== undefined ? req.query.page : process.env.page;
    let perPage =
      req.query.perPage !== undefined ? req.query.page : process.env.perPage;
    page = parseInt(page);
    perPage = parseInt(perPage);
    const projects = await projectsModel
      .find({ category: {$in: category}})
      .skip(page * perPage)
      .limit(perPage)
      .sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

exports.deleteProject = async (req, res, next) => {
  try {
    const id = req.params.id;
    const project = await projectsModel.findOne({ _id: id });
    if (!project) {
      throw createError.NotFound("The project does not exists ..");
    }
    if (String(project.createdBy) !== req.payload.aud) {
      throw createError.Unauthorized(
        " You are not allowed to delete this project "
      );
    }
    await projectsModel.findOneAndDelete({ _id: id });
    return res
      .status(200)
      .json({ status: "success", message: "blog deleted successfully ..." });
  } catch (error) {
    next(error);
  }
};
