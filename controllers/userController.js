const BigPromise = require("../middlewares/bigPromise");
const User = require("../models/User");
const cookiToken = require("../utils/cookieToken");

exports.signup = BigPromise(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    return next(new Error("Name, Email and Password are required"));
  }

  const user = await User.create({ name, email, password });
  cookiToken(user, res);
});
