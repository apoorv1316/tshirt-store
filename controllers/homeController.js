exports.home = (req, res) => {
  res.status(200).json({
    success: true,
    greeting: "Hello there",
  });
};

exports.dummy = (req, res) => {
  res.status(200).json({
    success: true,
    greeting: "dummy there",
  });
};
