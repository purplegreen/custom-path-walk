const express = require("express");
const bodyParser = require("body-parser");

const personRouter = require("./routes/person");
const meetupRouter = require("./routes/meetup");

require("./mongo-connection");

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.json());

app.use("/visitors", visitorsRouter);
app.use("/walkpath", walkpathRouter);

app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
