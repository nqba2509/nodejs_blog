const express = require("express");
const router = express.Router();

//import siteController
const siteController = require("../app/controllers/SiteControllers");

//siteController.index
router.get("/search", siteController.search);
router.get("/", siteController.home);

module.exports = router;
