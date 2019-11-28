const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const visitorsRouter = require("./routes/visitors");
const walkpathRouter = require("./routes/walkpath");

require("./mongo-connection");

const app = express();
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.set("view engine", "pug");
app.use(bodyParser.json());

app.use("/visitors", visitorsRouter);
app.use("/walkpath", walkpathRouter);

app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
