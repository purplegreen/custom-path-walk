const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const visitorsRouter = require("./routes/visitors");
const walkpathRouter = require("./routes/walkpath");
const slotsRouter = require("./routes/slots");

require("./mongo-connection");

const app = express();
app.use(cors());

app.set("view engine", "pug");
app.use(bodyParser.json());

app.use("/visitors", visitorsRouter);
app.use("/walkpath", walkpathRouter);
app.use("/slots", slotsRouter);

app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
