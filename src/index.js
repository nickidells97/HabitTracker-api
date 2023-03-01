const express = require("express");
const app = express();
const port = 8080;
const login = require;

app.get("/", (req, res) => {
  //handle route
});

app.listen(port, (err) => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`App listening on port ${port}!`);
});
