const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploadImage = async (imageFile) => {
  try {
    const imageBuffer = imageFile?.buffer?.toString("base64");
    const response = await cloudinary.uploader.upload(
      `data:${imageFile?.mimetype};base64,${imageBuffer}`,
      {
        folder: "mmust-ihub",
      }
    );
    return response.secure_url
  } catch (error) {
    throw error;
  }
};
