const userRouter = require("express").Router();
const testimonialRouter = require("express").Router();

const {
  userProfile,
  editProfile,
  createTestimonial,
  getTestimonials,
  deleteTestimonial,
} = require("../controllers/user");

const { verifyAccessToken } = require("../helpers/getJwt");

userRouter.get("/user/profile", verifyAccessToken, userProfile);
userRouter.post("/user/edit-profile", verifyAccessToken, editProfile);

testimonialRouter.post("/testimonials", verifyAccessToken,createTestimonial)
testimonialRouter.get("/testimonials", getTestimonials)
testimonialRouter.delete("/testimonials/:id", verifyAccessToken, deleteTestimonial)

module.exports = { userRouter, testimonialRouter };
