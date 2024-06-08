const mongoosee = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoosee.plugin(slug);

const Schema = mongoosee.Schema;

const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String },
    videoId: { type: String, require: true },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

module.exports = mongoosee.model("Course", Course);
