const joi = require("joi");
const moment = require("moment")

exports.registerSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: joi.string().min(6).required(),
  confirm_password: joi.ref("password"),
});

exports.projectSchema = joi.object({
  title: joi.string().min(3).required(),
  headline: joi.string().min(10).required(),
  description: joi.string().min(20).required(),
  category: joi.string().valid("web", "android", "machine", "artificial", "blockchain", "robotics", "iot"),
})

exports.testimonialSchema = joi.object({
  name: joi.string().min(3).required(),
  occupation: joi.string().min(5).required(),
  message: joi.string().min(5).required(),
  rating: joi.number().required(),
})

exports.eventSchema = joi.object({
  title: joi.string().min(3).required(),
  short_description: joi.string().min(10).required(),
  long_description: joi.string().min(20).required(),
  start_date: joi.string().required(),
  end_date: joi.string().required(),
  tags: joi.array(),
  event_type: joi.string().valid("in-person", "online"),
event_link: joi.string().required()
})

exports.validateDate = async(data) => {
  return moment(date, "YYYY-MM-DD").isValid()
}

exports.contactSchema = joi.object({
  name: joi.string().min(3).max(30).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone_number: joi.string().required(),
  message: joi.string().min(5).required()
})