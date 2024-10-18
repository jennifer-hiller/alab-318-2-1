const express = require("express");
const app = express();
const PORT = 3000;

const fs = require("fs");
app.set("views", "./views"); // specify the views directory
app.set("view engine", "ejs"); // register the template engine
app.use(express.static("./styles")); // middleware
app.get("/", (req, res) => {
  const options = {};
  res.render("index", options);
});
app.get("/sub", (req, res) => {
  const options = {};
  res.render("subpage", options);
});
app.get("/downloadimg", (req, res) => {
  res.download("./images/image.png");
});
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

app.post("/posting", (req, res) => {
  console.log(req.body);
  const options = req.body;
  res.render("results", options);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}.`);
});
