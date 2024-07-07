const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /courses/store
  store = async (req, res, next) => {
    try {
      const formData = { ...req.body };
      formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
      const course = new Course(formData);
      await course.save().then(() => res.redirect("/")); //save data và chuyển về trang chủ
      // res.status(201).json(course); // Trả về phản hồi thành công
    } catch (err) {
      next(err); // Gọi middleware xử lý lỗi
    }
  };

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [DELETE] /courses/:id
  delete(req, res, next) {
    Course.findByIdAndDelete({ _id: req.params.id })
      .then(res.redirect("/me/stored/courses"))
      .catch(next);
  }
}

module.exports = new CourseController();
