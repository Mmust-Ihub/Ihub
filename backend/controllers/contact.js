const createError = require("http-errors");
const { contactSchema } = require("../helpers/shemaValidation");
const { contactMail, sendMail } = require("../utils/sendMail");

exports.contactUs = async (req, res, next) => {
  try {
    const body = req.body;
    const result = contactSchema.validate(body);
    if (result?.error) {
      const error = result.error.details[0].message;
      throw createError.BadRequest(error);
    }
    const payload = contactMail(body);
    console.log(payload);
    await sendMail(payload);
    return res
      .status(200)
      .json({ status: "success", message: "email sent successfully" });
  } catch (error) {
    next(error);
  }
};
