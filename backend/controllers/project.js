const createError = require("http-errors");
const { projectSchema } = require("../helpers/shemaValidation");
const projectsModel = require("../models/projects.model");
const { userModel } = require("../models/userModel");
const { uploadImage } = require("../utils/uploadImage");

exports.createProject = async (req, res, next) => {
  try {
    const result = projectSchema.validate(req.body);
    if (result?.error) {
      const error = result.error.details[0].message;
      throw createError.BadRequest(error);
    }
    const user = await userModel.findById(req.payload.aud);
    const { title, headline, description, category } = req.body;
    const slug = title.replaceAll(" ", "-");
    const imageFile = req.files[0];
    const imageUrl = await uploadImage(imageFile);
    await projectsModel.create({
      title,
      slug,
      headline,
      description,
      category,
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

exports.getProjects = async (req, res, next) => {
  try {
    let page = req.query.page !== undefined ? req.query.page : process.env.page;
    let perPage =
      req.query.perPage !== undefined ? req.query.page : process.env.perPage;
    page = parseInt(page);
    perPage = parseInt(perPage);
    const projects = await projectsModel
      .find({})
      .skip(page * perPage)
      .limit(perPage)
      .sort({ createdAt: -1 });
    return res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

exports.getProject = async (req, res, next) => {
  try {
    const slug = req.params.slug;
    const project = await projectsModel.findOne({ slug: slug });
    if (!project) {
      throw createError.NotFound("Blog with the specified slug not found ");
    }
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};
exports.getProjectByCategory = async (req, res, next) => {
  try {
    const category =
      req.query.category !== undefined ? req.query.category : "web";
    let page = req.query.page !== undefined ? req.query.page : process.env.page;
    let perPage =
      req.query.perPage !== undefined ? req.query.page : process.env.perPage;
    page = parseInt(page);
    perPage = parseInt(perPage);
    const projects = await projectsModel
      .find({ category: category })
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
      throw createError.Unauthorized(" You are not allowed to delete this project ");
    }
    await projectsModel.findOneAndDelete({_id: id})
    return res.status(200).json({"status": "success", "message": "blog deleted successfully ..."})
  } catch (error) {
    next(error);
  }
};
