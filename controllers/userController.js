const BigPromise = require("../middlewares/bigPromise");
const User = require("../models/User");
const cookiToken = require("../utils/cookieToken");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;

exports.signup = BigPromise(async (req, res, next) => {
  if (!req.files) {
    return next(new Error("Photo requried for signup"));
  }
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    return next(new Error("Name, Email and Password are required"));
  }
  let file = req.files.photo;
  const result = await cloudinary.uploader.upload(file.tempFilePath, {
    folder: "users",
    width: 150,
    crop: "scale",
  });
  const user = await User.create({
    name,
    email,
    password,
    photo: { secure_url: result.secure_url, id: result.public_id },
  });
  cookiToken(user, res);
});
