const express = require("express");
const morgan = require("morgan");
const engine = require("express-handlebars").engine;
const path = require('path')
const app = express();
const port = 3000;
//import routes
const route = require('./routes');

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

//Routes init
route(app)

//Port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
