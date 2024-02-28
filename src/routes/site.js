const express = require("express");
const router = express.Router();

//import newsController
const siteController = require("../app/controllers/SiteControllers");

//newsController.index
router.get("/search", siteController.search);
router.get("/", siteController.home);

module.exports = router;
