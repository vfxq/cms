const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const arr = ["Hello", "world", "test"];

app.get("/", (req, res) => res.render("index", {arr: arr}));
app.get("/create", (req, res) => res.render("create"));
app.post("/create", (req, res) => {
  console.log(req.body);
  arr.push(req.body.text);
  res.redirect("/");
});
 
module.exports = app;