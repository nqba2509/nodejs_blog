const express = require("express");
const morgan = require("morgan");
const engine = require("express-handlebars").engine;
const path = require('path')
const app = express();
const port = 3000;

//Static file
app.use(express.static( path.join(__dirname, "public")))

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine("hbs", engine({
  extname: "hbs",
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Render page
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

//Port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
