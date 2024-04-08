const Course = require("../models/Course");
class SiteController {
  // [GET] /news
  async home(req, res) {
    try {
      const data = await Course.find({});
      res.json(data);
    } catch (res) {
      res.status(400).json({ error: "ERROR!" });
    }
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
