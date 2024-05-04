const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  // [GET] /news
  home(req, res, next) {
    // try {
    //   const data = await Course.find({});
    //   res.json(data);
    // } catch (res) {
    //   res.status(400).json({ error: "ERROR!" });
    // }
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
``