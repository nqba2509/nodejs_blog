const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const engine = require("express-handlebars").engine;
const methodOverride = require('method-override')
const route = require("./routes");

const path = require("path");
const app = express();
const port = 3000;

const db = require("./config/db");
//Connect to BD
db.connect();

//Static file
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  engine({
    extname: "hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Override Method
app.use(methodOverride('_method'))

//Routes init
route(app);

//Port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

//Body-parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
