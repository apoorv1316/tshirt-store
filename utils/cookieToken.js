const cookiToken = (user, res) => {
  const token = user.getJwtToken();

  const options = {
    expies: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  user.password = undefined;
  res
    .status(201)
    .cookie("token", token, options)
    .json({ success: true, token, user });
};

module.exports = cookiToken;
