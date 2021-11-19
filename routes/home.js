const express = require("express");
const { home, dummy } = require("../controllers/homeController");
const router = express.Router();

// router.get("/", home);
router.route("/").get(home);
router.get("/dummy", dummy);

module.exports = router;
