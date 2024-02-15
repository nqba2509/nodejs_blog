const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hi An, this is the fist time to lean Express");
});

app.get("/home", (req, res) => {
  res.send("<button>Click Me</button>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
