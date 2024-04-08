const mongoosee = require("mongoose");
const Schema = mongoosee.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  createdAt: { type: Data, default: Data.now },
  updateAt: { type: Data, default: Data.now },
});

module.exports = mongoosee.model("Course", Course);
