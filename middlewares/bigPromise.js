module.exports = (func) => (req, res, nex) =>
  Promise.resolve(func(req, res, nex)).catch(next);
