const joi = require("joi");

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